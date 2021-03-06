# SkySmart Helper

Если вы когда-нибудь делали контрольную или домашку в SkySmart, то знаете как они плохо относятся ко всем современным практикам веб-дизайна:
- Запрет на выделение текста
- Запрет на открытие DevTools
- Запрет на поиск на странице

Это расширение поможет вам исправить все недочеты SkySmart. Установите его как показано в пункте Установка и вы сможете выделять текст на странице и копировать задание из попапа расширения.

| Лайфхак |
|---------|
| Чтобы сайт не запрещал вам открывать devtools, зайдите во вкладку Sources и найдите кнопку <img src="https://user-images.githubusercontent.com/59040542/113661871-fc3d7600-96b7-11eb-949b-8210cf462b87.png" height="20px"></img> `Deactivate Breakpoints`. Затем нажмите кнопку F8 (или ⌘ \\). Запомните, что видимость состояния открытого окна devtools это серьезная дыра в безопасности браузера и если прошлый способ не помог — заполните заявку на [Баг трекере Google Chrome](https://bugs.chromium.org/p/chromium/issues/list) |

## Установка

Вы можете выбрать один из двух методов установки расширения

### 1. Скачать из официального магазина расширений Google WebStore (бесплатно)

[Google Chrome WebStore](https://chrome.google.com/webstore/detail/skysmart-helper/jedfnnibgbfgmcjbibkfbjclbicdfoim?hl=ru&authuser=1)

### 2. Установить свежую версию из этого репозитория

1. Клонируйте репозиторий:

```
git clone https://github.com/VityaSchel/skysmart-helper-extension
```

2. Зайдите в настройки расширений Google Chrome:

```
chrome://extensions
```

3. Загрузите распакованное расширение, выбрав скачанный репозиторий как папку с расширением

<img width="100%" src="https://user-images.githubusercontent.com/59040542/113662304-e2506300-96b8-11eb-8058-e4a4d2feaf93.png"></img>

## Использование

Когда вы зайдете на страницу SkySmart с заданием, дождитесь полной загрузки задания и откройте попап расширения (окошко около браузерной строки)

|<img src="https://user-images.githubusercontent.com/59040542/113662495-41ae7300-96b9-11eb-8cf9-4712615043a5.png" height="500px"/>|<img src="https://user-images.githubusercontent.com/59040542/113745800-ae0b8f80-9716-11eb-9345-933ef64a8dab.png" height="500px"/>|
|-------|--------|

Отсюда вы сможете спокойно копировать задание. Если вы не можете найти задания со страницы внутри попапа, вы также можете попробовать выделить его курсором на странице skysmart, но этот способ пока работает не идеально.

Также вы можете скопировать полный HTML код задания около соответствующей надписи.
