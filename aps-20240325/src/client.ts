// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetFxCustomerTypeRequest extends $tea.Model {
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFxCustomerTypeResponseBody extends $tea.Model {
  code?: string;
  data?: GetFxCustomerTypeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFxCustomerTypeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFxCustomerTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFxCustomerTypeResponseBody;
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
      body: GetFxCustomerTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFxCustomerTypeResponseBodyData extends $tea.Model {
  customerType?: number;
  isSub?: number;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      customerType: 'CustomerType',
      isSub: 'IsSub',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerType: 'number',
      isSub: 'number',
      parentId: 'number',
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
    this._endpoint = this.getEndpoint("aps", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getFxCustomerTypeWithOptions(request: GetFxCustomerTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetFxCustomerTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFxCustomerType",
      version: "2024-03-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFxCustomerTypeResponse>(await this.callApi(params, req, runtime), new GetFxCustomerTypeResponse({}));
  }

  async getFxCustomerType(request: GetFxCustomerTypeRequest): Promise<GetFxCustomerTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFxCustomerTypeWithOptions(request, runtime);
  }

}
