// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeRegionsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      acceptLanguage: 'string',
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

export class ListTagKeysRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  regionId?: string;
  nextToken?: string;
  pageSize?: number;
  category?: string;
  resourceType?: string;
  tagProduct?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      category: 'Category',
      resourceType: 'ResourceType',
      tagProduct: 'TagProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      nextToken: 'string',
      pageSize: 'number',
      category: 'string',
      resourceType: 'string',
      tagProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  keys?: ListTagKeysResponseBodyKeys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      keys: ListTagKeysResponseBodyKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  regionId?: string;
  nextToken?: string;
  pageSize?: number;
  tags?: string;
  category?: string;
  resourceARN?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      tags: 'Tags',
      category: 'Category',
      resourceARN: 'ResourceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      nextToken: 'string',
      pageSize: 'number',
      tags: 'string',
      category: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  regionId?: string;
  key?: string;
  nextToken?: string;
  pageSize?: number;
  resourceType?: string;
  tagProduct?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      key: 'Key',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      tagProduct: 'TagProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      key: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceType: 'string',
      tagProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  values?: ListTagValuesResponseBodyValues;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: ListTagValuesResponseBodyValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  regionId?: string;
  tags?: string;
  resourceARN?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      tags: 'Tags',
      resourceARN: 'ResourceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      tags: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  failedResources?: TagResourcesResponseBodyFailedResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failedResources: 'FailedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failedResources: TagResourcesResponseBodyFailedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  regionId?: string;
  resourceARN?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  failedResources?: UntagResourcesResponseBodyFailedResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failedResources: 'FailedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failedResources: UntagResourcesResponseBodyFailedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
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

export class ListTagKeysResponseBodyKeysKey extends $tea.Model {
  key?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $tea.Model {
  key?: ListTagKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeysKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTags extends $tea.Model {
  key?: string;
  value?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceARN?: string;
  tags?: ListTagResourcesResponseBodyTagResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyValues extends $tea.Model {
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResourceResult extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResource extends $tea.Model {
  resourceARN?: string;
  result?: TagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: TagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResources extends $tea.Model {
  failedResource?: TagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': TagResourcesResponseBodyFailedResourcesFailedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResourceResult extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResource extends $tea.Model {
  resourceARN?: string;
  result?: UntagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: UntagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResources extends $tea.Model {
  failedResource?: UntagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': UntagResourcesResponseBodyFailedResourcesFailedResource },
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
      'cn-qingdao': "tag.aliyuncs.com",
      'cn-beijing': "tag.aliyuncs.com",
      'cn-hangzhou': "tag.aliyuncs.com",
      'cn-shanghai': "tag.aliyuncs.com",
      'cn-shenzhen': "tag.aliyuncs.com",
      'cn-hongkong': "tag.aliyuncs.com",
      'ap-southeast-1': "tag.aliyuncs.com",
      'us-west-1': "tag.aliyuncs.com",
      'us-east-1': "tag.aliyuncs.com",
      'cn-hangzhou-finance': "tag.aliyuncs.com",
      'cn-shanghai-finance-1': "tag.aliyuncs.com",
      'ap-northeast-2-pop': "tag.aliyuncs.com",
      'cn-beijing-finance-1': "tag.aliyuncs.com",
      'cn-beijing-finance-pop': "tag.aliyuncs.com",
      'cn-beijing-gov-1': "tag.aliyuncs.com",
      'cn-beijing-nu16-b01': "tag.aliyuncs.com",
      'cn-edge-1': "tag.aliyuncs.com",
      'cn-fujian': "tag.aliyuncs.com",
      'cn-haidian-cm12-c01': "tag.aliyuncs.com",
      'cn-hangzhou-bj-b01': "tag.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "tag.aliyuncs.com",
      'cn-hangzhou-test-306': "tag.aliyuncs.com",
      'cn-hongkong-finance-pop': "tag.aliyuncs.com",
      'cn-qingdao-nebula': "tag.aliyuncs.com",
      'cn-shanghai-et15-b01': "tag.aliyuncs.com",
      'cn-shanghai-et2-b01': "tag.aliyuncs.com",
      'cn-shanghai-inner': "tag.aliyuncs.com",
      'cn-shanghai-internal-test-1': "tag.aliyuncs.com",
      'cn-shenzhen-finance-1': "tag.aliyuncs.com",
      'cn-shenzhen-inner': "tag.aliyuncs.com",
      'cn-shenzhen-st4-d01': "tag.aliyuncs.com",
      'cn-shenzhen-su18-b01': "tag.aliyuncs.com",
      'cn-wuhan': "tag.aliyuncs.com",
      'cn-yushanfang': "tag.aliyuncs.com",
      'cn-zhangbei-na61-b01': "tag.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "tag.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "tag.aliyuncs.com",
      'eu-west-1-oxs': "tag.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "tag.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
