// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class EntElementVerifyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  openTime?: string;
  reasonCode?: string;
  reasonDetail?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      openTime: 'OpenTime',
      reasonCode: 'ReasonCode',
      reasonDetail: 'ReasonDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      openTime: 'string',
      reasonCode: 'string',
      reasonDetail: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyV2ResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * 2018-09-25/9999-09-09
   */
  openTime?: string;
  /**
   * @example
   * LegalPersonNameFlag,LegalPersonCertNoFlag
   */
  reasonDetail?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      openTime: 'OpenTime',
      reasonDetail: 'ReasonDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      openTime: 'string',
      reasonDetail: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponseBodyResultRiskList extends $dara.Model {
  /**
   * @example
   * 92500112MA5UHU****
   */
  creditCode?: string;
  entName?: string;
  /**
   * @example
   * 2023-02-03
   */
  listedDate?: string;
  listedReason?: string;
  operationOrg?: string;
  /**
   * @example
   * 50011260996****
   */
  regNo?: string;
  /**
   * @example
   * 2023-02-06
   */
  removedDate?: string;
  removedOrg?: string;
  removedReason?: string;
  static names(): { [key: string]: string } {
    return {
      creditCode: 'CreditCode',
      entName: 'EntName',
      listedDate: 'ListedDate',
      listedReason: 'ListedReason',
      operationOrg: 'OperationOrg',
      regNo: 'RegNo',
      removedDate: 'RemovedDate',
      removedOrg: 'RemovedOrg',
      removedReason: 'RemovedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditCode: 'string',
      entName: 'string',
      listedDate: 'string',
      listedReason: 'string',
      operationOrg: 'string',
      regNo: 'string',
      removedDate: 'string',
      removedOrg: 'string',
      removedReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  riskList?: EntRiskQueryResponseBodyResultRiskList[];
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      riskList: 'RiskList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      riskList: { 'type': 'array', 'itemType': EntRiskQueryResponseBodyResultRiskList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResultRiskVerifyResultModelResults extends $dara.Model {
  /**
   * @example
   * model_1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResultRiskVerifyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  found?: boolean;
  modelResults?: EntVerifyResponseBodyResultRiskVerifyResultModelResults[];
  static names(): { [key: string]: string } {
    return {
      found: 'Found',
      modelResults: 'ModelResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      found: 'boolean',
      modelResults: { 'type': 'array', 'itemType': EntVerifyResponseBodyResultRiskVerifyResultModelResults },
    };
  }

  validate() {
    if(Array.isArray(this.modelResults)) {
      $dara.Model.validateArray(this.modelResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.riskVerifyResult && typeof (this.riskVerifyResult as any).validate === 'function') {
      (this.riskVerifyResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyRequest extends $dara.Model {
  entName?: string;
  /**
   * @example
   * ENT_2META
   */
  infoVerifyType?: string;
  /**
   * @example
   * 370105*****3892
   */
  legalPersonCertNo?: string;
  legalPersonName?: string;
  /**
   * @example
   * 32132***328932
   */
  licenseNo?: string;
  /**
   * @example
   * 32198****193000
   */
  merchantBizId?: string;
  /**
   * @example
   * 432***421
   */
  merchantUserId?: string;
  /**
   * @example
   * withdraw
   */
  sceneCode?: string;
  /**
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      infoVerifyType: 'InfoVerifyType',
      legalPersonCertNo: 'LegalPersonCertNo',
      legalPersonName: 'LegalPersonName',
      licenseNo: 'LicenseNo',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      infoVerifyType: 'string',
      legalPersonCertNo: 'string',
      legalPersonName: 'string',
      licenseNo: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7***B-A3DC0DE3C83E
   */
  requestId?: string;
  result?: EntElementVerifyResponseBodyResult;
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
      result: EntElementVerifyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EntElementVerifyResponseBody;
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
      body: EntElementVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ENT_2META
   */
  infoVerifyType?: string;
  /**
   * @example
   * 1******************9
   */
  legalPersonCertNo?: string;
  legalPersonName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 91330106673959****
   */
  licenseNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mch7x9a2b4c8d3e5f6g1h2i3j4k5****
   */
  merchantUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000000006
   */
  sceneCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      infoVerifyType: 'InfoVerifyType',
      legalPersonCertNo: 'LegalPersonCertNo',
      legalPersonName: 'LegalPersonName',
      licenseNo: 'LicenseNo',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      infoVerifyType: 'string',
      legalPersonCertNo: 'string',
      legalPersonName: 'string',
      licenseNo: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyV2ResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7***B-A3DC0DE3C83E
   */
  requestId?: string;
  result?: EntElementVerifyV2ResponseBodyResult;
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
      result: EntElementVerifyV2ResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EntElementVerifyV2ResponseBody;
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
      body: EntElementVerifyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryRequest extends $dara.Model {
  /**
   * @example
   * 32198****193000
   */
  merchantBizId?: string;
  merchantUserId?: string;
  /**
   * @example
   * 00
   */
  paramType?: string;
  /**
   * @example
   * 91330106673959****
   */
  paramValue?: string;
  /**
   * @example
   * 1000000086
   */
  sceneCode?: string;
  /**
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantBizId: 'string',
      merchantUserId: 'string',
      paramType: 'string',
      paramValue: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  result?: EntRiskQueryResponseBodyResult;
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
      result: EntRiskQueryResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EntRiskQueryResponseBody;
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
      body: EntRiskQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyRequest extends $dara.Model {
  /**
   * @example
   * 321324***38293
   */
  accountNo?: string;
  entName?: string;
  infoVerifyType?: string;
  /**
   * @example
   * 370105*****3892
   */
  legalPersonCertNo?: string;
  /**
   * @example
   * 1300***53
   */
  legalPersonMobile?: string;
  legalPersonName?: string;
  /**
   * @example
   * 32132***328932
   */
  licenseNo?: string;
  merchantBizId?: string;
  merchantUserId?: string;
  /**
   * @example
   * BASIC
   */
  riskModelVersion?: string;
  riskVerifyType?: string;
  /**
   * @example
   * withdraw
   */
  sceneCode?: string;
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EntVerifyResponseBody;
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 企业要素核验
   * 
   * @param request - EntElementVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntElementVerifyResponse
   */
  async entElementVerifyWithOptions(request: EntElementVerifyRequest, runtime: $dara.RuntimeOptions): Promise<EntElementVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntElementVerify",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EntElementVerifyResponse>(await this.callApi(params, req, runtime), new EntElementVerifyResponse({}));
    } else {
      return $dara.cast<EntElementVerifyResponse>(await this.execute(params, req, runtime), new EntElementVerifyResponse({}));
    }

  }

  /**
   * 企业要素核验
   * 
   * @param request - EntElementVerifyRequest
   * @returns EntElementVerifyResponse
   */
  async entElementVerify(request: EntElementVerifyRequest): Promise<EntElementVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entElementVerifyWithOptions(request, runtime);
  }

  /**
   * 企业要素验证V2
   * 
   * @param request - EntElementVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntElementVerifyV2Response
   */
  async entElementVerifyV2WithOptions(request: EntElementVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<EntElementVerifyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntElementVerifyV2",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EntElementVerifyV2Response>(await this.callApi(params, req, runtime), new EntElementVerifyV2Response({}));
    } else {
      return $dara.cast<EntElementVerifyV2Response>(await this.execute(params, req, runtime), new EntElementVerifyV2Response({}));
    }

  }

  /**
   * 企业要素验证V2
   * 
   * @param request - EntElementVerifyV2Request
   * @returns EntElementVerifyV2Response
   */
  async entElementVerifyV2(request: EntElementVerifyV2Request): Promise<EntElementVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entElementVerifyV2WithOptions(request, runtime);
  }

  /**
   * 企业经营异常查询
   * 
   * @param request - EntRiskQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntRiskQueryResponse
   */
  async entRiskQueryWithOptions(request: EntRiskQueryRequest, runtime: $dara.RuntimeOptions): Promise<EntRiskQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.paramValue)) {
      query["ParamValue"] = request.paramValue;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntRiskQuery",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EntRiskQueryResponse>(await this.callApi(params, req, runtime), new EntRiskQueryResponse({}));
    } else {
      return $dara.cast<EntRiskQueryResponse>(await this.execute(params, req, runtime), new EntRiskQueryResponse({}));
    }

  }

  /**
   * 企业经营异常查询
   * 
   * @param request - EntRiskQueryRequest
   * @returns EntRiskQueryResponse
   */
  async entRiskQuery(request: EntRiskQueryRequest): Promise<EntRiskQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entRiskQueryWithOptions(request, runtime);
  }

  /**
   * 企业认证
   * 
   * @param request - EntVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntVerifyResponse
   */
  async entVerifyWithOptions(request: EntVerifyRequest, runtime: $dara.RuntimeOptions): Promise<EntVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonMobile)) {
      query["LegalPersonMobile"] = request.legalPersonMobile;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.riskModelVersion)) {
      query["RiskModelVersion"] = request.riskModelVersion;
    }

    if (!$dara.isNull(request.riskVerifyType)) {
      query["RiskVerifyType"] = request.riskVerifyType;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EntVerifyResponse>(await this.callApi(params, req, runtime), new EntVerifyResponse({}));
    } else {
      return $dara.cast<EntVerifyResponse>(await this.execute(params, req, runtime), new EntVerifyResponse({}));
    }

  }

  /**
   * 企业认证
   * 
   * @param request - EntVerifyRequest
   * @returns EntVerifyResponse
   */
  async entVerify(request: EntVerifyRequest): Promise<EntVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entVerifyWithOptions(request, runtime);
  }

}
