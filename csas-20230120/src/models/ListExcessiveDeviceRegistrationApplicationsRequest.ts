// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExcessiveDeviceRegistrationApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the excessive device registration applications.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 10,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The user\\"s department. The value must be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The device ID. You can get the device ID from the `DeviceTag` parameter returned by the following operations:
   * 
   * - [GetUserDevice](~~GetUserDevice~~): Queries the details of a user\\"s device.
   * 
   * - [ListUserDevices](~~ListUserDevices~~): Queries a list of devices for a user.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The hostname of the device. The value must be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. If you specify only an underscore (_), the query is extended to include devices whose hostnames contain 4-byte UTF-8 characters.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The MAC address of the device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The number of entries on each page. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID. You can get the user ID from the `SaseUserId` parameter returned by the following operations:
   * 
   * - [GetUserDevice](~~GetUserDevice~~): Queries the details of a user\\"s device.
   * 
   * - [ListUserDevices](~~ListUserDevices~~): Queries a list of devices for a user.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The statuses of excessive device registration applications.
   */
  statuses?: string[];
  /**
   * @remarks
   * The username. The value must be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * @example
   * 王先生
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceTag: 'DeviceTag',
      hostname: 'Hostname',
      mac: 'Mac',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      statuses: 'Statuses',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceTag: 'string',
      hostname: 'string',
      mac: 'string',
      pageSize: 'number',
      saseUserId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

