// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpenSearchAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
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
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
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

