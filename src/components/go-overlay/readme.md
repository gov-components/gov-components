## go-overlay API

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                 | Type                        | Default    |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- |
| `active`     | `active`     |                                                                                                             | `boolean`                   | `false`    |
| `persistent` | `persistent` | If persistent, the overlay will not be closed when the user clicks outside of it or presses the escape key. | `boolean`                   | `false`    |
| `type`       | `type`       | Type of this overlay, can be dialog or alertdialog                                                          | `"alertdialog" \| "dialog"` | `'dialog'` |


## Events

| Event          | Description                        | Type                |
| -------------- | ---------------------------------- | ------------------- |
| `overlayClose` | Emitted when the overlay is closed | `CustomEvent<void>` |
| `overlayOpen`  | Emitted when the overlay is opened | `CustomEvent<void>` |


## Methods

### `close() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [go-dialog](../go-dialog)
 - [go-search-bar](../go-search-bar)

### Graph
```mermaid
graph TD;
  go-dialog --> go-overlay
  go-search-bar --> go-overlay
  style go-overlay fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

