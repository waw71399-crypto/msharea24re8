# 🌐 النشر على GitHub Pages

## الخطوات

### 1. رفع المشروع

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 2. تفعيل GitHub Pages

- اذهب لـ Settings → Pages
- Source: اختر `GitHub Actions`

### 3. انتظر!

- سيتم البناء والنشر تلقائياً (2-3 دقائق)
- الموقع: `https://USERNAME.github.io/REPO_NAME/`

---

## حل المشاكل

**404 Error:**
- تأكد من اختيار GitHub Actions كمصدر
- تحقق من تبويب Actions أن البناء نجح

**CSS/JS لا يعمل:**
- المشروع معد تلقائياً، لا حاجة لتعديلات

---

## Domain مخصص (اختياري)

إذا كان لديك domain:

1. Settings → Pages → Custom domain
2. أضف domain وانتظر التحقق
3. عدّل `.github/workflows/deploy.yml`:
   ```yaml
   VITE_BASE_PATH: /  # غير من /${{ ... }}/
   ```
