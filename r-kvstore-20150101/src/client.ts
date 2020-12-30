// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCacheAnalysisTaskRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCacheAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCacheAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  instanceId?: string;
  instanceStatus?: number;
  instanceNetType?: string;
  engine?: string;
  engineVersion?: string;
  clusterId?: string;
  dedicatedHostName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceNetType: 'InstanceNetType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      clusterId: 'ClusterId',
      dedicatedHostName: 'DedicatedHostName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      instanceId: 'string',
      instanceStatus: 'number',
      instanceNetType: 'string',
      engine: 'string',
      engineVersion: 'string',
      clusterId: 'string',
      dedicatedHostName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBody extends $tea.Model {
  instances?: DescribeDedicatedClusterInstanceListResponseBodyInstances[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstances },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedClusterInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedClusterInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  product?: string;
  category?: string;
  queryType?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      product: 'Product',
      category: 'Category',
      queryType: 'QueryType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
      product: 'string',
      category: 'string',
      queryType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  node?: DescribeRoleZoneInfoResponseBodyNode;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      node: DescribeRoleZoneInfoResponseBodyNode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRoleZoneInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRoleZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList extends $tea.Model {
  nodeIp?: string;
  dedicatedHostName?: string;
  nodeType?: string;
  zoneId?: string;
  instanceId?: string;
  port?: number;
  role?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIp: 'NodeIp',
      dedicatedHostName: 'DedicatedHostName',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      port: 'Port',
      role: 'Role',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIp: 'string',
      dedicatedHostName: 'string',
      nodeType: 'string',
      zoneId: 'string',
      instanceId: 'string',
      port: 'number',
      role: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstances extends $tea.Model {
  vpcId?: string;
  characterType?: number;
  vswitchId?: string;
  maintainStartTime?: string;
  instanceClass?: string;
  connectionDomain?: string;
  createTime?: string;
  maintainEndTime?: string;
  storageType?: string;
  instanceNodeList?: DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList[];
  instanceId?: string;
  engineVersion?: string;
  regionId?: string;
  instanceName?: string;
  zoneId?: string;
  clusterName?: string;
  instanceStatus?: string;
  engine?: string;
  shardCount?: number;
  customId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      characterType: 'CharacterType',
      vswitchId: 'VswitchId',
      maintainStartTime: 'MaintainStartTime',
      instanceClass: 'InstanceClass',
      connectionDomain: 'ConnectionDomain',
      createTime: 'CreateTime',
      maintainEndTime: 'MaintainEndTime',
      storageType: 'StorageType',
      instanceNodeList: 'InstanceNodeList',
      instanceId: 'InstanceId',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      instanceName: 'InstanceName',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      instanceStatus: 'InstanceStatus',
      engine: 'Engine',
      shardCount: 'ShardCount',
      customId: 'CustomId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      characterType: 'number',
      vswitchId: 'string',
      maintainStartTime: 'string',
      instanceClass: 'string',
      connectionDomain: 'string',
      createTime: 'string',
      maintainEndTime: 'string',
      storageType: 'string',
      instanceNodeList: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList },
      instanceId: 'string',
      engineVersion: 'string',
      regionId: 'string',
      instanceName: 'string',
      zoneId: 'string',
      clusterName: 'string',
      instanceStatus: 'string',
      engine: 'string',
      shardCount: 'number',
      customId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyNodeNodeInfo extends $tea.Model {
  currentMinorVersion?: string;
  insType?: number;
  isLatestVersion?: number;
  insName?: string;
  nodeType?: string;
  zoneId?: string;
  role?: string;
  custinsId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      currentMinorVersion: 'CurrentMinorVersion',
      insType: 'InsType',
      isLatestVersion: 'IsLatestVersion',
      insName: 'InsName',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      role: 'Role',
      custinsId: 'CustinsId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMinorVersion: 'string',
      insType: 'number',
      isLatestVersion: 'number',
      insName: 'string',
      nodeType: 'string',
      zoneId: 'string',
      role: 'string',
      custinsId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyNode extends $tea.Model {
  nodeInfo?: DescribeRoleZoneInfoResponseBodyNodeNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyNodeNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "r-kvstore.aliyuncs.com",
      'cn-beijing': "r-kvstore.aliyuncs.com",
      'cn-hangzhou': "r-kvstore.aliyuncs.com",
      'cn-shanghai': "r-kvstore.aliyuncs.com",
      'cn-shenzhen': "r-kvstore.aliyuncs.com",
      'cn-heyuan': "r-kvstore.aliyuncs.com",
      'ap-southeast-1': "r-kvstore.aliyuncs.com",
      'us-west-1': "r-kvstore.aliyuncs.com",
      'us-east-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-finance': "r-kvstore.aliyuncs.com",
      'cn-shanghai-finance-1': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-finance-1': "r-kvstore.aliyuncs.com",
      'cn-north-2-gov-1': "r-kvstore.aliyuncs.com",
      'ap-northeast-2-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-finance-1': "r-kvstore.aliyuncs.com",
      'cn-beijing-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-gov-1': "r-kvstore.aliyuncs.com",
      'cn-beijing-nu16-b01': "r-kvstore.aliyuncs.com",
      'cn-edge-1': "r-kvstore.aliyuncs.com",
      'cn-fujian': "r-kvstore.aliyuncs.com",
      'cn-haidian-cm12-c01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-bj-b01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-test-306': "r-kvstore.aliyuncs.com",
      'cn-hongkong-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-huhehaote-nebula-1': "r-kvstore.aliyuncs.com",
      'cn-qingdao-nebula': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et15-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et2-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-inner': "r-kvstore.aliyuncs.com",
      'cn-shanghai-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-inner': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-st4-d01': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-su18-b01': "r-kvstore.aliyuncs.com",
      'cn-wuhan': "r-kvstore.aliyuncs.com",
      'cn-wulanchabu': "r-kvstore.aliyuncs.com",
      'cn-yushanfang': "r-kvstore.aliyuncs.com",
      'cn-zhangbei-na61-b01': "r-kvstore.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "r-kvstore.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "r-kvstore.aliyuncs.com",
      'eu-west-1-oxs': "r-kvstore.aliyuncs.com",
      'rus-west-1-pop': "r-kvstore.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("r-kvstore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async createCacheAnalysisTaskWithOptions(request: CreateCacheAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCacheAnalysisTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCacheAnalysisTaskResponse>(await this.doRPCRequest("CreateCacheAnalysisTask", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCacheAnalysisTaskResponse({}));
  }

  async createCacheAnalysisTask(request: CreateCacheAnalysisTaskRequest): Promise<CreateCacheAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCacheAnalysisTaskWithOptions(request, runtime);
  }

  async describeDedicatedClusterInstanceListWithOptions(request: DescribeDedicatedClusterInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedClusterInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedClusterInstanceListResponse>(await this.doRPCRequest("DescribeDedicatedClusterInstanceList", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedClusterInstanceListResponse({}));
  }

  async describeDedicatedClusterInstanceList(request: DescribeDedicatedClusterInstanceListRequest): Promise<DescribeDedicatedClusterInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedClusterInstanceListWithOptions(request, runtime);
  }

  async describeRoleZoneInfoWithOptions(request: DescribeRoleZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoleZoneInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoleZoneInfoResponse>(await this.doRPCRequest("DescribeRoleZoneInfo", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoleZoneInfoResponse({}));
  }

  async describeRoleZoneInfo(request: DescribeRoleZoneInfoRequest): Promise<DescribeRoleZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

}
