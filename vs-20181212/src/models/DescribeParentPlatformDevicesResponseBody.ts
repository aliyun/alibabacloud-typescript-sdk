// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The GB ID of the device.
   * 
   * @example
   * 310101*****7542007
   */
  gbId?: string;
  /**
   * @remarks
   * The ID of the space to which the device belongs.
   * 
   * @example
   * 3484*****8732174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 3487*****323380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * 测试设备1
   */
  name?: string;
  /**
   * @remarks
   * The parent device ID.
   * 
   * @example
   * 3614*****766212-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of devices.
   */
  devices?: DescribeParentPlatformDevicesResponseBodyDevices[];
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
   * The page size.
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
      devices: { 'type': 'array', 'itemType': DescribeParentPlatformDevicesResponseBodyDevices },
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

