// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableRightsSeparationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-sprcym7g7w****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account_1
   */
  dbaAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *****
   */
  dbaAccountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dbaAccountName: 'DbaAccountName',
      dbaAccountPassword: 'DbaAccountPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dbaAccountName: 'string',
      dbaAccountPassword: 'string',
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

