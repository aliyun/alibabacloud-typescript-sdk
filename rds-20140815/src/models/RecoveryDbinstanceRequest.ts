// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the DescribeBackups operation to query the backup set ID.
   * 
   * When you specify this parameter, the **DBInstanceId** parameter is optional.
   * 
   * > You must specify at least one of the **BackupId** and **RestoreTime** parameters.
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
   * The ID of the original instance.
   * 
   * > * This parameter is not required when you restore data from a backup set (by specifying the BackupId parameter).
   * > * This parameter is required when you restore data to a point in time (by specifying the RestoreTime parameter).
   * 
   * @example
   * rm-bp18****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the new instance. Unit: GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * > The storage capacity of the new instance cannot be less than that of the original instance.
   * 
   * @example
   * 40
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * * **local_ssd/ephemeral_ssd**: local SSD
   * * **cloud_ssd**: standard SSD
   * * **cloud_essd**: ESSD
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The names of the databases. When you restore data to a new instance, specify the names in the `Original database name 1,New database name 2` format.
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
   * * **Classic**: classic network
   * * **VPC**: Virtual Private Cloud (VPC)
   * 
   * The default value is the network type of the original instance.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The billing method of the new instance. Valid values:
   * * **Postpaid**: pay-as-you-go
   * * **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the new subscription instance. Valid values:
   * * **Year**: yearly subscription
   * * **Month**: monthly subscription
   * 
   * > This parameter is required if the **PayType** parameter is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The internal IP address of the new instance. The IP address must be within the IP address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.XX.XX.69
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time must be within the backup retention period. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * When you specify this parameter, the **DBInstanceId** parameter is required.
   * 
   * > You must specify at least one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * @example
   * rm-bp17****
   */
  targetDBInstanceId?: string;
  /**
   * @remarks
   * The subscription duration of the new instance. Valid values:
   * * If the **Period** parameter is set to **Year**, the value of the **UsedTime** parameter ranges from **1** to **3**.
   * * If the **Period** parameter is set to **Month**, the value of the **UsedTime** parameter ranges from **1** to **9**.
   * 
   * > This parameter is required if the **PayType** parameter is set to **Prepaid**.
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
   * The vSwitch ID of the new instance. Separate multiple IDs with commas (,).
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

