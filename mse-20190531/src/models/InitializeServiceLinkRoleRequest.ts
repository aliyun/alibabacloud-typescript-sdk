// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeServiceLinkRoleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * AliyunServiceRoleForMSE
   */
  roleName?: string;
  /**
   * @example
   * ""
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      roleName: 'RoleName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      roleName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

