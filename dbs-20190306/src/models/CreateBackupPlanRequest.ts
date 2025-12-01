// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method of the backup schedule. Valid values:
   * 
   * *   **logical**: logical backup
   * *   **physical**: physical backup
   * *   **duplication**: dump backup
   * 
   * This parameter is required.
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * KJSAHKJFHKJSHFKASHFKJADFHKDXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The region in which the database you want to back up resides.
   * 
   * > This parameter is required if the **PayType** parameter is set to **postpay**.
   * 
   * @example
   * cn-hangzhou
   */
  databaseRegion?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * *   **MySQL**
   * *   **MSSQL**
   * *   **Oracle**
   * *   **MariaDB**
   * *   **PostgreSQL**
   * *   **DRDS**
   * *   **MongoDB**
   * *   **Redis**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The source of the request. The default value is OpenAPI and cannot be changed.
   * 
   * @example
   * OpenAPI
   */
  fromApp?: string;
  /**
   * @remarks
   * The type of the backup schedule. Valid values:
   * 
   * *   **micro**
   * *   **small**
   * *   **medium**
   * *   **large**
   * *   **xlarge**
   * 
   * >  A backup schedule type with higher specifications offers higher backup and restoration performance. For more information, see [Select a backup schedule type](https://help.aliyun.com/document_detail/84372.html).
   * 
   * This parameter is required.
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the source database instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS.
   * *   **PolarDB**: PolarDB.
   * *   **DDS**: ApsaraDB for MongoDB.
   * *   **Kvstore**: ApsaraDB for Redis.
   * *   **Other**: Database connected by using an IP address and a port number.
   * *   **dg**: Self-managed database that has no public IP address or port number and is connected over Database Gateway.
   * 
   * >  If **PayType** is set to **postpay**, this parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method of the backup schedule. Valid values:
   * 
   * *   **postpay**: pay-as-you-go
   * *   **prepay**: subscription
   * 
   * > The default value is **prepay**. If the **BackupMethod** parameter is set to **duplication**, **postpay** is supported.
   * 
   * @example
   * prepay
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   **Year**: yearly subscription
   * *   **Month**: monthly subscription
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The ID of the region in which you can activate Data Disaster Recovery. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) operation to query the regions supported by Data Disaster Recovery.
   * 
   * >  For more information, see [Endpoints](https://help.aliyun.com/document_detail/2869810.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region in which you want to store the backup data.
   * 
   * > This parameter is required if the **PayType** parameter is set to **postpay**.
   * 
   * @example
   * cn-hangzhou
   */
  storageRegion?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * N/A
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription period. Valid values:
   * 
   * *   If **Period** is set to **Year**, the valid values of **UsedTime** range from 1 to 5.
   * *   If **Period** is set to **Month**, the valid values of **UsedTime** range from 1 to 11.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      clientToken: 'ClientToken',
      databaseRegion: 'DatabaseRegion',
      databaseType: 'DatabaseType',
      fromApp: 'FromApp',
      instanceClass: 'InstanceClass',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      storageRegion: 'StorageRegion',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      clientToken: 'string',
      databaseRegion: 'string',
      databaseType: 'string',
      fromApp: 'string',
      instanceClass: 'string',
      instanceType: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      resourceGroupId: 'string',
      storageRegion: 'string',
      storageType: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

