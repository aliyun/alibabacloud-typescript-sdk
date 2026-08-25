// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCrossAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role of the account to back up. This parameter is required when you configure cross-account backup by assuming a RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The type of cross-account backup. Valid values:
   * 
   * - **CROSS_ACCOUNT**: Cross-account backup is configured by assuming a RAM role.
   * 
   * - **CROSS_ACCOUNT_BY_RD**: Cross-account backup is configured based on a resource directory.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The UID of the account to back up.
   * 
   * This parameter is required.
   * 
   * @example
   * 1841xxxxx3649795
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

