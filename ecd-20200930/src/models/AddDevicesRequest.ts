// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The device type.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clientType?: number;
  /**
   * @remarks
   * The list of device IDs. You can specify 1 to 200 device IDs.
   * 
   * This parameter is required.
   */
  deviceIds?: string[];
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

