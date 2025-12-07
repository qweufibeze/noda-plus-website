# Noda+ Website

Официальный сайт Noda+ — https://noda.plus

## Структура проекта

```
noda_plus_website/
├── public/                 # Файлы сайта (деплоятся на сервер)
│   ├── index.html          # Главная страница
│   ├── styles.css          # Стили
│   ├── script.js           # JavaScript + GSAP анимации
│   ├── favicon.svg         # Иконка сайта
│   └── apple-touch-icon.svg
├── caddy/
│   └── Caddyfile           # Конфигурация веб-сервера
└── README.md
```

## Деплой

```bash
git add .
git commit -m "Your changes"
git push production main
```

При пуше автоматически:
1. Файлы из `public/` копируются на сервер
2. Caddy перезагружается
3. Изменения появляются на https://noda.plus

## Локальная разработка

```bash
cd public
python3 -m http.server 8000
# Открыть http://localhost:8000
```

## Технологии

- **Сервер**: Caddy 2 (автоматический HTTPS)
- **Анимации**: GSAP + ScrollTrigger
- **Шрифты**: Inter, Poppins
