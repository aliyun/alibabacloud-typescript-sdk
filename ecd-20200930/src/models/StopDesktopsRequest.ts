// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The billing mode after you stop the cloud computer.
   * 
   * Default value: StopCharging. Valid values:
   * 
   * *   StopCharging: After the cloud computer is stopped, the system automatically reclaims computing resources. You are no longer charged for computing resources. However, you are still charged for storage resources.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   KeepCharging: After the cloud computer is stopped, the system does not reclaim resources to prevent insufficient resources and startup failures. You are still charged for the resources.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * StopCharging
   */
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      osUpdate: 'OsUpdate',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      osUpdate: 'boolean',
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

