// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to query backup sets.
   * 
   * If you specify this parameter, the **DBInstanceId** parameter is optional.
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
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
   * mssql.x4.medium.s1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID of the original instance.
   * 
   * > * If you want to recover data by backup set (by specifying the BackupId parameter), this parameter is optional.
   * > * If you want to recover data to a point in time (by specifying the RestoreTime parameter), this parameter is required.
   * 
   * @example
   * rm-bp18****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance storage capacity of the new instance. Unit: GB. For details, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * > The disk space of the new instance cannot be smaller than that of the original instance.
   * 
   * @example
   * 40
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type of the new instance. Valid values:
   * * **local_ssd/ephemeral_ssd**: local SSD.
   * * **cloud_ssd**: standard SSD cloud disk.
   * * **cloud_essd**: Enterprise SSD (ESSD) cloud disk.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The database name. To restore data to a new instance, use the following format: `Original database name 1,New database name 2`.
   * 
   * > To restore data to an existing instance, see [CopyDatabaseBetweenInstances](https://help.aliyun.com/document_detail/2628854.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test1,test2
   */
  dbNames?: string;
  /**
   * @remarks
   * The network type of the new instance. Valid values:
   * * **Classic**: classic network.
   * * **VPC**: virtual private cloud (VPC).
   * 
   * Default value: the network type of the original instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The billing method of the new instance. Valid values:
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration of the new instance. Valid values:
   * * **Year**: year.
   * * **Month**: month.
   * 
   * > This parameter is required if **PayType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address of the new instance. The IP address must be within the IP address range of the specified vSwitch. By default, the system automatically assigns an IP address based on the values of **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.XX.XX.69
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Any point in time within the backup retention period. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * If you specify this parameter, the **DBInstanceId** parameter is required.
   * 
   * > You must specify at least one of **BackupId** and **RestoreTime**.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The instance ID of the target instance.
   * 
   * @example
   * rm-bp17****
   */
  targetDBInstanceId?: string;
  /**
   * @remarks
   * The subscription duration of the new instance. Valid values:
   * * If **Period** is set to **Year**, the value of **UsedTime** ranges from **1 to 3**.
   * * If **Period** is set to **Month**, the value of **UsedTime** ranges from **1 to 9**.
   * 
   * > This parameter is required if **PayType** is set to **Prepaid**.
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
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the new instance. Separate multiple values with commas (,).
   * 
   * @example
   * vsw-****
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

