// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetKpmEncryptedNodeTuplesByOrderIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKpmEncryptedNodeTuplesByOrderIdResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  encryptedNodeTuples?: GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuples;
  code?: string;
  success?: boolean;
  encryptedSessionZmk?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      encryptedNodeTuples: 'EncryptedNodeTuples',
      code: 'Code',
      success: 'Success',
      encryptedSessionZmk: 'EncryptedSessionZmk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      encryptedNodeTuples: GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuples,
      code: 'string',
      success: 'boolean',
      encryptedSessionZmk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKpmEncryptedNodeTuplesByOrderIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetKpmEncryptedNodeTuplesByOrderIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetKpmEncryptedNodeTuplesByOrderIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKpmEncryptedNodeTupleOrderRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  loraVersion?: string;
  requiredCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      loraVersion: 'LoraVersion',
      requiredCount: 'RequiredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      loraVersion: 'string',
      requiredCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKpmEncryptedNodeTupleOrderResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  orderId?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      orderId: 'OrderId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      orderId: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKpmEncryptedNodeTupleOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitKpmEncryptedNodeTupleOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitKpmEncryptedNodeTupleOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuplesEncryptedNodeTuple extends $tea.Model {
  appKeyKcv?: string;
  devEui?: string;
  encryptedNwkKey?: string;
  nwkKeyKcv?: string;
  encryptedGenAppKey?: string;
  pinCode?: string;
  genAppKeyKcv?: string;
  loraVersion?: string;
  encryptedAppKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyKcv: 'AppKeyKcv',
      devEui: 'DevEui',
      encryptedNwkKey: 'EncryptedNwkKey',
      nwkKeyKcv: 'NwkKeyKcv',
      encryptedGenAppKey: 'EncryptedGenAppKey',
      pinCode: 'PinCode',
      genAppKeyKcv: 'GenAppKeyKcv',
      loraVersion: 'LoraVersion',
      encryptedAppKey: 'EncryptedAppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyKcv: 'string',
      devEui: 'string',
      encryptedNwkKey: 'string',
      nwkKeyKcv: 'string',
      encryptedGenAppKey: 'string',
      pinCode: 'string',
      genAppKeyKcv: 'string',
      loraVersion: 'string',
      encryptedAppKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuples extends $tea.Model {
  encryptedNodeTuple?: GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuplesEncryptedNodeTuple[];
  static names(): { [key: string]: string } {
    return {
      encryptedNodeTuple: 'EncryptedNodeTuple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedNodeTuple: { 'type': 'array', 'itemType': GetKpmEncryptedNodeTuplesByOrderIdResponseBodyEncryptedNodeTuplesEncryptedNodeTuple },
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkwan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getKpmEncryptedNodeTuplesByOrderIdWithOptions(request: GetKpmEncryptedNodeTuplesByOrderIdRequest, runtime: $Util.RuntimeOptions): Promise<GetKpmEncryptedNodeTuplesByOrderIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetKpmEncryptedNodeTuplesByOrderIdResponse>(await this.doRPCRequest("GetKpmEncryptedNodeTuplesByOrderId", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetKpmEncryptedNodeTuplesByOrderIdResponse({}));
  }

  async getKpmEncryptedNodeTuplesByOrderId(request: GetKpmEncryptedNodeTuplesByOrderIdRequest): Promise<GetKpmEncryptedNodeTuplesByOrderIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKpmEncryptedNodeTuplesByOrderIdWithOptions(request, runtime);
  }

  async submitKpmEncryptedNodeTupleOrderWithOptions(request: SubmitKpmEncryptedNodeTupleOrderRequest, runtime: $Util.RuntimeOptions): Promise<SubmitKpmEncryptedNodeTupleOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitKpmEncryptedNodeTupleOrderResponse>(await this.doRPCRequest("SubmitKpmEncryptedNodeTupleOrder", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitKpmEncryptedNodeTupleOrderResponse({}));
  }

  async submitKpmEncryptedNodeTupleOrder(request: SubmitKpmEncryptedNodeTupleOrderRequest): Promise<SubmitKpmEncryptedNodeTupleOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitKpmEncryptedNodeTupleOrderWithOptions(request, runtime);
  }

}
