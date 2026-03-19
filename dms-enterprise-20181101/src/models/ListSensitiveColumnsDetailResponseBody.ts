// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail extends $dara.Model {
  columnDescription?: string;
  columnName?: string;
  columnType?: string;
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  schemaName?: string;
  searchName?: string;
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

