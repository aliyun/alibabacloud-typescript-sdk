// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteStatementResponseBodyDataColumnMetadata } from "./ExecuteStatementResponseBodyDataColumnMetadata";
import { ExecuteStatementResponseBodyDataRecords } from "./ExecuteStatementResponseBodyDataRecords";


export class ExecuteStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metadata of the columns.
   */
  columnMetadata?: ExecuteStatementResponseBodyDataColumnMetadata;
  /**
   * @remarks
   * The rows of data.
   */
  records?: ExecuteStatementResponseBodyDataRecords;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalNumRows?: number;
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'ColumnMetadata',
      records: 'Records',
      totalNumRows: 'TotalNumRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: ExecuteStatementResponseBodyDataColumnMetadata,
      records: ExecuteStatementResponseBodyDataRecords,
      totalNumRows: 'number',
    };
  }

  validate() {
    if(this.columnMetadata && typeof (this.columnMetadata as any).validate === 'function') {
      (this.columnMetadata as any).validate();
    }
    if(this.records && typeof (this.records as any).validate === 'function') {
      (this.records as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

