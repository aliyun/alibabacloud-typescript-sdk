// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPoliciesForIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the identity.
   * 
   * *   Specifies the ID of the RAM user when the IdentityType parameter is set to RamUser.
   * *   Specifies the name of the RAM role when the IdentityType parameter is set to RamRole.
   * 
   * @example
   * test****name
   */
  identityName?: string;
  /**
   * @remarks
   * The type of the identity. Valid values:
   * 
   * *   **RamUser**: a RAM user.
   * *   **RamRole**: a RAM role.
   * 
   * @example
   * RamUser
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      identityName: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

