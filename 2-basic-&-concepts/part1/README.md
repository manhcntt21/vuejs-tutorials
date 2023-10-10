Để tiếp nối [Bài 1](../../1-getting-started), phần này mình sẽ viết về Vue basic và core concepts. Các phần trình bầy bao gồm lý thuyết, giải thích chi tiết được liệt kê ở dưới đây
***
## Outline
1. [Creating and connecting Vue App instances](#Creating-and-connecting-Vue-App-instance)
2. [Interpolation-and-Data-binding](#Inerpolation-and-data-binding)
3. [Understanding methods in Vue Apps](#Understanding-methods-in-Vue-Apps)
4. [Output raw html content with v-html](#Output-raw-html-content-with-v-mhtml)
5. [Tài liệu tham khảo](#References)

Mình sẽ dùng ví dụ sau để minh hoạ cho toàn bộ phần nội dung của mình, đây là Vue course, vì vậy mình sẽ không nói về html và css, chỉ tập trung vào file javascript.

Bắt đầu từ html, ở đây các bạn dùng `Live Servce` extention để view và run javascript code. Chi tiết code ban đầu, ở [đây](basics-01-starting-code)

`index.html`
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
    <h1>Vue Course Goals</h1>
</header>
<section id="user-goal">
    <h2>My Course Goal</h2>
    <p></p>
</section>
</body>
</html>
```

### Creating and connecting Vue App instances
Đầu tiên các bạn nhớ thêm dòng này vào head của `index.html` để có thể sử dụng Vue trong file js

```html
    <script src="https://unpkg.com/vue@next" defer></script>
```

Như trong chúng ta đã biết Vue có thể điều khiển một phần hoặc toàn bộ fronend web application, vậy để làm để xác đinh được điều đó Vue dựa vào đây, đó chính là dựa vào id của html tag, `user-gold` trong ví dụ trên. Vue là component-based nên xuất phát từ chỉ một file html ban đầu này, chúng ta có thể quản lý toàn bộ hoặc một phần fronend, tuỳ thuộc vào cách thiết kế.

Chúng ta sẽ dùng `Vue.createApp()` method để tạo một Vue instance và mount nó với id đã được định nghĩa ở trên
```javascript
const app = Vue.createApp();
app.amount("#user-gold")
```
Chỉ đơn giản như vậy là bạn connect Vue instance với `user-goal` section hay chính là toàn bộ website của mình. Về từ khoá `mount`, đây là một `life cycle hook` trong vuejs, các bạn có thể đọc thêm các nó và các hooks khác ở [đây](https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks), ý nghĩa ngắn ngon thì nó là giai đoạn create & insert dom hay chính là rendering html page 

Trong Options API, Vue định nghĩa một vài options như: `data`, `methods`, `mounted`, đây là special keywork mà chúng ta không thể thay đổi. Bắt đầu với `data`, đây là nơi định nghĩa các properties và được expose ra, có thể sử dụng với `this`, có thể đưa ra màn hình (template) hoặc thực hiện bất kì logic gì đến thuộc tính này khi return nó, dạng key-value, nghĩa là chúng ta hoàn toàn có thể định nghĩa nhưng không expose nó ra. Vì bản thân `data` nó là một function, return theo kiểu key-value.
<table>
<tr>
<td>Cách 1</td><td>Cách 2</td>
</tr>
<tr>
<td>

```javascript
const app = Vue.createApp({
    data: function() {
        return {
            courseGoals: 'Finish the course and learn Vue!',
        }
    },
});
```
</td>
<td>

```javascript
const app = Vue.createApp({
    data() {
        return {
            courseGoals: 'Finish the course and learn Vue!',
        };
    },
});
```
</td>
</tr>
</table>

***
### Interpolation and Data binding
Ở phần trên là phần khai báo, vậy để show giá trị này lên trên template, view trên html, chúng ta dùng ký hiệu ``{{ }}``, nó gọi là interpolation.
```html
<body>
    <header>
        <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
        <h2>My Course Goal</h2>
        <p>{{ courseGoals }}</p>
    </section>
</body>
```
Một điều nên nhớ là chỉ thêm trong id section `user-goal`, vì chúng ta đã tạo Vue instance để điều khiển phần này các phần khác thì không, nếu dùng ở phần khác thì nó không hiểu.

Nếu chúng ta không muốn show giá trị nên mà giá trị nó là một link như thẻ a trong html thì sao.

Thêm một biến vuelink:
```javascript
const app = Vue.createApp({
    data() {
        return {
            courseGoals: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/',
        };
    },
});
```
Chúng ta sẽ không thể sử dụng như thế này, mà vue cung cấp một syntax khác để binding với value khi truyền vào thuộc tính của html
```html
<a href="{{ vueLink }}"> about Vue</a>
```
Cách của Vue: nó sẽ tự động lấy giá trị của biến truyền vào mà không cần phải interpolation nữa.
```html
<a v-bind:href="vueLink"> about Vue</a>
```
Cách ngắn gọn có thể bỏ phần `v-bind` đi cũng được, nhưng vẫn phải có dấu hai chấm
```html
<a :href="vueLink"> about Vue</a>
```
Ngoải ra nếu không muốn truyền qua biến thì có thể truyền trực tiếp giá vào như sau:
```html
<a href="https://vuejs.org/"> about Vue</a>
```
Sự khác biệt ở đây là: khi muốn bind biến thì dùng thêm dấu `:`, còn truyền trực tiếp giá thì thì không cần.

***
### Understanding methods in Vue Apps
Ok, phần tiếp theo chúng ta sẽ tìm hiểu về một keywork nữa trong Vue Option API: `methods` options.
Đây là nơi chúng ta sẽ định nghĩa một số logic, thao tác với các properties đã expose ở `data` option.

Ví dụ mình muốn chọn ngẫu nhiên một trong hai courseGoal được định nghĩa ở trong data, mình sẽ định nghĩa method `outputGoal` trong `methods` option.

```javascript
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
```
Và interpolation trên html, nhớ là phải có dấu `()`
```javascript
<p>{{ outputGoal() }}</p>
```

Vue cũng hỗ trợ binding raw html với `v-html`, không cần phải interpolate, vì v-html tự hiểu
```html
courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
```
```javascript
<p v-html="courseGoalC"></p>
```
***

Code có sẵn ở [đây](basics-02-a-first-summary).
### References
1. [Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)