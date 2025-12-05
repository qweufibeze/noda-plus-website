# Noda Plus Website

Официальный сайт Noda Plus.

## Структура проекта

- `public/` - статические файлы сайта
- `caddy/` - конфигурация Caddy сервера

## Деплой

Для деплоя изменений на сервер:

```bash
git add .
git commit -m "Your commit message"
git push production main
```

После push изменения автоматически применятся на сервере.

## Локальная разработка

Для локального запуска можно использовать любой HTTP сервер, например:

```bash
cd public
python3 -m http.server 8000
```

Или использовать VS Code Live Server расширение.
