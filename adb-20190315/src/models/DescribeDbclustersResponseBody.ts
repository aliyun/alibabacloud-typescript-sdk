// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add a tag to the cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
  tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList extends $dara.Model {
  /**
   * @remarks
   * The end time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T10:28:34Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T09:28:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the job step.
   * 
   * @example
   * Apply resource
   */
  stepDesc?: string;
  /**
   * @remarks
   * The name of the job step.
   * 
   * @example
   * ApplyResource
   */
  stepName?: string;
  /**
   * @remarks
   * The progress of the job step. Unit: %.
   * 
   * @example
   * 50
   */
  stepProgress?: string;
  /**
   * @remarks
   * The status of the job step. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * SUCCEED
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      stepDesc: 'StepDesc',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      stepDesc: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList extends $dara.Model {
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList },
    };
  }

  validate() {
    if(Array.isArray(this.stepList)) {
      $dara.Model.validateArray(this.stepList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * analyticDBFlexibleScaleOut
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Unit: %.
   * 
   * @example
   * 10
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The job step.
   */
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      progress: 'string',
      status: 'string',
      stepList: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList,
    };
  }

  validate() {
    if(this.stepList && typeof (this.stepList as any).validate === 'function') {
      (this.stepList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $dara.Model {
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
   * The commodity code. **ads** is returned.
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
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * am-bp163885f8q21****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC. Example: *2021-04-01T09:50:18Z*.
   * 
   * @example
   * 2021-04-01T09:50:18Z
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
   * The cluster ID.
   * 
   * @example
   * am-bp163885f8q21****
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
   * The specifications of the cluster.
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
   * The version of the database engine. **3.0** is returned.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The disk type of the cluster. Valid values:
   * 
   * *   **local_ssd**: local SSD.
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
   * dtsb1578j90XXXX
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs). For more information, see [Elasticity of the storage layer](https://help.aliyun.com/document_detail/189505.html).
   * 
   * >  This parameter is returned only for clusters in elastic mode.
   * 
   * @example
   * 0
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
   * 10.1.xx.xx
   */
  innerIp?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  innerPort?: string;
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
   * The mode of the cluster. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * > 
   * 
   * *   For more information about cluster modes, see [Editions](https://help.aliyun.com/document_detail/205001.html).
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
   * The port number that is used to connect to the cluster. Default value: 3306.
   * 
   * @example
   * 3306
   */
  port?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
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
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The job progress.
   */
  taskInfo?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo;
  /**
   * @remarks
   * The ID of the cluster that resides in the VPC.
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
   * vpc-bp13h7uzhulpuxvnpXXXX
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1syh8vvw8yech7nXXXX
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
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
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
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
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

export class DescribeDBClustersResponseBodyItems extends $dara.Model {
  DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
    };
  }

  validate() {
    if(Array.isArray(this.DBCluster)) {
      $dara.Model.validateArray(this.DBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster information.
   */
  items?: DescribeDBClustersResponseBodyItems;
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClustersResponseBodyItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

