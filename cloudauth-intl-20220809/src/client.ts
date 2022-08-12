// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckResultRequest extends $tea.Model {
  extraImageControlList?: string;
  isReturnImage?: string;
  merchantBizId?: string;
  returnFiveCategorySpoofResult?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extraImageControlList: 'ExtraImageControlList',
      isReturnImage: 'IsReturnImage',
      merchantBizId: 'MerchantBizId',
      returnFiveCategorySpoofResult: 'ReturnFiveCategorySpoofResult',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraImageControlList: 'string',
      isReturnImage: 'string',
      merchantBizId: 'string',
      returnFiveCategorySpoofResult: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CheckResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CheckResultResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckResultResponseBody;
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
      body: CheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeRequest extends $tea.Model {
  docType?: string;
  flowType?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  metaInfo?: string;
  operationMode?: string;
  pages?: string;
  productCode?: string;
  productConfig?: string;
  sceneCode?: string;
  serviceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      flowType: 'FlowType',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      operationMode: 'OperationMode',
      pages: 'Pages',
      productCode: 'ProductCode',
      productConfig: 'ProductConfig',
      sceneCode: 'SceneCode',
      serviceLevel: 'ServiceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      flowType: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      operationMode: 'string',
      pages: 'string',
      productCode: 'string',
      productConfig: 'string',
      sceneCode: 'string',
      serviceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: InitializeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: InitializeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitializeResponseBody;
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
      body: InitializeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBodyResult extends $tea.Model {
  ekycResult?: string;
  extBasicInfo?: string;
  extFaceInfo?: string;
  extIdInfo?: string;
  extRiskInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ekycResult: 'EkycResult',
      extBasicInfo: 'ExtBasicInfo',
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      extRiskInfo: 'ExtRiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ekycResult: 'string',
      extBasicInfo: 'string',
      extFaceInfo: 'string',
      extIdInfo: 'string',
      extRiskInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeResponseBodyResult extends $tea.Model {
  transactionId?: string;
  clientCfg?: string;
  static names(): { [key: string]: string } {
    return {
      transactionId: 'TransactionId',
      clientCfg: 'clientCfg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionId: 'string',
      clientCfg: 'string',
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
    this._endpoint = this.getEndpoint("cloudauth-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkResultWithOptions(request: CheckResultRequest, runtime: $Util.RuntimeOptions): Promise<CheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extraImageControlList)) {
      query["ExtraImageControlList"] = request.extraImageControlList;
    }

    if (!Util.isUnset(request.isReturnImage)) {
      query["IsReturnImage"] = request.isReturnImage;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.returnFiveCategorySpoofResult)) {
      query["ReturnFiveCategorySpoofResult"] = request.returnFiveCategorySpoofResult;
    }

    if (!Util.isUnset(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckResult",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckResultResponse>(await this.callApi(params, req, runtime), new CheckResultResponse({}));
  }

  async checkResult(request: CheckResultRequest): Promise<CheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  async initializeWithOptions(request: InitializeRequest, runtime: $Util.RuntimeOptions): Promise<InitializeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.flowType)) {
      query["FlowType"] = request.flowType;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!Util.isUnset(request.operationMode)) {
      query["OperationMode"] = request.operationMode;
    }

    if (!Util.isUnset(request.pages)) {
      query["Pages"] = request.pages;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productConfig)) {
      query["ProductConfig"] = request.productConfig;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.serviceLevel)) {
      query["ServiceLevel"] = request.serviceLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Initialize",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeResponse>(await this.callApi(params, req, runtime), new InitializeResponse({}));
  }

  async initialize(request: InitializeRequest): Promise<InitializeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

}
