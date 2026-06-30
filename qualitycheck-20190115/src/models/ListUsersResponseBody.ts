// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataUser extends $dara.Model {
  aliUid?: string;
  createTime?: string;
  description?: string;
  displayName?: string;
  id?: number;
  loginUserType?: number;
  roleName?: string;
  updateTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      loginUserType: 'LoginUserType',
      roleName: 'RoleName',
      updateTime: 'UpdateTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      id: 'number',
      loginUserType: 'number',
      roleName: 'string',
      updateTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $dara.Model {
  user?: ListUsersResponseBodyDataUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of `200` indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  count?: number;
  data?: ListUsersResponseBodyData;
  /**
   * @remarks
   * The message returned. The value is successful if the request is successful. Otherwise, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of false or null indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListUsersResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

