// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacUserCertResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 1
   */
  aliuid?: string;
  /**
   * @remarks
   * Department that the user belongs to.
   * 
   * @example
   * 外包
   */
  department?: string;
  /**
   * @remarks
   * Endpoint device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * Operating system type of the endpoint device. Valid values:
   * 
   * - **windows**: Windows.
   * 
   * - **macos**: macOS.
   * 
   * - **linux**: Linux.
   * 
   * - **android**: Android.
   * 
   * - **ios**: iOS.
   * 
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @remarks
   * Expired At.
   * 
   * @example
   * 2029-06-30 09:31:54
   */
  expiredTime?: string;
  /**
   * @remarks
   * Endpoint device name. The value must be 1 to 128 characters in length. It can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. If you enter only an underscore (_), the system returns all endpoint devices whose names contain 4-byte UTF-8 characters.
   * 
   * @example
   * MS-XU****
   */
  hostname?: string;
  /**
   * @remarks
   * Endpoint device MAC address.
   * 
   * @example
   * 08:f8:**:**:**:5e
   */
  mac?: string;
  /**
   * @remarks
   * Onboarding user certificate status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      department: 'Department',
      devTag: 'DevTag',
      deviceType: 'DeviceType',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      mac: 'Mac',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      department: 'string',
      devTag: 'string',
      deviceType: 'string',
      expiredTime: 'string',
      hostname: 'string',
      mac: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Request error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * List of onboarding user certificate statuses.
   */
  dataList?: ListNacUserCertResponseBodyDataList[];
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries that match the conditions.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataList: { 'type': 'array', 'itemType': ListNacUserCertResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

