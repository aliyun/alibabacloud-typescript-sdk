// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * test_col
   */
  columnName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tb
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

