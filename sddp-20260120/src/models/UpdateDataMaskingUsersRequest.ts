// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingUsersRequestUserList extends $dara.Model {
  /**
   * @example
   * 1001
   */
  accountId?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataMaskingUsersRequest extends $dara.Model {
  /**
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  userList?: UpdateDataMaskingUsersRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      authRole: 'AuthRole',
      expireTime: 'ExpireTime',
      expireTimeOperation: 'ExpireTimeOperation',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authRole: 'string',
      expireTime: 'number',
      expireTimeOperation: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      userList: { 'type': 'array', 'itemType': UpdateDataMaskingUsersRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

