// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testAccount
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test@1111
   */
  accountPassword?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * securityAccount
   */
  securityAccountName?: string;
  /**
   * @example
   * securityPassword
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

