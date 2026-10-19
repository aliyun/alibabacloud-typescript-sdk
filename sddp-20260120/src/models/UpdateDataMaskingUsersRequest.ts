// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingUsersRequestUserList extends $dara.Model {
  /**
   * @remarks
   * The database account identifier. Obtain this value from Items[].Id in the response of ListDataAssetAccounts and pass it as a string.
   * 
   * @example
   * 1001
   */
  accountId?: string;
  /**
   * @remarks
   * The database instance identity. Obtain this value from Items[].InstanceId in the response of ListDataMaskingInstances.
   * 
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
   * @remarks
   * The column encryption access permissions. Valid values:
   * 
   * - fullAccess: plaintext access.
   * - restrictedAccess: restricted access.
   * - noneAccess: decryption denied.
   * 
   * noneAccess applies only to ApsaraDB RDS for MySQL instances whose active key pattern is client_key.
   * 
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @remarks
   * The expiration time of the plaintext access permissions. Specify a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. This parameter is required only when ExpireTimeOperation is set to SET. The value must be later than the current time and no later than 2145953410000. The server stores the value with second-level precision. Do not specify this parameter when ExpireTimeOperation is set to PRESERVE or CLEAR.
   * 
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @remarks
   * The action to take on the permission expiration time. Valid values:
   * 
   * - PRESERVE: Retains the existing expiration time.
   * - CLEAR: Clears the expiration time.
   * - SET: Sets the expiration time to the value specified by ExpireTime.
   * 
   * Default value: PRESERVE. Only fullAccess supports configuring a validity period.
   * 
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type identifier. Valid values:
   * 
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * 
   * If both ProductId and ProductCode are specified, they must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The list of database accounts for which to set permissions.
   */
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

