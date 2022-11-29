// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EntVerifyRequest extends $tea.Model {
  accountNo?: string;
  entName?: string;
  infoVerifyType?: string;
  legalPersonCertNo?: string;
  legalPersonMobile?: string;
  legalPersonName?: string;
  licenseNo?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  riskModelVersion?: string;
  riskVerifyType?: string;
  sceneCode?: string;
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      entName: 'EntName',
      infoVerifyType: 'InfoVerifyType',
      legalPersonCertNo: 'LegalPersonCertNo',
      legalPersonMobile: 'LegalPersonMobile',
      legalPersonName: 'LegalPersonName',
      licenseNo: 'LicenseNo',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      riskModelVersion: 'RiskModelVersion',
      riskVerifyType: 'RiskVerifyType',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      entName: 'string',
      infoVerifyType: 'string',
      legalPersonCertNo: 'string',
      legalPersonMobile: 'string',
      legalPersonName: 'string',
      licenseNo: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      riskModelVersion: 'string',
      riskVerifyType: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: EntVerifyResponseBodyResult;
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
      result: EntVerifyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EntVerifyResponseBody;
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
      body: EntVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResultRiskVerifyResultModelResults extends $tea.Model {
  modelName?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResultRiskVerifyResult extends $tea.Model {
  modelResults?: EntVerifyResponseBodyResultRiskVerifyResultModelResults[];
  static names(): { [key: string]: string } {
    return {
      modelResults: 'ModelResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResults: { 'type': 'array', 'itemType': EntVerifyResponseBodyResultRiskVerifyResultModelResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResult extends $tea.Model {
  riskVerifyResult?: EntVerifyResponseBodyResultRiskVerifyResult;
  static names(): { [key: string]: string } {
    return {
      riskVerifyResult: 'RiskVerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskVerifyResult: EntVerifyResponseBodyResultRiskVerifyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async entVerifyWithOptions(request: EntVerifyRequest, runtime: $Util.RuntimeOptions): Promise<EntVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!Util.isUnset(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!Util.isUnset(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!Util.isUnset(request.legalPersonMobile)) {
      query["LegalPersonMobile"] = request.legalPersonMobile;
    }

    if (!Util.isUnset(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!Util.isUnset(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!Util.isUnset(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!Util.isUnset(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!Util.isUnset(request.riskModelVersion)) {
      query["RiskModelVersion"] = request.riskModelVersion;
    }

    if (!Util.isUnset(request.riskVerifyType)) {
      query["RiskVerifyType"] = request.riskVerifyType;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EntVerify",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EntVerifyResponse>(await this.callApi(params, req, runtime), new EntVerifyResponse({}));
  }

  async entVerify(request: EntVerifyRequest): Promise<EntVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.entVerifyWithOptions(request, runtime);
  }

}
