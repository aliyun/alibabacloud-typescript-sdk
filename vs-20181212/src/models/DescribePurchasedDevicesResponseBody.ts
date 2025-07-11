// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 1234*****67890
   */
  registerCode?: string;
  /**
   * @example
   * dome
   */
  subType?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
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
  devices?: DescribePurchasedDevicesResponseBodyDevices[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
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

