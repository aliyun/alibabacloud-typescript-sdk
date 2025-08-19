// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo extends $dara.Model {
  /**
   * @example
   * 20180101
   */
  beginDay?: string;
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @example
   * 20180101
   */
  expiredDay?: string;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDay: 'BeginDay',
      bizType: 'BizType',
      deviceId: 'DeviceId',
      expiredDay: 'ExpiredDay',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDay: 'string',
      bizType: 'string',
      deviceId: 'string',
      expiredDay: 'string',
      userDeviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoList extends $dara.Model {
  deviceInfo?: DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfo)) {
      $dara.Model.validateArray(this.deviceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  deviceInfoList?: DescribeDeviceInfoResponseBodyDeviceInfoList;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceInfoList: 'DeviceInfoList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceInfoList: DescribeDeviceInfoResponseBodyDeviceInfoList,
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.deviceInfoList && typeof (this.deviceInfoList as any).validate === 'function') {
      (this.deviceInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

