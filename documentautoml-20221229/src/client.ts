// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateModelAsyncPredictRequest extends $tea.Model {
  binaryToText?: boolean;
  body?: string;
  content?: string;
  modelId?: number;
  modelVersion?: string;
  serviceName?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      binaryToText: 'BinaryToText',
      body: 'Body',
      content: 'Content',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryToText: 'boolean',
      body: 'string',
      content: 'string',
      modelId: 'number',
      modelVersion: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelAsyncPredictResponseBody extends $tea.Model {
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

export class CreateModelAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateModelAsyncPredictResponseBody;
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
      body: CreateModelAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelAsyncPredictRequest extends $tea.Model {
  asyncPredictId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncPredictId: 'AsyncPredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncPredictId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelAsyncPredictResponseBody extends $tea.Model {
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

export class GetModelAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetModelAsyncPredictResponseBody;
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
      body: GetModelAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictClassifierModelRequest extends $tea.Model {
  autoPrediction?: boolean;
  body?: string;
  classifierId?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      autoPrediction: 'AutoPrediction',
      body: 'Body',
      classifierId: 'ClassifierId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPrediction: 'boolean',
      body: 'string',
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
  body?: string;
  content?: string;
  modelId?: number;
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      binaryToText: 'BinaryToText',
      body: 'Body',
      content: 'Content',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryToText: 'boolean',
      body: 'string',
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

export class PredictPreTrainModelRequest extends $tea.Model {
  binaryToText?: boolean;
  body?: string;
  content?: string;
  serviceName?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      binaryToText: 'BinaryToText',
      body: 'Body',
      content: 'Content',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryToText: 'boolean',
      body: 'string',
      content: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPreTrainModelResponseBody extends $tea.Model {
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

export class PredictPreTrainModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictPreTrainModelResponseBody;
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
      body: PredictPreTrainModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTemplateModelRequest extends $tea.Model {
  binaryToText?: boolean;
  body?: string;
  content?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      binaryToText: 'BinaryToText',
      body: 'Body',
      content: 'Content',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryToText: 'boolean',
      body: 'string',
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
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

  async createModelAsyncPredictWithOptions(request: CreateModelAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelAsyncPredictResponse> {
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

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModelAsyncPredict",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModelAsyncPredictResponse>(await this.callApi(params, req, runtime), new CreateModelAsyncPredictResponse({}));
  }

  async createModelAsyncPredict(request: CreateModelAsyncPredictRequest): Promise<CreateModelAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelAsyncPredictWithOptions(request, runtime);
  }

  async getModelAsyncPredictWithOptions(request: GetModelAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<GetModelAsyncPredictResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncPredictId)) {
      query["AsyncPredictId"] = request.asyncPredictId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetModelAsyncPredict",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetModelAsyncPredictResponse>(await this.callApi(params, req, runtime), new GetModelAsyncPredictResponse({}));
  }

  async getModelAsyncPredict(request: GetModelAsyncPredictRequest): Promise<GetModelAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelAsyncPredictWithOptions(request, runtime);
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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

  async predictPreTrainModelWithOptions(request: PredictPreTrainModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictPreTrainModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.binaryToText)) {
      query["BinaryToText"] = request.binaryToText;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PredictPreTrainModel",
      version: "2022-12-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictPreTrainModelResponse>(await this.callApi(params, req, runtime), new PredictPreTrainModelResponse({}));
  }

  async predictPreTrainModel(request: PredictPreTrainModelRequest): Promise<PredictPreTrainModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictPreTrainModelWithOptions(request, runtime);
  }

  async predictTemplateModelWithOptions(request: PredictTemplateModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictTemplateModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.binaryToText)) {
      query["BinaryToText"] = request.binaryToText;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
