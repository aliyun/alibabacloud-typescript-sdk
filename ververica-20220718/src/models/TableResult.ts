// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RowUpdate } from "./RowUpdate";


export class TableResult extends $dara.Model {
  rowUpdates?: RowUpdate[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      rowUpdates: 'rowUpdates',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowUpdates: { 'type': 'array', 'itemType': RowUpdate },
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rowUpdates)) {
      $dara.Model.validateArray(this.rowUpdates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

