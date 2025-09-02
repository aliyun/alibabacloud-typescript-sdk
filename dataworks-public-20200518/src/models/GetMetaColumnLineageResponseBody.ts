// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaColumnLineageResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The EMR cluster ID.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The unique identifier of the field.
   * 
   * @example
   * odps.engine_name.table_name.1
   */
  columnGuid?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * 1
   */
  columnName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * abc
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnGuid: 'string',
      columnName: 'string',
      databaseName: 'string',
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

export class GetMetaColumnLineageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  dataEntityList?: GetMetaColumnLineageResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of fields.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaColumnLineageResponseBodyDataDataEntityList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaColumnLineageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaColumnLineageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

