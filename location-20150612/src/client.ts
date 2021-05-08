// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeEndpointRequest extends $tea.Model {
  id?: string;
  serviceCode?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      serviceCode: 'ServiceCode',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      serviceCode: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointResponseBody extends $tea.Model {
  type?: string;
  requestId?: string;
  endpoint?: string;
  namespace?: string;
  serivceCode?: string;
  id?: string;
  protocols?: DescribeEndpointResponseBodyProtocols;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      requestId: 'RequestId',
      endpoint: 'Endpoint',
      namespace: 'Namespace',
      serivceCode: 'SerivceCode',
      id: 'Id',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      requestId: 'string',
      endpoint: 'string',
      namespace: 'string',
      serivceCode: 'string',
      id: 'string',
      protocols: DescribeEndpointResponseBodyProtocols,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsRequest extends $tea.Model {
  id?: string;
  serviceCode?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      serviceCode: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  endpoints?: DescribeEndpointsResponseBodyEndpoints;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      endpoints: DescribeEndpointsResponseBodyEndpoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  password?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  regionIds?: DescribeRegionsResponseBodyRegionIds;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      regionIds: DescribeRegionsResponseBodyRegionIds,
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

export class DescribeServicesRequest extends $tea.Model {
  regionId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  services?: DescribeServicesResponseBodyServices;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      services: DescribeServicesResponseBodyServices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsRequest extends $tea.Model {
  namespace?: string;
  id?: string;
  serivceCode?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      id: 'Id',
      serivceCode: 'SerivceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      id: 'string',
      serivceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  endpointList?: ListEndpointsResponseBodyEndpointList;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      endpointList: 'EndpointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      endpointList: ListEndpointsResponseBodyEndpointList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsByIpRequest extends $tea.Model {
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

export class ListEndpointsByIpResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  endpointList?: ListEndpointsByIpResponseBodyEndpointList;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      endpointList: 'EndpointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      endpointList: ListEndpointsByIpResponseBodyEndpointList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsByIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEndpointsByIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEndpointsByIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointResponseBodyProtocols extends $tea.Model {
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyEndpointsEndpointProtocols extends $tea.Model {
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyEndpointsEndpoint extends $tea.Model {
  type?: string;
  namespace?: string;
  serivceCode?: string;
  id?: string;
  endpoint?: string;
  protocols?: DescribeEndpointsResponseBodyEndpointsEndpointProtocols;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespace: 'Namespace',
      serivceCode: 'SerivceCode',
      id: 'Id',
      endpoint: 'Endpoint',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      namespace: 'string',
      serivceCode: 'string',
      id: 'string',
      endpoint: 'string',
      protocols: DescribeEndpointsResponseBodyEndpointsEndpointProtocols,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyEndpoints extends $tea.Model {
  endpoint?: DescribeEndpointsResponseBodyEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyEndpointsEndpoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIds extends $tea.Model {
  regionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicesResponseBodyServices extends $tea.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyEndpointListItemEndpointProtocols extends $tea.Model {
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyEndpointListItemEndpoint extends $tea.Model {
  type?: string;
  namespace?: string;
  product?: string;
  id?: string;
  endpoint?: string;
  protocols?: ListEndpointsResponseBodyEndpointListItemEndpointProtocols;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespace: 'Namespace',
      product: 'Product',
      id: 'Id',
      endpoint: 'Endpoint',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      namespace: 'string',
      product: 'string',
      id: 'string',
      endpoint: 'string',
      protocols: ListEndpointsResponseBodyEndpointListItemEndpointProtocols,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyEndpointList extends $tea.Model {
  itemEndpoint?: ListEndpointsResponseBodyEndpointListItemEndpoint[];
  static names(): { [key: string]: string } {
    return {
      itemEndpoint: 'ItemEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemEndpoint: { 'type': 'array', 'itemType': ListEndpointsResponseBodyEndpointListItemEndpoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsByIpResponseBodyEndpointListItemEndpointProtocols extends $tea.Model {
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsByIpResponseBodyEndpointListItemEndpoint extends $tea.Model {
  type?: string;
  namespace?: string;
  product?: string;
  id?: string;
  endpoint?: string;
  protocols?: ListEndpointsByIpResponseBodyEndpointListItemEndpointProtocols;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespace: 'Namespace',
      product: 'Product',
      id: 'Id',
      endpoint: 'Endpoint',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      namespace: 'string',
      product: 'string',
      id: 'string',
      endpoint: 'string',
      protocols: ListEndpointsByIpResponseBodyEndpointListItemEndpointProtocols,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsByIpResponseBodyEndpointList extends $tea.Model {
  itemEndpoint?: ListEndpointsByIpResponseBodyEndpointListItemEndpoint[];
  static names(): { [key: string]: string } {
    return {
      itemEndpoint: 'ItemEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemEndpoint: { 'type': 'array', 'itemType': ListEndpointsByIpResponseBodyEndpointListItemEndpoint },
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
    this._endpoint = this.getEndpoint("location", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeEndpointWithOptions(request: DescribeEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEndpointResponse>(await this.doRPCRequest("DescribeEndpoint", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEndpointResponse({}));
  }

  async describeEndpoint(request: DescribeEndpointRequest): Promise<DescribeEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointWithOptions(request, runtime);
  }

  async describeEndpointsWithOptions(request: DescribeEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEndpointsResponse>(await this.doRPCRequest("DescribeEndpoints", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEndpointsResponse({}));
  }

  async describeEndpoints(request: DescribeEndpointsRequest): Promise<DescribeEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeServicesWithOptions(request: DescribeServicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServicesResponse>(await this.doRPCRequest("DescribeServices", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServicesResponse({}));
  }

  async describeServices(request: DescribeServicesRequest): Promise<DescribeServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServicesWithOptions(request, runtime);
  }

  async listEndpointsWithOptions(request: ListEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEndpointsResponse>(await this.doRPCRequest("ListEndpoints", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListEndpointsResponse({}));
  }

  async listEndpoints(request: ListEndpointsRequest): Promise<ListEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointsWithOptions(request, runtime);
  }

  async listEndpointsByIpWithOptions(request: ListEndpointsByIpRequest, runtime: $Util.RuntimeOptions): Promise<ListEndpointsByIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEndpointsByIpResponse>(await this.doRPCRequest("ListEndpointsByIp", "2015-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListEndpointsByIpResponse({}));
  }

  async listEndpointsByIp(request: ListEndpointsByIpRequest): Promise<ListEndpointsByIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointsByIpWithOptions(request, runtime);
  }

}
