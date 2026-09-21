// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUniBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the database account.
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
   * Specifies whether the database is manually added by the user. Valid values:
   * 
   * - **true**: The database is manually added.
   * - **false**: The database is not manually added.
   * 
   * @example
   * true
   */
  databaseAddByUser?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MYSQL**
   * - **ORACLE**
   * - **MSSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The full backup policy. The value is in JSON format and contains the following fields:
   * 
   * - **start**: the start time of the backup.
   * - **interval**: the interval between backups.
   * - **type**: the unit of the interval.
   * - **days**: the days of the week on which backups are performed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}
   */
  fullPlan?: { [key: string]: any };
  /**
   * @remarks
   * The incremental backup policy. The value is in JSON format and contains the following fields:
   * - **start**: the start time of the backup.
   * - **interval**: the interval between backups.
   * - **type**: the unit of the interval.
   * - **days**: the days of the week on which backups are performed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"interval":1,"planType":"daily","startTime":"23:30:00"}
   */
  incPlan?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the ECS instance.
   * >You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the anti-ransomware backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql-policy
   */
  policyName?: string;
  /**
   * @remarks
   * The number of days for which backup data is retained.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The network bandwidth throttling for backup network bandwidth. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 5242880
   */
  speedLimiter?: number;
  /**
   * @remarks
   * The region in which the server protected by the backup policy resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  uniRegionId?: string;
  /**
   * @remarks
   * The UUID of the server that is backed up by the database anti-ransomware feature.
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to obtain the UUID of the server.
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

