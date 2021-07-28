// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachEaiRequest extends $tea.Model {
  regionId?: string;
  elasticAcceleratedInstanceId?: string;
  clientInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      clientInstanceId: 'ClientInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      elasticAcceleratedInstanceId: 'string',
      clientInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponseBody extends $tea.Model {
  requestId?: string;
  elasticAcceleratedInstanceId?: string;
  clientInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      clientInstanceId: 'ClientInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticAcceleratedInstanceId: 'string',
      clientInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiRequest extends $tea.Model {
  regionId?: string;
  instanceType?: string;
  clientToken?: string;
  instanceName?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceType: 'InstanceType',
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceType: 'string',
      clientToken: 'string',
      instanceName: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiResponseBody extends $tea.Model {
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllRequest extends $tea.Model {
  regionId?: string;
  eaiInstanceType?: string;
  clientVSwitchId?: string;
  clientSecurityGroupId?: string;
  clientImageId?: string;
  clientInstanceType?: string;
  clientZoneId?: string;
  clientInstanceName?: string;
  clientPassword?: string;
  clientInternetMaxBandwidthIn?: number;
  clientInternetMaxBandwidthOut?: number;
  clientSystemDiskCategory?: string;
  clientSystemDiskSize?: number;
  clientToken?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      eaiInstanceType: 'EaiInstanceType',
      clientVSwitchId: 'ClientVSwitchId',
      clientSecurityGroupId: 'ClientSecurityGroupId',
      clientImageId: 'ClientImageId',
      clientInstanceType: 'ClientInstanceType',
      clientZoneId: 'ClientZoneId',
      clientInstanceName: 'ClientInstanceName',
      clientPassword: 'ClientPassword',
      clientInternetMaxBandwidthIn: 'ClientInternetMaxBandwidthIn',
      clientInternetMaxBandwidthOut: 'ClientInternetMaxBandwidthOut',
      clientSystemDiskCategory: 'ClientSystemDiskCategory',
      clientSystemDiskSize: 'ClientSystemDiskSize',
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      eaiInstanceType: 'string',
      clientVSwitchId: 'string',
      clientSecurityGroupId: 'string',
      clientImageId: 'string',
      clientInstanceType: 'string',
      clientZoneId: 'string',
      clientInstanceName: 'string',
      clientPassword: 'string',
      clientInternetMaxBandwidthIn: 'number',
      clientInternetMaxBandwidthOut: 'number',
      clientSystemDiskCategory: 'string',
      clientSystemDiskSize: 'number',
      clientToken: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllResponseBody extends $tea.Model {
  requestId?: string;
  elasticAcceleratedInstanceId?: string;
  clientInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      clientInstanceId: 'ClientInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticAcceleratedInstanceId: 'string',
      clientInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEaiAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEaiAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiRequest extends $tea.Model {
  regionId?: string;
  elasticAcceleratedInstanceId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      elasticAcceleratedInstanceId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiResponseBody extends $tea.Model {
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

export class DeleteEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllRequest extends $tea.Model {
  regionId?: string;
  elasticAcceleratedInstanceId?: string;
  clientInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      clientInstanceId: 'ClientInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      elasticAcceleratedInstanceId: 'string',
      clientInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllResponseBody extends $tea.Model {
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

export class DeleteEaiAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEaiAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEaiAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisRequest extends $tea.Model {
  regionId?: string;
  elasticAcceleratedInstanceIds?: string;
  instanceName?: string;
  status?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      elasticAcceleratedInstanceIds: 'ElasticAcceleratedInstanceIds',
      instanceName: 'InstanceName',
      status: 'Status',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      elasticAcceleratedInstanceIds: 'string',
      instanceName: 'string',
      status: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  instances?: DescribeEaisResponseBodyInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      instances: DescribeEaisResponseBodyInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEaisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEaisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiRequest extends $tea.Model {
  regionId?: string;
  elasticAcceleratedInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      elasticAcceleratedInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiResponseBody extends $tea.Model {
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

export class DetachEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateIpRequest extends $tea.Model {
  regionId?: string;
  clientInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInstanceId: 'ClientInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateIpResponseBody extends $tea.Model {
  requestId?: string;
  privateIp?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      privateIp: 'PrivateIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      privateIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPrivateIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPrivateIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstanceTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstanceTags extends $tea.Model {
  tag?: DescribeEaisResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstance extends $tea.Model {
  status?: string;
  creationTime?: string;
  clientInstanceName?: string;
  description?: string;
  elasticAcceleratedInstanceId?: string;
  instanceName?: string;
  clientInstanceType?: string;
  clientInstanceId?: string;
  zoneId?: string;
  instanceType?: string;
  regionId?: string;
  tags?: DescribeEaisResponseBodyInstancesInstanceTags;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      clientInstanceName: 'ClientInstanceName',
      description: 'Description',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      instanceName: 'InstanceName',
      clientInstanceType: 'ClientInstanceType',
      clientInstanceId: 'ClientInstanceId',
      zoneId: 'ZoneId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      clientInstanceName: 'string',
      description: 'string',
      elasticAcceleratedInstanceId: 'string',
      instanceName: 'string',
      clientInstanceType: 'string',
      clientInstanceId: 'string',
      zoneId: 'string',
      instanceType: 'string',
      regionId: 'string',
      tags: DescribeEaisResponseBodyInstancesInstanceTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstances extends $tea.Model {
  instance?: DescribeEaisResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
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
      'ap-northeast-1': "eais.aliyuncs.com",
      'ap-northeast-2-pop': "eais.aliyuncs.com",
      'ap-south-1': "eais.aliyuncs.com",
      'ap-southeast-1': "eais.aliyuncs.com",
      'ap-southeast-2': "eais.aliyuncs.com",
      'ap-southeast-3': "eais.aliyuncs.com",
      'ap-southeast-5': "eais.aliyuncs.com",
      'cn-beijing-finance-1': "eais.aliyuncs.com",
      'cn-beijing-finance-pop': "eais.aliyuncs.com",
      'cn-beijing-gov-1': "eais.aliyuncs.com",
      'cn-beijing-nu16-b01': "eais.aliyuncs.com",
      'cn-edge-1': "eais.aliyuncs.com",
      'cn-fujian': "eais.aliyuncs.com",
      'cn-haidian-cm12-c01': "eais.aliyuncs.com",
      'cn-hangzhou-bj-b01': "eais.aliyuncs.com",
      'cn-hangzhou-finance': "eais.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "eais.aliyuncs.com",
      'cn-hangzhou-test-306': "eais.aliyuncs.com",
      'cn-hongkong': "eais.aliyuncs.com",
      'cn-hongkong-finance-pop': "eais.aliyuncs.com",
      'cn-huhehaote': "eais.aliyuncs.com",
      'cn-huhehaote-nebula-1': "eais.aliyuncs.com",
      'cn-north-2-gov-1': "eais.aliyuncs.com",
      'cn-qingdao': "eais.aliyuncs.com",
      'cn-qingdao-nebula': "eais.aliyuncs.com",
      'cn-shanghai-et15-b01': "eais.aliyuncs.com",
      'cn-shanghai-et2-b01': "eais.aliyuncs.com",
      'cn-shanghai-finance-1': "eais.aliyuncs.com",
      'cn-shanghai-inner': "eais.aliyuncs.com",
      'cn-shanghai-internal-test-1': "eais.aliyuncs.com",
      'cn-shenzhen-finance-1': "eais.aliyuncs.com",
      'cn-shenzhen-inner': "eais.aliyuncs.com",
      'cn-shenzhen-st4-d01': "eais.aliyuncs.com",
      'cn-shenzhen-su18-b01': "eais.aliyuncs.com",
      'cn-wuhan': "eais.aliyuncs.com",
      'cn-wulanchabu': "eais.aliyuncs.com",
      'cn-yushanfang': "eais.aliyuncs.com",
      'cn-zhangbei': "eais.aliyuncs.com",
      'cn-zhangbei-na61-b01': "eais.aliyuncs.com",
      'cn-zhangjiakou': "eais.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "eais.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "eais.aliyuncs.com",
      'eu-central-1': "eais.aliyuncs.com",
      'eu-west-1': "eais.aliyuncs.com",
      'eu-west-1-oxs': "eais.aliyuncs.com",
      'me-east-1': "eais.aliyuncs.com",
      'rus-west-1-pop': "eais.aliyuncs.com",
      'us-east-1': "eais.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eais", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachEaiWithOptions(request: AttachEaiRequest, runtime: $Util.RuntimeOptions): Promise<AttachEaiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachEaiResponse>(await this.doRPCRequest("AttachEai", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new AttachEaiResponse({}));
  }

  async attachEai(request: AttachEaiRequest): Promise<AttachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEaiWithOptions(request, runtime);
  }

  async createEaiWithOptions(request: CreateEaiRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEaiResponse>(await this.doRPCRequest("CreateEai", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEaiResponse({}));
  }

  async createEai(request: CreateEaiRequest): Promise<CreateEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiWithOptions(request, runtime);
  }

  async createEaiAllWithOptions(request: CreateEaiAllRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEaiAllResponse>(await this.doRPCRequest("CreateEaiAll", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEaiAllResponse({}));
  }

  async createEaiAll(request: CreateEaiAllRequest): Promise<CreateEaiAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiAllWithOptions(request, runtime);
  }

  async deleteEaiWithOptions(request: DeleteEaiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEaiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEaiResponse>(await this.doRPCRequest("DeleteEai", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEaiResponse({}));
  }

  async deleteEai(request: DeleteEaiRequest): Promise<DeleteEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiWithOptions(request, runtime);
  }

  async deleteEaiAllWithOptions(request: DeleteEaiAllRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEaiAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEaiAllResponse>(await this.doRPCRequest("DeleteEaiAll", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEaiAllResponse({}));
  }

  async deleteEaiAll(request: DeleteEaiAllRequest): Promise<DeleteEaiAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiAllWithOptions(request, runtime);
  }

  async describeEaisWithOptions(request: DescribeEaisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEaisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEaisResponse>(await this.doRPCRequest("DescribeEais", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEaisResponse({}));
  }

  async describeEais(request: DescribeEaisRequest): Promise<DescribeEaisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEaisWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async detachEaiWithOptions(request: DetachEaiRequest, runtime: $Util.RuntimeOptions): Promise<DetachEaiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachEaiResponse>(await this.doRPCRequest("DetachEai", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new DetachEaiResponse({}));
  }

  async detachEai(request: DetachEaiRequest): Promise<DetachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEaiWithOptions(request, runtime);
  }

  async getPrivateIpWithOptions(request: GetPrivateIpRequest, runtime: $Util.RuntimeOptions): Promise<GetPrivateIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPrivateIpResponse>(await this.doRPCRequest("GetPrivateIp", "2019-06-24", "HTTPS", "POST", "AK", "json", req, runtime), new GetPrivateIpResponse({}));
  }

  async getPrivateIp(request: GetPrivateIpRequest): Promise<GetPrivateIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateIpWithOptions(request, runtime);
  }

}
