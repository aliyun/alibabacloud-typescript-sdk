// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class OpenApiModelsPredictCmd extends $tea.Model {
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

export class PredictSseRequest extends $tea.Model {
  /**
   * @example
   * db_test
   */
  dbName?: string;
  input?: string;
  /**
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @example
   * _polar4ai_tongyi
   */
  modelClass?: string;
  /**
   * @example
   * {"basic_index_name":"index_table"}
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
      input: 'input',
      instanceName: 'instanceName',
      modelClass: 'modelClass',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      input: 'string',
      instanceName: 'string',
      modelClass: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictSseResponseBody extends $tea.Model {
  data?: any;
  /**
   * @example
   * ER_ILLEGAL_MODEL_CLASS
   */
  errCode?: string;
  /**
   * @example
   * Illegal model class.
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 983863E2-****-1D15-A4AE-3468CD75383D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictSseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PredictSseResponseBody;
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
      body: PredictSseResponseBody,
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
    this._endpoint = this.getEndpoint("polardbai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 模型推理（在线，离线）
   * 
   * @param request - PredictSseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PredictSseResponse
   */
  async predictSseWithOptions(request: PredictSseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PredictSseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["dbName"] = request.dbName;
    }

    if (!Util.isUnset(request.input)) {
      body["input"] = request.input;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.modelClass)) {
      body["modelClass"] = request.modelClass;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PredictSse",
      version: "2024-08-20",
      protocol: "HTTPS",
      pathname: `/v1/openapi/models/predictSse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PredictSseResponse>(await this.callApi(params, req, runtime), new PredictSseResponse({}));
  }

  /**
   * 模型推理（在线，离线）
   * 
   * @param request - PredictSseRequest
   * @returns PredictSseResponse
   */
  async predictSse(request: PredictSseRequest): Promise<PredictSseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.predictSseWithOptions(request, headers, runtime);
  }

}
