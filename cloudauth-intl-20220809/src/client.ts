// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import * as $OSSUtil from '@alicloud/oss-util';
import * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 银行卡核验
   * 
   * @param request - BankMetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BankMetaVerifyIntlResponse
   */
  async bankMetaVerifyIntlWithOptions(request: $_model.BankMetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BankMetaVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bankCard)) {
      query["BankCard"] = request.bankCard;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.verifyMode)) {
      query["VerifyMode"] = request.verifyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BankMetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BankMetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.BankMetaVerifyIntlResponse({}));
  }

  /**
   * 银行卡核验
   * 
   * @param request - BankMetaVerifyIntlRequest
   * @returns BankMetaVerifyIntlResponse
   */
  async bankMetaVerifyIntl(request: $_model.BankMetaVerifyIntlRequest): Promise<$_model.BankMetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bankMetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 证件OCR识别纯服务端接口
   * 
   * @deprecated OpenAPI CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
   * 
   * @param request - CardOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CardOcrResponse
   */
  // Deprecated
  async cardOcrWithOptions(request: $_model.CardOcrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CardOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CardOcr",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CardOcrResponse>(await this.callApi(params, req, runtime), new $_model.CardOcrResponse({}));
  }

  /**
   * 证件OCR识别纯服务端接口
   * 
   * @deprecated OpenAPI CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
   * 
   * @param request - CardOcrRequest
   * @returns CardOcrResponse
   */
  // Deprecated
  async cardOcr(request: $_model.CardOcrRequest): Promise<$_model.CardOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cardOcrWithOptions(request, runtime);
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResultResponse
   */
  async checkResultWithOptions(request: $_model.CheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extraImageControlList)) {
      query["ExtraImageControlList"] = request.extraImageControlList;
    }

    if (!$dara.isNull(request.isReturnImage)) {
      query["IsReturnImage"] = request.isReturnImage;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.returnFiveCategorySpoofResult)) {
      query["ReturnFiveCategorySpoofResult"] = request.returnFiveCategorySpoofResult;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CheckResultResponse>(await this.callApi(params, req, runtime), new $_model.CheckResultResponse({}));
  }

  /**
   * 结果查询
   * 
   * @param request - CheckResultRequest
   * @returns CheckResultResponse
   */
  async checkResult(request: $_model.CheckResultRequest): Promise<$_model.CheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  /**
   * 认证日志查询接口
   * 
   * @param request - CheckVerifyLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckVerifyLogResponse
   */
  async checkVerifyLogWithOptions(request: $_model.CheckVerifyLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckVerifyLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckVerifyLog",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckVerifyLogResponse>(await this.callApi(params, req, runtime), new $_model.CheckVerifyLogResponse({}));
  }

  /**
   * 认证日志查询接口
   * 
   * @param request - CheckVerifyLogRequest
   * @returns CheckVerifyLogResponse
   */
  async checkVerifyLog(request: $_model.CheckVerifyLogRequest): Promise<$_model.CheckVerifyLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkVerifyLogWithOptions(request, runtime);
  }

  /**
   * 凭证核验
   * 
   * @param request - CredentialVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialVerifyIntlResponse
   */
  async credentialVerifyIntlWithOptions(request: $_model.CredentialVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credName)) {
      query["CredName"] = request.credName;
    }

    if (!$dara.isNull(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageFile)) {
      body["ImageFile"] = request.imageFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.CredentialVerifyIntlResponse({}));
  }

  /**
   * 凭证核验
   * 
   * @param request - CredentialVerifyIntlRequest
   * @returns CredentialVerifyIntlResponse
   */
  async credentialVerifyIntl(request: $_model.CredentialVerifyIntlRequest): Promise<$_model.CredentialVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialVerifyIntlWithOptions(request, runtime);
  }

  async credentialVerifyIntlAdvance(request: $_model.CredentialVerifyIntlAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialVerifyIntlResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "Cloudauth-intl",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let credentialVerifyIntlReq = new $_model.CredentialVerifyIntlRequest({ });
    OpenApiUtil.convert(request, credentialVerifyIntlReq);
    if (!$dara.isNull(request.imageFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageFileObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      credentialVerifyIntlReq.imageFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let credentialVerifyIntlResp = await this.credentialVerifyIntlWithOptions(credentialVerifyIntlReq, runtime);
    return credentialVerifyIntlResp;
  }

  /**
   * 人脸凭证核验
   * 
   * @param request - DeepfakeDetectIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeDetectIntlResponse
   */
  async deepfakeDetectIntlWithOptions(request: $_model.DeepfakeDetectIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeDetectIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceInputType)) {
      query["FaceInputType"] = request.faceInputType;
    }

    if (!$dara.isNull(request.faceUrl)) {
      query["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceBase64)) {
      body["FaceBase64"] = request.faceBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepfakeDetectIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeepfakeDetectIntlResponse>(await this.callApi(params, req, runtime), new $_model.DeepfakeDetectIntlResponse({}));
  }

  /**
   * 人脸凭证核验
   * 
   * @param request - DeepfakeDetectIntlRequest
   * @returns DeepfakeDetectIntlResponse
   */
  async deepfakeDetectIntl(request: $_model.DeepfakeDetectIntlRequest): Promise<$_model.DeepfakeDetectIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectIntlWithOptions(request, runtime);
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResultWithOptions(request: $_model.DeleteVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteAfterQuery)) {
      query["DeleteAfterQuery"] = request.deleteAfterQuery;
    }

    if (!$dara.isNull(request.deleteType)) {
      query["DeleteType"] = request.deleteType;
    }

    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVerifyResult",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVerifyResultResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVerifyResultResponse({}));
  }

  /**
   * 删除用户认证记录结果
   * 
   * @param request - DeleteVerifyResultRequest
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResult(request: $_model.DeleteVerifyResultRequest): Promise<$_model.DeleteVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVerifyResultWithOptions(request, runtime);
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrResponse
   */
  async docOcrWithOptions(request: $_model.DocOcrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardSide)) {
      query["CardSide"] = request.cardSide;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.spoof)) {
      query["Spoof"] = request.spoof;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocOcr",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocOcrResponse>(await this.callApi(params, req, runtime), new $_model.DocOcrResponse({}));
  }

  /**
   * 卡证ocr纯服务端
   * 
   * @param request - DocOcrRequest
   * @returns DocOcrResponse
   */
  async docOcr(request: $_model.DocOcrRequest): Promise<$_model.DocOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrWithOptions(request, runtime);
  }

  /**
   * 全球证件ocr识别接口
   * 
   * @param request - DocOcrMaxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrMaxResponse
   */
  async docOcrMaxWithOptions(request: $_model.DocOcrMaxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrMaxResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      body["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idThreshold)) {
      body["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.ocrModel)) {
      body["OcrModel"] = request.ocrModel;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.spoof)) {
      body["Spoof"] = request.spoof;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocOcrMax",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocOcrMaxResponse>(await this.callApi(params, req, runtime), new $_model.DocOcrMaxResponse({}));
  }

  /**
   * 全球证件ocr识别接口
   * 
   * @param request - DocOcrMaxRequest
   * @returns DocOcrMaxResponse
   */
  async docOcrMax(request: $_model.DocOcrMaxRequest): Promise<$_model.DocOcrMaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrMaxWithOptions(request, runtime);
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EkycVerifyResponse
   */
  async ekycVerifyWithOptions(request: $_model.EkycVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EkycVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      query["DocNo"] = request.docNo;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      query["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EkycVerify",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EkycVerifyResponse>(await this.callApi(params, req, runtime), new $_model.EkycVerifyResponse({}));
  }

  /**
   * ekyc纯服务端接口
   * 
   * @param request - EkycVerifyRequest
   * @returns EkycVerifyResponse
   */
  async ekycVerify(request: $_model.EkycVerifyRequest): Promise<$_model.EkycVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ekycVerifyWithOptions(request, runtime);
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCompareResponse
   */
  async faceCompareWithOptions(request: $_model.FaceCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.sourceFacePictureUrl)) {
      query["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceFacePicture)) {
      body["SourceFacePicture"] = request.sourceFacePicture;
    }

    if (!$dara.isNull(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceCompare",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceCompareResponse>(await this.callApi(params, req, runtime), new $_model.FaceCompareResponse({}));
  }

  /**
   * 人脸比对
   * 
   * @param request - FaceCompareRequest
   * @returns FaceCompareResponse
   */
  async faceCompare(request: $_model.FaceCompareRequest): Promise<$_model.FaceCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRiskWithOptions(request: $_model.FaceGuardRiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceGuardRiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceGuardRisk",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceGuardRiskResponse>(await this.callApi(params, req, runtime), new $_model.FaceGuardRiskResponse({}));
  }

  /**
   * 国际人脸保镖纯服务端接口
   * 
   * @param request - FaceGuardRiskRequest
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRisk(request: $_model.FaceGuardRiskRequest): Promise<$_model.FaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceGuardRiskWithOptions(request, runtime);
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceLivenessResponse
   */
  async faceLivenessWithOptions(request: $_model.FaceLivenessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceLivenessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceQuality)) {
      query["FaceQuality"] = request.faceQuality;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.occlusion)) {
      query["Occlusion"] = request.occlusion;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceLiveness",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceLivenessResponse>(await this.callApi(params, req, runtime), new $_model.FaceLivenessResponse({}));
  }

  /**
   * 静默活体API 纯服务端
   * 
   * @param request - FaceLivenessRequest
   * @returns FaceLivenessResponse
   */
  async faceLiveness(request: $_model.FaceLivenessRequest): Promise<$_model.FaceLivenessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBackWithOptions(request: $_model.FraudResultCallBackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FraudResultCallBackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!$dara.isNull(request.resultCode)) {
      query["ResultCode"] = request.resultCode;
    }

    if (!$dara.isNull(request.verifyDeployEnv)) {
      query["VerifyDeployEnv"] = request.verifyDeployEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FraudResultCallBack",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FraudResultCallBackResponse>(await this.callApi(params, req, runtime), new $_model.FraudResultCallBackResponse({}));
  }

  /**
   * 防伪回调接口
   * 
   * @param request - FraudResultCallBackRequest
   * @returns FraudResultCallBackResponse
   */
  async fraudResultCallBack(request: $_model.FraudResultCallBackRequest): Promise<$_model.FraudResultCallBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fraudResultCallBackWithOptions(request, runtime);
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntlWithOptions(request: $_model.Id2MetaPeriodVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaPeriodVerifyIntlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      body["DocNo"] = request.docNo;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.validityEndDate)) {
      body["ValidityEndDate"] = request.validityEndDate;
    }

    if (!$dara.isNull(request.validityStartDate)) {
      body["ValidityStartDate"] = request.validityStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaPeriodVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaPeriodVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaPeriodVerifyIntlResponse({}));
  }

  /**
   * 身份二要素有效期核验
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntl(request: $_model.Id2MetaPeriodVerifyIntlRequest): Promise<$_model.Id2MetaPeriodVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntlWithOptions(request: $_model.Id2MetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaVerifyIntlResponse({}));
  }

  /**
   * 身份二要素国际版接口
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntl(request: $_model.Id2MetaVerifyIntlRequest): Promise<$_model.Id2MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * 认证初始化
   * 
   * @param tmpReq - InitializeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeResponse
   */
  async initializeWithOptions(tmpReq: $_model.InitializeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeResponse> {
    tmpReq.validate();
    let request = new $_model.InitializeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docPageConfig)) {
      request.docPageConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docPageConfig, "DocPageConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appQualityCheck)) {
      query["AppQualityCheck"] = request.appQualityCheck;
    }

    if (!$dara.isNull(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.crop)) {
      query["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.dateOfBirth)) {
      query["DateOfBirth"] = request.dateOfBirth;
    }

    if (!$dara.isNull(request.dateOfExpiry)) {
      query["DateOfExpiry"] = request.dateOfExpiry;
    }

    if (!$dara.isNull(request.docPageConfigShrink)) {
      query["DocPageConfig"] = request.docPageConfigShrink;
    }

    if (!$dara.isNull(request.docScanMode)) {
      query["DocScanMode"] = request.docScanMode;
    }

    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.docVideo)) {
      query["DocVideo"] = request.docVideo;
    }

    if (!$dara.isNull(request.documentNumber)) {
      query["DocumentNumber"] = request.documentNumber;
    }

    if (!$dara.isNull(request.experienceCode)) {
      query["ExperienceCode"] = request.experienceCode;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.idFaceQuality)) {
      query["IdFaceQuality"] = request.idFaceQuality;
    }

    if (!$dara.isNull(request.idSpoof)) {
      query["IdSpoof"] = request.idSpoof;
    }

    if (!$dara.isNull(request.idThreshold)) {
      query["IdThreshold"] = request.idThreshold;
    }

    if (!$dara.isNull(request.languageConfig)) {
      query["LanguageConfig"] = request.languageConfig;
    }

    if (!$dara.isNull(request.MRTDInput)) {
      query["MRTDInput"] = request.MRTDInput;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productFlow)) {
      query["ProductFlow"] = request.productFlow;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.securityLevel)) {
      query["SecurityLevel"] = request.securityLevel;
    }

    if (!$dara.isNull(request.showAlbumIcon)) {
      query["ShowAlbumIcon"] = request.showAlbumIcon;
    }

    if (!$dara.isNull(request.showGuidePage)) {
      query["ShowGuidePage"] = request.showGuidePage;
    }

    if (!$dara.isNull(request.showOcrResult)) {
      query["ShowOcrResult"] = request.showOcrResult;
    }

    if (!$dara.isNull(request.styleConfig)) {
      query["StyleConfig"] = request.styleConfig;
    }

    if (!$dara.isNull(request.useNFC)) {
      query["UseNFC"] = request.useNFC;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.InitializeResponse>(await this.callApi(params, req, runtime), new $_model.InitializeResponse({}));
  }

  /**
   * 认证初始化
   * 
   * @param request - InitializeRequest
   * @returns InitializeResponse
   */
  async initialize(request: $_model.InitializeRequest): Promise<$_model.InitializeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntlWithOptions(request: $_model.Mobile3MetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile3MetaVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile3MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.Mobile3MetaVerifyIntlResponse({}));
  }

  /**
   * 手机号三要素国际版接口
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntl(request: $_model.Mobile3MetaVerifyIntlRequest): Promise<$_model.Mobile3MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaVerifyIntlWithOptions(request, runtime);
  }

}
