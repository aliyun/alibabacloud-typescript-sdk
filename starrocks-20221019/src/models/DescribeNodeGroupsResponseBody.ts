// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupsResponseBodyDataNodeInfo extends $dara.Model {
  /**
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
  key?: string;
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
   * @example
   * OVERDUE
   */
  accountStatus?: string;
  /**
   * @example
   * onEci
   */
  architecture?: string;
  /**
   * @example
   * 1742179008000
   */
  beginTime?: number;
  /**
   * @example
   * c-96f3bc7f04b2****
   */
  billingInstanceId?: string;
  /**
   * @example
   * emapreduce_starrockspost_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @example
   * 1
   */
  cu?: number;
  /**
   * @example
   * true
   */
  defaultGroup?: boolean;
  description?: string;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * 3
   */
  elasticNodeNumber?: number;
  /**
   * @example
   * false
   */
  enablePublicNetwork?: boolean;
  /**
   * @example
   * be-c-79b0bb9f58ef****-internal.starrocks.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1742179008000
   */
  expireTime?: number;
  /**
   * @example
   * 8030
   */
  httpPort?: number;
  /**
   * @example
   * c-96f3bc7f04b2****
   */
  instanceId?: string;
  /**
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 4
   */
  memoryCpuRatio?: number;
  /**
   * @example
   * ng-5e2ba600fee3****
   */
  nodeGroupId?: string;
  /**
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  nodeInfo?: DescribeNodeGroupsResponseBodyDataNodeInfo[];
  /**
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @example
   * fe-c-79b0bb9f58ef****.starrocks.aliyuncs.com
   */
  publicAddress?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * 10000
   */
  runningTime?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  tags?: DescribeNodeGroupsResponseBodyDataTags[];
  /**
   * @example
   * 3
   */
  targetElasticNodeNumber?: number;
  /**
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
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeNodeGroupsResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * F285E0EC-E928-5E0B-B2C3-7F3FE42F2BE5
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

