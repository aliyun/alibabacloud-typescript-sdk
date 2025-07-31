// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupResponseBodyUserGroupInfoAdminList extends $dara.Model {
  /**
   * @example
   * xx
   */
  accountName?: string;
  displayName?: string;
  /**
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
   * @example
   * true
   */
  active?: boolean;
  adminList?: GetUserGroupResponseBodyUserGroupInfoAdminList[];
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * 1313213
   */
  id?: string;
  /**
   * @example
   * xx
   */
  myRole?: string;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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

