// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class PredictClassifierModelRequest extends $tea.Model {
  autoPrediction?: boolean;
  classifierId?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      autoPrediction: 'AutoPrediction',
      classifierId: 'ClassifierId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPrediction: 'boolean',
      classifierId: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictClassifierModelResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictClassifierModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictClassifierModelResponseBody;
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
      body: PredictClassifierModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictModelRequest extends $tea.Model {
  binaryToText?: boolean;
  content?: string;
  modelId?: number;
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      binaryToText: 'BinaryToText',
      content: 'Content',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryToText: 'boolean',
      content: 'string',
      modelId: 'number',
      modelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictModelResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictModelResponseBody;
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
      body: PredictModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTemplateModelRequest extends $tea.Model {
  content?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTemplateModelResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTemplateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictTemplateModelResponseBody;
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
      body: PredictTemplateModelResponseBody,
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
    this._endpoint = this.getEndpoint("documentautoml", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async predictClassifierModelWithOptions(request: PredictClassifierModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictClassifierModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPrediction)) {
      query["AutoPrediction"] = request.autoPrediction;
    }

    if (!Util.isUnset(request.classifierId)) {
      query["ClassifierId"] = request.classifierId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PredictClassifierModel",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictClassifierModelResponse>(await this.callApi(params, req, runtime), new PredictClassifierModelResponse({}));
  }

  async predictClassifierModel(request: PredictClassifierModelRequest): Promise<PredictClassifierModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictClassifierModelWithOptions(request, runtime);
  }

  async predictModelWithOptions(request: PredictModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.binaryToText)) {
      query["BinaryToText"] = request.binaryToText;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelVersion)) {
      query["ModelVersion"] = request.modelVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PredictModel",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictModelResponse>(await this.callApi(params, req, runtime), new PredictModelResponse({}));
  }

  async predictModel(request: PredictModelRequest): Promise<PredictModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictModelWithOptions(request, runtime);
  }

  async predictTemplateModelWithOptions(request: PredictTemplateModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictTemplateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PredictTemplateModel",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictTemplateModelResponse>(await this.callApi(params, req, runtime), new PredictTemplateModelResponse({}));
  }

  async predictTemplateModel(request: PredictTemplateModelRequest): Promise<PredictTemplateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictTemplateModelWithOptions(request, runtime);
  }

}
