import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Categories', field: 'categories' },
      { title: 'Item1', field: 'item1' },
      { title: 'Item2', field: 'item2' },
      { title: 'Item3', field: 'item3' },
      { title: 'Item4', field: 'item4' }
    ],
    data: [
      { categories: 'Day', item1: 'item-1', item2: 'item-2', item3: 'item-3', item4: 'item-4' },
      { categories: 'Date', item1: 'item-1', item2: 'item-2', item3: 'item-3', item4: 'item-4'},
      { categories: 'Single/Double', item1: 'item-1', item2: 'item-2', item3: 'item-3', item4: 'item-4'},
      { categories: 'Suites', item1: 'item-1', item2: 'item-2', item3: 'item-3', item4: 'item-4'},
      { categories: '# of rooms', item1: 'item-1', item2: 'item-2', item3: 'item-3', item4: 'item-4'},
    ],
  });

  return (
    <MaterialTable
      title="More Information"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
