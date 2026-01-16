# Noda+

Сайт IT-студии — https://noda.plus

## Структура

```
public/           # Статический сайт
├── index.html    # Главная страница
├── thanks.html   # Страница благодарности
├── styles.css    # Стили
├── script.js     # JavaScript + GSAP
└── ...           # Иконки, изображения
```

## Деплой

Автоматический деплой на GitHub Pages при пуше в `main`.

## Локальная разработка

```bash
cd public
python3 -m http.server 8000
# http://localhost:8000
```
