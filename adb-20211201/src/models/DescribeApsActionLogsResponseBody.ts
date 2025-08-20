// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsActionLogsResponseBodyActionLogs extends $dara.Model {
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * DDL migration job finished
   */
  context?: string;
  /**
   * @remarks
   * The phase during which the log was generated. Valid values:
   * 
   * *   **StructureMigrate**: schema migration.
   * *   **FullDataSync**: full data synchronization.
   * *   **IncrementalSync**: incremental data synchronization.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The type of the log. Multiple log types are separated by commas (,). Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **ERROR**
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The time when the log was generated. The time follows the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time is displayed in UTC.
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
   * The information about the request denial.
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
   * The queried logs.
   */
  actionLogs?: DescribeApsActionLogsResponseBodyActionLogs[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
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
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * The ID of the real-time data ingestion job.
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

