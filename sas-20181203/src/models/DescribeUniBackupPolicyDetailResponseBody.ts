// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan extends $dara.Model {
  /**
   * @remarks
   * The days of the week on which the backup is performed.
   */
  days?: string[];
  /**
   * @remarks
   * The interval cycle.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The unit of the interval cycle. Valid values:
   * 
   * - **hourly**: hour
   * - **daily**: day
   * - **weekly**: week.
   * 
   * @example
   * daily
   */
  planType?: string;
  /**
   * @remarks
   * The start time of the full backup. Format: hh:mm:ss.
   * 
   * @example
   * 00:10:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      interval: 'Interval',
      planType: 'PlanType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      planType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan extends $dara.Model {
  /**
   * @remarks
   * The days of the week on which the backup is performed.
   */
  days?: string[];
  /**
   * @remarks
   * The interval cycle.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The unit of the interval cycle. Valid values:
   * 
   * - **hourly**: hour
   * - **daily**: day
   * - **weekly**: week.
   * 
   * @example
   * daily
   */
  planType?: string;
  /**
   * @remarks
   * The start time of the incremental backup. Format: hh:mm:ss.
   * 
   * @example
   * 00:10:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      interval: 'Interval',
      planType: 'PlanType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      planType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO extends $dara.Model {
  /**
   * @remarks
   * The database account name.
   * 
   * @example
   * admin
   */
  accountName?: string;
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
   * The database type. Valid values:
   * 
   * - **MYSQL**
   * - **MSSQL**
   * - **Oracle**.
   * 
   * @example
   * ORACLE
   */
  databaseType?: string;
  /**
   * @remarks
   * The details of the full backup policy.
   */
  fullPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan;
  /**
   * @remarks
   * The incremental backup policy.
   */
  incPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan;
  /**
   * @remarks
   * The ID of the server instance.
   * 
   * @example
   * i-2zefcy2id5d60m9t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * sql-test-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for databases.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the anti-ransomware backup policy for databases.
   * 
   * @example
   * auto_test_sql
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the anti-ransomware backup policy for databases. Valid values:
   * 
   * - **initiating**: Initializing.
   * - **opening**: Enabled.
   * - **closing**: Disabled.
   * - **deleting**: Being deleted.
   * 
   * @example
   * opening
   */
  policyStatus?: string;
  /**
   * @remarks
   * The number of days for which backup snapshots are retained.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The network bandwidth throttling for backup. Unit: bytes.
   * 
   * @example
   * 5242880
   */
  speedLimiter?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentStatus: 'AgentStatus',
      databaseType: 'DatabaseType',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      retention: 'Retention',
      speedLimiter: 'SpeedLimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentStatus: 'string',
      databaseType: 'string',
      fullPlan: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan,
      incPlan: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan,
      instanceId: 'string',
      instanceName: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      retention: 'number',
      speedLimiter: 'number',
    };
  }

  validate() {
    if(this.fullPlan && typeof (this.fullPlan as any).validate === 'function') {
      (this.fullPlan as any).validate();
    }
    if(this.incPlan && typeof (this.incPlan as any).validate === 'function') {
      (this.incPlan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the anti-ransomware backup policy for databases.
   */
  uniBackupPolicyDTO?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uniBackupPolicyDTO: 'UniBackupPolicyDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uniBackupPolicyDTO: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO,
    };
  }

  validate() {
    if(this.uniBackupPolicyDTO && typeof (this.uniBackupPolicyDTO as any).validate === 'function') {
      (this.uniBackupPolicyDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

