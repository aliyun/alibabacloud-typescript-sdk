// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsActionLogsResponseBodyActionLogs extends $dara.Model {
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * DDL migration job finished
   */
  context?: string;
  /**
   * @remarks
   * The task stage. Valid values:
   * 
   * - **StructureMigrate**: Schema migration.
   * - **FullDataSync**: Full data synchronization.
   * - **IncrementalSync**: Incremental data synchronization.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The log type. Separate multiple log types with commas (,). Valid values:
   * 
   * - **INFO**: Information.
   * - **WARN**: Warning.
   * - **ERROR**: Error.
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The log time. The time is in the **yyyy-MM-ddTHH:mm:ssZ** format and must be in UTC.
   * 
   * @example
   * 2023-02-01T05:46:30Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      stage: 'Stage',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      stage: 'string',
      state: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsActionLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {
   *   "AuthAction": "xxx",
   *   "AuthPrincipalDisplayName": "sampleName",
   *   "AuthPrincipalOwnerId": "111111111111111111",
   *   "AuthPrincipalType": "SubUser",
   *   "AuthResource": "xxx",
   *   "NoPermissionType": "xxx",
   *   "PolicyType": "xxx"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The list of logs.
   */
  actionLogs?: DescribeApsActionLogsResponseBodyActionLogs[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EDBA27-AF3E-5966-9503-FD1557E19167
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * The ID of the data link task.
   * 
   * @example
   * aps-hz109vpvt4fg8528d****
   */
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      actionLogs: 'ActionLogs',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      actionLogs: { 'type': 'array', 'itemType': DescribeApsActionLogsResponseBodyActionLogs },
      DBClusterId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      workloadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionLogs)) {
      $dara.Model.validateArray(this.actionLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

