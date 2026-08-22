// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account_sec
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *****
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-********
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

