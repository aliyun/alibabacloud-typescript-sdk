// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class PredictMTModelByDocRequest extends $tea.Model {
  fileContent: string;
  fileType: string;
  modelId: number;
  needXLIFF?: boolean;
  modelVersion: string;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      fileType: 'FileType',
      modelId: 'ModelId',
      needXLIFF: 'NeedXLIFF',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      fileType: 'string',
      modelId: 'number',
      needXLIFF: 'boolean',
      modelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelByDocResponse extends $tea.Model {
  requestId: string;
  docId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      docId: 'DocId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      docId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindIntervenePackageAndModelRequest extends $tea.Model {
  packageId: number;
  modelId: number;
  modelVersion?: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'number',
      modelId: 'number',
      modelVersion: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindIntervenePackageAndModelResponse extends $tea.Model {
  code: number;
  message: number;
  success: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
      success: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMtIntervenePackageRequest extends $tea.Model {
  packageName: string;
  sourceLanguage: string;
  targetLanguage: string;
  projectId: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      projectId: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMtIntervenePackageResponse extends $tea.Model {
  code: number;
  message: number;
  packageId: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      packageId: 'PackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
      packageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictDocRequest extends $tea.Model {
  docId: number;
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

export class GetPredictDocResponse extends $tea.Model {
  requestId: string;
  resultContent: string;
  status: number;
  XLIFFInfo: string;
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

export class AddMTInterveneWordRequest extends $tea.Model {
  sourceText: string;
  targetText?: string;
  projectId: string;
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceText: 'SourceText',
      targetText: 'TargetText',
      projectId: 'ProjectId',
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceText: 'string',
      targetText: 'string',
      projectId: 'string',
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMTInterveneWordResponse extends $tea.Model {
  code: number;
  message: number;
  wordId: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      wordId: 'WordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
      wordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelRequest extends $tea.Model {
  modelId: string;
  modelVersion?: string;
  content: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelVersion: 'ModelVersion',
      content: 'Content',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelVersion: 'string',
      content: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictMTModelResponse extends $tea.Model {
  code: number;
  message: number;
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeActionRequest extends $tea.Model {
  invokeProduct?: string;
  invokeRegion?: string;
  invokeAction: string;
  invokeParams: string;
  static names(): { [key: string]: string } {
    return {
      invokeProduct: 'InvokeProduct',
      invokeRegion: 'InvokeRegion',
      invokeAction: 'InvokeAction',
      invokeParams: 'InvokeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeProduct: 'string',
      invokeRegion: 'string',
      invokeAction: 'string',
      invokeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeActionResponse extends $tea.Model {
  code: number;
  message: number;
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nlp-automl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async predictMTModelByDocWithOptions(request: PredictMTModelByDocRequest, runtime: $Util.RuntimeOptions): Promise<PredictMTModelByDocResponse> {
    Util.validateModel(request);
    return $tea.cast<PredictMTModelByDocResponse>(await this.doRequest("PredictMTModelByDoc", "HTTPS", "POST", "2019-07-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new PredictMTModelByDocResponse({}));
  }

  async predictMTModelByDoc(request: PredictMTModelByDocRequest): Promise<PredictMTModelByDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictMTModelByDocWithOptions(request, runtime);
  }

  async bindIntervenePackageAndModelWithOptions(request: BindIntervenePackageAndModelRequest, runtime: $Util.RuntimeOptions): Promise<BindIntervenePackageAndModelResponse> {
    Util.validateModel(request);
    return $tea.cast<BindIntervenePackageAndModelResponse>(await this.doRequest("BindIntervenePackageAndModel", "HTTPS", "POST", "2019-07-01", "AK,APP,PrivateKey", null, $tea.toMap(request), runtime), new BindIntervenePackageAndModelResponse({}));
  }

  async bindIntervenePackageAndModel(request: BindIntervenePackageAndModelRequest): Promise<BindIntervenePackageAndModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindIntervenePackageAndModelWithOptions(request, runtime);
  }

  async addMtIntervenePackageWithOptions(request: AddMtIntervenePackageRequest, runtime: $Util.RuntimeOptions): Promise<AddMtIntervenePackageResponse> {
    Util.validateModel(request);
    return $tea.cast<AddMtIntervenePackageResponse>(await this.doRequest("AddMtIntervenePackage", "HTTPS", "POST", "2019-07-01", "AK,APP,PrivateKey", null, $tea.toMap(request), runtime), new AddMtIntervenePackageResponse({}));
  }

  async addMtIntervenePackage(request: AddMtIntervenePackageRequest): Promise<AddMtIntervenePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMtIntervenePackageWithOptions(request, runtime);
  }

  async getPredictDocWithOptions(request: GetPredictDocRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictDocResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPredictDocResponse>(await this.doRequest("GetPredictDoc", "HTTPS", "POST", "2019-07-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetPredictDocResponse({}));
  }

  async getPredictDoc(request: GetPredictDocRequest): Promise<GetPredictDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictDocWithOptions(request, runtime);
  }

  async addMTInterveneWordWithOptions(request: AddMTInterveneWordRequest, runtime: $Util.RuntimeOptions): Promise<AddMTInterveneWordResponse> {
    Util.validateModel(request);
    return $tea.cast<AddMTInterveneWordResponse>(await this.doRequest("AddMTInterveneWord", "HTTPS", "POST", "2019-07-01", "AK,APP,PrivateKey", null, $tea.toMap(request), runtime), new AddMTInterveneWordResponse({}));
  }

  async addMTInterveneWord(request: AddMTInterveneWordRequest): Promise<AddMTInterveneWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMTInterveneWordWithOptions(request, runtime);
  }

  async predictMTModelWithOptions(request: PredictMTModelRequest, runtime: $Util.RuntimeOptions): Promise<PredictMTModelResponse> {
    Util.validateModel(request);
    return $tea.cast<PredictMTModelResponse>(await this.doRequest("PredictMTModel", "HTTPS", "POST", "2019-07-01", "AK", null, $tea.toMap(request), runtime), new PredictMTModelResponse({}));
  }

  async predictMTModel(request: PredictMTModelRequest): Promise<PredictMTModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictMTModelWithOptions(request, runtime);
  }

  async invokeActionWithOptions(request: InvokeActionRequest, runtime: $Util.RuntimeOptions): Promise<InvokeActionResponse> {
    Util.validateModel(request);
    return $tea.cast<InvokeActionResponse>(await this.doRequest("InvokeAction", "HTTPS", "POST", "2019-07-01", "AK", null, $tea.toMap(request), runtime), new InvokeActionResponse({}));
  }

  async invokeAction(request: InvokeActionRequest): Promise<InvokeActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeActionWithOptions(request, runtime);
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

}
