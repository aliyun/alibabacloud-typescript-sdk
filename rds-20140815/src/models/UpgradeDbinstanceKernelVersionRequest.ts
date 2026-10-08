// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can invoke DescribeDBInstances to query the instance ID.
   * 
   * > * The storage type of the ApsaraDB RDS for PostgreSQL instance must be **cloud disks**. For an instance with Premium Local SSDs, you can invoke the [RestartDBInstance](https://help.aliyun.com/document_detail/26230.html) operation to restart the instance, which automatically upgrades the instance to the latest minor engine version.
   * > * Only the 2019 version of ApsaraDB RDS for SQL Server supports minor engine version upgrades.
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
   * The specified time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter takes effect only when **UpgradeTime** is set to **SpecifyTime**.
   * 
   * @example
   * 2020-01-15T00:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The minor database engine version to which you want to upgrade. Format:
   * * **PostgreSQL**: `rds_postgres_<Major version number>00_<Minor version number>`. Example for version 12 with minor version 20200830: `rds_postgres_1200_20200830`.
   * * **MySQL**: `<Instance version>_<Minor version number>`. Examples: `rds_20200229`, `xcluster_20200229`, or `xcluster80_20200229`. The instance version can be one of the following:
   *     * **rds**: high-availability series or Basic Edition.
   *     * **xcluster**: MySQL 5.7 RDS Enterprise Edition.
   *     * **xcluster80**: MySQL 8.0 RDS Enterprise Edition.
   * * **SQLServer**: `<Minor version number>`. Example: `15.0.4073.23`.
   * 
   * If you do not specify this parameter, the instance is upgraded to the latest minor engine version by default.
   * > For minor engine version numbers, see [Release notes of ApsaraDB RDS for PostgreSQL minor engine versions](https://help.aliyun.com/document_detail/126002.html), [Release notes of ApsaraDB RDS for MySQL minor engine versions](https://help.aliyun.com/document_detail/96060.html), and [Release notes of ApsaraDB RDS for SQL Server minor engine versions](https://help.aliyun.com/document_detail/213577.html).
   * 
   * @example
   * xcluster80_20210305
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The upgrade time. Valid values:
   * 
   * * **Immediate** (default): The upgrade takes effect immediately.
   * * **MaintainTime**: The upgrade takes effect during the maintenance window. To modify the maintenance window, call ModifyDBInstanceMaintainTime.
   * * **SpecifyTime**: The upgrade takes effect at a specified time.
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

