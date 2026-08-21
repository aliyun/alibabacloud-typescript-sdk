// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPoliciesForIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multiple applications](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The identity name.
   * 
   * - If IdentityType is set to RamUser, specify the Resource Access Management (RAM) user ID.
   * - If IdentityType is set to RamRole, specify the role name.
   * 
   * @example
   * test****name
   */
  identityName?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * - **RamUser**: Resource Access Management (RAM) user.
   * - **RamRole**: RAM role.
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

