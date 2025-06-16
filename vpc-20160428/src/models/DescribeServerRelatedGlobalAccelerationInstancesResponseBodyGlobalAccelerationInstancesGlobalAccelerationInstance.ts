// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-t4nku6vv9****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The public IP address of the GA instance.
   * 
   * @example
   * 12.34.56.78
   */
  ipAddress?: string;
  /**
   * @remarks
   * The region ID of the GA instance.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address of the backend service.
   * 
   * @example
   * 172.24.52.234
   */
  serverIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipAddress: 'IpAddress',
      regionId: 'RegionId',
      serverIpAddress: 'ServerIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstanceId: 'string',
      ipAddress: 'string',
      regionId: 'string',
      serverIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

