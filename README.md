# Noda Plus Website

Официальный сайт Noda Plus с автоматическим деплоем.

## Быстрый старт

### Локальная разработка

```bash
cd public
python3 -m http.server 8000
# Откройте http://localhost:8000
```

### Деплой на production

```bash
./deploy.sh
# Или вручную:
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
├── deploy.sh            # Скрипт быстрого деплоя (не в Git)
├── deploy.example.sh    # Пример deploy скрипта
├── DEVELOPMENT.md       # Подробное руководство по разработке
└── README.md            # Этот файл
```

## Как работает деплой?

```
Локальная машина                     Production сервер
────────────────                     ─────────────────

1. Вы редактируете файлы
   в public/ или caddy/

2. git commit + push       ────────▶  3. Git hook срабатывает
   production main                       автоматически

                                      4. Файлы копируются в
                                         /var/www/noda.plus

                                      5. Caddy перезагружается

                                      6. Изменения live на
                                         https://noda.plus ✅
```

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

# Быстрый деплой
./deploy.sh

# Проверить Caddy на сервере
ssh noda_plus "systemctl status caddy"

# Посмотреть логи
ssh noda_plus "journalctl -u caddy -f"
```

## Разработка

Подробную информацию о разработке, Git workflow и настройках сервера смотрите в [DEVELOPMENT.md](DEVELOPMENT.md).
