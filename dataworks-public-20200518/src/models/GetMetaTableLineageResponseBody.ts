// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableLineageResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 1638720736000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db1
   */
  databaseName?: string;
  /**
   * @remarks
   * The unique identifier of the table.
   * 
   * @example
   * odps.tt.name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * name
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      databaseName: 'DatabaseName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      databaseName: 'string',
      tableGuid: 'string',
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

export class GetMetaTableLineageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the table.
   */
  dataEntityList?: GetMetaTableLineageResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * Indicates whether the next page exists.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The logic of paging. If the value true is returned for the HasNext parameter and a value is returned for the NextPrimaryKey parameter in the response of the previous request, you must use the value of the NextPrimaryKey parameter for the next request.
   * 
   * @example
   * odps | retail_e_commerce_2 | retail_e_commerce_2 | dws_ec_trd__cate_commodity_gmv_kpy_fy
   */
  nextPrimaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      hasNext: 'HasNext',
      nextPrimaryKey: 'NextPrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableLineageResponseBodyDataDataEntityList },
      hasNext: 'boolean',
      nextPrimaryKey: 'string',
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

export class GetMetaTableLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableLineageResponseBodyData;
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
      data: GetMetaTableLineageResponseBodyData,
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

