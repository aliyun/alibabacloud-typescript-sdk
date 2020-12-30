// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  appKey?: string;
  zoneId?: string;
  instanceName?: string;
  instanceAlias?: string;
  instanceClass?: string;
  instanceStorage?: string;
  payType?: string;
  VPCId?: string;
  vSwitchId?: string;
  maxTimelineLimit?: string;
  instanceTps?: string;
  engineType?: string;
  maxSeriesPerDatabase?: string;
  maxDatabaseLimit?: string;
  pricingCycle?: string;
  duration?: string;
  TSDBVersion?: string;
  diskCategory?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      appKey: 'AppKey',
      zoneId: 'ZoneId',
      instanceName: 'InstanceName',
      instanceAlias: 'InstanceAlias',
      instanceClass: 'InstanceClass',
      instanceStorage: 'InstanceStorage',
      payType: 'PayType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      maxTimelineLimit: 'MaxTimelineLimit',
      instanceTps: 'InstanceTps',
      engineType: 'EngineType',
      maxSeriesPerDatabase: 'MaxSeriesPerDatabase',
      maxDatabaseLimit: 'MaxDatabaseLimit',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      TSDBVersion: 'TSDBVersion',
      diskCategory: 'DiskCategory',
      clientToken: 'ClientToken',
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
      appKey: 'string',
      zoneId: 'string',
      instanceName: 'string',
      instanceAlias: 'string',
      instanceClass: 'string',
      instanceStorage: 'string',
      payType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      maxTimelineLimit: 'string',
      instanceTps: 'string',
      engineType: 'string',
      maxSeriesPerDatabase: 'string',
      maxDatabaseLimit: 'string',
      pricingCycle: 'string',
      duration: 'string',
      TSDBVersion: 'string',
      diskCategory: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
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
      appKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceResponseBody extends $tea.Model {
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

export class DeleteHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
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
      appKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBody extends $tea.Model {
  autoRenew?: boolean;
  gmtCreated?: string;
  cpuNumber?: string;
  memSize?: string;
  networkType?: string;
  gmtExpire?: string;
  instanceAlias?: string;
  instanceStatus?: string;
  expiredTime?: number;
  paymentType?: string;
  maxTimelineLimit?: string;
  publicConnectionString?: string;
  engineType?: string;
  instanceTps?: string;
  status?: string;
  instanceStorage?: string;
  requestId?: string;
  zoneId?: string;
  instanceId?: string;
  createTime?: number;
  diskCategory?: string;
  instanceClass?: string;
  vswitchId?: string;
  series?: number;
  vpcId?: string;
  chargeType?: string;
  securityIpList?: DescribeHiTSDBInstanceResponseBodySecurityIpList[];
  instanceDescription?: string;
  regionId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      gmtCreated: 'GmtCreated',
      cpuNumber: 'CpuNumber',
      memSize: 'MemSize',
      networkType: 'NetworkType',
      gmtExpire: 'GmtExpire',
      instanceAlias: 'InstanceAlias',
      instanceStatus: 'InstanceStatus',
      expiredTime: 'ExpiredTime',
      paymentType: 'PaymentType',
      maxTimelineLimit: 'MaxTimelineLimit',
      publicConnectionString: 'PublicConnectionString',
      engineType: 'EngineType',
      instanceTps: 'InstanceTps',
      status: 'Status',
      instanceStorage: 'InstanceStorage',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      diskCategory: 'DiskCategory',
      instanceClass: 'InstanceClass',
      vswitchId: 'VswitchId',
      series: 'Series',
      vpcId: 'VpcId',
      chargeType: 'ChargeType',
      securityIpList: 'SecurityIpList',
      instanceDescription: 'InstanceDescription',
      regionId: 'RegionId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      gmtCreated: 'string',
      cpuNumber: 'string',
      memSize: 'string',
      networkType: 'string',
      gmtExpire: 'string',
      instanceAlias: 'string',
      instanceStatus: 'string',
      expiredTime: 'number',
      paymentType: 'string',
      maxTimelineLimit: 'string',
      publicConnectionString: 'string',
      engineType: 'string',
      instanceTps: 'string',
      status: 'string',
      instanceStorage: 'string',
      requestId: 'string',
      zoneId: 'string',
      instanceId: 'string',
      createTime: 'number',
      diskCategory: 'string',
      instanceClass: 'string',
      vswitchId: 'string',
      series: 'number',
      vpcId: 'string',
      chargeType: 'string',
      securityIpList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceResponseBodySecurityIpList },
      instanceDescription: 'string',
      regionId: 'string',
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  queryStr?: string;
  statusList?: string;
  pageNumber?: number;
  pageSize?: number;
  engineType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      queryStr: 'QueryStr',
      statusList: 'StatusList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      engineType: 'EngineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      queryStr: 'string',
      statusList: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      engineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  instanceList?: DescribeHiTSDBInstanceListResponseBodyInstanceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceListResponseBodyInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiTSDBInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiTSDBInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  instanceClass?: string;
  instanceStorage?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      instanceClass: 'InstanceClass',
      instanceStorage: 'InstanceStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
      instanceClass: 'string',
      instanceStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassResponseBody extends $tea.Model {
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

export class ModifyHiTSDBInstanceClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHiTSDBInstanceClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHiTSDBInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  instanceAlias?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      instanceAlias: 'InstanceAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
      instanceAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasResponseBody extends $tea.Model {
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

export class RenameHiTSDBInstanceAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameHiTSDBInstanceAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameHiTSDBInstanceAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBodySecurityIpList extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBodyInstanceList extends $tea.Model {
  vpcId?: string;
  status?: string;
  maxSeriesPerDatabase?: string;
  paymentType?: string;
  engineType?: string;
  vswitchId?: string;
  instanceClass?: string;
  createTime?: number;
  userId?: string;
  chargeType?: string;
  instanceStorage?: string;
  networkType?: string;
  instanceId?: string;
  lockMode?: string;
  instanceDescription?: string;
  regionId?: string;
  gmtCreated?: string;
  instanceAlias?: string;
  instanceTps?: string;
  expiredTime?: number;
  zoneId?: string;
  instanceStatus?: string;
  gmtExpire?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      maxSeriesPerDatabase: 'MaxSeriesPerDatabase',
      paymentType: 'PaymentType',
      engineType: 'EngineType',
      vswitchId: 'VswitchId',
      instanceClass: 'InstanceClass',
      createTime: 'CreateTime',
      userId: 'UserId',
      chargeType: 'ChargeType',
      instanceStorage: 'InstanceStorage',
      networkType: 'NetworkType',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      instanceDescription: 'InstanceDescription',
      regionId: 'RegionId',
      gmtCreated: 'GmtCreated',
      instanceAlias: 'InstanceAlias',
      instanceTps: 'InstanceTps',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      instanceStatus: 'InstanceStatus',
      gmtExpire: 'GmtExpire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      maxSeriesPerDatabase: 'string',
      paymentType: 'string',
      engineType: 'string',
      vswitchId: 'string',
      instanceClass: 'string',
      createTime: 'number',
      userId: 'string',
      chargeType: 'string',
      instanceStorage: 'string',
      networkType: 'string',
      instanceId: 'string',
      lockMode: 'string',
      instanceDescription: 'string',
      regionId: 'string',
      gmtCreated: 'string',
      instanceAlias: 'string',
      instanceTps: 'string',
      expiredTime: 'number',
      zoneId: 'string',
      instanceStatus: 'string',
      gmtExpire: 'string',
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
      'cn-qingdao': "hitsdb.aliyuncs.com",
      'cn-beijing': "hitsdb.aliyuncs.com",
      'cn-hangzhou': "hitsdb.aliyuncs.com",
      'cn-shanghai': "hitsdb.aliyuncs.com",
      'cn-shenzhen': "hitsdb.aliyuncs.com",
      'cn-hongkong': "hitsdb.aliyuncs.com",
      'ap-southeast-1': "hitsdb.aliyuncs.com",
      'us-west-1': "hitsdb.aliyuncs.com",
      'us-east-1': "hitsdb.aliyuncs.com",
      'cn-shanghai-finance-1': "hitsdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "hitsdb.aliyuncs.com",
      'ap-northeast-2-pop': "hitsdb.aliyuncs.com",
      'cn-beijing-finance-1': "hitsdb.aliyuncs.com",
      'cn-beijing-finance-pop': "hitsdb.aliyuncs.com",
      'cn-beijing-gov-1': "hitsdb.aliyuncs.com",
      'cn-beijing-nu16-b01': "hitsdb.aliyuncs.com",
      'cn-chengdu': "hitsdb.aliyuncs.com",
      'cn-edge-1': "hitsdb.aliyuncs.com",
      'cn-fujian': "hitsdb.aliyuncs.com",
      'cn-haidian-cm12-c01': "hitsdb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hitsdb.aliyuncs.com",
      'cn-hangzhou-finance': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hitsdb.aliyuncs.com",
      'cn-hangzhou-test-306': "hitsdb.aliyuncs.com",
      'cn-hongkong-finance-pop': "hitsdb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "hitsdb.aliyuncs.com",
      'cn-qingdao-nebula': "hitsdb.aliyuncs.com",
      'cn-shanghai-et15-b01': "hitsdb.aliyuncs.com",
      'cn-shanghai-et2-b01': "hitsdb.aliyuncs.com",
      'cn-shanghai-inner': "hitsdb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hitsdb.aliyuncs.com",
      'cn-shenzhen-inner': "hitsdb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hitsdb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hitsdb.aliyuncs.com",
      'cn-wuhan': "hitsdb.aliyuncs.com",
      'cn-wulanchabu': "hitsdb.aliyuncs.com",
      'cn-yushanfang': "hitsdb.aliyuncs.com",
      'cn-zhangbei': "hitsdb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hitsdb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hitsdb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hitsdb.aliyuncs.com",
      'eu-west-1-oxs': "hitsdb.aliyuncs.com",
      'me-east-1': "hitsdb.aliyuncs.com",
      'rus-west-1-pop': "hitsdb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hitsdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createHiTSDBInstanceWithOptions(request: CreateHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHiTSDBInstanceResponse>(await this.doRPCRequest("CreateHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHiTSDBInstanceResponse({}));
  }

  async createHiTSDBInstance(request: CreateHiTSDBInstanceRequest): Promise<CreateHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHiTSDBInstanceWithOptions(request, runtime);
  }

  async deleteHiTSDBInstanceWithOptions(request: DeleteHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHiTSDBInstanceResponse>(await this.doRPCRequest("DeleteHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHiTSDBInstanceResponse({}));
  }

  async deleteHiTSDBInstance(request: DeleteHiTSDBInstanceRequest): Promise<DeleteHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHiTSDBInstanceWithOptions(request, runtime);
  }

  async describeHiTSDBInstanceWithOptions(request: DescribeHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiTSDBInstanceResponse>(await this.doRPCRequest("DescribeHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiTSDBInstanceResponse({}));
  }

  async describeHiTSDBInstance(request: DescribeHiTSDBInstanceRequest): Promise<DescribeHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceWithOptions(request, runtime);
  }

  async describeHiTSDBInstanceListWithOptions(request: DescribeHiTSDBInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiTSDBInstanceListResponse>(await this.doRPCRequest("DescribeHiTSDBInstanceList", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiTSDBInstanceListResponse({}));
  }

  async describeHiTSDBInstanceList(request: DescribeHiTSDBInstanceListRequest): Promise<DescribeHiTSDBInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceListWithOptions(request, runtime);
  }

  async modifyHiTSDBInstanceClassWithOptions(request: ModifyHiTSDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHiTSDBInstanceClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHiTSDBInstanceClassResponse>(await this.doRPCRequest("ModifyHiTSDBInstanceClass", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHiTSDBInstanceClassResponse({}));
  }

  async modifyHiTSDBInstanceClass(request: ModifyHiTSDBInstanceClassRequest): Promise<ModifyHiTSDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHiTSDBInstanceClassWithOptions(request, runtime);
  }

  async renameHiTSDBInstanceAliasWithOptions(request: RenameHiTSDBInstanceAliasRequest, runtime: $Util.RuntimeOptions): Promise<RenameHiTSDBInstanceAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameHiTSDBInstanceAliasResponse>(await this.doRPCRequest("RenameHiTSDBInstanceAlias", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenameHiTSDBInstanceAliasResponse({}));
  }

  async renameHiTSDBInstanceAlias(request: RenameHiTSDBInstanceAliasRequest): Promise<RenameHiTSDBInstanceAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameHiTSDBInstanceAliasWithOptions(request, runtime);
  }

}
