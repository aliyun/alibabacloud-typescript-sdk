// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulScanTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filters by the matching mode of the effective scope. Valid values:
   * - **UserGroupAll**: applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: applies only to users within specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the vulnerability scheduled scan policy. This parameter is used to filter tasks triggered by the specified policy. Valid values are obtained from:
   * - [ListVulScanScheduledStrategies](~~ListVulScanScheduledStrategies~~): lists vulnerability scheduled scan policies.
   * - [CreateVulScanScheduledStrategy](~~CreateVulScanScheduledStrategy~~): creates a vulnerability scheduled scan policy.
   * 
   * @example
   * vul-scan-scheduled-strategy-8a3f6c2e91b7****
   */
  scheduledStrategyId?: string;
  /**
   * @remarks
   * Filters by task status. Valid values:
   * - **Running**: the task is in progress and still within the validity period.
   * - **Expired**: the task has expired and exceeded the validity period.
   * - **Canceled**: the task has been canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The vulnerability scanning task IDs used for filtering. A maximum of 100 IDs can be specified. Duplicate IDs are not allowed.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The task name. Fuzzy match is supported. The name can be up to 128 characters in length.
   * 
   * @example
   * R&D department vulnerability scanning
   */
  taskName?: string;
  /**
   * @remarks
   * Filters by task type. Valid values:
   * - **Instant**: an instant task created by CreateVulScanTask.
   * - **Scheduled**: a scheduled task automatically created by a vulnerability scheduled scan policy on a periodic basis.
   * 
   * @example
   * Instant
   */
  taskType?: string;
  /**
   * @remarks
   * The user group ID. This parameter is used to filter records whose effective scope includes the specified user group. Valid values are obtained from:
   * - [ListUserGroups](~~ListUserGroups~~): lists user groups.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      matchMode: 'MatchMode',
      pageSize: 'PageSize',
      scheduledStrategyId: 'ScheduledStrategyId',
      status: 'Status',
      taskIds: 'TaskIds',
      taskName: 'TaskName',
      taskType: 'TaskType',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      matchMode: 'string',
      pageSize: 'number',
      scheduledStrategyId: 'string',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
      taskType: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

