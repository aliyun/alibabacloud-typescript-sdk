// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUpgradeItemRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: string;
  /**
   * @remarks
   * The ID of the upgrade item.
   * 
   * @example
   * dispose_task_upgrade
   */
  upgradeItemId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      upgradeItemId: 'UpgradeItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
      roleFor: 'string',
      upgradeItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

