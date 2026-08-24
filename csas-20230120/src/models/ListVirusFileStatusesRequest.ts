// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusFileStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in paging. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department name. Matches any level of the organizational structure to which the user belongs. Specify the department name itself without the full path of the organizational structure. The value can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), commas (,), forward slashes (/), at signs (@), hyphens (-), and underscores (_).
   * 
   * @example
   * R&D Department
   */
  department?: string;
  /**
   * @remarks
   * The unique identifier of the user terminal device. Exact match. The value can be up to 64 characters in length. You can obtain the value from the following operation:
   * - [ListUserDevices](~~ListUserDevices~~): Lists user terminal devices.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system type of the user terminal device. Valid values:
   * - **windows**: Windows.
   * - **macOS**: macOS.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * The end time for filtering by virus file discovery time. The value is a UNIX timestamp in seconds. This parameter must be specified together with StartTime and must be later than StartTime.
   * 
   * @example
   * 1786377600
   */
  endTime?: number;
  /**
   * @remarks
   * The MD5 value of the virus file. Fuzzy match is supported. The value can be up to 64 characters in length.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  fileMd5?: string;
  /**
   * @remarks
   * Filters by disposition status. If this parameter is not specified, no filtering by disposition status is applied. Valid values:
   * - **Pending**: Pending disposition.
   * - **Processed**: Disposed.
   * 
   * @example
   * Pending
   */
  fileProcessStatus?: string;
  /**
   * @remarks
   * The hostname of the user terminal device. Fuzzy match is supported. The value can be up to 128 characters in length.
   * 
   * @example
   * DESKTOP-8A3F
   */
  hostname?: string;
  /**
   * @remarks
   * Filters by disposition action. Duplicate values are not allowed. If this parameter is not specified, no filtering by disposition action is applied.
   */
  operations?: string[];
  /**
   * @remarks
   * The number of entries per page in paging. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by risk level. Duplicate values are not allowed. If this parameter is not specified, no filtering by risk level is applied.
   */
  riskLevels?: string[];
  /**
   * @remarks
   * The user ID. Exact match. The value can be up to 128 characters in length. You can obtain the value from the following operations:
   * - [ListUserDevices](~~ListUserDevices~~): Lists user terminal devices.
   * - [GetUserDevice](~~GetUserDevice~~): Queries user terminal device details.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The ID of the virus scan task that detected the virus file. This parameter is used to filter detection results of a specified task. You can obtain the value from the following operations:
   * - [ListVirusScanTasks](~~ListVirusScanTasks~~): Lists virus scan tasks.
   * - [CreateVirusScanTask](~~CreateVirusScanTask~~): Creates a virus scan task.
   * 
   * @example
   * v1:1024772
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The start time for filtering by virus file discovery time. The value is a UNIX timestamp in seconds. This parameter must be specified together with EndTime and must be earlier than EndTime.
   * 
   * @example
   * 1786291200
   */
  startTime?: number;
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
   * Filters by virus type. Duplicate values are not allowed. If this parameter is not specified, no filtering by virus type is applied.
   */
  virusTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      endTime: 'EndTime',
      fileMd5: 'FileMd5',
      fileProcessStatus: 'FileProcessStatus',
      hostname: 'Hostname',
      operations: 'Operations',
      pageSize: 'PageSize',
      riskLevels: 'RiskLevels',
      saseUserId: 'SaseUserId',
      scanTaskId: 'ScanTaskId',
      startTime: 'StartTime',
      username: 'Username',
      virusTypes: 'VirusTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      endTime: 'number',
      fileMd5: 'string',
      fileProcessStatus: 'string',
      hostname: 'string',
      operations: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      riskLevels: { 'type': 'array', 'itemType': 'string' },
      saseUserId: 'string',
      scanTaskId: 'string',
      startTime: 'number',
      username: 'string',
      virusTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    if(Array.isArray(this.riskLevels)) {
      $dara.Model.validateArray(this.riskLevels);
    }
    if(Array.isArray(this.virusTypes)) {
      $dara.Model.validateArray(this.virusTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

