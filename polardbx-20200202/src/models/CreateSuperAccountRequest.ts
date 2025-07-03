// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSuperAccountRequest extends $dara.Model {
  /**
   * @example
   * testdbadescription
   */
  accountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dba
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdbapassword
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-************
   */
  DBInstanceName?: string;
  /**
   * @remarks
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

