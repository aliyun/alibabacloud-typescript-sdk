// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the device was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The device description.
   * 
   * @example
   * Camera at xxx intersection
   */
  description?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * Test group
   */
  groupName?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @remarks
   * The region to which the group belongs, which is the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The device registration code.
   * 
   * @example
   * 12345*****67890
   */
  registerCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The device subtype. Valid values:
   * - bullet: Bullet camera.
   * - dome: Dome camera.
   * - ptz: PTZ camera.
   * 
   * @example
   * dome
   */
  subType?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * - ipc: Camera.
   * - platform: Platform.
   * - ied: Intelligent device.
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * The device vendor.
   * 
   * @example
   * 8yd*****qem
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      name: 'Name',
      orderId: 'OrderId',
      region: 'Region',
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      id: 'string',
      name: 'string',
      orderId: 'string',
      region: 'string',
      registerCode: 'string',
      requestId: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

