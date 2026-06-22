// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPoliciesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of database anti-ransomware policies displayed on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of database anti-ransomware policies displayed per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of database anti-ransomware policies.
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
   * The error message of the client exception.
   * 
   * @example
   * INSTALL_TIMEOUT
   */
  agentErrorMessage?: string;
  /**
   * @remarks
   * The status of the database client agent. Valid values:
   * - **UNKNOWN**: Unknown.
   * - **INSTALLED**: Installed.
   * - **INSTALL_FAILED**: Installation failed.
   * - **UNINSTALL_FAILED**: Uninstallation failed.
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
   * - **MYSQL**
   * - **MSSQL**
   * - **Oracle**
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The error code returned when the backup plan execution fails.
   * 
   * @example
   * EXPIRED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message of the backup policy.
   * 
   * @example
   * AttachRamRoleError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-9dp7mubt5wit6g0h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * - **Stopped**: Stopped.
   * - **Running**: Running.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The unique identifier of the server database backup client.
   * 
   * @example
   * cf1bcad4063f11ed800000163e0e****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The result of the latest backup plan execution.
   * 
   * @example
   * completed
   */
  latestBackResult?: string;
  /**
   * @remarks
   * The time when the latest backup plan was executed.
   * 
   * @example
   * 2022-01-01 00:00:11
   */
  latestBackupTime?: string;
  /**
   * @remarks
   * The status of the backup plan. Valid values:
   * 
   * - **init**: Being initialized.
   * - **running**: Running.
   * - **completed**: Completed.
   * - **restoring**: Being restored.
   * - **creating**: Being created.
   * - **created**: Created.
   * 
   * @example
   * creating
   */
  planStatus?: string;
  /**
   * @remarks
   * The ID of the database anti-ransomware backup policy.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the database anti-ransomware backup policy.
   * 
   * @example
   * auto_oracle_37f
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the database anti-ransomware backup policy. Valid values:
   * 
   * - **initiating**: Being initialized.
   * - **opening**: Being enabled.
   * - **closing**: Being disabled.
   * - **deleting**: Being deleted.
   * - **enabled**: Enabled.
   * - **disabled**: Disabled.
   * 
   * @example
   * opening
   */
  policyStatus?: string;
  /**
   * @remarks
   * The region ID of the database server.
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
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BR****
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of database anti-ransomware backup policies.
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

