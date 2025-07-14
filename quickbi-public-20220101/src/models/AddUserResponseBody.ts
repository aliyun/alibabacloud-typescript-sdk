// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddUserResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Aliyun account.
   * 
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether the organization administrator role is assigned. Value range: 
   * 
   * - true: Yes
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIdList is provided.</notice>
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether the permission administrator role is assigned. Value range: 
   * 
   * - true: Yes
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIdList is provided.</notice>
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * Aliyun account nickname.
   * 
   * @example
   * ddd
   */
  nickName?: string;
  /**
   * @remarks
   * List of organization role IDs bound to the user.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * UserID in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @remarks
   * User type of the organization member. Value range: 
   * - 1: Developer 
   * - 2: Visitor 
   * - 3: Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns detailed information about the newly added Aliyun user.
   */
  result?: AddUserResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddUserResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

