// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus } from "./DescribeDbclustersResponseBodyDbclustersDbclusterScaleOutStatus";
import { DescribeDBClustersResponseBodyDBClustersDBClusterTags } from "./DescribeDbclustersResponseBodyDbclustersDbclusterTags";


export class DescribeDBClustersResponseBodyDBClustersDBCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: string;
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * *   **26842**: the China site (aliyun.com)
   * *   **26888**: the international site (alibabacloud.com)
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the cluster.
   * 
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The VPC endpoint of the cluster.
   * 
   * @example
   * cc-bp1fs5o051c61****.clickhouse.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The version number of the backend management system of ApsaraDB for ClickHouse. Valid values:
   * 
   * *   **v1**
   * *   **v2**
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-10-28T07:24:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **SCALING_OUT**: The storage capacity of the cluster is being expanded.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: -**S4**: 4 CPU cores and 16 GB of memory -**S8**: 8 CPU cores and 32 GB of memory
   * 
   *     *   **S16**: 16 CPU cores and 64 GB of memory
   *     *   **S32**: 32 CPU cores and 128 GB of memory
   *     *   **S64**: 64 CPU cores and 256 GB of memory
   *     *   **S104**: 104 CPU cores and 384 GB of memory
   * 
   * *   Valid values when the cluster is of Double-replica Edition: -**C4**: 4 CPU cores and 16 GB of memory -**C8**: 8 CPU cores and 32 GB of memory -**C16**: 16 CPU cores and 64 GB of memory -**C32**: 32 CPU cores and 128 GB of memory -**C64**: 64 CPU cores and 256 GB of memory -**C104**: 104 CPU cores and 384 GB of memory
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of each node. Valid values: 100 to 32000. Unit: GB.
   * 
   * >  This value is a multiple of 100.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The engine version of the cluster.
   * 
   * @example
   * 23.8
   */
  dbVersion?: string;
  /**
   * @remarks
   * The time when the cluster expired. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * >  Pay-as-you-go clusters never expire. If the cluster is a pay-as-you-go cluster, an empty string is returned for this parameter.
   * 
   * @example
   * 2011-05-30T12:11:4Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage space.
   * 
   * @example
   * 100GB
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * 
   * *   **CloudSSD**: standard SSD.
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**: The cluster has expired.
   * *   **false**: The cluster has not expired.
   * 
   * @example
   * false
   */
  isExpired?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked because the cluster is about to be rolled back.
   * *   **LockByDiskQuota**: The cluster is automatically locked because the disk space is exhausted.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The cause why the cluster was locked.
   * 
   * >  If the value of the LockMode parameter is Unlock, an empty string is returned for this parameter.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: The cluster uses the pay-as-you-go billing method.
   * *   **Prepaid**: The cluster uses the subscription billing method.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The HTTP port number.
   * 
   * @example
   * 8123
   */
  port?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time window during which write operations are stopped for specification changes.
   * 
   * @example
   * 2025-02-08T00:00:00+08:00,2025-02-12T00:00:00+08:00
   */
  scaleOutDisableWriteWindows?: string;
  /**
   * @remarks
   * The status of a data migration task.
   */
  scaleOutStatus?: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDBClustersResponseBodyDBClustersDBClusterTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the cluster is deployed.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the cluster is deployed.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      dbVersion: 'DbVersion',
      expireTime: 'ExpireTime',
      extStorageSize: 'ExtStorageSize',
      extStorageType: 'ExtStorageType',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleOutDisableWriteWindows: 'ScaleOutDisableWriteWindows',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      dbVersion: 'string',
      expireTime: 'string',
      extStorageSize: 'number',
      extStorageType: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      payType: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleOutDisableWriteWindows: 'string',
      scaleOutStatus: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus,
      storageType: 'string',
      tags: DescribeDBClustersResponseBodyDBClustersDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.scaleOutStatus && typeof (this.scaleOutStatus as any).validate === 'function') {
      (this.scaleOutStatus as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

