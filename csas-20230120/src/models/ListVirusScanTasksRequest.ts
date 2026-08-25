// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTasksRequest extends $dara.Model {
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
   * The end point for filtering by task expiration time. The value is a UNIX timestamp in seconds. The value must be greater than StartTime.
   * 
   * @example
   * 1762135466
   */
  endTime?: number;
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
   * The collection of scan performance modes. Duplicate values are not allowed.
   */
  performanceModes?: string[];
  /**
   * @remarks
   * The collection of scan path scopes. Duplicate values are not allowed.
   */
  scanModes?: string[];
  /**
   * @remarks
   * The start point for filtering by task expiration time. The value is a UNIX timestamp in seconds. This parameter must be specified together with EndTime. Specifying this parameter alone does not take effect.
   * 
   * @example
   * 1754150421
   */
  startTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **0**: Not canceled. This is the default value.
   * - **1**: Canceled.
   * - **-1**: No status filter. All tasks are returned.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The collection of virus scan task IDs. Duplicate values are not allowed.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The user group ID, used to filter tasks whose effective scope includes the specified user group. You can obtain the value from:
   * - [ListUserGroups](~~ListUserGroups~~): Lists user groups.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      performanceModes: 'PerformanceModes',
      scanModes: 'ScanModes',
      startTime: 'StartTime',
      status: 'Status',
      taskIds: 'TaskIds',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      performanceModes: { 'type': 'array', 'itemType': 'string' },
      scanModes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      status: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceModes)) {
      $dara.Model.validateArray(this.performanceModes);
    }
    if(Array.isArray(this.scanModes)) {
      $dara.Model.validateArray(this.scanModes);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

