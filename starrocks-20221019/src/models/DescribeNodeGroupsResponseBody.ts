// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupsResponseBodyDataNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * cn-e1733d44-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeGroupsResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class DescribeNodeGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account status. Valid values:
   * 
   * - NORMAL: The account is in a normal state.
   * - OVERDUE: The account has an overdue payment.
   * 
   * @example
   * OVERDUE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The compute group architecture. Valid values:
   * 
   * - onEci: Deployed on ECI.
   * - onECS: Deployed on ECS.
   * - onBareMetal: Deployed on a bare metal resource pool.
   * 
   * @example
   * onEci
   */
  architecture?: string;
  /**
   * @remarks
   * The creation time of the compute group. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1742179008000
   */
  beginTime?: number;
  /**
   * @remarks
   * The instance ID corresponding to the bill. For the default compute groups (the FE compute group and the default BE compute group), the value of this field is the instance ID. Otherwise, the value is the compute group ID.
   * 
   * @example
   * c-96f3bc7f04b2****
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * emapreduce_starrockspost_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The compute group type. Valid values:
   * 
   * - FE
   * - BE
   * - CN
   * - OBSERVER
   * - AGENT
   * 
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @remarks
   * The number of CUs. A CU (Compute Unit) is the basic metering unit of the service. 1 CU equals 1 vCPU and 4 GiB of memory. If SpecType is set to the memory-enhanced instance family, 1 CU equals 1 vCPU and 8 GiB of memory.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * Indicates whether the compute group is the default compute group.
   * 
   * @example
   * true
   */
  defaultGroup?: boolean;
  /**
   * @remarks
   * The compute group description.
   * 
   * @example
   * ETL compute group
   */
  description?: string;
  /**
   * @remarks
   * The number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * The number of elastic nodes.
   * 
   * @example
   * 3
   */
  elasticNodeNumber?: number;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * false
   */
  enablePublicNetwork?: boolean;
  /**
   * @remarks
   * The compute group endpoint.
   * 
   * @example
   * be-c-79b0bb9f58ef****-internal.starrocks.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the compute group. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1742179008000
   */
  expireTime?: number;
  /**
   * @remarks
   * The HTTP port of the compute group.
   * 
   * @example
   * 8030
   */
  httpPort?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-96f3bc7f04b2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The local SSD instance specification of the node group. This value is valid only when the instance is based on ECS and SpecType is localSSD or bigData.
   * 
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The ratio of memory size to the number of CUs. The value is 8 when SpecType is the memory-enhanced instance family, and 4 for other specification types.
   * 
   * @example
   * 4
   */
  memoryCpuRatio?: number;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * ng-5e2ba600fee3****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The compute group name.
   * 
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The information about the nodes contained in the compute group.
   */
  nodeInfo?: DescribeNodeGroupsResponseBodyDataNodeInfo[];
  /**
   * @remarks
   * The billing method. Valid values:
   * <ol>
   * <li>Subscription (prePaid).</li>
   * <li>Pay-as-you-go (postPaid).</li>
   * </ol>
   * 
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @remarks
   * The public IP address. This parameter has a value only when EnablePublicNetwork is set to true.
   * 
   * @example
   * fe-c-79b0bb9f58ef****.starrocks.aliyuncs.com
   */
  publicAddress?: string;
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
   * The number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * The running time of the compute group. Unit: seconds.
   * 
   * @example
   * 10000
   */
  runningTime?: number;
  /**
   * @remarks
   * The compute group specification type. Valid values:
   * 
   * - standard: Standard Edition.
   * - localSSD: Local SSD.
   * - bigData: Large-capacity storage.
   * - ramEnhanced: Memory-enhanced instance family.
   * - networkEnhanced: Network-enhanced.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The compute group status. Valid values:
   * 
   * - UNPAID: Unpaid.
   * - PAID: Paid.
   * - CREATING_FAILED: Creation failed.
   * - CREATING: Creating.
   * - RUNNING: Running.
   * - MODIFYING_CONFIG: Modifying configurations.
   * - MODIFYING_TIMEZONE: Modifying the time zone.
   * - ELASTIC_SCALING_OUT: Elastically scaling out.
   * - ELASTIC_SCALING_IN: Elastically scaling in.
   * - SCALING_OUT: Scaling out.
   * - RESTARTING: Restarting.
   * - SCALING_IN: Scaling in.
   * - SCALING_UP: Scaling up.
   * - SCALING_DOWN: Scaling down.
   * - UPGRADING: Upgrading.
   * - ENABLE_PUBLIC_NETWORK: Enabling public network access.
   * - DISABLE_PUBLIC_NETWORK: Disabling public network access.
   * - SWITCH_AZ: Switching the zone.
   * - DISABLE: Disabled.
   * - DELETING: Deleting.
   * - DELETED: Deleted.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Valid values:
   * 
   * - pl0: Up to 10,000 random read/write IOPS per disk.
   * - pl1: Up to 50,000 random read/write IOPS per disk.
   * - pl2: Up to 100,000 random read/write IOPS per disk.
   * - pl3: Up to 1,000,000 random read/write IOPS per disk.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size. Unit: GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeNodeGroupsResponseBodyDataTags[];
  /**
   * @remarks
   * The target number of elastic nodes.
   * 
   * @example
   * 3
   */
  targetElasticNodeNumber?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      architecture: 'Architecture',
      beginTime: 'BeginTime',
      billingInstanceId: 'BillingInstanceId',
      commodityCode: 'CommodityCode',
      componentType: 'ComponentType',
      cu: 'Cu',
      defaultGroup: 'DefaultGroup',
      description: 'Description',
      diskNumber: 'DiskNumber',
      elasticNodeNumber: 'ElasticNodeNumber',
      enablePublicNetwork: 'EnablePublicNetwork',
      endpoint: 'Endpoint',
      expireTime: 'ExpireTime',
      httpPort: 'HttpPort',
      instanceId: 'InstanceId',
      localStorageInstanceType: 'LocalStorageInstanceType',
      memoryCpuRatio: 'MemoryCpuRatio',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeInfo: 'NodeInfo',
      payType: 'PayType',
      publicAddress: 'PublicAddress',
      regionId: 'RegionId',
      residentNodeNumber: 'ResidentNodeNumber',
      runningTime: 'RunningTime',
      specType: 'SpecType',
      status: 'Status',
      storagePerformanceLevel: 'StoragePerformanceLevel',
      storageSize: 'StorageSize',
      tags: 'Tags',
      targetElasticNodeNumber: 'TargetElasticNodeNumber',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      architecture: 'string',
      beginTime: 'number',
      billingInstanceId: 'string',
      commodityCode: 'string',
      componentType: 'string',
      cu: 'number',
      defaultGroup: 'boolean',
      description: 'string',
      diskNumber: 'number',
      elasticNodeNumber: 'number',
      enablePublicNetwork: 'boolean',
      endpoint: 'string',
      expireTime: 'number',
      httpPort: 'number',
      instanceId: 'string',
      localStorageInstanceType: 'string',
      memoryCpuRatio: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeInfo: { 'type': 'array', 'itemType': DescribeNodeGroupsResponseBodyDataNodeInfo },
      payType: 'string',
      publicAddress: 'string',
      regionId: 'string',
      residentNodeNumber: 'number',
      runningTime: 'number',
      specType: 'string',
      status: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeNodeGroupsResponseBodyDataTags },
      targetElasticNodeNumber: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission check failure.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeNodeGroupsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F285E0EC-E928-5E0B-B2C3-7F3FE42F2BE5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': DescribeNodeGroupsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

