// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeServiceLinkRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the server-linked role. Set this parameter to AliyunServiceRoleForMSE
   * 
   * @example
   * AliyunServiceRoleForMSE
   */
  roleName?: string;
  /**
   * @remarks
   * This parameter is reserved and not in use.
   * 
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

