// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class VerifyCaptchaRequest extends $tea.Model {
  captchaVerifyParam?: string;
  static names(): { [key: string]: string } {
    return {
      captchaVerifyParam: 'CaptchaVerifyParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaVerifyParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCaptchaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: VerifyCaptchaResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: VerifyCaptchaResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCaptchaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyCaptchaResponseBody;
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
      body: VerifyCaptchaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIntelligentCaptchaRequest extends $tea.Model {
  captchaVerifyParam?: string;
  static names(): { [key: string]: string } {
    return {
      captchaVerifyParam: 'CaptchaVerifyParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaVerifyParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIntelligentCaptchaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: VerifyIntelligentCaptchaResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: VerifyIntelligentCaptchaResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIntelligentCaptchaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyIntelligentCaptchaResponseBody;
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
      body: VerifyIntelligentCaptchaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCaptchaResponseBodyResult extends $tea.Model {
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIntelligentCaptchaResponseBodyResult extends $tea.Model {
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'boolean',
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
    this._endpoint = this.getEndpoint("captcha", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async verifyCaptchaWithOptions(request: VerifyCaptchaRequest, runtime: $Util.RuntimeOptions): Promise<VerifyCaptchaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.captchaVerifyParam)) {
      query["CaptchaVerifyParam"] = request.captchaVerifyParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyCaptcha",
      version: "2023-03-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyCaptchaResponse>(await this.callApi(params, req, runtime), new VerifyCaptchaResponse({}));
  }

  async verifyCaptcha(request: VerifyCaptchaRequest): Promise<VerifyCaptchaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyCaptchaWithOptions(request, runtime);
  }

  async verifyIntelligentCaptchaWithOptions(request: VerifyIntelligentCaptchaRequest, runtime: $Util.RuntimeOptions): Promise<VerifyIntelligentCaptchaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.captchaVerifyParam)) {
      body["CaptchaVerifyParam"] = request.captchaVerifyParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyIntelligentCaptcha",
      version: "2023-03-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyIntelligentCaptchaResponse>(await this.callApi(params, req, runtime), new VerifyIntelligentCaptchaResponse({}));
  }

  async verifyIntelligentCaptcha(request: VerifyIntelligentCaptchaRequest): Promise<VerifyIntelligentCaptchaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyIntelligentCaptchaWithOptions(request, runtime);
  }

}
