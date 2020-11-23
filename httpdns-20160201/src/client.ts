// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetResolveCountSummaryRequest extends $tea.Model {
  granularity: string;
  timeSpan: number;
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

export class GetResolveCountSummaryResponse extends $tea.Model {
  requestId: string;
  resolveSummary: GetResolveCountSummaryResponseResolveSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveSummary: 'ResolveSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveSummary: GetResolveCountSummaryResponseResolveSummary,
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

export class ListDomainsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  domainInfos: ListDomainsResponseDomainInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      domainInfos: 'DomainInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      domainInfos: ListDomainsResponseDomainInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsRequest extends $tea.Model {
  domainName: string;
  granularity: string;
  timeSpan: number;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      granularity: 'Granularity',
      timeSpan: 'TimeSpan',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      granularity: 'string',
      timeSpan: 'number',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponse extends $tea.Model {
  requestId: string;
  dataPoints: GetResolveStatisticsResponseDataPoints;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataPoints: 'DataPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataPoints: GetResolveStatisticsResponseDataPoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponse extends $tea.Model {
  requestId: string;
  accountInfo: GetAccountInfoResponseAccountInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountInfo: 'AccountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountInfo: GetAccountInfoResponseAccountInfo,
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

export class DescribeDomainsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  domains: DescribeDomainsResponseDomains;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      domains: DescribeDomainsResponseDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  accountId?: string;
  domainName: string;
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

export class DeleteDomainResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $tea.Model {
  accountId?: string;
  domainName: string;
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

export class AddDomainResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseResolveSummary extends $tea.Model {
  http: number;
  https: number;
  http6: number;
  https6: number;
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
      http6: 'Http6',
      https6: 'Https6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: 'number',
      https: 'number',
      http6: 'number',
      https6: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseDomainInfosDomainInfo extends $tea.Model {
  domainName: string;
  resolved: number;
  resolvedHttps: number;
  resolved6: number;
  resolvedHttps6: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      resolved: 'Resolved',
      resolvedHttps: 'ResolvedHttps',
      resolved6: 'Resolved6',
      resolvedHttps6: 'ResolvedHttps6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      resolved: 'number',
      resolvedHttps: 'number',
      resolved6: 'number',
      resolvedHttps6: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseDomainInfos extends $tea.Model {
  domainInfo: ListDomainsResponseDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': ListDomainsResponseDomainInfosDomainInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseDataPointsDataPoint extends $tea.Model {
  time: number;
  count: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseDataPoints extends $tea.Model {
  dataPoint: GetResolveStatisticsResponseDataPointsDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': GetResolveStatisticsResponseDataPointsDataPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseAccountInfo extends $tea.Model {
  accountId: string;
  monthFreeCount: number;
  monthHttpsResolveCount: number;
  monthResolveCount: number;
  signSecret: string;
  unsignedEnabled: boolean;
  signedCount: number;
  unsignedCount: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      monthFreeCount: 'MonthFreeCount',
      monthHttpsResolveCount: 'MonthHttpsResolveCount',
      monthResolveCount: 'MonthResolveCount',
      signSecret: 'SignSecret',
      unsignedEnabled: 'UnsignedEnabled',
      signedCount: 'SignedCount',
      unsignedCount: 'UnsignedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      monthFreeCount: 'number',
      monthHttpsResolveCount: 'number',
      monthResolveCount: 'number',
      signSecret: 'string',
      unsignedEnabled: 'boolean',
      signedCount: 'number',
      unsignedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseDomainsDomain extends $tea.Model {
  domainName: string;
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

export class DescribeDomainsResponseDomains extends $tea.Model {
  domain: DescribeDomainsResponseDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseDomainsDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("httpdns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getResolveCountSummaryWithOptions(request: GetResolveCountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveCountSummaryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResolveCountSummaryResponse>(await this.doRequest("GetResolveCountSummary", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new GetResolveCountSummaryResponse({}));
  }

  async getResolveCountSummary(request: GetResolveCountSummaryRequest): Promise<GetResolveCountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDomainsResponse>(await this.doRequest("ListDomains", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new ListDomainsResponse({}));
  }

  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  async getResolveStatisticsWithOptions(request: GetResolveStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetResolveStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResolveStatisticsResponse>(await this.doRequest("GetResolveStatistics", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new GetResolveStatisticsResponse({}));
  }

  async getResolveStatistics(request: GetResolveStatisticsRequest): Promise<GetResolveStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  async getAccountInfoWithOptions(request: GetAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAccountInfoResponse>(await this.doRequest("GetAccountInfo", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new GetAccountInfoResponse({}));
  }

  async getAccountInfo(request: GetAccountInfoRequest): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainsResponse>(await this.doRequest("DescribeDomains", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDomainResponse>(await this.doRequest("DeleteDomain", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDomainResponse>(await this.doRequest("AddDomain", "HTTPS", "POST", "2016-02-01", "AK", null, $tea.toMap(request), runtime), new AddDomainResponse({}));
  }

  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
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

}
