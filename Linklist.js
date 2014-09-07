function LinkList() {
    this.head = null;
}

LinkList.prototype.add = function(value) {
    var node = {
        value: value,
        next: null
    };
    var current;

    if(this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        curent.next = node;
    }
    return node;
};

