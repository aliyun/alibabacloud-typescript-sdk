// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyItemsDBClusterTags } from "./DescribeDbclusterAttributeResponseBodyItemsDbclusterTags";
import { DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo } from "./DescribeDbclusterAttributeResponseBodyItemsDbclusterTaskInfo";


export class DescribeDBClusterAttributeResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
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
   * ads
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of computing resources that are used in the cluster in elastic mode. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 8Core32GB
   */
  computeResource?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) endpoint that is used to connect to the cluster.
   * 
   * @example
   * am-bp111m2cfrdl1****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-01T09:50:18Z
   */
  creationTime?: string;
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
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp111m2cfrdl1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. For more information, see [Cluster states](https://help.aliyun.com/document_detail/143075.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Common**: common cluster.
   * *   **RDS_ANALYSIS**: MySQL analytic instance.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The instance type of the cluster.
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
   * 1
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
   * The engine version of the cluster. **3.0** is returned.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The ESSD performance level.
   * 
   * @example
   * PL1
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The disk type of the cluster. Valid values:
   * 
   * *   **local_ssd**: local disk.
   * *   **cloud**: basic disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_essd0**: PL0 Enterprise SSD (ESSD).
   * *   **cloud_essd**: PL1 ESSD.
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
   * The ID of the Data Transmission Service (DTS) synchronization job. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * dtsb1hp3790****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs).
   * 
   * @example
   * 2
   */
  elasticIOResource?: number;
  /**
   * @remarks
   * The single-node specifications of an EIU. Valid values:
   * 
   * *   8Core64GB: If this value is returned, the specifications of an EIU are 24 cores and 192 GB memory.
   * *   12Core96GB: If this value is returned, the specifications of an EIU are 36 cores and 288 GB memory.
   * 
   * @example
   * 8Core64GB
   */
  elasticIOResourceSize?: string;
  /**
   * @remarks
   * Indicates whether an Airflow cluster was created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableAirflow?: boolean;
  /**
   * @remarks
   * Indicates whether a Spark cluster was created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableSpark?: boolean;
  /**
   * @remarks
   * The database engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The minor version of the cluster.
   * 
   * @example
   * 3.1.1.9
   */
  engineVersion?: string;
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
   * The expiration time of the cluster. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC. Example: *2999-09-08T16:00:00Z*.
   * 
   * > 
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * 
   * *   If the billing method of the cluster is pay-as-you-go, **2999-09-08T16:00:00Z** is returned.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The public IP address of the cluster.
   * 
   * @example
   * 10.1.XX.XX
   */
  innerIp?: string;
  /**
   * @remarks
   * The public port number.
   * 
   * @example
   * 3306
   */
  innerPort?: string;
  /**
   * @remarks
   * The ID of the key that is used to encrypt disk data.
   * 
   * >  This parameter is returned only when disk encryption is enabled.
   * 
   * @example
   * e1935511-cf88-1123-a0f8-1be8d251****
   */
  kmsId?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked due to cluster restoration.
   * *   **LockByDiskQuota**: The cluster is automatically locked when 90% of the cluster storage is used.
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
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is displayed in the *HH:mmZ-HH:mmZ* format in UTC. Example: *04:00Z-05:00Z*, which indicates that routine maintenance is performed from 04:00 to 05:00.
   * 
   * >  For more information about maintenance windows, see [Configure a maintenance window](https://help.aliyun.com/document_detail/122569.html).
   * 
   * @example
   * 04:00Z-05:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * >  For more information about cluster modes, see [Editions](https://help.aliyun.com/document_detail/205001.html).
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
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: number;
  productForm?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance from which data is synchronized to the cluster. This parameter is returned only for MySQL analytic instances.
   * 
   * @example
   * rm-bp837jsdp2****
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
  reservedNodeCount?: number;
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
   * The ID of the secondary vSwitch.
   * 
   * >  You cannot set this parameter to a value that is the same as that of the VSwitchId parameter.
   * 
   * @example
   * vsw-0jlb72a9dan1ja9cvg9tf
   */
  secondaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * >  You cannot set this parameter to a value that is the same as that of the ZoneId parameter.
   * 
   * @example
   * cn-zhangjiakou-b
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The specifications of storage resources that are used in the cluster in elastic mode. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 8Core32GB
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The job information.
   */
  taskInfo?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo;
  /**
   * @remarks
   * Indicates whether Elastic Network Interface (ENI) is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  userENIStatus?: boolean;
  /**
   * @remarks
   * The ID of the cluster that resides in the VPC.
   * 
   * @example
   * am-bp111m2cfrdl1****-controller
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID of the cluster.
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
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      DBVersion: 'DBVersion',
      diskEncryption: 'DiskEncryption',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskType: 'DiskType',
      dtsJobId: 'DtsJobId',
      elasticIOResource: 'ElasticIOResource',
      elasticIOResourceSize: 'ElasticIOResourceSize',
      enableAirflow: 'EnableAirflow',
      enableSpark: 'EnableSpark',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      executorCount: 'ExecutorCount',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      innerIp: 'InnerIp',
      innerPort: 'InnerPort',
      kmsId: 'KmsId',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      secondaryVSwitchId: 'SecondaryVSwitchId',
      secondaryZoneId: 'SecondaryZoneId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      userENIStatus: 'UserENIStatus',
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
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      DBVersion: 'string',
      diskEncryption: 'boolean',
      diskPerformanceLevel: 'string',
      diskType: 'string',
      dtsJobId: 'string',
      elasticIOResource: 'number',
      elasticIOResourceSize: 'string',
      enableAirflow: 'boolean',
      enableSpark: 'boolean',
      engine: 'string',
      engineVersion: 'string',
      executorCount: 'string',
      expireTime: 'string',
      expired: 'string',
      innerIp: 'string',
      innerPort: 'string',
      kmsId: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      mode: 'string',
      payType: 'string',
      port: 'number',
      productForm: 'string',
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      secondaryVSwitchId: 'string',
      secondaryZoneId: 'string',
      storageResource: 'string',
      tags: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo,
      userENIStatus: 'boolean',
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

