// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class LingJieApiInvokeCount extends $tea.Model {
  apiName?: string;
  metrics?: LingJieApiInvokeCountMetrics[];
  projectId?: string;
  region?: string;
  statisticsUnit?: string;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      metrics: 'Metrics',
      projectId: 'ProjectId',
      region: 'Region',
      statisticsUnit: 'StatisticsUnit',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      metrics: { 'type': 'array', 'itemType': LingJieApiInvokeCountMetrics },
      projectId: 'string',
      region: 'string',
      statisticsUnit: 'string',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieApiInvokeQps extends $tea.Model {
  apiName?: string;
  metrics?: LingJieApiInvokeQpsMetrics[];
  projectId?: string;
  region?: string;
  statisticsUnit?: string;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      metrics: 'Metrics',
      projectId: 'ProjectId',
      region: 'Region',
      statisticsUnit: 'StatisticsUnit',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      metrics: { 'type': 'array', 'itemType': LingJieApiInvokeQpsMetrics },
      projectId: 'string',
      region: 'string',
      statisticsUnit: 'string',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieOpenStatus extends $tea.Model {
  commoditiesOpenStatus?: LingJieOpenStatusCommoditiesOpenStatus[];
  openTime?: string;
  productConsoleUrl?: string;
  productEnabled?: boolean;
  productMonitorUrl?: string;
  productWikiUrl?: string;
  static names(): { [key: string]: string } {
    return {
      commoditiesOpenStatus: 'CommoditiesOpenStatus',
      openTime: 'OpenTime',
      productConsoleUrl: 'ProductConsoleUrl',
      productEnabled: 'ProductEnabled',
      productMonitorUrl: 'ProductMonitorUrl',
      productWikiUrl: 'ProductWikiUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commoditiesOpenStatus: { 'type': 'array', 'itemType': LingJieOpenStatusCommoditiesOpenStatus },
      openTime: 'string',
      productConsoleUrl: 'string',
      productEnabled: 'boolean',
      productMonitorUrl: 'string',
      productWikiUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieOpenStatusDetail extends $tea.Model {
  apiList?: LingJieOpenStatusDetailApiList[];
  commodityConcurrentLimitTips?: string;
  commodityHasOpen?: boolean;
  commodityOpenUrl?: string;
  commodityUsageTips?: string;
  userStopMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      commodityConcurrentLimitTips: 'CommodityConcurrentLimitTips',
      commodityHasOpen: 'CommodityHasOpen',
      commodityOpenUrl: 'CommodityOpenUrl',
      commodityUsageTips: 'CommodityUsageTips',
      userStopMode: 'UserStopMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': LingJieOpenStatusDetailApiList },
      commodityConcurrentLimitTips: 'string',
      commodityHasOpen: 'boolean',
      commodityOpenUrl: 'string',
      commodityUsageTips: 'string',
      userStopMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class News extends $tea.Model {
  content?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  last?: boolean;
  pic?: string;
  sort?: number;
  status?: number;
  tags?: string;
  title?: string;
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      last: 'Last',
      pic: 'Pic',
      sort: 'Sort',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      last: 'boolean',
      pic: 'string',
      sort: 'number',
      status: 'number',
      tags: 'string',
      title: 'string',
      type: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQpsDetail extends $tea.Model {
  apiName?: string;
  day?: string;
  qps?: number;
  qpsRule?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      day: 'Day',
      qps: 'Qps',
      qpsRule: 'QpsRule',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      day: 'string',
      qps: 'number',
      qpsRule: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSDKInstanceRequest extends $tea.Model {
  bundleId?: string;
  pk?: string;
  platform?: string;
  recipe?: string;
  validFrom?: number;
  validTo?: number;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      pk: 'Pk',
      platform: 'Platform',
      recipe: 'Recipe',
      validFrom: 'ValidFrom',
      validTo: 'ValidTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      pk: 'string',
      platform: 'string',
      recipe: 'string',
      validFrom: 'number',
      validTo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSDKInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  httpCode?: number;
  ok?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      ok: 'Ok',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      ok: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSDKInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSDKInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSDKInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSDKInstanceDebugInfoRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSDKInstanceDebugInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetSDKInstanceDebugInfoResponseBodyData;
  errorMessage?: string;
  httpCode?: number;
  ok?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      ok: 'Ok',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSDKInstanceDebugInfoResponseBodyData,
      errorMessage: 'string',
      httpCode: 'number',
      ok: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSDKInstanceDebugInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSDKInstanceDebugInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSDKInstanceDebugInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySDKInstancesRequest extends $tea.Model {
  codeList?: string;
  createdAfterDate?: string;
  createdBeforeDate?: string;
  pageNumber?: number;
  pageSize?: number;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      codeList: 'CodeList',
      createdAfterDate: 'CreatedAfterDate',
      createdBeforeDate: 'CreatedBeforeDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeList: 'string',
      createdAfterDate: 'string',
      createdBeforeDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySDKInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySDKInstancesResponseBodyData;
  errorMessage?: string;
  httpCode?: number;
  ok?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      ok: 'Ok',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySDKInstancesResponseBodyData,
      errorMessage: 'string',
      httpCode: 'number',
      ok: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySDKInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySDKInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySDKInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSDKInstanceProductionRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSDKInstanceProductionResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  httpCode?: number;
  ok?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      ok: 'Ok',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      ok: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSDKInstanceProductionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartSDKInstanceProductionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartSDKInstanceProductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieApiInvokeCountMetrics extends $tea.Model {
  count?: number;
  day?: string;
  hour?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      day: 'Day',
      hour: 'Hour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      day: 'string',
      hour: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieApiInvokeQpsMetrics extends $tea.Model {
  day?: string;
  hour?: string;
  maxQps?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      maxQps: 'MaxQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      hour: 'string',
      maxQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieOpenStatusCommoditiesOpenStatus extends $tea.Model {
  cnName?: string;
  commodity?: string;
  describe?: string;
  detailPage?: string;
  open?: boolean;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      commodity: 'Commodity',
      describe: 'Describe',
      detailPage: 'DetailPage',
      open: 'Open',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      commodity: 'string',
      describe: 'string',
      detailPage: 'string',
      open: 'boolean',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieOpenStatusDetailApiListMoreOperations extends $tea.Model {
  clickUrl?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      clickUrl: 'ClickUrl',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickUrl: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LingJieOpenStatusDetailApiList extends $tea.Model {
  cnName?: string;
  concurrentLimit?: string;
  enName?: string;
  moreOperations?: LingJieOpenStatusDetailApiListMoreOperations[];
  statisticsUnit?: string;
  status?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      concurrentLimit: 'ConcurrentLimit',
      enName: 'EnName',
      moreOperations: 'MoreOperations',
      statisticsUnit: 'StatisticsUnit',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      concurrentLimit: 'string',
      enName: 'string',
      moreOperations: { 'type': 'array', 'itemType': LingJieOpenStatusDetailApiListMoreOperations },
      statisticsUnit: 'string',
      status: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSDKInstanceDebugInfoResponseBodyDataEvents extends $tea.Model {
  content?: string;
  id?: number;
  success?: boolean;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      success: 'boolean',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSDKInstanceDebugInfoResponseBodyData extends $tea.Model {
  bundleId?: string;
  createdAt?: string;
  events?: GetSDKInstanceDebugInfoResponseBodyDataEvents[];
  instanceId?: string;
  latestBuild?: string;
  platform?: string;
  recipe?: string;
  status?: string;
  updatedAt?: string;
  validFromDate?: string;
  validToDate?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      createdAt: 'CreatedAt',
      events: 'Events',
      instanceId: 'InstanceId',
      latestBuild: 'LatestBuild',
      platform: 'Platform',
      recipe: 'Recipe',
      status: 'Status',
      updatedAt: 'UpdatedAt',
      validFromDate: 'ValidFromDate',
      validToDate: 'ValidToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      createdAt: 'string',
      events: { 'type': 'array', 'itemType': GetSDKInstanceDebugInfoResponseBodyDataEvents },
      instanceId: 'string',
      latestBuild: 'string',
      platform: 'string',
      recipe: 'string',
      status: 'string',
      updatedAt: 'string',
      validFromDate: 'string',
      validToDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySDKInstancesResponseBodyDataContent extends $tea.Model {
  bundleId?: string;
  createdAt?: string;
  instanceId?: string;
  latestBuild?: string;
  platform?: string;
  recipe?: string;
  status?: string;
  updatedAt?: string;
  userId?: string;
  validFromDate?: string;
  validToDate?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      createdAt: 'CreatedAt',
      instanceId: 'InstanceId',
      latestBuild: 'LatestBuild',
      platform: 'Platform',
      recipe: 'Recipe',
      status: 'Status',
      updatedAt: 'UpdatedAt',
      userId: 'UserId',
      validFromDate: 'ValidFromDate',
      validToDate: 'ValidToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      createdAt: 'string',
      instanceId: 'string',
      latestBuild: 'string',
      platform: 'string',
      recipe: 'string',
      status: 'string',
      updatedAt: 'string',
      userId: 'string',
      validFromDate: 'string',
      validToDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySDKInstancesResponseBodyData extends $tea.Model {
  content?: QuerySDKInstancesResponseBodyDataContent[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': QuerySDKInstancesResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("viapi-oxs-cross", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createSDKInstanceWithOptions(request: CreateSDKInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSDKInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.recipe)) {
      query["Recipe"] = request.recipe;
    }

    if (!Util.isUnset(request.validFrom)) {
      query["ValidFrom"] = request.validFrom;
    }

    if (!Util.isUnset(request.validTo)) {
      query["ValidTo"] = request.validTo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSDKInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSDKInstanceResponse>(await this.callApi(params, req, runtime), new CreateSDKInstanceResponse({}));
  }

  async createSDKInstance(request: CreateSDKInstanceRequest): Promise<CreateSDKInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSDKInstanceWithOptions(request, runtime);
  }

  async getSDKInstanceDebugInfoWithOptions(request: GetSDKInstanceDebugInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSDKInstanceDebugInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSDKInstanceDebugInfo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSDKInstanceDebugInfoResponse>(await this.callApi(params, req, runtime), new GetSDKInstanceDebugInfoResponse({}));
  }

  async getSDKInstanceDebugInfo(request: GetSDKInstanceDebugInfoRequest): Promise<GetSDKInstanceDebugInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSDKInstanceDebugInfoWithOptions(request, runtime);
  }

  async querySDKInstancesWithOptions(request: QuerySDKInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QuerySDKInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.codeList)) {
      query["CodeList"] = request.codeList;
    }

    if (!Util.isUnset(request.createdAfterDate)) {
      query["CreatedAfterDate"] = request.createdAfterDate;
    }

    if (!Util.isUnset(request.createdBeforeDate)) {
      query["CreatedBeforeDate"] = request.createdBeforeDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySDKInstances",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySDKInstancesResponse>(await this.callApi(params, req, runtime), new QuerySDKInstancesResponse({}));
  }

  async querySDKInstances(request: QuerySDKInstancesRequest): Promise<QuerySDKInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySDKInstancesWithOptions(request, runtime);
  }

  async startSDKInstanceProductionWithOptions(request: StartSDKInstanceProductionRequest, runtime: $Util.RuntimeOptions): Promise<StartSDKInstanceProductionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartSDKInstanceProduction",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSDKInstanceProductionResponse>(await this.callApi(params, req, runtime), new StartSDKInstanceProductionResponse({}));
  }

  async startSDKInstanceProduction(request: StartSDKInstanceProductionRequest): Promise<StartSDKInstanceProductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSDKInstanceProductionWithOptions(request, runtime);
  }

}
