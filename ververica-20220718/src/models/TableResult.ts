// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RowUpdate } from "./RowUpdate";


export class TableResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the collect sink operator.
   */
  collectSinkOperatorId?: string;
  rowUpdates?: RowUpdate[];
  /**
   * @remarks
   * The name of the table.
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      collectSinkOperatorId: 'collectSinkOperatorId',
      rowUpdates: 'rowUpdates',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectSinkOperatorId: 'string',
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

