# assign-partial
Copy fields from one to another one based specified keys.
Based typescript type manipulation, you can use autocomplete on field names!

# Usage
```ts
import { assignPartial } from '@lunuy/assign-partial';

{
    const obj1 = {
        a: 1,
        b: 'hi'
    }
    const obj2 = {
        a: 2,
        b: 34,
        c: 'hello'
    }

    // You can't copy 'b' field because type of 'b' field of two objects are not matched.(Not assignable)
    // You can't copy 'c' field because destination object(obj1) doesn't have 'c' field.
    assignPartial(obj1, obj2, ['a']);
    console.log(obj1);
}
```