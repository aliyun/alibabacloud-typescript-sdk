// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The time when the device was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The device description.
   * 
   * @example
   * XXX intersection camera
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workspace to which the device belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Test workspace
   */
  groupName?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * XXX intersection camera
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
   * The region of the workspace, which is the service center.
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
   * 1234*****67890
   */
  registerCode?: string;
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
   * Company A
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

export class DescribePurchasedDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of devices.
   */
  devices?: DescribePurchasedDevicesResponseBodyDevices[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The total number of devices.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribePurchasedDevicesResponseBodyDevices },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

