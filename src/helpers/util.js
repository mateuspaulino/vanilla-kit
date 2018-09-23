export default function removeClass(elements, className) {
    // elements must be a HTML collection
    elements[0].classList.remove(className);
    if (elements[0]) {
        removeClass(elements, className);
    }
}

// bind event
export const binder = (q, evnt, func) => {
    q.forEach((el) => {
        el.addEventListener(evnt, func);
    });
};
