// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUniBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * sa
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * @example
   * Sa@****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The full backup policy. The value is in JSON format and contains the following fields:
   * 
   * - **start**: the backup start time.
   * - **interval**: the interval.
   * - **type**: the unit of the interval.
   * - **days**: the days of the week on which the backup is performed.
   * 
   * @example
   * {"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}
   */
  fullPlanShrink?: string;
  /**
   * @remarks
   * The incremental backup policy. The value is in JSON format and contains the following fields:
   * - **start**: the backup start time.
   * - **interval**: the interval.
   * - **type**: the unit of the interval.
   * - **days**: the days of the week on which the backup is performed.
   * 
   * @example
   * {"interval":1,"planType":"daily","startTime":"23:30:00"}
   */
  incPlanShrink?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for databases.
   * >You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
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
   * databak
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * - **enabled**: The policy is enabled.
   * - **disabled**: The policy is disabled.
   * 
   * @example
   * enabled
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
   * The network bandwidth throttling for backup network bandwidth. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  speedLimiter?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      fullPlanShrink: 'FullPlan',
      incPlanShrink: 'IncPlan',
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
      accountPassword: 'string',
      fullPlanShrink: 'string',
      incPlanShrink: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      retention: 'number',
      speedLimiter: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

