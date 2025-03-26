import { createFileRoute } from '@tanstack/react-router';

import { DataGrid } from '../../src';
import type { Column } from '../../src';
import { renderCoordinates } from '../renderers';
import { useDirection } from '../directionContext';

export const Route = createFileRoute('/ResizableGrid')({
  component: ResizableGrid
});

type Row = number;
const rows: readonly Row[] = Array.from({ length: 100 }, (_, i) => i);

const columns: Column<Row>[] = [];

for (let i = 0; i < 50; i++) {
  const key = String(i);
  columns.push({
    key,
    name: key,
    renderCell: renderCoordinates
  });
}

function ResizableGrid() {
  const direction = useDirection();

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      className="fill-grid"
      style={{ resize: 'both' }}
      direction={direction}
    />
  );
}
