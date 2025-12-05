# Руководство по разработке Noda Plus

## Структура проекта

```
noda_plus_website/
├── public/           # Статические файлы сайта
│   └── index.html    # Главная страница
├── caddy/            # Конфигурация веб-сервера
│   └── Caddyfile     # Настройки Caddy
├── deploy.sh         # Скрипт быстрого деплоя
└── README.md         # Основная документация
```

## Локальная разработка

### Запуск локального сервера

Вариант 1 - Python:
```bash
cd public
python3 -m http.server 8000
```

Вариант 2 - PHP:
```bash
cd public
php -S localhost:8000
```

Вариант 3 - VS Code Live Server:
- Установите расширение "Live Server"
- Откройте `public/index.html`
- Нажмите "Go Live"

## Деплой на production

```bash
git add .
git commit -m "Описание изменений"
git push production main
```

### Что происходит при деплое

1. Изменения отправляются на сервер через Git
2. Git hook на сервере автоматически:
   - Обновляет файлы в `/var/www/noda.plus/`
   - Обновляет Caddyfile в `/etc/caddy/Caddyfile`
   - Перезагружает Caddy сервер
3. Изменения сразу видны на https://noda.plus

## Настройки сервера

- **Сервер**: Ubuntu 24.04
- **Веб-сервер**: Caddy 2.10.2
- **SSL**: Автоматический Let's Encrypt
- **Домены**: noda.plus, www.noda.plus
- **Git репозиторий**: `/var/repo/noda.plus.git`
- **Веб директория**: `/var/www/noda.plus`

## SSH подключение

```bash
ssh noda_plus
```

## Полезные команды на сервере

Проверить статус Caddy:
```bash
ssh noda_plus "systemctl status caddy"
```

Просмотреть логи Caddy:
```bash
ssh noda_plus "journalctl -u caddy -f"
```

Перезагрузить Caddy вручную:
```bash
ssh noda_plus "systemctl reload caddy"
```

## Изменение конфигурации Caddy

1. Отредактируйте `caddy/Caddyfile` локально
2. Запустите `./deploy.sh` или `git push production main`
3. Caddy автоматически перезагрузится с новыми настройками

## Проверка изменений

После деплоя проверьте сайт:
- https://noda.plus
- https://www.noda.plus

Проверьте HTTPS редирект:
```bash
curl -I http://noda.plus
# Должен вернуть 301 и Location: https://noda.plus/
```

## Git workflow

```bash
# Проверить статус
git status

# Посмотреть изменения
git diff

# Добавить файлы
git add public/index.html

# Создать коммит
git commit -m "Update homepage"

# Деплой
git push production main

# Просмотреть историю
git log --oneline
```

## Безопасность

- Все соединения автоматически перенаправляются на HTTPS
- SSL сертификаты обновляются автоматически
- Пароли и приватные ключи не хранятся в Git
