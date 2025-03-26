import { createFileRoute } from '@tanstack/react-router';

import { DataGrid } from '../../src';
import type { Column } from '../../src';
import { renderCoordinates } from '../renderers';
import { useDirection } from '../directionContext';

export const Route = createFileRoute('/VariableRowHeight')({
  component: VariableRowHeight
});

type Row = number;
const rows: readonly Row[] = Array.from({ length: 500 }, (_, i) => i);

const columns: Column<Row>[] = [];

for (let i = 0; i < 30; i++) {
  const key = String(i);
  columns.push({
    key,
    name: key,
    frozen: i < 5,
    resizable: true,
    renderCell: renderCoordinates
  });
}

function VariableRowHeight() {
  const direction = useDirection();

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowHeight={rowHeight}
      className="fill-grid"
      direction={direction}
    />
  );
}

function rowHeight() {
  // should be based on the content of the row
  return 25 + Math.round(Math.random() * 75);
}
