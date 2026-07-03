// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUpgradeItemRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: The assets are in a region outside the Chinese mainland.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the member\\"s perspective.
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

