// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * account_sec
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must be 6 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (!@#$&%^*()_+-=).
   * 
   * This parameter is required.
   * 
   * @example
   * *****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

