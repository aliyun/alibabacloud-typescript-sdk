// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEapDeviceResourceAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * Instance cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Total number of devices
   * 
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @remarks
   * Region ID where the instance is located.
   * 
   * > You can invoke the DescribeRegions API to view the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deviceCount: 'DeviceCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      deviceCount: 'number',
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

