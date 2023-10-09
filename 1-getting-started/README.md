Bài viết gôm các phần sau:
1. [Định nghĩa](#Định-nghĩa)
2. [Keywork](#Keywork)
3. [Ứng dụng](#ứng-dụng)
4. [Framework tương tự](#Framework-tương-tự)
5. [Demo](#Demo)
6. [Tài liệu tham khảo](#Tài-liệu-tham-khảo)
## Định nghĩa
Từ [docs](https://vuejs.org/guide/introduction.html) người định nghĩa: Vue là một Javascript framework cho việc xây dựng giao diện người dùng. Nó được xây dựng dựa trên HTML, CSS, và Javascript. Nó cung cấp `declarative` và `component-based` programming model, hỗ trợ phát triển user interface.
- [Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming#:~:text=Declarative%20programming%20is%20a%20non,by%20a%20declarative%20programming%20style.), người ta định nghĩa: là một style lập trình, trong đó các chương trình mô tả kết quả mong muốn mà không cần phải liệt kê rõ ràng hoặc các bước thực hiện (**WHAT**). Nó trái ngược với [Imperative programming](https://en.wikipedia.org/wiki/Declarative_programming#:~:text=Declarative%20programming%20is%20a%20non,by%20a%20declarative%20programming%20style.), chương trình phải mô tả rõ ràng nó làm như thế nào, bằng những bước cụ thể là gì (**HOW**). 
- Component-based programming model: nghĩa là bạn có thể chia nhỏ toàn bộ ứng dụng của mình thành các components, nó giúp cho bạn dễ dàng quản lý ứng dụng, ít trùng lặp mã, dễ dàng phát triển hơn. Dễ dàng nhìn thấy nhất là SPA bằng Vue (or Vuejs)
***
- Ví du: Chúng ta muốn bình phương mỗi giá trị ở trong danh sách:
<table>
<tr>
<td>Imperative programming</td><td>Declarative programming</td>
</tr>
<tr>
<td>

```python
arr = [1, 2, 3, 4, 5]
print(arr)
for i in range(0, len(arr)):
    arr[i] = arr[i]*arr[i]

print(arr)
```

</td>
<td>

```python
const res = [1, 2, 3].map(n => n * 2)
```

</td>
</tr>
</table>

***

## Keywork
1. Javascript là một ngôn ngữ lập trình được hỗ trợ trên tất cả các browser, nó cho phép bạn thao tác với các loaded page, do đó làm tăng trải nghiệm người dùng.
2. Framework: là third-party library mà nó cũng cấp các tiện ích, và set of rule về build a Javascript application(điều thứ hai chính là điểm khác biệt với library thông thường), như kiểu về struct code file: .vue sẽ gồm 3 phần là tempalte, script và style.
3. Reactive: ứng dụng có khả năng phản ứng tự động với sự thay đổi của user như là show validation input error, overlay,...
4. Web-frontend: nó là những gì user nhìn thấy, nó bao gồm HTML + CSS + Javascript, chạy trong browser của người dùng.

Nếu chỉ dùng vanilla Javascript mà cần đến framework thì sao? 
Chúng ta có thể build bất kỳ web application nào chỉ với vanilla Javascript, khi đó chúng ta phải viết rất nhiều code, phải tự tối ưu code, làm việc với team khó hơn vì khó thông nhất struct code,.. Vậy nên cần một framework
***
## Ứng dụng
- Vue có thể được sử dụng để control các phần trong html page hoặc toàn bộ page (Wigdet approach)
- Vue điều khiển toàn bộ frontend của một web application (Single-Page-Application, SPA approach), server chỉ gửi html code một lần, sau đó Vue sẽ điều toàn bộ UI 
***
## Framework tương tự
- React
- Angular: bắt buộc là typescript, nhưng với vue là optional
***
## Demo
- Tôi sẽ bắt đầu bằng việc chưa áp dụng Vue cho ví dụ sau: (đây cũng gọi là imperative)
<table>
<tr>
<td>html</td> <td>css</td><td>js</td>
</tr>
<tr>
<td>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A First App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="app">
      <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" />
        <button>Add Goal</button>
      </div>
      <ul>

      </ul>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```
</td>
<td>

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

#app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label, input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}
```
</td>
<td>

```javascript
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGold() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGold);
```
</td>
</tr>
</table>

- Sau khi áp dụng Vue (without build tools) - declarative 
<table>
<tr>
<td>html</td> <td>css</td><td>js</td>
</tr>
<tr>
<td>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>A First App</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <div id="app">
    <div>
      <label for="goal">Goal</label>
      <input type="text" id="goal" v-model="enteredValue" />
      <button v-on:click="addGoal">Add Goal</button>
    </div>
    <ul>
      <li v-for="goal in goals">{{goal}}</li>
    </ul>
  </div>
  <script src="https://unpkg.com/vue@next"></script>
  <script src="app.js"></script>
</body>

</html>
```
</td>
<td>

nothing changes
</td>
<td>

```javascript
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
    },
}).mount('#app');
```
Cách tạo data và method như này gọi là Option API, còn một cách gọi là Composition API, các bạn sẽ được biết rõ hơn ở những phần sau. Đây chỉ là demo, một số từ khoá như `data`, `methods`, `mount`,`v-model`, `v-for`, và `v-on`, mình sẽ nói chi tiết sau 
</td>
</tr>
</table>

***
## Tài liệu tham khảo
1. [What is Vue?](https://vuejs.org/guide/introduction.html)
2. [Declarative vs imperative](https://dev.to/ruizb/declarative-vs-imperative-4a7l#:~:text=Functional%20Programming%20is%20a%20declarative,explicitly%20specifying%20its%20control%20flow.)