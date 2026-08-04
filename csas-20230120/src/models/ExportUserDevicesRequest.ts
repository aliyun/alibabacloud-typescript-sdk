// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportUserDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of client statuses.
   */
  appStatuses?: string[];
  /**
   * @remarks
   * Department name. Must be 1 to 128 characters long. Supports Chinese, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Terminal device ownership. Valid values:
   * 
   * - **Personal**: Personal device.
   * 
   * - **Company**: Company device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * Collection of terminal device statuses.
   */
  deviceStatuses?: string[];
  /**
   * @remarks
   * Collection of terminal device IDs.
   */
  deviceTags?: string[];
  /**
   * @remarks
   * Collection of terminal device operating system types.
   */
  deviceTypes?: string[];
  /**
   * @remarks
   * Collection of office data protection statuses.
   */
  dlpStatuses?: string[];
  /**
   * @remarks
   * Terminal device name. Must be 1 to 128 characters long. Supports Chinese, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. If you enter only an underscore (_), the system returns all terminal devices whose names contain four-byte UTF-8 characters.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * Collection of Internet access statuses.
   */
  iaStatuses?: string[];
  /**
   * @remarks
   * MAC address of the terminal device.
   * 
   * @example
   * 00:16:7c:46:**:**
   */
  mac?: string;
  /**
   * @remarks
   * Collection of network admission statuses.
   */
  nacStatuses?: string[];
  /**
   * @remarks
   * Collection of private network access statuses.
   */
  paStatuses?: string[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Whether device sharing is enabled. Valid values:
   * 
   * - **true**: Sharing is enabled.
   * 
   * - **false**: Sharing is disabled.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * Username. Must be 1 to 128 characters long. Supports Chinese, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * @example
   * 王先生
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      saseUserId: 'string',
      sharingStatus: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appStatuses)) {
      $dara.Model.validateArray(this.appStatuses);
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

