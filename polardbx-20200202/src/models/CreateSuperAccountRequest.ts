// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSuperAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * testdbadescription
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * dba
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * testdbapassword
   */
  accountPassword?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
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

