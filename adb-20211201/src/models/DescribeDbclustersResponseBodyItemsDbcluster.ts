// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBodyItemsDBClusterTags } from "./DescribeDbclustersResponseBodyItemsDbclusterTags";
import { DescribeDBClustersResponseBodyItemsDBClusterTaskInfo } from "./DescribeDbclustersResponseBodyItemsDbclusterTaskInfo";


export class DescribeDBClustersResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @remarks
   * The mode of the cluster. This parameter is returned only for Data Warehouse Edition clusters. Valid values:
   * 
   * *   **BASIC**: reserved mode for Basic Edition.
   * *   **CLUSTER**: reserved mode for Cluster Edition.
   * *   **MIXED_STORAGE**: elastic mode for Cluster Edition.
   * 
   * >  For more information about cluster editions, see [Editions](https://help.aliyun.com/document_detail/205001.html).
   * 
   * @example
   * MIXED_STORAGE
   */
  category?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **ads**: pay-as-you-go.
   * *   **ads_pre**: subscription.
   * 
   * @example
   * ads_pre
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of reserved computing resources. Each ACU is approximately equal to 1 core and 4 GB memory. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * amv-bp163885f8q21****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-mm-ddThh:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-01T09:50:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp163885f8q21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. Only **VPC** is supported.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **Preparing**
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * *   **Restoring**
   * *   **ClassChanging**
   * *   **NetAddressCreating**
   * *   **NetAddressDeleting**
   * *   **NetAddressModifying**
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. By default, **Common** is returned, which indicates a common cluster.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The node specifications of the cluster. This parameter is returned only for Data Warehouse Edition clusters.
   * 
   * @example
   * E8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of node groups.
   * 
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of the cluster. Unit: GB.
   * 
   * @example
   * 300
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The version number corresponding to the edition of the cluster. Only **5.0** is supported.
   * 
   * @example
   * 5.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The disk type of the cluster. Valid values:
   * 
   * *   **local_ssd**: local disk.
   * *   **cloud**: basic disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_essd**: PL1 Enterprise SSD (ESSD).
   * *   **cloud_essd2**: PL2 ESSD.
   * *   **cloud_essd3**: PL3 ESSD.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the Data Transmission Service (DTS) synchronization job This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * dtsb1578j90XXXX
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs). For more information, see the "[EIUs](https://help.aliyun.com/document_detail/189505.html)" section of the Scale out elastic I/O resources topic.
   * 
   * >  This parameter is returned only for clusters in elastic mode.
   * 
   * @example
   * 2
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The number of compute nodes that are used by the cluster in elastic mode.
   * 
   * @example
   * 1
   */
  executorCount?: string;
  /**
   * @remarks
   * The time when the cluster expires. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * > 
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * 
   * *   If the billing method of the cluster is pay-as-you-go, null is returned.
   * 
   * @example
   * 2022-07-01T09:50:18Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the subscription cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > 
   * 
   * *   If the cluster has expired, the system locks or releases the cluster within a period of time. We recommend that you renew the expired cluster. For more information, see [Renewal policy](https://help.aliyun.com/document_detail/135246.html).
   * 
   * *   This parameter is not returned for pay-as-you-go clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The internal IP address of the cluster.
   * 
   * @example
   * 10.1.xx.xx
   */
  innerIp?: string;
  /**
   * @remarks
   * The internal port of the cluster.
   * 
   * @example
   * 3306
   */
  innerPort?: string;
  /**
   * @remarks
   * The lock status of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * 
   * >  This parameter is returned only when the cluster was locked. **instance_expire** is returned.
   * 
   * @example
   * instance_expire
   */
  lockReason?: string;
  /**
   * @remarks
   * The mode of the cluster. By default, **flexible** is returned, which indicates that the cluster is in elastic mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The service type of the cluster. Valid values:
   * 
   * *   **LegacyForm**
   * *   **IntegrationForm**
   * 
   * @example
   * IntegrationForm
   */
  productForm?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance from which data is synchronized to the cluster. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * rm-bp11q28kvl688****
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remaining reserved computing resources that are available in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 32ACU
   */
  reservedACU?: string;
  /**
   * @remarks
   * The number of reserved resource nodes.
   * 
   * @example
   * 1
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The single-node specifications of reserved resources.
   * 
   * @example
   * 8ACU
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of reserved storage resources. Each AnalyticDB compute unit (ACU) is approximately equal to 1 core and 4 GB memory. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The information about the job.
   */
  taskInfo?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo;
  /**
   * @remarks
   * The VPC endpoint.
   * 
   * @example
   * am-bp163885f8q21****-controller
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpuxvnp****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1syh8vvw8yech7n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      DBVersion: 'DBVersion',
      diskType: 'DiskType',
      dtsJobId: 'DtsJobId',
      elasticIOResource: 'ElasticIOResource',
      engine: 'Engine',
      executorCount: 'ExecutorCount',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      innerIp: 'InnerIp',
      innerPort: 'InnerPort',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      computeResource: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      DBVersion: 'string',
      diskType: 'string',
      dtsJobId: 'string',
      elasticIOResource: 'number',
      engine: 'string',
      executorCount: 'string',
      expireTime: 'string',
      expired: 'string',
      innerIp: 'string',
      innerPort: 'string',
      lockMode: 'string',
      lockReason: 'string',
      mode: 'string',
      payType: 'string',
      port: 'string',
      productForm: 'string',
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
      reservedACU: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo,
      VPCCloudInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

