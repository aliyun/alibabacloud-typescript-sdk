// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * - **logical**: logical backup
   * 
   * - **physical**: physical backup
   * 
   * This parameter is required.
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * KJSAHKJFHKJSHFKASHFKJADFHKDXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The region of the database.
   * 
   * @example
   * cn-hangzhou
   */
  databaseRegion?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MSSQL**
   * 
   * - **Oracle**
   * 
   * - **MariaDB**
   * 
   * - **PostgreSQL**
   * 
   * - **DRDS**
   * 
   * - **MongoDB**
   * 
   * - **Redis**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The source of the request. The default value is OpenAPI. You do not need to set this parameter.
   * 
   * @example
   * OpenAPI
   */
  fromApp?: string;
  /**
   * @remarks
   * The instance class. Valid values:
   * 
   * - **micro**: Entry
   * 
   * - **small**: Basic
   * 
   * - **medium**: Standard
   * 
   * - **large**: Enhanced
   * 
   * - **xlarge**: Enhanced (no traffic limit)
   * 
   * > The higher the instance class, the better the performance of backup and recovery. For more information, see [Specifications](https://help.aliyun.com/document_detail/84372.html).
   * 
   * This parameter is required.
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  /**
   * @remarks
   * The database instance type. Valid values:
   * 
   * - **RDS**
   * 
   * - **PolarDB**
   * 
   * - **DDS**: Alibaba Cloud MongoDB
   * 
   * - **Kvstore**: Alibaba Cloud Redis
   * 
   * - **Other**: A database that is connected over the Internet.
   * 
   * - **dg**: A self-managed database without a public IP address and port that is connected through Database Gateway (DG).
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  ownerId?: string;
  /**
   * @remarks
   * The payment method. Valid value:
   * 
   * **prepay**: subscription
   * 
   * @example
   * prepay
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription instance. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the DBS instance. This parameter is required. Call the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) operation to view the regions that DBS supports.
   * 
   * > For more information, see [Endpoints](https://help.aliyun.com/document_detail/2869810.html).
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
   * The storage region.
   * 
   * @example
   * cn-hangzhou
   */
  storageRegion?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * 无
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If you set the **Period** parameter to **Year**, the value of **UsedTime** can be 1 to 5.
   * 
   * - If you set the **Period** parameter to **Month**, the value of **UsedTime** can be 1 to 11.
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

