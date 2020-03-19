const list_item = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');


let draggeditem = null;

for(let i=0 ;i<list_item.length; i++){
    const item = list_item[i];

    // Listen to drag start
    item.addEventListener('dragstart', () => {
        // We need to select the current item that we are tracking
        // console.log('dragstart');
        draggeditem = item;
        setTimeout(() => {
            item.style.display = 'none';
        }, 0);
        
    });

    // Listen to drag end
    item.addEventListener('dragend', () => {
        // console.log('dragend');
        setTimeout(() => {
            draggeditem.style.display = 'block';
            draggeditem = null;
        }, 0);
    })



    for(let j=0; j<lists.length; j++){
        const list = lists[j];

        // Called when item is dragged over list-item or dragging is started over list-items
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // Called when we enter list-item
        list.addEventListener('dragenter', (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        // Called when we leave the list item
        list.addEventListener('dragleave', () => {
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('drop', (e) => {
            // console.log('drop');
            list.append(draggeditem);
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}
