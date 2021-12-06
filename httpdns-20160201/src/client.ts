// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDomainRequest extends $tea.Model {
  accountId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  accountId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  accountId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: DescribeDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $tea.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetAccountInfoResponseBodyAccountInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryRequest extends $tea.Model {
  granularity?: string;
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      timeSpan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBody extends $tea.Model {
  requestId?: string;
  resolveSummary?: GetResolveCountSummaryResponseBodyResolveSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveSummary: 'ResolveSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveSummary: GetResolveCountSummaryResponseBodyResolveSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResolveCountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResolveCountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsRequest extends $tea.Model {
  domainName?: string;
  granularity?: string;
  protocolName?: string;
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      granularity: 'Granularity',
      protocolName: 'ProtocolName',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      granularity: 'string',
      protocolName: 'string',
      timeSpan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBody extends $tea.Model {
  dataPoints?: GetResolveStatisticsResponseBodyDataPoints;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: GetResolveStatisticsResponseBodyDataPoints,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResolveStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResolveStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  domainInfos?: ListDomainsResponseBodyDomainInfos;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: ListDomainsResponseBodyDomainInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomain extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $tea.Model {
  domain?: DescribeDomainsResponseBodyDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyAccountInfo extends $tea.Model {
  accountId?: string;
  monthFreeCount?: number;
  monthHttpsResolveCount?: number;
  monthResolveCount?: number;
  signSecret?: string;
  signedCount?: number;
  unsignedCount?: number;
  unsignedEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      monthFreeCount: 'MonthFreeCount',
      monthHttpsResolveCount: 'MonthHttpsResolveCount',
      monthResolveCount: 'MonthResolveCount',
      signSecret: 'SignSecret',
      signedCount: 'SignedCount',
      unsignedCount: 'UnsignedCount',
      unsignedEnabled: 'UnsignedEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      monthFreeCount: 'number',
      monthHttpsResolveCount: 'number',
      monthResolveCount: 'number',
      signSecret: 'string',
      signedCount: 'number',
      unsignedCount: 'number',
      unsignedEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBodyResolveSummary extends $tea.Model {
  http?: number;
  http6?: number;
  https?: number;
  https6?: number;
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      http6: 'Http6',
      https: 'Https',
      https6: 'Https6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: 'number',
      http6: 'number',
      https: 'number',
      https6: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBodyDataPointsDataPoint extends $tea.Model {
  count?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBodyDataPoints extends $tea.Model {
  dataPoint?: GetResolveStatisticsResponseBodyDataPointsDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': GetResolveStatisticsResponseBodyDataPointsDataPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainInfosDomainInfo extends $tea.Model {
  domainName?: string;
  resolved?: number;
  resolved6?: number;
  resolvedHttps?: number;
  resolvedHttps6?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      resolved: 'Resolved',
      resolved6: 'Resolved6',
      resolvedHttps: 'ResolvedHttps',
      resolvedHttps6: 'ResolvedHttps6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      resolved: 'number',
      resolved6: 'number',
      resolvedHttps: 'number',
      resolvedHttps6: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainInfos extends $tea.Model {
  domainInfo?: ListDomainsResponseBodyDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainInfosDomainInfo },
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
    this._endpoint = this.getEndpoint("httpdns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccountId"] = request.accountId;
    query["DomainName"] = request.domainName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddDomainResponse>(await this.callApi(params, req, runtime), new AddDomainResponse({}));
  }

  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccountId"] = request.accountId;
    query["DomainName"] = request.domainName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccountId"] = request.accountId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async getAccountInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountInfo",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAccountInfoResponse>(await this.callApi(params, req, runtime), new GetAccountInfoResponse({}));
  }

  async getAccountInfo(): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  async getResolveCountSummaryWithOptions(request: GetResolveCountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveCountSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    query["Granularity"] = request.granularity;
    query["TimeSpan"] = request.timeSpan;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetResolveCountSummary",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResolveCountSummaryResponse>(await this.callApi(params, req, runtime), new GetResolveCountSummaryResponse({}));
  }

  async getResolveCountSummary(request: GetResolveCountSummaryRequest): Promise<GetResolveCountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  async getResolveStatisticsWithOptions(request: GetResolveStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DomainName"] = request.domainName;
    query["Granularity"] = request.granularity;
    query["ProtocolName"] = request.protocolName;
    query["TimeSpan"] = request.timeSpan;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetResolveStatistics",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResolveStatisticsResponse>(await this.callApi(params, req, runtime), new GetResolveStatisticsResponse({}));
  }

  async getResolveStatistics(request: GetResolveStatisticsRequest): Promise<GetResolveStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

}
