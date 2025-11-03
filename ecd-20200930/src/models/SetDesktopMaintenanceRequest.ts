// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopMaintenanceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of cloud computer IDs for which you want to set maintenance mode. A maximum of 100 cloud computer IDs are supported.
   * 
   * This parameter is required.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * Enter or exit cloud computer maintenance mode.
   * 
   * Enumerated values:
   * 
   * *   ENTER: The enters the maintenance mode.
   * *   EXIT: The exits the maintenance mode.
   * 
   * This parameter is required.
   * 
   * @example
   * enter
   */
  mode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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

