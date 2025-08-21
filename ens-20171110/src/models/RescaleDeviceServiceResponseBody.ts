// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleDeviceServiceResponseBodyResourceDetailInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * h-uf6009zoa6hdbjyqxcn1
   */
  ID?: string;
  /**
   * @remarks
   * The IP address of the device.
   * 
   * @example
   * 10.152.196.36
   */
  IP?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) to which the device belongs.
   * 
   * @example
   * telecom
   */
  ISP?: string;
  /**
   * @remarks
   * The media access control (MAC) address of the device.
   * 
   * @example
   * 24:0B:88:04:71:E0
   */
  mac?: string;
  /**
   * @remarks
   * The ID of the edge node to which the device belongs.
   * 
   * @example
   * cn-chongqing-1
   */
  regionID?: string;
  /**
   * @remarks
   * The name of the server on which the device is deployed.
   * 
   * @example
   * ens-nc2
   */
  server?: string;
  /**
   * @remarks
   * The status of the device.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ens.ac6.large
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      IP: 'IP',
      ISP: 'ISP',
      mac: 'Mac',
      regionID: 'RegionID',
      server: 'Server',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'string',
      IP: 'string',
      ISP: 'string',
      mac: 'string',
      regionID: 'string',
      server: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

