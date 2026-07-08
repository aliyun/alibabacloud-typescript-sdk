// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The time the device was created.
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
   * xxx路口摄像头
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group to which the device belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Group name.
   * 
   * @example
   * 测试空间
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
   * xxx路口摄像头
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
   * The region to which the space belongs. This is the service center.
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
   * 
   * - bullet (bullet camera)
   * 
   * - dome (dome camera)
   * 
   * - ptz (PTZ camera)
   * 
   * @example
   * dome
   */
  subType?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * 
   * - ipc (camera)
   * 
   * - platform (platform)
   * 
   * - ied (intelligent edge device)
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
   * 公司A
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

