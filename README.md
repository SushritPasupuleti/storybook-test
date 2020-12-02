# Storybook Setup

Init

```bash
cd web
npx sb init
```

Run

```bash
npm run storybook
```

Add-ons

```bash
npm install --save-dev storybook-addon-designs
```

Register the addon in `.storybook/main.js`

```javascript
module.exports = {
  addons: ['storybook-addon-designs'],
}
```
