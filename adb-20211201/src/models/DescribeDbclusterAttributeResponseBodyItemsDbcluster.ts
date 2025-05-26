// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyItemsDBClusterTags } from "./DescribeDbclusterAttributeResponseBodyItemsDbclusterTags";
import { DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo } from "./DescribeDbclusterAttributeResponseBodyItemsDbclusterTaskInfo";


export class DescribeDBClusterAttributeResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @remarks
   * The cache size of the ClickHouse wide table engine. Unit: GB. If a value of -1 is returned, the ClickHouse wide table engine is disabled. If a value other than -1 is returned, this parameter indicates the disk cache size.
   * 
   * @example
   * 100
   */
  clickhouseEngineCacheSize?: number;
  /**
   * @remarks
   * Indicates whether the ClickHouse wide table engine is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  clickhouseEngineEnabled?: boolean;
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
   * The total amount of computing resources in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 48ACU
   */
  computeResourceTotal?: string;
  /**
   * @remarks
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * amv-wz9509beptiz****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-01T09:50:18Z
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
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
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
   * The engine version of the AnalyticDB for MySQL Data Lakehouse Edition cluster. **5.0** is returned.
   * 
   * @example
   * 5.0
   */
  DBVersion?: string;
  diskEncryption?: boolean;
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
   * The minor version of the cluster.
   * 
   * @example
   * 3.1.16
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * *   If the billing method of the cluster is pay-as-you-go, null is returned.
   * 
   * @example
   * 2022-10-01T09:50:18Z
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
   * *   If the cluster has expired, the system locks or releases the cluster within a period of time. We recommend that you renew the expired cluster. For more information, see [Renewal policy](https://help.aliyun.com/document_detail/135248.html).
   * 
   * *   This parameter is not returned for pay-as-you-go clusters.
   * 
   * @example
   * false
   */
  expired?: string;
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
   * 
   * @example
   * ManualLock
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
   * The maintenance window of the cluster. The time is displayed in the `HH:mmZ-HH:mmZ` format in UTC.
   * 
   * >  For more information about maintenance windows, see [Configure a maintenance window](https://help.aliyun.com/document_detail/122569.html).
   * 
   * @example
   * 04:00Z-05:00Z
   */
  maintainTime?: string;
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
  port?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
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
   * BasicVersion
   */
  productVersion?: string;
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
   * The amount of remaining reserved computing resources that are available in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  reservedACU?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
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
  secondaryVSwitchId?: string;
  secondaryZoneId?: string;
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
   * The total amount of storage resources in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  storageResourceTotal?: string;
  /**
   * @remarks
   * Reserved parameters.
   */
  supportedFeatures?: { [key: string]: string };
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
   * false
   */
  userENIStatus?: boolean;
  /**
   * @remarks
   * The vSwitch connected to the ENI. Separate multiple vSwitches with commas (,).
   * 
   * @example
   * vsw-rj9ixufmywqq98z******,vsw-rj95ij6wcz656v7******
   */
  userENIVSwitchOptions?: string;
  /**
   * @remarks
   * The VPC information of the ENI.
   * 
   * @example
   * vpc-rj9hnedlfm645uj******
   */
  userENIVpcId?: string;
  /**
   * @remarks
   * The zone associated with the ENI. Separate multiple zones with commas (,).
   * 
   * @example
   * cn-hangzhou-k,cn-hangzhou-h
   */
  userENIZoneOptions?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpu****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-uf629gydd54ld****
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
      clickhouseEngineCacheSize: 'ClickhouseEngineCacheSize',
      clickhouseEngineEnabled: 'ClickhouseEngineEnabled',
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      computeResourceTotal: 'ComputeResourceTotal',
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBVersion: 'DBVersion',
      diskEncryption: 'DiskEncryption',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      kmsId: 'KmsId',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      secondaryVSwitchId: 'SecondaryVSwitchId',
      secondaryZoneId: 'SecondaryZoneId',
      storageResource: 'StorageResource',
      storageResourceTotal: 'StorageResourceTotal',
      supportedFeatures: 'SupportedFeatures',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      userENIStatus: 'UserENIStatus',
      userENIVSwitchOptions: 'UserENIVSwitchOptions',
      userENIVpcId: 'UserENIVpcId',
      userENIZoneOptions: 'UserENIZoneOptions',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickhouseEngineCacheSize: 'number',
      clickhouseEngineEnabled: 'boolean',
      commodityCode: 'string',
      computeResource: 'string',
      computeResourceTotal: 'string',
      connectionString: 'string',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBVersion: 'string',
      diskEncryption: 'boolean',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      kmsId: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      mode: 'string',
      payType: 'string',
      port: 'number',
      productForm: 'string',
      productVersion: 'string',
      regionId: 'string',
      reservedACU: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      secondaryVSwitchId: 'string',
      secondaryZoneId: 'string',
      storageResource: 'string',
      storageResourceTotal: 'string',
      supportedFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tags: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfo,
      userENIStatus: 'boolean',
      userENIVSwitchOptions: 'string',
      userENIVpcId: 'string',
      userENIZoneOptions: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.supportedFeatures) {
      $dara.Model.validateMap(this.supportedFeatures);
    }
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

