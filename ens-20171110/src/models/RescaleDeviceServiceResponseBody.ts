// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RescaleDeviceServiceResponseBodyResourceDetailInfos } from "./RescaleDeviceServiceResponseBodyResourceDetailInfos";


export class RescaleDeviceServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the devices.
   */
  deviceIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * b3b5bb9a-4e0b-4cac-8ebf-e5e015726723
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F3F3570-E721-53F6-853F-37B7725AC6CB
   */
  requestId?: string;
  /**
   * @remarks
   * The key properties of the device.
   */
  resourceDetailInfos?: RescaleDeviceServiceResponseBodyResourceDetailInfos[];
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceDetailInfos: 'ResourceDetailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
      resourceDetailInfos: { 'type': 'array', 'itemType': RescaleDeviceServiceResponseBodyResourceDetailInfos },
    };
  }

  validate() {
    if(Array.isArray(this.deviceIds)) {
      $dara.Model.validateArray(this.deviceIds);
    }
    if(Array.isArray(this.resourceDetailInfos)) {
      $dara.Model.validateArray(this.resourceDetailInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

