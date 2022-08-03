// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListResourceRelationshipsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  sourceRegionId?: string;
  sourceResourceId?: string[];
  sourceResourceType?: string;
  targetResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sourceRegionId: 'SourceRegionId',
      sourceResourceId: 'SourceResourceId',
      sourceResourceType: 'SourceResourceType',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sourceRegionId: 'string',
      sourceResourceId: { 'type': 'array', 'itemType': 'string' },
      sourceResourceType: 'string',
      targetResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationshipsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resourceRelationships?: ListResourceRelationshipsResponseBodyResourceRelationships[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceRelationships: 'ResourceRelationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceRelationships: { 'type': 'array', 'itemType': ListResourceRelationshipsResponseBodyResourceRelationships },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationshipsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceRelationshipsResponseBody;
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
      body: ListResourceRelationshipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequest extends $tea.Model {
  filter?: SearchResourcesRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  sortCriterion?: SearchResourcesRequestSortCriterion;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      sortCriterion: 'SortCriterion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchResourcesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      sortCriterion: SearchResourcesRequestSortCriterion,
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
  statusCode: number;
  body: SearchResourcesResponseBody;
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
      body: SearchResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationshipsResponseBodyResourceRelationships extends $tea.Model {
  accountId?: string;
  sourceRegionId?: string;
  sourceResourceId?: string;
  sourceResourceType?: string;
  targetRegionId?: string;
  targetResourceId?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      sourceRegionId: 'SourceRegionId',
      sourceResourceId: 'SourceResourceId',
      sourceResourceType: 'SourceResourceType',
      targetRegionId: 'TargetRegionId',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      sourceRegionId: 'string',
      sourceResourceId: 'string',
      sourceResourceType: 'string',
      targetRegionId: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
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

export class SearchResourcesRequestSortCriterion extends $tea.Model {
  key?: string;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
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

  async listResourceRelationshipsWithOptions(request: ListResourceRelationshipsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceRelationshipsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sourceRegionId)) {
      query["SourceRegionId"] = request.sourceRegionId;
    }

    if (!Util.isUnset(request.sourceResourceId)) {
      query["SourceResourceId"] = request.sourceResourceId;
    }

    if (!Util.isUnset(request.sourceResourceType)) {
      query["SourceResourceType"] = request.sourceResourceType;
    }

    if (!Util.isUnset(request.targetResourceType)) {
      query["TargetResourceType"] = request.targetResourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceRelationships",
      version: "2021-11-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceRelationshipsResponse>(await this.callApi(params, req, runtime), new ListResourceRelationshipsResponse({}));
  }

  async listResourceRelationships(request: ListResourceRelationshipsRequest): Promise<ListResourceRelationshipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceRelationshipsWithOptions(request, runtime);
  }

  async searchResourcesWithOptions(request: SearchResourcesRequest, runtime: $Util.RuntimeOptions): Promise<SearchResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset($tea.toMap(request.sortCriterion))) {
      query["SortCriterion"] = request.sortCriterion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchResources",
      version: "2021-11-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchResourcesResponse>(await this.callApi(params, req, runtime), new SearchResourcesResponse({}));
  }

  async searchResources(request: SearchResourcesRequest): Promise<SearchResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchResourcesWithOptions(request, runtime);
  }

}
