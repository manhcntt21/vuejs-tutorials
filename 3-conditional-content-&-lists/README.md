Một trong những kiểu dữ liệu phổ biến nhất trong Vue là Object dạng array, vì phần lớn khi chung ta gọi api, dữ liệu và convert nó về dạng list. Vì vậy ở bài 3 này chúng ta sẽ xem cách list hoạt động và một số biểu thức điều kiện hay dùng trong Vuejs

***
## Outline
1. [Rendering content with Conditions](#Rendering-content-with-conditions)
2. [References](#References)

***
### Rendering content with conditions
Chúng ta có ví dụ sau với nhiệm vụ là thêm các course goal và hiện thị chúng ra màn hình, nếu không có goal nào thì hiện thì message: "*No goals have been added yet - please start adding some!*"

<table>
<tr>
<td>html</td><td>javascript</td>
</tr>
<tr>
<td>

```html
....
<body>
<header>
    <h1>Vue Course Goals</h1>
</header>
<section id="user-goals">
    <h2>My course goals</h2>
    <input type="text" />
    <button>Add Goal</button>
    <p>No goals have been added yet - please start adding some!</p>
    <ul>
        <li>Goal</li>
    </ul>
</section>
</body>
....
```
</td>
<td>

```javascript
const app = Vue.createApp({
  data() {
    return { goals: [] };
  },
});

app.mount('#user-goals');
```
</td>
</tr>
</table>

Ở Vueje có hỗ trợ một số biểu thức điều kiện sau: `v-if`, `v-else-if`, `v-else` cùng với đó là biếu thức lặp `v-for`, song hành cùng v-if sẽ có thêm `v-show` nữa. Giờ chúng ta sẽ áp dùng nhiều keywork này vào.

Chú ý:
- *Các biểu thức điều kiện phải viết liền nhau.*

Ví dụ.
```javascript
    <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
    <ul v-else>
        <li>Goal</li>
    </ul>
```
Nếu chúng ta có thêm một điều kiện nữa thì dùng thêm `v-else-if` như sau:
```javascript
    <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
    <p v-else-if="goals.length === 1">You only have one goal, please add at least two goals</p>
    <ul v-else>
        <li>Goal</li>
    </ul>
```
Và cuối cùng chúng ta có thể dùng `v-for` để show hết list goals ra;
```javascript
    <ul v-else>
        <li v-for="goal in goals">{{ goal }}</li>
    </ul>
```
Các bạn đừng quên, chúng ta còn một cái nữa là `v-show`, các bạn có thể đọc chi tiết ở [đây](https://vuejs.org/guide/essentials/conditional.html), theo mình điều khác biệt duy nhất là `v-show` thường dùng với css dùng để show hoặc hide dom, nghĩa là nó luôn tồn tại trong html, còn với `v-if` trong tất cả các điều kiện thì chỉ tồn tại trong dome một cái. Một cách đơn giản để ứng dụng, để nhớ, ngoại trừ trường hợp dùng css thì gần như mặc định chúng ta dùng `v-if`

Chú ý:
- *Các bạn không dùng được `v-if`, `v-for` trên cùng một thẻ như ở [docs](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if) có nói và giải thích là do `v-if` có thứ tự ưu tiên cao hươn `v-for`*
- Nhớ là không dùng thế này
    ```javascript
    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
    ```
- Có thể fix thế này:
```javascript
template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template
```

Nói thêm một chút, sau khi thêm rồi chúng ta muốn xoá phần từ đấy đi thì làm thế nào? Đầu tiên thì phải nói thêm `v-for` cũng hỗ trợ second alias là index, chúng là có thể lấy index của list như sau:
```javascript
    <ul v-else>
        <li v-for="(goal, index) in goals">{{ goal }} -  {{ index }}</li>
    </ul>
```
Khi có index rồi thì việc xoá không còn khó khăn nữa, vì index giúp mọi phần từ trở lên duy nhất, nhớ lên thuộc tính `:key`
```javascript
      <li v-for="(goal, idx) in goals" @click="removeGoal(idx)" :key="goal">
        <p>{{goal}}</p>
        <input type="text" @click.stop>
      </li>
```

Tất cả code có sẵn tại [đây](./lists-cond-01-starting-setup)
***
### References
1. [Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)
2. [v-for-with-v-if](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if)