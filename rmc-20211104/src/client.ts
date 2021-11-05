// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SearchResourcesRequest extends $tea.Model {
  filter?: SearchResourcesRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchResourcesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBody extends $tea.Model {
  filters?: SearchResourcesResponseBodyFilters[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resources?: SearchResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': SearchResourcesResponseBodyFilters },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': SearchResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequestFilter extends $tea.Model {
  key?: string;
  matchType?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyFilters extends $tea.Model {
  key?: string;
  matchType?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyResourcesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyResources extends $tea.Model {
  accountId?: string;
  createTime?: string;
  ipAddresses?: string[];
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  tags?: SearchResourcesResponseBodyResourcesTags[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': SearchResourcesResponseBodyResourcesTags },
      zoneId: 'string',
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
    this._endpoint = this.getEndpoint("rmc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async searchResourcesWithOptions(request: SearchResourcesRequest, runtime: $Util.RuntimeOptions): Promise<SearchResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchResourcesResponse>(await this.doRPCRequest("SearchResources", "2021-11-04", "HTTPS", "POST", "AK", "json", req, runtime), new SearchResourcesResponse({}));
  }

  async searchResources(request: SearchResourcesRequest): Promise<SearchResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchResourcesWithOptions(request, runtime);
  }

}
