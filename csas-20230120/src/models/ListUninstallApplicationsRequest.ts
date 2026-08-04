// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUninstallApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * An array of uninstall application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department. The value must be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The hostname of the endpoint. The value must be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces. If you enter only an underscore (`_`), the query also returns endpoints with names that contain 4-byte UTF-8 characters.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The MAC address of the endpoint.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * An array of uninstall application statuses.
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

