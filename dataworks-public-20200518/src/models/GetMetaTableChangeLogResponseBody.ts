// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableChangeLogResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The content of the change.
   * 
   * @example
   * "[{\\"action\\":\\"ADD_COLUMN\\",\\"value\\":[{\\"originName\\":\\"\\",\\"originType\\":\\"\\",\\"originComment\\":\\"\\",\\"name\\":\\"id\\",\\"type\\":\\"struct<name:string>\\",\\"comment\\":\\"\\"}]}]",
   */
  changeContent?: string;
  /**
   * @remarks
   * The type of the change.
   * 
   * @example
   * CREATE_TABLE
   */
  changeType?: string;
  /**
   * @remarks
   * The time when the metatable was created.
   * 
   * @example
   * 1590722845000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the metatable was modified.
   * 
   * @example
   * 1590722845000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The entity on which the change was made. Valid values: TABLE and PARTITION.
   * 
   * @example
   * TABLE
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * abc
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      changeContent: 'ChangeContent',
      changeType: 'ChangeType',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      objectType: 'ObjectType',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeContent: 'string',
      changeType: 'string',
      createTime: 'number',
      modifiedTime: 'number',
      objectType: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  dataEntityList?: GetMetaTableChangeLogResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of metatables.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableChangeLogResponseBodyDataDataEntityList },
      pageNumber: 'number',
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

export class GetMetaTableChangeLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableChangeLogResponseBodyData;
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
      data: GetMetaTableChangeLogResponseBodyData,
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

