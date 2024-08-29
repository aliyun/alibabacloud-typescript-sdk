// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDomainRequest extends $tea.Model {
  /**
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
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
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * ADA27798-6911-4B06-AF34-53F62F62XXXX
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDomainResponseBody;
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
      body: AddDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  /**
   * @example
   * 12****
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
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
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * FA8C2599-362D-4113-8FB4-E88A40C2****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  /**
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * A6B3BB61-69CB-50E0-9DC0-0C1658D44A47
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainsResponseBody;
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
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $tea.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountInfoResponseBody;
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
      body: GetAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
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
  /**
   * @example
   * 3106FFF3-3612-542A-B2CD-3CF4CD48****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResolveCountSummaryResponseBody;
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
      body: GetResolveCountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * month
   */
  granularity?: string;
  /**
   * @example
   * https
   */
  protocolName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
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
  /**
   * @example
   * 50F9C40E-188D-B00B-BE2C-7427E531****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResolveStatisticsResponseBody;
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
      body: GetResolveStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  domainInfos?: ListDomainsResponseBodyDomainInfos;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-7427E531****
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
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
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomain extends $tea.Model {
  /**
   * @example
   * www.aliyun.com
   */
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
  /**
   * @example
   * 1337****
   */
  accountId?: string;
  /**
   * @example
   * 1500000
   */
  monthFreeCount?: number;
  /**
   * @example
   * 3
   */
  monthHttpsResolveCount?: number;
  /**
   * @example
   * 9927326
   */
  monthResolveCount?: number;
  /**
   * @example
   * 0
   */
  packageCount?: number;
  /**
   * @example
   * 50F9C40E****
   */
  signSecret?: string;
  /**
   * @example
   * 611523
   */
  signedCount?: number;
  /**
   * @example
   * 1523
   */
  unsignedCount?: number;
  /**
   * @example
   * true
   */
  unsignedEnabled?: boolean;
  /**
   * @example
   * 1
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      monthFreeCount: 'MonthFreeCount',
      monthHttpsResolveCount: 'MonthHttpsResolveCount',
      monthResolveCount: 'MonthResolveCount',
      packageCount: 'PackageCount',
      signSecret: 'SignSecret',
      signedCount: 'SignedCount',
      unsignedCount: 'UnsignedCount',
      unsignedEnabled: 'UnsignedEnabled',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      monthFreeCount: 'number',
      monthHttpsResolveCount: 'number',
      monthResolveCount: 'number',
      packageCount: 'number',
      signSecret: 'string',
      signedCount: 'number',
      unsignedCount: 'number',
      unsignedEnabled: 'boolean',
      userStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBodyResolveSummary extends $tea.Model {
  /**
   * @example
   * 123
   */
  http?: number;
  /**
   * @example
   * 123
   */
  http6?: number;
  /**
   * @example
   * 123
   */
  https?: number;
  /**
   * @example
   * 123
   */
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
  /**
   * @example
   * 9703
   */
  count?: number;
  /**
   * @example
   * 1488297600
   */
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
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * 10
   */
  resolved?: number;
  /**
   * @example
   * 20
   */
  resolved6?: number;
  /**
   * @example
   * 10
   */
  resolvedHttps?: number;
  /**
   * @example
   * 20
   */
  resolvedHttps6?: number;
  timeModified?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      resolved: 'Resolved',
      resolved6: 'Resolved6',
      resolvedHttps: 'ResolvedHttps',
      resolvedHttps6: 'ResolvedHttps6',
      timeModified: 'TimeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      resolved: 'number',
      resolved6: 'number',
      resolvedHttps: 'number',
      resolvedHttps6: 'number',
      timeModified: 'number',
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

  /**
   * @param request - AddDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainResponse
   */
  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDomainResponse>(await this.callApi(params, req, runtime), new AddDomainResponse({}));
  }

  /**
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
  }

  /**
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * @param request - GetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountInfoResponse
   */
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
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountInfoResponse>(await this.callApi(params, req, runtime), new GetAccountInfoResponse({}));
  }

  /**
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  /**
   * @param request - GetResolveCountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummaryWithOptions(request: GetResolveCountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveCountSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResolveCountSummary",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResolveCountSummaryResponse>(await this.callApi(params, req, runtime), new GetResolveCountSummaryResponse({}));
  }

  /**
   * @param request - GetResolveCountSummaryRequest
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummary(request: GetResolveCountSummaryRequest): Promise<GetResolveCountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatisticsWithOptions(request: GetResolveStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!Util.isUnset(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResolveStatistics",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResolveStatisticsResponse>(await this.callApi(params, req, runtime), new GetResolveStatisticsResponse({}));
  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatistics(request: GetResolveStatisticsRequest): Promise<GetResolveStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

}
