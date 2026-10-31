// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupResponseBodyUserGroupInfoAdminList extends $dara.Model {
  /**
   * @remarks
   * The user account name.
   * 
   * @example
   * xx
   */
  accountName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx test
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 131313
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroupInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user group is enabled.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The administrators of the user group.
   */
  adminList?: GetUserGroupResponseBodyUserGroupInfoAdminList[];
  /**
   * @remarks
   * The user group description.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 1313213
   */
  id?: string;
  /**
   * @remarks
   * The role of the current user in the user group.
   * 
   * @example
   * xx
   */
  myRole?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * xx test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminList: 'AdminList',
      description: 'Description',
      id: 'Id',
      myRole: 'MyRole',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminList: { 'type': 'array', 'itemType': GetUserGroupResponseBodyUserGroupInfoAdminList },
      description: 'string',
      id: 'string',
      myRole: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The user group details.
   */
  userGroupInfo?: GetUserGroupResponseBodyUserGroupInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userGroupInfo: 'UserGroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userGroupInfo: GetUserGroupResponseBodyUserGroupInfo,
    };
  }

  validate() {
    if(this.userGroupInfo && typeof (this.userGroupInfo as any).validate === 'function') {
      (this.userGroupInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

