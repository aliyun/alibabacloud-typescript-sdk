// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUninstallApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of uninstall application IDs.
   */
  applicationIds?: string[];
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
   * The department to which the user belongs. The value is 1 to 128 characters in length, supports Chinese and uppercase and lowercase letters, and can contain digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * Testing Department
   */
  department?: string;
  /**
   * @remarks
   * The name of the terminal device. The value is 1 to 128 characters in length, supports Chinese and uppercase and lowercase letters, and can contain digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. Entering only an underscore (_) additionally queries all terminal devices whose names contain 4-byte UTF-8 characters.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The MAC address of the terminal device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The collection of uninstall application statuses.
   */
  statuses?: string[];
  /**
   * @remarks
   * The username. The value is 1 to 128 characters in length, supports Chinese and uppercase and lowercase letters, and can contain digits, periods (.), underscores (_), hyphens (-), asterisks (*), at signs (@), and spaces.
   * 
   * @example
   * Mr. Wang
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      currentPage: 'CurrentPage',
      department: 'Department',
      hostname: 'Hostname',
      mac: 'Mac',
      pageSize: 'PageSize',
      statuses: 'Statuses',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      hostname: 'string',
      mac: 'string',
      pageSize: 'number',
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

