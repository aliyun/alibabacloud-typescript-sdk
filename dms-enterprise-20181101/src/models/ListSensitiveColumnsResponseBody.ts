// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn extends $dara.Model {
  columnCount?: number;
  columnName?: string;
  functionType?: string;
  schemaName?: string;
  securityLevel?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      columnName: 'ColumnName',
      functionType: 'FunctionType',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      columnName: 'string',
      functionType: 'string',
      schemaName: 'string',
      securityLevel: 'string',
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

export class ListSensitiveColumnsResponseBodySensitiveColumnList extends $dara.Model {
  sensitiveColumn?: ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumn: 'SensitiveColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumn: { 'type': 'array', 'itemType': ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveColumn)) {
      $dara.Model.validateArray(this.sensitiveColumn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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
   * 09D82FD7-F87F-59EF-AA82-AEF71B09E306
   */
  requestId?: string;
  sensitiveColumnList?: ListSensitiveColumnsResponseBodySensitiveColumnList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnList: 'SensitiveColumnList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnList: ListSensitiveColumnsResponseBodySensitiveColumnList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sensitiveColumnList && typeof (this.sensitiveColumnList as any).validate === 'function') {
      (this.sensitiveColumnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

