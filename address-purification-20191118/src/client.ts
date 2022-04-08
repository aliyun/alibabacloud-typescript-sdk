// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CorrectAddressRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CorrectAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CorrectAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressDivisionCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressDivisionCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressSimilarityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressSimilarityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetZipcodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetZipcodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressRequest extends $tea.Model {
  appKey?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StructureAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StructureAddressResponseBody,
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
    this._endpoint = this.getEndpoint("address-purification", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async correctAddressWithOptions(request: CorrectAddressRequest, runtime: $Util.RuntimeOptions): Promise<CorrectAddressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CorrectAddress",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CorrectAddressResponse>(await this.callApi(params, req, runtime), new CorrectAddressResponse({}));
  }

  async correctAddress(request: CorrectAddressRequest): Promise<CorrectAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.correctAddressWithOptions(request, runtime);
  }

  async extractAddressWithOptions(request: ExtractAddressRequest, runtime: $Util.RuntimeOptions): Promise<ExtractAddressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExtractAddress",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractAddressResponse>(await this.callApi(params, req, runtime), new ExtractAddressResponse({}));
  }

  async extractAddress(request: ExtractAddressRequest): Promise<ExtractAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractAddressWithOptions(request, runtime);
  }

  async extractNameWithOptions(request: ExtractNameRequest, runtime: $Util.RuntimeOptions): Promise<ExtractNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExtractName",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractNameResponse>(await this.callApi(params, req, runtime), new ExtractNameResponse({}));
  }

  async extractName(request: ExtractNameRequest): Promise<ExtractNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractNameWithOptions(request, runtime);
  }

  async extractPhoneWithOptions(request: ExtractPhoneRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPhoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExtractPhone",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractPhoneResponse>(await this.callApi(params, req, runtime), new ExtractPhoneResponse({}));
  }

  async extractPhone(request: ExtractPhoneRequest): Promise<ExtractPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPhoneWithOptions(request, runtime);
  }

  async getAddressDivisionCodeWithOptions(request: GetAddressDivisionCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressDivisionCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAddressDivisionCode",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAddressDivisionCodeResponse>(await this.callApi(params, req, runtime), new GetAddressDivisionCodeResponse({}));
  }

  async getAddressDivisionCode(request: GetAddressDivisionCodeRequest): Promise<GetAddressDivisionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressDivisionCodeWithOptions(request, runtime);
  }

  async getAddressSimilarityWithOptions(request: GetAddressSimilarityRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressSimilarityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAddressSimilarity",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAddressSimilarityResponse>(await this.callApi(params, req, runtime), new GetAddressSimilarityResponse({}));
  }

  async getAddressSimilarity(request: GetAddressSimilarityRequest): Promise<GetAddressSimilarityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressSimilarityWithOptions(request, runtime);
  }

  async getZipcodeWithOptions(request: GetZipcodeRequest, runtime: $Util.RuntimeOptions): Promise<GetZipcodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetZipcode",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetZipcodeResponse>(await this.callApi(params, req, runtime), new GetZipcodeResponse({}));
  }

  async getZipcode(request: GetZipcodeRequest): Promise<GetZipcodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getZipcodeWithOptions(request, runtime);
  }

  async structureAddressWithOptions(request: StructureAddressRequest, runtime: $Util.RuntimeOptions): Promise<StructureAddressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.defaultCity)) {
      body["DefaultCity"] = request.defaultCity;
    }

    if (!Util.isUnset(request.defaultDistrict)) {
      body["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!Util.isUnset(request.defaultProvince)) {
      body["DefaultProvince"] = request.defaultProvince;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StructureAddress",
      version: "2019-11-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StructureAddressResponse>(await this.callApi(params, req, runtime), new StructureAddressResponse({}));
  }

  async structureAddress(request: StructureAddressRequest): Promise<StructureAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.structureAddressWithOptions(request, runtime);
  }

}
