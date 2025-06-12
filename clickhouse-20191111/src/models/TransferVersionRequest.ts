// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1tm8zf130ew****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time window during which write operations are stopped.
   * 
   * @example
   * 2025-02-08T00:00:00+08:00,2025-02-12T00:00:00+08:00
   */
  disableWriteWindows?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database account that is used to log on to the database in the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The name of the self-managed ClickHouse cluster. You can execute the `SELECT * FROM system.clusters` statement to query the cluster name.
   * 
   * @example
   * default
   */
  sourceClusterName?: string;
  /**
   * @remarks
   * The password that corresponds to the database account for logging on to the database in the source ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The endpoint and TCP port of the self-managed ClickHouse cluster.
   * 
   * @example
   * 192.168.0.4:9000,192.168.0.5:9000,192.168.0.6:9000
   */
  sourceShards?: string;
  /**
   * @remarks
   * The database account that is used to log on to the database in the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  targetAccount?: string;
  /**
   * @remarks
   * The ID of the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp14b39djx7zg****
   */
  targetDbClusterId?: string;
  /**
   * @remarks
   * The password that corresponds to the database account for logging on to the database in the destination ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Ff
   */
  targetPassword?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      disableWriteWindows: 'DisableWriteWindows',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourceClusterName: 'SourceClusterName',
      sourcePassword: 'SourcePassword',
      sourceShards: 'SourceShards',
      targetAccount: 'TargetAccount',
      targetDbClusterId: 'TargetDbClusterId',
      targetPassword: 'TargetPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      disableWriteWindows: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourceClusterName: 'string',
      sourcePassword: 'string',
      sourceShards: 'string',
      targetAccount: 'string',
      targetDbClusterId: 'string',
      targetPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

