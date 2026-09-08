// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingUsersShrinkRequest extends $dara.Model {
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

