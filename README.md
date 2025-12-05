# Noda Plus Website

Официальный сайт Noda Plus с автоматическим деплоем через Git.

## Быстрый старт

### Локальная разработка

```bash
cd public
python3 -m http.server 8000
# Откройте http://localhost:8000
```

### Деплой на production

```bash
git add .
git commit -m "Your changes"
git push production main
```

## Структура проекта

```
noda_plus_website/
├── public/              # Статические файлы сайта
│   └── index.html       # Главная страница (заглушка)
├── caddy/               # Конфигурация Caddy сервера
│   └── Caddyfile        # Настройки прокси и HTTPS
├── DEVELOPMENT.md       # Подробное руководство
└── README.md            # Этот файл
```

## Как работает деплой

При `git push production main` автоматически:
1. Git hook на сервере срабатывает
2. Файлы из `public/` копируются в `/var/www/noda.plus/`
3. `caddy/Caddyfile` копируется в `/etc/caddy/Caddyfile`
4. Caddy перезагружается
5. Изменения появляются на https://noda.plus

## Технологии

- **Сервер**: Ubuntu 24.04
- **Веб-сервер**: Caddy 2.10 (с автоматическим HTTPS)
- **SSL**: Let's Encrypt (автообновление)
- **Домены**: noda.plus, www.noda.plus
- **Деплой**: Git hooks (автоматический)

## Полезные ссылки

- **Сайт**: https://noda.plus
- **Документация**: [DEVELOPMENT.md](DEVELOPMENT.md)
- **SSH**: `ssh noda_plus`

## Быстрые команды

```bash
# Проверить статус
git status

# Деплой
git push production main

# Проверить Caddy на сервере
ssh noda_plus "systemctl status caddy"

# Посмотреть логи
ssh noda_plus "journalctl -u caddy -f"
```

## Разработка

Подробную информацию о разработке, Git workflow и настройках сервера смотрите в [DEVELOPMENT.md](DEVELOPMENT.md).
