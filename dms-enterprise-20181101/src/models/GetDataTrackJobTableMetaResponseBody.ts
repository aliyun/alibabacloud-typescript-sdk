// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrackJobTableMetaResponseBodyTableMetaListColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the character set.
   * 
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * claimantno
   */
  columnName?: string;
  /**
   * @remarks
   * The position of the column.
   * 
   * @example
   * 1
   */
  columnPosition?: number;
  /**
   * @remarks
   * The data type of the column. Examples: BIGINT, INT, and VARCHAR.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * Indicates whether the column is a virtual column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fictive?: boolean;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      columnName: 'ColumnName',
      columnPosition: 'ColumnPosition',
      columnType: 'ColumnType',
      fictive: 'Fictive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      columnName: 'string',
      columnPosition: 'number',
      columnType: 'string',
      fictive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrackJobTableMetaResponseBodyTableMetaList extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   */
  columns?: GetDataTrackJobTableMetaResponseBodyTableMetaListColumns[];
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * DB165
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * live_stat
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetDataTrackJobTableMetaResponseBodyTableMetaListColumns },
      schemaName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrackJobTableMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The metadata of tables.
   */
  tableMetaList?: GetDataTrackJobTableMetaResponseBodyTableMetaList[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableMetaList: 'TableMetaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableMetaList: { 'type': 'array', 'itemType': GetDataTrackJobTableMetaResponseBodyTableMetaList },
    };
  }

  validate() {
    if(Array.isArray(this.tableMetaList)) {
      $dara.Model.validateArray(this.tableMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

