// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParentPlatformDevicesResponseBodyDevices } from "./DescribeParentPlatformDevicesResponseBodyDevices";


export class DescribeParentPlatformDevicesResponseBody extends $dara.Model {
  devices?: DescribeParentPlatformDevicesResponseBodyDevices[];
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

