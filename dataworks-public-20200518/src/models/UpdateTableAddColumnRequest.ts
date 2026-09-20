// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableAddColumnRequestColumn extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  columnName?: string;
  /**
   * @remarks
   * The Chinese name of the column.
   * 
   * @example
   * 中文
   */
  columnNameCn?: string;
  /**
   * @remarks
   * The type of the column. For more information, see the column types supported by MaxCompute.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  columnType?: string;
  /**
   * @remarks
   * The comment of the column.
   * 
   * @example
   * Remarks
   */
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      comment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnRequest extends $dara.Model {
  /**
   * @remarks
   * The list of columns.
   * 
   * This parameter is required.
   */
  column?: UpdateTableAddColumnRequestColumn[];
  /**
   * @remarks
   * The unique identifier of the MaxCompute table. Format: odps.projectName.tableName.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': UpdateTableAddColumnRequestColumn },
      tableGuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.column)) {
      $dara.Model.validateArray(this.column);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

