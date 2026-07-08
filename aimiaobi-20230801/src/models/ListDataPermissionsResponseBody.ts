// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataPermissionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The unique ID of the data.
   * 
   * - Example for a dataset: SystemSearch.QuarkCommonNews
   * 
   * @example
   * SystemSearch.QuarkCommonNews
   */
  dataId?: string;
  /**
   * @remarks
   * The data type.
   * 
   * - dataset: a dataset
   * 
   * @example
   * xxx
   */
  dataType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The permission type. The default value is \\`read\\`, which means read-only.
   * 
   * @example
   * read
   */
  permission?: string;
  /**
   * @remarks
   * The unique ID of the user with the permission.
   * 
   * @example
   * CustomSemanticSearch
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user with the permission.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataId: 'DataId',
      dataType: 'DataType',
      id: 'Id',
      permission: 'Permission',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      dataId: 'string',
      dataType: 'string',
      id: 'number',
      permission: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListDataPermissionsResponseBodyData[];
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success and \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDataPermissionsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

