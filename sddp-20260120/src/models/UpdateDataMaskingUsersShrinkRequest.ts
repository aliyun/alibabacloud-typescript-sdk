// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The column encryption access permissions. Valid values: fullAccess: Allows plaintext access. restrictedAccess: Allows restricted access. noneAccess: Prohibits decryption. noneAccess applies only to ApsaraDB RDS for MySQL instances whose active key pattern is client_key.
   * 
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @remarks
   * The expiration time of the plaintext access permissions. The value is a UNIX timestamp in milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970. Specify this parameter only when ExpireTimeOperation is set to SET. The value must be later than the current time and no greater than 2145953410000. The server saves the value with second-level precision. Do not specify this parameter when ExpireTimeOperation is set to PRESERVE or CLEAR.
   * 
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @remarks
   * The processing method for the permission expiration time. Valid values: PRESERVE: retains the original expiration time. CLEAR: clears the expiration time. SET: sets ExpireTime. Default value: PRESERVE. Only fullAccess supports setting an expiration time.
   * 
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
  /**
   * @remarks
   * The language of the response message. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud service type identifier. Valid values: 5: RDS, 8: POLARDB, and 27: PolarDBX2. If both ProductId and ProductCode are specified, they must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The list of database accounts for which you want to configure permissions.
   */
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authRole: 'AuthRole',
      expireTime: 'ExpireTime',
      expireTimeOperation: 'ExpireTimeOperation',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      userListShrink: 'UserList',
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
      userListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

