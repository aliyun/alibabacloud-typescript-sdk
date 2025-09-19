// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the days of a week on which the backup is performed.
   */
  days?: string[];
  /**
   * @remarks
   * The interval of backup tasks.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The unit of the interval. Valid values:
   * 
   * *   **hourly**: hour
   * *   **daily**: day
   * *   **weekly**: week
   * 
   * @example
   * daily
   */
  planType?: string;
  /**
   * @remarks
   * The time when the full backup started. The time is in the HH:mm:ss format.
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
   * An array that consists of the days of a week on which the backup is performed.
   */
  days?: string[];
  /**
   * @remarks
   * The interval of backup tasks.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The unit of the interval. Valid values:
   * 
   * *   **hourly**: hour
   * *   **daily**: day
   * *   **weekly**: week
   * 
   * @example
   * daily
   */
  planType?: string;
  /**
   * @remarks
   * The time when the incremental data backup starts. The time is in the hh:mm:ss format.
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
   * The name of the database account.
   * 
   * @example
   * admin
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the database client. Valid values:
   * 
   * *   **UNKNOWN**: unknown
   * *   **INSTALLED**: installed
   * *   **INSTALL_FAILED**: installation failed
   * *   **UNINSTALL_FAILED**: uninstallation failed
   * 
   * @example
   * INSTALLED
   */
  agentStatus?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MYSQL**
   * *   **MSSQL**
   * *   **Oracle**
   * 
   * @example
   * ORACLE
   */
  databaseType?: string;
  /**
   * @remarks
   * The details of the policy for full backup.
   */
  fullPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan;
  /**
   * @remarks
   * The policy for incremental data backup.
   */
  incPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-2zefcy2id5d60m9t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * sql-test-01
   */
  instanceName?: string;
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
   * auto_test_sql
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **initiating**: initializing
   * *   **opening**: enabled
   * *   **closing**: disabled
   * *   **deleting**: deleting
   * 
   * @example
   * opening
   */
  policyStatus?: string;
  /**
   * @remarks
   * The retention period of the backup snapshot.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The maximum network bandwidth that is allowed during data backup. Unit: bytes.
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the anti-ransomware policy.
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

