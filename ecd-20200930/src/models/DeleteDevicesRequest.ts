// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the client.
   * 
   * Valid values:
   * 
   * *   1: hardware client.
   * *   2: software client.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clientType?: number;
  /**
   * @remarks
   * The IDs of the devices. You can specify up to 200 IDs.
   * 
   * This parameter is required.
   */
  deviceIds?: string[];
  /**
   * @remarks
   * Specifies whether to forcefully delete the device if the device is bound to a user.
   * 
   * Valid values:
   * 
   * *   0: do not forcefully delete the device.
   * *   1: forcefully delete the device.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  force?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      deviceIds: 'DeviceIds',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      force: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceIds)) {
      $dara.Model.validateArray(this.deviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

