// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * test
   */
  columnDescription?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * ColumnName_test
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * varchar(32)
   */
  columnType?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * SchemaName_test
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnDescription: 'ColumnDescription',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDescription: 'string',
      columnName: 'string',
      columnType: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
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

export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList extends $dara.Model {
  sensitiveColumnsDetail?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumnsDetail: 'SensitiveColumnsDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumnsDetail: { 'type': 'array', 'itemType': ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveColumnsDetail)) {
      $dara.Model.validateArray(this.sensitiveColumnsDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
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
   * 7629888F-C9FB-4D16-A7D3-B443FE06FBD4
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the sensitive field.
   */
  sensitiveColumnsDetailList?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnsDetailList: 'SensitiveColumnsDetailList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnsDetailList: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sensitiveColumnsDetailList && typeof (this.sensitiveColumnsDetailList as any).validate === 'function') {
      (this.sensitiveColumnsDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

