// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCrossAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The alias. The maximum length is 32 characters. This parameter is not required for cross-account backups that are configured based on a resource directory.
   * 
   * @example
   * Source account 1
   */
  alias?: string;
  /**
   * @remarks
   * The name of the RAM role for the account to back up. This parameter is used when you configure a cross-account backup by assuming a RAM role.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The type of cross-account backup. Valid values:
   * 
   * - **CROSS_ACCOUNT**: Configures a cross-account backup by assuming a RAM role.
   * 
   * - **CROSS_ACCOUNT_BY_RD**: Configures a cross-account backup based on a resource directory.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The UID of the account to back up.
   * 
   * @example
   * 1589753xxxxxx625
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

