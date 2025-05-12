// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDevicesRequest extends $dara.Model {
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
      deviceIds: { 'type': 'array', 'itemType': 'string' },
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

