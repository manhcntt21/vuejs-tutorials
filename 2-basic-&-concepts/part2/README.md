Ở phần này chũng ta sẽ tiếp tục tìm hiểu về event binding: `click`, `input`,... cũng như keyword: `v-once` trong việc xử lý sự kiện
***
## Outline
1. [Understanding event binding](#Understanding-event-binding)
2. [Locking content with v-once](#Locking-content-with-v-once)
3. [References](#References)
***

Ví dụ: html, js file có sẵn tại [đây](./basics-03-events-starting-code), mình trích lại đây để cho các bạn tiện theo dõi

Mục đích của chúng ta là sẽ tăng giá trị counter lên và giảm đi khi click vào button tương ứng
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button>Add</button>
      <button>Remove</button>
      <p>Result: {{ counter }}</p>
    </section>
  </body>
</html>

```

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');

```

***
### Understanding event binding
Trong vanilla Javascript, chúng ta sẽ phải viết như sau, nó cũng minh hoạ cho khái niệm imperative programming
```javascript
document.querySelector('button').addEventListener('click',() => {
    //    do something
})
```

Nhưng với Vue chúng ta không cần phải làm như vậy chỉ cần khai báo là đủ, phần còn lại Vue sẽ giải quyết giúp chúng ta.Trong Vue cung cấp `v-on:` + event để xử lý sự kiện. Ví dụ sự kiện click: `v-on:click`, hoặc cho đơn giản có thể dùng `@click`.

Chúng ta sẽ dùng `methods` option đã tìm hiểu ở phần trước để thêm 2 methods để tương tác với biến counter được expose ở `data`
```javascript
        increment(num) {
            this.counter = this.counter + 1;
        },
        decrement(num) {
            this.counter = this.counter - 1;
        };
```
Và xử lý sự kiện trên html
```html
    <button v-on:click="increment()">Add {{ num }}</button>
    <button v-on:click="decrement()">Reduce {{ num }} </button>
```
hoặc
```html
    <button @click="increment()">Add {{ num }}</button>
    <button @click="decrement()">Reduce {{ num }} </button>
```

Vue sẽ tự động phát hiện sự thay đổi giá trị của counter khi người dùng thực hiện event

Một sự kiện nữa mà chúng ta rất hay gặp là input event: Vue cũng cấp từ khoá `v-on:input` or `@input` để xử lý sự kiện này
```html
<input type="text" v-on:input="setName($event, 'VN')">
<p>{{ name }}</p>
```
```javascript
setName(event, national) {
    this.name = event.target.value + ' ' + national;
}
```
Lúc này giá trị name sẽ tự động được + `VN`, mỗi khi chung ta nhập giá trị vào thẻ input
*Chú ý*:
- Nếu phương thức không có tham số, thì có thể bỏ dấu () đi cũng được.

Tất cả code có ở [đây](./basics-04-events-methods)

***
### Locking content with v-once
Khi ta thêm thuộc tính này vào thẻ html, giá trị counter sẽ không bị thay đổi, hay nó bị lock, nó chỉ được gán một lần duy nhất khi component được khởi tạo dựa theo life cycle của component trong Vue.
```javascript
<p v-once>Starting Counter: {{ counter }}</p>
```

***
### References