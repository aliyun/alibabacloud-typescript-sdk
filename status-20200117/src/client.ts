// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListEventInProgressRequest extends $tea.Model {
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

export class ListEventInProgressShrinkRequest extends $tea.Model {
  regionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionIdsShrink: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBody extends $tea.Model {
  data?: ListEventInProgressResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEventInProgressResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventInProgressResponseBody;
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
      body: ListEventInProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBodyDataEventUpdates extends $tea.Model {
  content?: string;
  publishTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      publishTime: 'PublishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      publishTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBodyDataImpactsProduct extends $tea.Model {
  productId?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBodyDataImpactsRegion extends $tea.Model {
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBodyDataImpacts extends $tea.Model {
  product?: ListEventInProgressResponseBodyDataImpactsProduct;
  recoveryTime?: number;
  region?: ListEventInProgressResponseBodyDataImpactsRegion;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      recoveryTime: 'RecoveryTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: ListEventInProgressResponseBodyDataImpactsProduct,
      recoveryTime: 'number',
      region: ListEventInProgressResponseBodyDataImpactsRegion,
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventInProgressResponseBodyData extends $tea.Model {
  eventUpdates?: ListEventInProgressResponseBodyDataEventUpdates[];
  id?: number;
  impacts?: ListEventInProgressResponseBodyDataImpacts[];
  startTime?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      eventUpdates: 'EventUpdates',
      id: 'Id',
      impacts: 'Impacts',
      startTime: 'StartTime',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventUpdates: { 'type': 'array', 'itemType': ListEventInProgressResponseBodyDataEventUpdates },
      id: 'number',
      impacts: { 'type': 'array', 'itemType': ListEventInProgressResponseBodyDataImpacts },
      startTime: 'number',
      title: 'string',
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
    this._endpoint = this.getEndpoint("status", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listEventInProgressWithOptions(tmpReq: ListEventInProgressRequest, runtime: $Util.RuntimeOptions): Promise<ListEventInProgressResponse> {
    Util.validateModel(tmpReq);
    let request = new ListEventInProgressShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionIdsShrink)) {
      body["RegionIds"] = request.regionIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEventInProgress",
      version: "2020-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventInProgressResponse>(await this.callApi(params, req, runtime), new ListEventInProgressResponse({}));
  }

  async listEventInProgress(request: ListEventInProgressRequest): Promise<ListEventInProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventInProgressWithOptions(request, runtime);
  }

}
