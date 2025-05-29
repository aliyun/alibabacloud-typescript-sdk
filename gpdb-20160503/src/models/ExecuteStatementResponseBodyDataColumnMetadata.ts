// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnMetadata } from "./ColumnMetadata";


export class ExecuteStatementResponseBodyDataColumnMetadata extends $dara.Model {
  columnMetadata?: ColumnMetadata[];
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'ColumnMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: { 'type': 'array', 'itemType': ColumnMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.columnMetadata)) {
      $dara.Model.validateArray(this.columnMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

