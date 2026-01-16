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

## Деплой с Caddy

Caddy автоматически получает SSL-сертификаты через Let's Encrypt.

### Установка на сервер (Debian/Ubuntu)

```bash
# Установка Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# Создать директорию и скопировать файлы сайта
sudo mkdir -p /var/www/noda.plus
sudo cp -r public/* /var/www/noda.plus/

# Скопировать конфигурацию Caddy
sudo cp Caddyfile /etc/caddy/Caddyfile

# Запустить Caddy
sudo systemctl enable caddy
sudo systemctl restart caddy
```

### Управление

```bash
sudo systemctl status caddy   # Статус
sudo systemctl restart caddy  # Перезапуск
sudo journalctl -u caddy -f   # Логи
```

**Требования:**
- Порты 80 и 443 открыты
- DNS указывает на сервер (A-запись для noda.plus)

## Локальная разработка

```bash
cd public
python3 -m http.server 8000
# http://localhost:8000
```
