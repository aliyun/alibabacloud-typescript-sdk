// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to query the backup set ID.
   * 
   * If you specify this parameter, you do not need to specify **DBInstanceId**.
   * 
   * >  You must specify at least one of the **BackupId** or **RestoreTime** parameters.
   * 
   * @example
   * 29304****
   */
  backupId?: string;
  /**
   * @remarks
   * The instance type of the new instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * rds.mysql.s2.large
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the original instance.
   * 
   * > *   If you specify BackupId, you do not need to specify this parameter.
   * > *   If you specify RestoreTime, you must also specify this parameter.
   * 
   * @example
   * rm-xxxxxxxx1
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the new instance. Unit: GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * >  You must set this parameter to a value that is greater than or equal to the storage capacity of the original instance.
   * 
   * @example
   * 5
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * 
   * *   **local_ssd/ephemeral_ssd**: local SSD
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: enhanced SSD (ESSD)
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The name of the database. When you restore data to a new instance, the format of the database name is `Original database name 1,New database name 2`.
   * 
   * >  For more information about how to restore data to an existing instance, see [CopyDatabaseBetweenInstances](https://help.aliyun.com/document_detail/2628854.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Restore databases to a new instance: test1,test2. Restore databases to an existing instance: {"test1":"newtest1","test2":"newtest2"}
   */
  dbNames?: string;
  /**
   * @remarks
   * The network type of the new instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * By default, the new instance uses the same network type as the original instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The billing method of the new instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit that is used to calculate the billing cycle of the new instance. This parameter takes effect only when you select the subscription billing method for the new instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * > This parameter must be specified when **PayType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address of the new instance. The internal IP address must be within the CIDR block that is supported by the specified vSwitch. The system automatically assigns an internal IP address based on the values of the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.XXX.XXX.69
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time must fall within the specified log backup retention period. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * If you specify this parameter, you must also specify **DBInstanceId**.
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  targetDBInstanceId?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   Valid values when **Period** is set to **Year**: **1 to 3**.****
   * *   Valid values when **Period** is set to **Month**: **1 to 9**.****
   * 
   * > This parameter must be specified when PayType is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the new instance.
   * 
   * @example
   * vpc-xxxxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the new instance. If you specify more than one vSwitch ID, you must separate the IDs with commas (,).
   * 
   * @example
   * vsw-xxxxxxxxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbNames: 'DbNames',
      instanceNetworkType: 'InstanceNetworkType',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      targetDBInstanceId: 'TargetDBInstanceId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbNames: 'string',
      instanceNetworkType: 'string',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      targetDBInstanceId: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

