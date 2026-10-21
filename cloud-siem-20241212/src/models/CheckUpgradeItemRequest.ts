// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUpgradeItemRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required in practice. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center region based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets reside in the Chinese mainland.
   * - ap-southeast-1: The assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: string;
  /**
   * @remarks
   * The upgrade item ID.
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

