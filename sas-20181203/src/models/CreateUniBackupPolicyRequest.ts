// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUniBackupPolicyRequest extends $dara.Model {
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
   * The password of the database account.
   * 
   * @example
   * Pass****
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether the database is manually added. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  databaseAddByUser?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MYSQL**
   * *   **ORACLE**
   * *   **MSSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The policy for full data backup. The value of this parameter is a JSON string. The JSON string contains the following fields:
   * 
   * *   **start**: the start time of a backup task.
   * *   **interval**: the interval of backup tasks.
   * *   **type**: the unit of the interval.
   * *   **days**: the days of a week on which a backup task is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}
   */
  fullPlan?: { [key: string]: any };
  /**
   * @remarks
   * The policy for incremental data backup. The value of this parameter is a JSON string. The JSON string contains the following fields:
   * 
   * *   **start**: the start time of a backup task.
   * *   **interval**: the interval of backup tasks.
   * *   **type**: the unit of the interval.
   * *   **days**: the days of a week on which a backup task is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"interval":1,"planType":"daily","startTime":"23:30:00"}
   */
  incPlan?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * >  You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to query the IDs of ECS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the anti-ransomware policy.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql-policy
   */
  policyName?: string;
  /**
   * @remarks
   * The retention period of backup data.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The maximum network bandwidth that is allowed during data backup. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 5242880
   */
  speedLimiter?: number;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  uniRegionId?: string;
  /**
   * @remarks
   * The UUID of the server whose data is backed up based on the anti-ransomware policy.
   * 
   * >  You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * @example
   * 045cad48-eb08-4047-a70c-713aec7b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      databaseAddByUser: 'DatabaseAddByUser',
      databaseType: 'DatabaseType',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
      instanceId: 'InstanceId',
      policyName: 'PolicyName',
      retention: 'Retention',
      speedLimiter: 'SpeedLimiter',
      uniRegionId: 'UniRegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      databaseAddByUser: 'string',
      databaseType: 'string',
      fullPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      incPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      policyName: 'string',
      retention: 'number',
      speedLimiter: 'number',
      uniRegionId: 'string',
      uuid: 'string',
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

