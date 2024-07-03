// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMTInterveneWordRequest extends $tea.Model {
  packageId?: string;
  projectId?: string;
  sourceText?: string;
  targetText?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
      projectId: 'ProjectId',
      sourceText: 'SourceText',
      targetText: 'TargetText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
      projectId: 'string',
      sourceText: 'string',
      targetText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMTInterveneWordResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  wordId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      wordId: 'WordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      wordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMTInterveneWordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMTInterveneWordResponseBody;
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
      body: AddMTInterveneWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictDocRequest extends $tea.Model {
  docId?: number;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'number',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictDocResponseBody extends $tea.Model {
  requestId?: string;
  resultContent?: string;
  status?: number;
  XLIFFInfo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultContent: 'ResultContent',
      status: 'Status',
      XLIFFInfo: 'XLIFFInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultContent: 'string',
      status: 'number',
      XLIFFInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPredictDocResponseBody;
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
      body: GetPredictDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelByDocRequest extends $tea.Model {
  fileContent?: string;
  fileType?: string;
  modelId?: number;
  modelVersion?: string;
  needXLIFF?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      fileType: 'FileType',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      needXLIFF: 'NeedXLIFF',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      fileType: 'string',
      modelId: 'number',
      modelVersion: 'string',
      needXLIFF: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelByDocResponseBody extends $tea.Model {
  docId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelByDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PredictMTModelByDocResponseBody;
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
      body: PredictMTModelByDocResponseBody,
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

  /**
   * @param request AddMTInterveneWordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddMTInterveneWordResponse
   */
  async addMTInterveneWordWithOptions(request: AddMTInterveneWordRequest, runtime: $Util.RuntimeOptions): Promise<AddMTInterveneWordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.packageId)) {
      query["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sourceText)) {
      query["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetText)) {
      query["TargetText"] = request.targetText;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMTInterveneWord",
      version: "2019-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMTInterveneWordResponse>(await this.callApi(params, req, runtime), new AddMTInterveneWordResponse({}));
  }

  /**
   * @param request AddMTInterveneWordRequest
   * @return AddMTInterveneWordResponse
   */
  async addMTInterveneWord(request: AddMTInterveneWordRequest): Promise<AddMTInterveneWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMTInterveneWordWithOptions(request, runtime);
  }

  /**
   * @param request GetPredictDocRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPredictDocResponse
   */
  async getPredictDocWithOptions(request: GetPredictDocRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.docId)) {
      query["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPredictDoc",
      version: "2019-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPredictDocResponse>(await this.callApi(params, req, runtime), new GetPredictDocResponse({}));
  }

  /**
   * @param request GetPredictDocRequest
   * @return GetPredictDocResponse
   */
  async getPredictDoc(request: GetPredictDocRequest): Promise<GetPredictDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictDocWithOptions(request, runtime);
  }

  /**
   * @param request PredictMTModelByDocRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PredictMTModelByDocResponse
   */
  async predictMTModelByDocWithOptions(request: PredictMTModelByDocRequest, runtime: $Util.RuntimeOptions): Promise<PredictMTModelByDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelVersion)) {
      query["ModelVersion"] = request.modelVersion;
    }

    if (!Util.isUnset(request.needXLIFF)) {
      query["NeedXLIFF"] = request.needXLIFF;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileContent)) {
      body["FileContent"] = request.fileContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PredictMTModelByDoc",
      version: "2019-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictMTModelByDocResponse>(await this.callApi(params, req, runtime), new PredictMTModelByDocResponse({}));
  }

  /**
   * @param request PredictMTModelByDocRequest
   * @return PredictMTModelByDocResponse
   */
  async predictMTModelByDoc(request: PredictMTModelByDocRequest): Promise<PredictMTModelByDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictMTModelByDocWithOptions(request, runtime);
  }

}
