// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAsyncPredictRequest extends $tea.Model {
  content?: string;
  detailTag?: string;
  fetchContent?: string;
  fileContent?: string;
  fileType?: string;
  fileUrl?: string;
  modelId?: number;
  modelVersion?: string;
  serviceName?: string;
  serviceVersion?: string;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      detailTag: 'DetailTag',
      fetchContent: 'FetchContent',
      fileContent: 'FileContent',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      detailTag: 'string',
      fetchContent: 'string',
      fileContent: 'string',
      fileType: 'string',
      fileUrl: 'string',
      modelId: 'number',
      modelVersion: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncPredictResponseBody extends $tea.Model {
  asyncPredictId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncPredictId: 'AsyncPredictId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncPredictId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAsyncPredictResponseBody;
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
      body: CreateAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncPredictRequest extends $tea.Model {
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

export class GetAsyncPredictResponseBody extends $tea.Model {
  asyncPredictId?: number;
  content?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      asyncPredictId: 'AsyncPredictId',
      content: 'Content',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncPredictId: 'number',
      content: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncPredictResponseBody;
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
      body: GetAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultRequest extends $tea.Model {
  content?: string;
  detailTag?: string;
  modelId?: number;
  modelVersion?: string;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      detailTag: 'DetailTag',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      detailTag: 'string',
      modelId: 'number',
      modelVersion: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPredictResultResponseBody;
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
      body: GetPredictResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceRequest extends $tea.Model {
  predictContent?: string;
  serviceName?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      predictContent: 'PredictContent',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictContent: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceResponseBody extends $tea.Model {
  predictResult?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      predictResult: 'PredictResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictResult: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunPreTrainServiceResponseBody;
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
      body: RunPreTrainServiceResponseBody,
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
    this._endpoint = this.getEndpoint("nlp-automl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAsyncPredictWithOptions(request: CreateAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncPredictResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.detailTag)) {
      body["DetailTag"] = request.detailTag;
    }

    if (!Util.isUnset(request.fetchContent)) {
      body["FetchContent"] = request.fetchContent;
    }

    if (!Util.isUnset(request.fileContent)) {
      body["FileContent"] = request.fileContent;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      body["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.topK)) {
      body["TopK"] = request.topK;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsyncPredict",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsyncPredictResponse>(await this.callApi(params, req, runtime), new CreateAsyncPredictResponse({}));
  }

  async createAsyncPredict(request: CreateAsyncPredictRequest): Promise<CreateAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncPredictWithOptions(request, runtime);
  }

  async getAsyncPredictWithOptions(request: GetAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncPredictResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncPredict",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncPredictResponse>(await this.callApi(params, req, runtime), new GetAsyncPredictResponse({}));
  }

  async getAsyncPredict(request: GetAsyncPredictRequest): Promise<GetAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncPredictWithOptions(request, runtime);
  }

  async getPredictResultWithOptions(request: GetPredictResultRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.detailTag)) {
      body["DetailTag"] = request.detailTag;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!Util.isUnset(request.topK)) {
      body["TopK"] = request.topK;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPredictResult",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPredictResultResponse>(await this.callApi(params, req, runtime), new GetPredictResultResponse({}));
  }

  async getPredictResult(request: GetPredictResultRequest): Promise<GetPredictResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictResultWithOptions(request, runtime);
  }

  async runPreTrainServiceWithOptions(request: RunPreTrainServiceRequest, runtime: $Util.RuntimeOptions): Promise<RunPreTrainServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.predictContent)) {
      body["PredictContent"] = request.predictContent;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      body["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunPreTrainService",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunPreTrainServiceResponse>(await this.callApi(params, req, runtime), new RunPreTrainServiceResponse({}));
  }

  async runPreTrainService(request: RunPreTrainServiceRequest): Promise<RunPreTrainServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runPreTrainServiceWithOptions(request, runtime);
  }

}
