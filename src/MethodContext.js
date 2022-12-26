import { EventEmitter } from './EventEmitter';
let fun = () => obj.count++;

export const obj = {
    count: 0,
    subscribe() {
        EventEmitter.on('click', fun);
    },
    unsubscribe() {
        EventEmitter.off('click', fun);
    },
};

/*
	@@ -19,7 +25,10 @@ obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        let args1 = args.reverse();
        this.second(...args1);
    },
    second() {
        // здесь ничего писать не нужно
    },
};
