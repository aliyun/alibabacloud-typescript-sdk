// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPoliciesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponseBodyUniBackupPolicies extends $dara.Model {
  /**
   * @remarks
   * The error message for the anti-ransomware agent.
   * 
   * @example
   * INSTALL_TIMEOUT
   */
  agentErrorMessage?: string;
  /**
   * @remarks
   * The status of the agent. Valid values:
   * 
   * *   **UNKNOWN**
   * *   **INSTALLED**
   * *   **INSTALL_FAILED**
   * *   **UNINSTALL_FAILED**
   * 
   * @example
   * INSTALLED
   */
  agentStatus?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc123
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MYSQL**
   * *   **MSSQL**
   * *   **Oracle**
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The error code returned when the backup task fails.
   * 
   * @example
   * EXPIRED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the anti-ransomware policy.
   * 
   * @example
   * AttachRamRoleError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-9dp7mubt5wit6g0h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the Elastic Compute Service (ECS) instance. Valid values:
   * 
   * *   **Stopped**
   * *   **Running**
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The UUID of the agent that is used to back up the data of the database.
   * 
   * @example
   * cf1bcad4063f11ed800000163e0e****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The execution result of the last backup task.
   * 
   * @example
   * completed
   */
  latestBackResult?: string;
  /**
   * @remarks
   * The time when the last backup task was executed.
   * 
   * @example
   * 2022-01-01 00:00:11
   */
  latestBackupTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **init**
   * *   **running**
   * *   **completed**
   * *   **restoring**
   * *   **creating**
   * *   **created**
   * 
   * @example
   * creating
   */
  planStatus?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy.
   * 
   * @example
   * auto_oracle_37f
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **initiating**
   * *   **opening**
   * *   **closing**
   * *   **deleting**
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * opening
   */
  policyStatus?: string;
  /**
   * @remarks
   * The region ID of the server that hosts the database.
   * 
   * @example
   * cn-hangzhou
   */
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentErrorMessage: 'AgentErrorMessage',
      agentStatus: 'AgentStatus',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceUuid: 'InstanceUuid',
      latestBackResult: 'LatestBackResult',
      latestBackupTime: 'LatestBackupTime',
      planStatus: 'PlanStatus',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentErrorMessage: 'string',
      agentStatus: 'string',
      databaseName: 'string',
      databaseType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceUuid: 'string',
      latestBackResult: 'string',
      latestBackupTime: 'string',
      planStatus: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      uniRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeUniBackupPoliciesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BR****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the anti-ransomware policies.
   */
  uniBackupPolicies?: DescribeUniBackupPoliciesResponseBodyUniBackupPolicies[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      uniBackupPolicies: 'UniBackupPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeUniBackupPoliciesResponseBodyPageInfo,
      requestId: 'string',
      uniBackupPolicies: { 'type': 'array', 'itemType': DescribeUniBackupPoliciesResponseBodyUniBackupPolicies },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.uniBackupPolicies)) {
      $dara.Model.validateArray(this.uniBackupPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

