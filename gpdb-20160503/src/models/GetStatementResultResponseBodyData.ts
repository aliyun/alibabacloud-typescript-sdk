// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStatementResultResponseBodyDataColumnMetadata } from "./GetStatementResultResponseBodyDataColumnMetadata";
import { GetStatementResultResponseBodyDataRecords } from "./GetStatementResultResponseBodyDataRecords";


export class GetStatementResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of column metadata.
   */
  columnMetadata?: GetStatementResultResponseBodyDataColumnMetadata;
  /**
   * @remarks
   * Multiple rows of data.
   */
  records?: GetStatementResultResponseBodyDataRecords;
  /**
   * @remarks
   * Total number of entries.
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
      columnMetadata: GetStatementResultResponseBodyDataColumnMetadata,
      records: GetStatementResultResponseBodyDataRecords,
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

