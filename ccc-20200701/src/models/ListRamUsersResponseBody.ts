// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRamUsersResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the RAM user belongs.
   * 
   * @example
   * 15772400000****
   */
  aliyunUid?: number;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * 测试账号
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * The mobile number of the RAM user.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the user is a primary account. A value of `false` indicates that the user is a RAM user.
   * 
   * @example
   * false
   */
  primary?: boolean;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 28036411123456****
   */
  ramId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      mobile: 'Mobile',
      primary: 'Primary',
      ramId: 'RamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      mobile: 'string',
      primary: 'boolean',
      ramId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of RAM users.
   */
  list?: ListRamUsersResponseBodyDataList[];
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListRamUsersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListRamUsersResponseBodyData;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24753D71-C91D-1A38-A8AD-372BF12453F6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRamUsersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

