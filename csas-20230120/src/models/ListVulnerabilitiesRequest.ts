// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulnerabilitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query with paging. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department name. Matches any level of department in the organizational structure to which the user belongs. Specify the department name itself without the full path of the organizational structure.
   * 
   * @example
   * R&D Department
   */
  department?: string;
  /**
   * @remarks
   * The unique identifier of the user endpoint device. Exact match. The value can be up to 64 characters in length. Valid values are obtained from:
   * - [ListUserDevices](~~ListUserDevices~~): lists user endpoint devices.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system type of the user endpoint device. Valid values:
   * - **windows**: Windows. Currently, vulnerability scanning supports only Windows.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * The hostname of the user endpoint device. Fuzzy match is supported. The value can be up to 64 characters in length.
   * 
   * @example
   * DESKTOP-8A3F
   */
  hostname?: string;
  /**
   * @remarks
   * The number of entries per page. Settings for paged query with paging. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID. Exact match. Valid values are obtained from:
   * - [ListUserDevices](~~ListUserDevices~~): lists user endpoint devices.
   * - [GetUserDevice](~~GetUserDevice~~): queries the details of a user endpoint device.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The ID of the vulnerability scanning node that detected the vulnerability. Used to filter detection results of a specified node. Valid values are obtained from:
   * - [ListVulScanTasks](~~ListVulScanTasks~~): lists vulnerability scanning nodes.
   * - [CreateVulScanTask](~~CreateVulScanTask~~): creates a vulnerability scanning node.
   * 
   * @example
   * vul-scan-task-4d7b1e9a6c38****
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The vulnerability title. Fuzzy match is supported. Matches both Chinese and English titles.
   * 
   * @example
   * Cumulative Update
   */
  title?: string;
  /**
   * @remarks
   * The patch IDs used for filtering. A maximum of 100 IDs can be specified. Duplicate values are not allowed.
   */
  updateIds?: string[];
  /**
   * @remarks
   * The username. Fuzzy match is supported. The value can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), asterisks (*), hyphens (-), at signs (@), spaces, middle dots (·), and parentheses.
   * 
   * @example
   * John Smith
   */
  username?: string;
  /**
   * @remarks
   * The vulnerability risk level used for filtering. Valid values:
   * - **High**: high risk.
   * - **Mid**: medium risk.
   * - **Low**: low risk.
   * 
   * @example
   * High
   */
  vulLevel?: string;
  /**
   * @remarks
   * The vulnerability type used for filtering. Valid values:
   * - **windows**: Windows system vulnerability.
   * - **ai_agent**: AI Agent vulnerability.
   * 
   * @example
   * windows
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      hostname: 'Hostname',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      scanTaskId: 'ScanTaskId',
      title: 'Title',
      updateIds: 'UpdateIds',
      username: 'Username',
      vulLevel: 'VulLevel',
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      hostname: 'string',
      pageSize: 'number',
      saseUserId: 'string',
      scanTaskId: 'string',
      title: 'string',
      updateIds: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
      vulLevel: 'string',
      vulType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.updateIds)) {
      $dara.Model.validateArray(this.updateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

