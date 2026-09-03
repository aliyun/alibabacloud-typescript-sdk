// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopMaintenanceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers for which you want to set the maintenance mode. You can specify up to 100 cloud computer IDs.
   * 
   * This parameter is required.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * Specifies whether to enter or exit maintenance mode for the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * enter
   */
  mode?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopIds: 'DesktopIds',
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

