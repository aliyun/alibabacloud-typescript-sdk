// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * > * The storage type of the ApsaraDB RDS for PostgreSQL instance must be **cloud disk**. You can call the [restart the instance](https://help.aliyun.com/document_detail/26230.html) operation to restart an instance with Premium Local SSDs to automatically upgrade the instance to the latest minor engine version.
   * > * Only ApsaraDB RDS for SQL Server 2019 instances support minor engine version upgrades.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp****
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified time when the upgrade is performed. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * >This parameter takes effect only when **UpgradeTime** is set to **SpecifyTime**.
   * 
   * @example
   * 2020-01-15T00:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The target minor database version. Format:
   * * **PostgreSQL**: `rds_postgres_<Major version number>00_<Minor version number>`. Example: `rds_postgres_1200_20200830` for PostgreSQL 12 version 20200830.
   * * **MySQL**: `<Instance edition>_<Minor version number>`. Examples: `rds_20200229`, `xcluster_20200229`, and `xcluster80_20200229`. The instance editions are as follows:
   *     * **rds**: high availability series or Basic Edition.
   *     * **xcluster**: MySQL 5.7 RDS Enterprise Edition.
   *     * **xcluster80**: MySQL 8.0 RDS Enterprise Edition.
   * * **SQL Server**: `<Minor version number>`. Example: `15.0.4073.23`.
   * 
   * If you do not specify this parameter, the instance is upgraded to the latest minor database version by default.
   * > For more information about minor database versions, see [Release notes for minor engine versions of ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/126002.html), [Release notes for minor engine versions of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96060.html), and [Release notes for minor engine versions of ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/213577.html).
   * 
   * @example
   * xcluster80_20210305
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The time when the upgrade is performed. Valid values:
   * 
   * * **Immediate**: The upgrade is immediately performed. This is the default value.
   * * **MaintainTime**: The upgrade is performed within the specified maintenance window. For more information about how to modify the maintenance window, see ModifyDBInstanceMaintainTime.
   * * **SpecifyTime**: The upgrade is performed at the specified time.
   * 
   * @example
   * Immediate
   */
  upgradeTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetMinorVersion: 'string',
      upgradeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

