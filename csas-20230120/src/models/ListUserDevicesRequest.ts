// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of client statuses.
   */
  appStatuses?: string[];
  /**
   * @remarks
   * The collection of client versions.
   */
  appVersions?: string[];
  autoLoginStatuses?: string[];
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department to which the user belongs. The value is 1 to 128 characters in length and supports Chinese characters and uppercase and lowercase letters. It can contain digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The ownership of the endpoint device. Valid values:
   * - **Personal**: personal device.
   * - **Company**: company device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The device group ID.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The collection of endpoint device statuses.
   */
  deviceStatuses?: string[];
  /**
   * @remarks
   * The collection of endpoint device IDs.
   */
  deviceTags?: string[];
  /**
   * @remarks
   * The collection of endpoint device operating system types.
   */
  deviceTypes?: string[];
  /**
   * @remarks
   * The collection of office data protection statuses.
   */
  dlpStatuses?: string[];
  /**
   * @remarks
   * The name of the endpoint device. The value is 1 to 128 characters in length and supports Chinese characters and uppercase and lowercase letters. It can contain digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. If you enter only an underscore (_), endpoint devices whose names contain 4-byte UTF-8 characters are also queried.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The collection of Internet access statuses.
   */
  iaStatuses?: string[];
  /**
   * @remarks
   * The internal IP address of the endpoint device.
   * 
   * @example
   * 192.168.XX.XX
   */
  innerIp?: string;
  /**
   * @remarks
   * The MAC address of the endpoint device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The collection of network access control statuses.
   */
  nacStatuses?: string[];
  /**
   * @remarks
   * The collection of private access statuses.
   */
  paStatuses?: string[];
  /**
   * @remarks
   * The number of entries per page in a paging query. Settings: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID. You can obtain this value from the following operations:
   * - [GetUserDevice](~~GetUserDevice~~): Queries the details of a user endpoint device.
   * - [ListUserDevices](~~ListUserDevices~~): Lists user endpoint devices.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Specifies whether sharing is enabled for the device. Valid values:
   * - **true**: Sharing is enabled.
   * - **false**: Sharing is disabled.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * The BIOS system serial number.
   * 
   * @example
   * 5CG003****
   */
  snBios?: string;
  /**
   * @remarks
   * The system serial number.
   * 
   * @example
   * KVN9C9****
   */
  snSystem?: string;
  /**
   * @remarks
   * The sort parameter. Valid values:
   * - **Username**: sorted by Username in ascending order.
   * - **AppVersion**: sorted by AppVersion in descending order.
   * - **UpdateTime**: sorted by UpdateTime in descending order.
   * - **CreateTime**: sorted by CreateTime in descending order.
   * 
   * @example
   * UpdateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The username. The value is 1 to 128 characters in length and supports Chinese characters and uppercase and lowercase letters. It can contain digits, periods (.), underscores (_), hyphens (-), asterisks (*), at signs (@), and spaces.
   * 
   * @example
   * 王先生
   */
  username?: string;
  /**
   * @remarks
   * The name of the office area.
   * 
   * @example
   * 测试办公区
   */
  workshop?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      appVersions: 'AppVersions',
      autoLoginStatuses: 'AutoLoginStatuses',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceGroupId: 'DeviceGroupId',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      innerIp: 'InnerIp',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      snBios: 'SnBios',
      snSystem: 'SnSystem',
      sortBy: 'SortBy',
      username: 'Username',
      workshop: 'Workshop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      appVersions: { 'type': 'array', 'itemType': 'string' },
      autoLoginStatuses: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceBelong: 'string',
      deviceGroupId: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      innerIp: 'string',
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      snBios: 'string',
      snSystem: 'string',
      sortBy: 'string',
      username: 'string',
      workshop: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appStatuses)) {
      $dara.Model.validateArray(this.appStatuses);
    }
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    if(Array.isArray(this.autoLoginStatuses)) {
      $dara.Model.validateArray(this.autoLoginStatuses);
    }
    if(Array.isArray(this.deviceStatuses)) {
      $dara.Model.validateArray(this.deviceStatuses);
    }
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    if(Array.isArray(this.deviceTypes)) {
      $dara.Model.validateArray(this.deviceTypes);
    }
    if(Array.isArray(this.dlpStatuses)) {
      $dara.Model.validateArray(this.dlpStatuses);
    }
    if(Array.isArray(this.iaStatuses)) {
      $dara.Model.validateArray(this.iaStatuses);
    }
    if(Array.isArray(this.nacStatuses)) {
      $dara.Model.validateArray(this.nacStatuses);
    }
    if(Array.isArray(this.paStatuses)) {
      $dara.Model.validateArray(this.paStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

