// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableAddColumnRequestColumn extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  columnName?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * Chinese
   */
  columnNameCn?: string;
  /**
   * @remarks
   * The type of the field. For more information, see MaxCompute field types.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  columnType?: string;
  /**
   * @remarks
   * The comment of the field.
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
   * The fields.
   * 
   * This parameter is required.
   */
  column?: UpdateTableAddColumnRequestColumn[];
  /**
   * @remarks
   * The globally unique identifier (GUID) of the MaxCompute table. Specify the GUID in the odps.projectName.tableName format.
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

