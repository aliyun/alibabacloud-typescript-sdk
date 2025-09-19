// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUniBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
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
   * The policy for full backup. The value of this parameter is a JSON string that contains the following fields:
   * 
   * *   **start**: the start time of a backup task
   * *   **interval**: the interval of backup tasks
   * *   **type**: the unit of the interval
   * *   **days**: the days of a week on which a backup task is performed
   * 
   * @example
   * {"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}
   */
  fullPlan?: { [key: string]: any };
  /**
   * @remarks
   * The policy for incremental backup. The value of this parameter is a JSON string that contains the following fields:
   * 
   * *   **start**: the start time of a backup task
   * *   **interval**: the interval of backup tasks
   * *   **type**: the unit of the interval
   * *   **days**: the days of a week on which a backup task is performed
   * 
   * @example
   * {"interval":1,"planType":"daily","startTime":"23:30:00"}
   */
  incPlan?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * > You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to query the IDs of anti-ransomware policies.
   * 
   * This parameter is required.
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
   * databak
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * enabled
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
   * 1048576
   */
  speedLimiter?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
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
      fullPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      incPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      retention: 'number',
      speedLimiter: 'number',
    };
  }

  validate() {
    if(this.fullPlan) {
      $dara.Model.validateMap(this.fullPlan);
    }
    if(this.incPlan) {
      $dara.Model.validateMap(this.incPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

