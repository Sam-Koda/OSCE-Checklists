// Offline cache. Bump VERSION whenever you change any file so phones get the update.
const VERSION = "osce-v4";
const FILES = ["./", "index.html", "data.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "pdf/ALL_OSCE_Checklists_Bundle.pdf", "pdf/Abdominal_Exam_OSCE_Checklist.pdf", "pdf/Ankle_Foot_Exam_OSCE_Checklist.pdf", "pdf/Bimanual_Pelvic_Exam_OSCE_Checklist.pdf", "pdf/Breast_Exam_OSCE_Checklist.pdf", "pdf/Cervical_Screening_Speculum_OSCE_Checklist.pdf", "pdf/Cranial_Nerve_OSCE_Checklist.pdf", "pdf/DRE_OSCE_Checklist.pdf", "pdf/Diabetes_Exam_OSCE_Checklist.pdf", "pdf/Ear_Exam_OSCE_Checklist.pdf", "pdf/Elbow_Exam_OSCE_Checklist.pdf", "pdf/Eye_Exam_OSCE_Checklist.pdf", "pdf/Eye_History_OSCE_Checklist.pdf", "pdf/HPV_Self_Collection_OSCE_Checklist.pdf", "pdf/Hand_Wrist_Exam_OSCE_Checklist.pdf", "pdf/Hip_Exam_OSCE_Checklist.pdf", "pdf/Inguinoscrotal_Exam_OSCE_Checklist.pdf", "pdf/Knee_Exam_OSCE_Checklist.pdf", "pdf/Lower_Limb_Neuro_OSCE_Checklist.pdf", "pdf/Menstrual_History_OSCE_Checklist.pdf", "pdf/Nose_Sinus_Exam_OSCE_Checklist.pdf", "pdf/Proc_1_Injections_IM_SC_ID.pdf", "pdf/Proc_2_Venepuncture.pdf", "pdf/Proc_3_12_Lead_ECG.pdf", "pdf/Proc_4_Basic_Life_Support.pdf", "pdf/Proc_4b_First_Aid.pdf", "pdf/Proc_5_Airway_Oxygen.pdf", "pdf/Proc_6_Wound_Dressing.pdf", "pdf/Proc_7_IV_Cannulation.pdf", "pdf/Procedural_Skills_All.pdf", "pdf/Respiratory_Exam_OSCE_Checklist.pdf", "pdf/Shoulder_Exam_OSCE_Checklist.pdf", "pdf/Throat_Mouth_Exam_OSCE_Checklist.pdf", "pdf/Thyroid_Exam_OSCE_Checklist.pdf", "pdf/Upper_Limb_Neuro_OSCE_Checklist.pdf", "img/proc/proc-12-lead-ecg-1.webp", "img/proc/proc-12-lead-ecg-2.webp", "img/proc/proc-12-lead-ecg-3.webp", "img/proc/proc-airway-management-oxygen-therapy-1.webp", "img/proc/proc-airway-management-oxygen-therapy-2.webp", "img/proc/proc-airway-management-oxygen-therapy-3.webp", "img/proc/proc-airway-management-oxygen-therapy-4.webp", "img/proc/proc-airway-management-oxygen-therapy-5.webp", "img/proc/proc-basic-life-support-adult-1.webp", "img/proc/proc-injections-im-sc-id-1.webp", "img/proc/proc-injections-im-sc-id-2.webp", "img/proc/proc-injections-im-sc-id-3.webp", "img/proc/proc-injections-im-sc-id-4.webp", "img/proc/proc-intravenous-cannulation-pivc-1.webp", "img/proc/proc-intravenous-cannulation-pivc-2.webp", "img/proc/proc-venepuncture-1.webp", "img/proc/proc-wound-dressing-aseptic-technique-1.webp", "img/proc/proc-wound-dressing-aseptic-technique-2.webp", "img/proc/proc-wound-dressing-aseptic-technique-3.webp"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Network first for the app shell so updates show up; cache fallback when offline.
  e.respondWith(
    fetch(e.request, {cache: "no-cache"}).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match("index.html")))
  );
});
