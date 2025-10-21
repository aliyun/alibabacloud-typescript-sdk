// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Row } from "./Row";


export class RowUpdate extends $dara.Model {
  row?: Row;
  rowKind?: string;
  static names(): { [key: string]: string } {
    return {
      row: 'row',
      rowKind: 'rowKind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: Row,
      rowKind: 'string',
    };
  }

  validate() {
    if(this.row && typeof (this.row as any).validate === 'function') {
      (this.row as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

