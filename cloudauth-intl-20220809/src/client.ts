// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hongkong': "cloudauth-intl.cn-hongkong.aliyuncs.com",
      'ap-southeast-5': "cloudauth-intl.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "cloudauth-intl.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "cloudauth-intl.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        let tmp = String(form["host"]);
        let host = `${bucketName}.${tmp}`;
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: host,
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

        let respMap : {[key: string]: any} = null;
        let bodyStr = await $dara.Stream.readAsString(response_.body);
        if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
          respMap = $dara.XML.parseXml(bodyStr, null);
          let err = respMap["Error"];
          throw new $OpenApi.ClientError({
            code: String(err["Code"]),
            message: String(err["Message"]),
            data: {
              httpCode: response_.statusCode,
              requestId: String(err["RequestId"]),
              hostId: String(err["HostId"]),
            },
          });
        }

        respMap = $dara.XML.parseXml(bodyStr, null);
        return {
          ...respMap,
        };
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * Adds a face image to a specified face library.
   * 
   * @param request - AddFaceRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceRecordResponse
   */
  async addFaceRecordWithOptions(request: $_model.AddFaceRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceGroupCode)) {
      body["FaceGroupCode"] = request.faceGroupCode;
    }

    if (!$dara.isNull(request.facePicture)) {
      body["FacePicture"] = request.facePicture;
    }

    if (!$dara.isNull(request.facePictureFile)) {
      body["FacePictureFile"] = request.facePictureFile;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      body["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      body["FaceQualityCheck"] = request.faceQualityCheck;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceRecord",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceRecordResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceRecordResponse({}));
  }

  /**
   * Adds a face image to a specified face library.
   * 
   * @param request - AddFaceRecordRequest
   * @returns AddFaceRecordResponse
   */
  async addFaceRecord(request: $_model.AddFaceRecordRequest): Promise<$_model.AddFaceRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceRecordWithOptions(request, runtime);
  }

  async addFaceRecordAdvance(request: $_model.AddFaceRecordAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceRecordResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let addFaceRecordReq = new $_model.AddFaceRecordRequest({ });
    OpenApiUtil.convert(request, addFaceRecordReq);
    if (!$dara.isNull(request.facePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.facePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      addFaceRecordReq.facePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let addFaceRecordResp = await this.addFaceRecordWithOptions(addFaceRecordReq, runtime);
    return addFaceRecordResp;
  }

  /**
   * Compares the similarity of two addresses.
   * 
   * @remarks
   * Compares two addresses for consistency by using address standardization.
   * 
   * @param request - AddressCompareIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddressCompareIntlResponse
   */
  async addressCompareIntlWithOptions(request: $_model.AddressCompareIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddressCompareIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultCountry)) {
      query["DefaultCountry"] = request.defaultCountry;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.text1)) {
      query["Text1"] = request.text1;
    }

    if (!$dara.isNull(request.text2)) {
      query["Text2"] = request.text2;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddressCompareIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddressCompareIntlResponse>(await this.callApi(params, req, runtime), new $_model.AddressCompareIntlResponse({}));
  }

  /**
   * Compares the similarity of two addresses.
   * 
   * @remarks
   * Compares two addresses for consistency by using address standardization.
   * 
   * @param request - AddressCompareIntlRequest
   * @returns AddressCompareIntlResponse
   */
  async addressCompareIntl(request: $_model.AddressCompareIntlRequest): Promise<$_model.AddressCompareIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addressCompareIntlWithOptions(request, runtime);
  }

  /**
   * Verifies whether a specified address belongs to a user\\"s residential address based on telecommunications service provider capabilities, using a phone number and an address (or coordinates).
   * 
   * @remarks
   * Verifies whether a specified address belongs to a user\\"s residential address based on telecommunications service provider capabilities, using a phone number and an address (or coordinates).
   * 
   * @deprecated OpenAPI AddressVerifyIntl is deprecated, please use Cloudauth-intl::2022-08-09::AddressVerifyV2Intl instead.
   * 
   * @param request - AddressVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddressVerifyIntlResponse
   */
  async addressVerifyIntlWithOptions(request: $_model.AddressVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddressVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.defaultCity)) {
      query["DefaultCity"] = request.defaultCity;
    }

    if (!$dara.isNull(request.defaultCountry)) {
      query["DefaultCountry"] = request.defaultCountry;
    }

    if (!$dara.isNull(request.defaultDistrict)) {
      query["DefaultDistrict"] = request.defaultDistrict;
    }

    if (!$dara.isNull(request.defaultProvince)) {
      query["DefaultProvince"] = request.defaultProvince;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddressVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddressVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.AddressVerifyIntlResponse({}));
  }

  /**
   * Verifies whether a specified address belongs to a user\\"s residential address based on telecommunications service provider capabilities, using a phone number and an address (or coordinates).
   * 
   * @remarks
   * Verifies whether a specified address belongs to a user\\"s residential address based on telecommunications service provider capabilities, using a phone number and an address (or coordinates).
   * 
   * @deprecated OpenAPI AddressVerifyIntl is deprecated, please use Cloudauth-intl::2022-08-09::AddressVerifyV2Intl instead.
   * 
   * @param request - AddressVerifyIntlRequest
   * @returns AddressVerifyIntlResponse
   */
  // Deprecated
  async addressVerifyIntl(request: $_model.AddressVerifyIntlRequest): Promise<$_model.AddressVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addressVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Verifies an address.
   * 
   * @param request - AddressVerifyV2IntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddressVerifyV2IntlResponse
   */
  async addressVerifyV2IntlWithOptions(request: $_model.AddressVerifyV2IntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddressVerifyV2IntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regCountry)) {
      query["RegCountry"] = request.regCountry;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddressVerifyV2Intl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddressVerifyV2IntlResponse>(await this.callApi(params, req, runtime), new $_model.AddressVerifyV2IntlResponse({}));
  }

  /**
   * Verifies an address.
   * 
   * @param request - AddressVerifyV2IntlRequest
   * @returns AddressVerifyV2IntlResponse
   */
  async addressVerifyV2Intl(request: $_model.AddressVerifyV2IntlRequest): Promise<$_model.AddressVerifyV2IntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addressVerifyV2IntlWithOptions(request, runtime);
  }

  /**
   * Provides bank card element verification (two-element, three-element, and four-element) API operations.
   * 
   * @remarks
   * Verifies bank card elements, including two-element verification (name + bank card number), three-element verification (name + ID card number + bank card number), and four-element verification (name + ID card number + phone number + bank card number) for consistency.
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
   * Provides bank card element verification (two-element, three-element, and four-element) API operations.
   * 
   * @remarks
   * Verifies bank card elements, including two-element verification (name + bank card number), three-element verification (name + ID card number + bank card number), and four-element verification (name + ID card number + phone number + bank card number) for consistency.
   * 
   * @param request - BankMetaVerifyIntlRequest
   * @returns BankMetaVerifyIntlResponse
   */
  async bankMetaVerifyIntl(request: $_model.BankMetaVerifyIntlRequest): Promise<$_model.BankMetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bankMetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Provides server-side ID card and certificate OCR capabilities.
   * 
   * @deprecated OpenAPI CardOcr is deprecated, please use Cloudauth-intl::2022-08-09::DocOcr instead.
   * 
   * @param request - CardOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CardOcrResponse
   */
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
   * Provides server-side ID card and certificate OCR capabilities.
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
   * Queries the verification result.
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
   * Queries the verification result.
   * 
   * @param request - CheckResultRequest
   * @returns CheckResultResponse
   */
  async checkResult(request: $_model.CheckResultRequest): Promise<$_model.CheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResultWithOptions(request, runtime);
  }

  /**
   * Authentication log query.
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
   * Authentication log query.
   * 
   * @param request - CheckVerifyLogRequest
   * @returns CheckVerifyLogResponse
   */
  async checkVerifyLog(request: $_model.CheckVerifyLogRequest): Promise<$_model.CheckVerifyLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkVerifyLogWithOptions(request, runtime);
  }

  /**
   * Queries the credential recognition result.
   * 
   * @remarks
   * After you obtain the TransactionId, you can call this operation on the server side to retrieve the corresponding authentication result.
   * 
   * @param request - CredentialGetResultIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialGetResultIntlResponse
   */
  async credentialGetResultIntlWithOptions(request: $_model.CredentialGetResultIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialGetResultIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.transactionId)) {
      query["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialGetResultIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialGetResultIntlResponse>(await this.callApi(params, req, runtime), new $_model.CredentialGetResultIntlResponse({}));
  }

  /**
   * Queries the credential recognition result.
   * 
   * @remarks
   * After you obtain the TransactionId, you can call this operation on the server side to retrieve the corresponding authentication result.
   * 
   * @param request - CredentialGetResultIntlRequest
   * @returns CredentialGetResultIntlResponse
   */
  async credentialGetResultIntl(request: $_model.CredentialGetResultIntlRequest): Promise<$_model.CredentialGetResultIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialGetResultIntlWithOptions(request, runtime);
  }

  /**
   * An API operation that uploads a credential image, such as a utility bill or credit card statement, and uses Qwen-VL to intelligently fetch the billing address and name from the credential.
   * 
   * @remarks
   * Uses AI technology to detect whether a credential (such as a water, electricity, gas, or credit card electronic bill) has been forged, and extracts key information from the credential.
   * 
   * @param request - CredentialRecognitionIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialRecognitionIntlResponse
   */
  async credentialRecognitionIntlWithOptions(request: $_model.CredentialRecognitionIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialRecognitionIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.fraudCheck)) {
      query["FraudCheck"] = request.fraudCheck;
    }

    if (!$dara.isNull(request.ocrArea)) {
      query["OcrArea"] = request.ocrArea;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialOcrPictureBase64)) {
      body["CredentialOcrPictureBase64"] = request.credentialOcrPictureBase64;
    }

    if (!$dara.isNull(request.credentialOcrPictureUrl)) {
      body["CredentialOcrPictureUrl"] = request.credentialOcrPictureUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialRecognitionIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialRecognitionIntlResponse>(await this.callApi(params, req, runtime), new $_model.CredentialRecognitionIntlResponse({}));
  }

  /**
   * An API operation that uploads a credential image, such as a utility bill or credit card statement, and uses Qwen-VL to intelligently fetch the billing address and name from the credential.
   * 
   * @remarks
   * Uses AI technology to detect whether a credential (such as a water, electricity, gas, or credit card electronic bill) has been forged, and extracts key information from the credential.
   * 
   * @param request - CredentialRecognitionIntlRequest
   * @returns CredentialRecognitionIntlResponse
   */
  async credentialRecognitionIntl(request: $_model.CredentialRecognitionIntlRequest): Promise<$_model.CredentialRecognitionIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialRecognitionIntlWithOptions(request, runtime);
  }

  /**
   * Submits credential recognition information.
   * 
   * @remarks
   * Initializes the credential recognition OCR operation and retrieves a transactionId.
   * 
   * @param request - CredentialSubmitIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialSubmitIntlResponse
   */
  async credentialSubmitIntlWithOptions(request: $_model.CredentialSubmitIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialSubmitIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.docType)) {
      query["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.fraudCheck)) {
      query["FraudCheck"] = request.fraudCheck;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.ocrArea)) {
      query["OcrArea"] = request.ocrArea;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialOcrPictureBase64)) {
      body["CredentialOcrPictureBase64"] = request.credentialOcrPictureBase64;
    }

    if (!$dara.isNull(request.credentialOcrPictureUrl)) {
      body["CredentialOcrPictureUrl"] = request.credentialOcrPictureUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialSubmitIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialSubmitIntlResponse>(await this.callApi(params, req, runtime), new $_model.CredentialSubmitIntlResponse({}));
  }

  /**
   * Submits credential recognition information.
   * 
   * @remarks
   * Initializes the credential recognition OCR operation and retrieves a transactionId.
   * 
   * @param request - CredentialSubmitIntlRequest
   * @returns CredentialSubmitIntlResponse
   */
  async credentialSubmitIntl(request: $_model.CredentialSubmitIntlRequest): Promise<$_model.CredentialSubmitIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialSubmitIntlWithOptions(request, runtime);
  }

  /**
   * Provides the API operation for the credential verification service. This operation uses a large language model to detect image tampering, forgery, and image quality issues in submitted credential images.
   * 
   * @remarks
   * Submits credential image information, performs image quality, tampering, and forgery detection, and returns the detection results.
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
   * Provides the API operation for the credential verification service. This operation uses a large language model to detect image tampering, forgery, and image quality issues in submitted credential images.
   * 
   * @remarks
   * Submits credential image information, performs image quality, tampering, and forgery detection, and returns the detection results.
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
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let credentialVerifyIntlReq = new $_model.CredentialVerifyIntlRequest({ });
    OpenApiUtil.convert(request, credentialVerifyIntlReq);
    if (!$dara.isNull(request.imageFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.imageFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      credentialVerifyIntlReq.imageFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let credentialVerifyIntlResp = await this.credentialVerifyIntlWithOptions(credentialVerifyIntlReq, runtime);
    return credentialVerifyIntlResp;
  }

  /**
   * Detects deepfake risks in facial images.
   * 
   * @remarks
   * Submits a facial image and uses algorithms to detect potential deepfake risks. This operation covers risk scenarios such as AIGC-generated faces, deep forgery face swaps, template faces, and recaptured faces. It returns risk labels and confidence scores.
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
   * Detects deepfake risks in facial images.
   * 
   * @remarks
   * Submits a facial image and uses algorithms to detect potential deepfake risks. This operation covers risk scenarios such as AIGC-generated faces, deep forgery face swaps, template faces, and recaptured faces. It returns risk labels and confidence scores.
   * 
   * @param request - DeepfakeDetectIntlRequest
   * @returns DeepfakeDetectIntlResponse
   */
  async deepfakeDetectIntl(request: $_model.DeepfakeDetectIntlRequest): Promise<$_model.DeepfakeDetectIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectIntlWithOptions(request, runtime);
  }

  /**
   * ID Verification provides face deepfake detection capabilities, which can be integrated independently through API calls.
   * 
   * @remarks
   * Submit a face image to detect deepfake risks through algorithms. This covers risk scenarios such as AIGC-generated faces, deep forgery face swaps, template faces, and re-captured faces, and outputs risk labels and confidence scores.
   * 
   * @param request - DeepfakeDetectIntlStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeDetectIntlStreamResponse
   */
  async deepfakeDetectIntlStreamWithOptions(request: $_model.DeepfakeDetectIntlStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeDetectIntlStreamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceBase64)) {
      body["FaceBase64"] = request.faceBase64;
    }

    if (!$dara.isNull(request.faceFile)) {
      body["FaceFile"] = request.faceFile;
    }

    if (!$dara.isNull(request.faceInputType)) {
      body["FaceInputType"] = request.faceInputType;
    }

    if (!$dara.isNull(request.faceUrl)) {
      body["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepfakeDetectIntlStream",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeepfakeDetectIntlStreamResponse>(await this.callApi(params, req, runtime), new $_model.DeepfakeDetectIntlStreamResponse({}));
  }

  /**
   * ID Verification provides face deepfake detection capabilities, which can be integrated independently through API calls.
   * 
   * @remarks
   * Submit a face image to detect deepfake risks through algorithms. This covers risk scenarios such as AIGC-generated faces, deep forgery face swaps, template faces, and re-captured faces, and outputs risk labels and confidence scores.
   * 
   * @param request - DeepfakeDetectIntlStreamRequest
   * @returns DeepfakeDetectIntlStreamResponse
   */
  async deepfakeDetectIntlStream(request: $_model.DeepfakeDetectIntlStreamRequest): Promise<$_model.DeepfakeDetectIntlStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectIntlStreamWithOptions(request, runtime);
  }

  async deepfakeDetectIntlStreamAdvance(request: $_model.DeepfakeDetectIntlStreamAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeDetectIntlStreamResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let deepfakeDetectIntlStreamReq = new $_model.DeepfakeDetectIntlStreamRequest({ });
    OpenApiUtil.convert(request, deepfakeDetectIntlStreamReq);
    if (!$dara.isNull(request.faceFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.faceFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      deepfakeDetectIntlStreamReq.faceFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let deepfakeDetectIntlStreamResp = await this.deepfakeDetectIntlStreamWithOptions(deepfakeDetectIntlStreamReq, runtime);
    return deepfakeDetectIntlStreamResp;
  }

  /**
   * Deletes a face library.
   * 
   * @param request - DeleteFaceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceGroupResponse
   */
  async deleteFaceGroupWithOptions(request: $_model.DeleteFaceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceGroup",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceGroupResponse({}));
  }

  /**
   * Deletes a face library.
   * 
   * @param request - DeleteFaceGroupRequest
   * @returns DeleteFaceGroupResponse
   */
  async deleteFaceGroup(request: $_model.DeleteFaceGroupRequest): Promise<$_model.DeleteFaceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a face record.
   * 
   * @param request - DeleteFaceRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceRecordResponse
   */
  async deleteFaceRecordWithOptions(request: $_model.DeleteFaceRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceRecord",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceRecordResponse({}));
  }

  /**
   * Deletes a face record.
   * 
   * @param request - DeleteFaceRecordRequest
   * @returns DeleteFaceRecordResponse
   */
  async deleteFaceRecord(request: $_model.DeleteFaceRecordRequest): Promise<$_model.DeleteFaceRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceRecordWithOptions(request, runtime);
  }

  /**
   * Deletes data related to a user authentication record.
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
   * Deletes data related to a user authentication record.
   * 
   * @param request - DeleteVerifyResultRequest
   * @returns DeleteVerifyResultResponse
   */
  async deleteVerifyResult(request: $_model.DeleteVerifyResultRequest): Promise<$_model.DeleteVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVerifyResultWithOptions(request, runtime);
  }

  /**
   * Provides server-side card and certificate OCR capabilities.
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
   * Provides server-side card and certificate OCR capabilities.
   * 
   * @param request - DocOcrRequest
   * @returns DocOcrResponse
   */
  async docOcr(request: $_model.DocOcrRequest): Promise<$_model.DocOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrWithOptions(request, runtime);
  }

  /**
   * Recognizes global identity documents through OCR.
   * 
   * @param request - DocOcrMaxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrMaxResponse
   */
  async docOcrMaxWithOptions(request: $_model.DocOcrMaxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrMaxResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ocrValueStandard)) {
      query["OcrValueStandard"] = request.ocrValueStandard;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorize)) {
      body["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.docPage)) {
      body["DocPage"] = request.docPage;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      body["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idSpoof)) {
      body["IdSpoof"] = request.idSpoof;
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
      query: OpenApiUtil.query(query),
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
   * Recognizes global identity documents through OCR.
   * 
   * @param request - DocOcrMaxRequest
   * @returns DocOcrMaxResponse
   */
  async docOcrMax(request: $_model.DocOcrMaxRequest): Promise<$_model.DocOcrMaxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrMaxWithOptions(request, runtime);
  }

  /**
   * 全球证件ocr识别接口
   * 
   * @param request - DocOcrMaxV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrMaxV2Response
   */
  async docOcrMaxV2WithOptions(request: $_model.DocOcrMaxV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrMaxV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ocrValueStandard)) {
      query["OcrValueStandard"] = request.ocrValueStandard;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorize)) {
      body["Authorize"] = request.authorize;
    }

    if (!$dara.isNull(request.docPage)) {
      body["DocPage"] = request.docPage;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureFile)) {
      body["IdOcrPictureFile"] = request.idOcrPictureFile;
    }

    if (!$dara.isNull(request.idOcrPictureUrl)) {
      body["IdOcrPictureUrl"] = request.idOcrPictureUrl;
    }

    if (!$dara.isNull(request.idSpoof)) {
      body["IdSpoof"] = request.idSpoof;
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

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocOcrMaxV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocOcrMaxV2Response>(await this.callApi(params, req, runtime), new $_model.DocOcrMaxV2Response({}));
  }

  /**
   * 全球证件ocr识别接口
   * 
   * @param request - DocOcrMaxV2Request
   * @returns DocOcrMaxV2Response
   */
  async docOcrMaxV2(request: $_model.DocOcrMaxV2Request): Promise<$_model.DocOcrMaxV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrMaxV2WithOptions(request, runtime);
  }

  async docOcrMaxV2Advance(request: $_model.DocOcrMaxV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrMaxV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let docOcrMaxV2Req = new $_model.DocOcrMaxV2Request({ });
    OpenApiUtil.convert(request, docOcrMaxV2Req);
    if (!$dara.isNull(request.idOcrPictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.idOcrPictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      docOcrMaxV2Req.idOcrPictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let docOcrMaxV2Resp = await this.docOcrMaxV2WithOptions(docOcrMaxV2Req, runtime);
    return docOcrMaxV2Resp;
  }

  /**
   * Provides server-side card and certificate OCR capabilities.
   * 
   * @param request - DocOcrV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocOcrV2Response
   */
  async docOcrV2WithOptions(request: $_model.DocOcrV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrV2Response> {
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

    if (!$dara.isNull(request.idOcrPictureFile)) {
      body["IdOcrPictureFile"] = request.idOcrPictureFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocOcrV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocOcrV2Response>(await this.callApi(params, req, runtime), new $_model.DocOcrV2Response({}));
  }

  /**
   * Provides server-side card and certificate OCR capabilities.
   * 
   * @param request - DocOcrV2Request
   * @returns DocOcrV2Response
   */
  async docOcrV2(request: $_model.DocOcrV2Request): Promise<$_model.DocOcrV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.docOcrV2WithOptions(request, runtime);
  }

  async docOcrV2Advance(request: $_model.DocOcrV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocOcrV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let docOcrV2Req = new $_model.DocOcrV2Request({ });
    OpenApiUtil.convert(request, docOcrV2Req);
    if (!$dara.isNull(request.idOcrPictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.idOcrPictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      docOcrV2Req.idOcrPictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let docOcrV2Resp = await this.docOcrV2WithOptions(docOcrV2Req, runtime);
    return docOcrV2Resp;
  }

  /**
   * Downloads verification task records.
   * 
   * @param request - DownloadVerifyRecordIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadVerifyRecordIntlResponse
   */
  async downloadVerifyRecordIntlWithOptions(request: $_model.DownloadVerifyRecordIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadVerifyRecordIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.downloadMode)) {
      query["DownloadMode"] = request.downloadMode;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadVerifyRecordIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadVerifyRecordIntlResponse>(await this.callApi(params, req, runtime), new $_model.DownloadVerifyRecordIntlResponse({}));
  }

  /**
   * Downloads verification task records.
   * 
   * @param request - DownloadVerifyRecordIntlRequest
   * @returns DownloadVerifyRecordIntlResponse
   */
  async downloadVerifyRecordIntl(request: $_model.DownloadVerifyRecordIntlRequest): Promise<$_model.DownloadVerifyRecordIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadVerifyRecordIntlWithOptions(request, runtime);
  }

  /**
   * Provides a server-side-only API for the eKYC solution.
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
   * Provides a server-side-only API for the eKYC solution.
   * 
   * @param request - EkycVerifyRequest
   * @returns EkycVerifyResponse
   */
  async ekycVerify(request: $_model.EkycVerifyRequest): Promise<$_model.EkycVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ekycVerifyWithOptions(request, runtime);
  }

  /**
   * Server-side-only eKYC API
   * 
   * @param request - EkycVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EkycVerifyV2Response
   */
  async ekycVerifyV2WithOptions(request: $_model.EkycVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.EkycVerifyV2Response> {
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

    if (!$dara.isNull(request.facePictureFile)) {
      body["FacePictureFile"] = request.facePictureFile;
    }

    if (!$dara.isNull(request.idOcrPictureBase64)) {
      body["IdOcrPictureBase64"] = request.idOcrPictureBase64;
    }

    if (!$dara.isNull(request.idOcrPictureFile)) {
      body["IdOcrPictureFile"] = request.idOcrPictureFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EkycVerifyV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EkycVerifyV2Response>(await this.callApi(params, req, runtime), new $_model.EkycVerifyV2Response({}));
  }

  /**
   * Server-side-only eKYC API
   * 
   * @param request - EkycVerifyV2Request
   * @returns EkycVerifyV2Response
   */
  async ekycVerifyV2(request: $_model.EkycVerifyV2Request): Promise<$_model.EkycVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ekycVerifyV2WithOptions(request, runtime);
  }

  async ekycVerifyV2Advance(request: $_model.EkycVerifyV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EkycVerifyV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let ekycVerifyV2Req = new $_model.EkycVerifyV2Request({ });
    OpenApiUtil.convert(request, ekycVerifyV2Req);
    if (!$dara.isNull(request.facePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.facePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      ekycVerifyV2Req.facePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.idOcrPictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.idOcrPictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      ekycVerifyV2Req.idOcrPictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let ekycVerifyV2Resp = await this.ekycVerifyV2WithOptions(ekycVerifyV2Req, runtime);
    return ekycVerifyV2Resp;
  }

  /**
   * Compares two face images by using face recognition technology and returns the comparison result and similarity score.
   * 
   * @param request - FaceCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCompareResponse
   */
  async faceCompareWithOptions(request: $_model.FaceCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.facePictureQualityCheck)) {
      query["FacePictureQualityCheck"] = request.facePictureQualityCheck;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      query["FaceQualityCheck"] = request.faceQualityCheck;
    }

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
   * Compares two face images by using face recognition technology and returns the comparison result and similarity score.
   * 
   * @param request - FaceCompareRequest
   * @returns FaceCompareResponse
   */
  async faceCompare(request: $_model.FaceCompareRequest): Promise<$_model.FaceCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  /**
   * Compares two face images by using face recognition technology and returns the comparison result and a similarity score.
   * 
   * @param request - FaceCompareV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCompareV2Response
   */
  async faceCompareV2WithOptions(request: $_model.FaceCompareV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.FaceCompareV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.facePictureQualityCheck)) {
      query["FacePictureQualityCheck"] = request.facePictureQualityCheck;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      query["FaceQualityCheck"] = request.faceQualityCheck;
    }

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

    if (!$dara.isNull(request.sourceFacePictureFile)) {
      body["SourceFacePictureFile"] = request.sourceFacePictureFile;
    }

    if (!$dara.isNull(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    if (!$dara.isNull(request.targetFacePictureFile)) {
      body["TargetFacePictureFile"] = request.targetFacePictureFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceCompareV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceCompareV2Response>(await this.callApi(params, req, runtime), new $_model.FaceCompareV2Response({}));
  }

  /**
   * Compares two face images by using face recognition technology and returns the comparison result and a similarity score.
   * 
   * @param request - FaceCompareV2Request
   * @returns FaceCompareV2Response
   */
  async faceCompareV2(request: $_model.FaceCompareV2Request): Promise<$_model.FaceCompareV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceCompareV2WithOptions(request, runtime);
  }

  async faceCompareV2Advance(request: $_model.FaceCompareV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceCompareV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let faceCompareV2Req = new $_model.FaceCompareV2Request({ });
    OpenApiUtil.convert(request, faceCompareV2Req);
    if (!$dara.isNull(request.sourceFacePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.sourceFacePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      faceCompareV2Req.sourceFacePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.targetFacePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.targetFacePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      faceCompareV2Req.targetFacePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let faceCompareV2Resp = await this.faceCompareV2WithOptions(faceCompareV2Req, runtime);
    return faceCompareV2Resp;
  }

  /**
   * Performs cross-comparison of faces.
   * 
   * @param request - FaceCrossCompareIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceCrossCompareIntlResponse
   */
  async faceCrossCompareIntlWithOptions(request: $_model.FaceCrossCompareIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceCrossCompareIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compareModel)) {
      query["CompareModel"] = request.compareModel;
    }

    if (!$dara.isNull(request.faceVerifyThreshold)) {
      query["FaceVerifyThreshold"] = request.faceVerifyThreshold;
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

    if (!$dara.isNull(request.sourceAFacePictureUrl)) {
      query["SourceAFacePictureUrl"] = request.sourceAFacePictureUrl;
    }

    if (!$dara.isNull(request.sourceBFacePictureUrl)) {
      query["SourceBFacePictureUrl"] = request.sourceBFacePictureUrl;
    }

    if (!$dara.isNull(request.sourceCFacePictureUrl)) {
      query["SourceCFacePictureUrl"] = request.sourceCFacePictureUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceAFacePicture)) {
      body["SourceAFacePicture"] = request.sourceAFacePicture;
    }

    if (!$dara.isNull(request.sourceBFacePicture)) {
      body["SourceBFacePicture"] = request.sourceBFacePicture;
    }

    if (!$dara.isNull(request.sourceCFacePicture)) {
      body["SourceCFacePicture"] = request.sourceCFacePicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceCrossCompareIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceCrossCompareIntlResponse>(await this.callApi(params, req, runtime), new $_model.FaceCrossCompareIntlResponse({}));
  }

  /**
   * Performs cross-comparison of faces.
   * 
   * @param request - FaceCrossCompareIntlRequest
   * @returns FaceCrossCompareIntlResponse
   */
  async faceCrossCompareIntl(request: $_model.FaceCrossCompareIntlRequest): Promise<$_model.FaceCrossCompareIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceCrossCompareIntlWithOptions(request, runtime);
  }

  /**
   * FaceDuplicationCheckIntl is designed for scenarios where SDK integration is not feasible. You can call this API operation to submit facial images and perform the following functions: verify whether the user is a real person, compare the submitted face against a stored face to verify identity, search a face database to check for existing records, and automatically register the face in a specified face database after successful verification.
   * 
   * @param request - FaceDuplicationCheckIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceDuplicationCheckIntlResponse
   */
  async faceDuplicationCheckIntlWithOptions(request: $_model.FaceDuplicationCheckIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceDuplicationCheckIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRegistration)) {
      body["AutoRegistration"] = request.autoRegistration;
    }

    if (!$dara.isNull(request.faceGroupCodes)) {
      body["FaceGroupCodes"] = request.faceGroupCodes;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      body["FaceQualityCheck"] = request.faceQualityCheck;
    }

    if (!$dara.isNull(request.faceRegisterGroupCode)) {
      body["FaceRegisterGroupCode"] = request.faceRegisterGroupCode;
    }

    if (!$dara.isNull(request.faceVerifyThreshold)) {
      body["FaceVerifyThreshold"] = request.faceVerifyThreshold;
    }

    if (!$dara.isNull(request.liveness)) {
      body["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      body["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      body["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.returnFaces)) {
      body["ReturnFaces"] = request.returnFaces;
    }

    if (!$dara.isNull(request.saveFacePicture)) {
      body["SaveFacePicture"] = request.saveFacePicture;
    }

    if (!$dara.isNull(request.sceneCode)) {
      body["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.sourceFacePicture)) {
      body["SourceFacePicture"] = request.sourceFacePicture;
    }

    if (!$dara.isNull(request.sourceFacePictureUrl)) {
      body["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!$dara.isNull(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      body["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    if (!$dara.isNull(request.verifyModel)) {
      body["VerifyModel"] = request.verifyModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceDuplicationCheckIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceDuplicationCheckIntlResponse>(await this.callApi(params, req, runtime), new $_model.FaceDuplicationCheckIntlResponse({}));
  }

  /**
   * FaceDuplicationCheckIntl is designed for scenarios where SDK integration is not feasible. You can call this API operation to submit facial images and perform the following functions: verify whether the user is a real person, compare the submitted face against a stored face to verify identity, search a face database to check for existing records, and automatically register the face in a specified face database after successful verification.
   * 
   * @param request - FaceDuplicationCheckIntlRequest
   * @returns FaceDuplicationCheckIntlResponse
   */
  async faceDuplicationCheckIntl(request: $_model.FaceDuplicationCheckIntlRequest): Promise<$_model.FaceDuplicationCheckIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceDuplicationCheckIntlWithOptions(request, runtime);
  }

  /**
   * Server-side API for the international Face Guard service.
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
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
   * Server-side API for the international Face Guard service.
   * 
   * @param request - FaceGuardRiskRequest
   * @returns FaceGuardRiskResponse
   */
  async faceGuardRisk(request: $_model.FaceGuardRiskRequest): Promise<$_model.FaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceGuardRiskWithOptions(request, runtime);
  }

  /**
   * Calls the server-side API for passive liveness detection.
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

    if (!$dara.isNull(request.faceQualityCheck)) {
      query["FaceQualityCheck"] = request.faceQualityCheck;
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
   * Calls the server-side API for passive liveness detection.
   * 
   * @param request - FaceLivenessRequest
   * @returns FaceLivenessResponse
   */
  async faceLiveness(request: $_model.FaceLivenessRequest): Promise<$_model.FaceLivenessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

  /**
   * 人脸活体验证
   * 
   * @remarks
   * 调用FaceLivenessV2接口对人脸图片进行活体检测。
   * 
   * @param request - FaceLivenessV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceLivenessV2Response
   */
  async faceLivenessV2WithOptions(request: $_model.FaceLivenessV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.FaceLivenessV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.facePictureFile)) {
      query["FacePictureFile"] = request.facePictureFile;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      query["FaceQualityCheck"] = request.faceQualityCheck;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceLivenessV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceLivenessV2Response>(await this.callApi(params, req, runtime), new $_model.FaceLivenessV2Response({}));
  }

  /**
   * 人脸活体验证
   * 
   * @remarks
   * 调用FaceLivenessV2接口对人脸图片进行活体检测。
   * 
   * @param request - FaceLivenessV2Request
   * @returns FaceLivenessV2Response
   */
  async faceLivenessV2(request: $_model.FaceLivenessV2Request): Promise<$_model.FaceLivenessV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceLivenessV2WithOptions(request, runtime);
  }

  async faceLivenessV2Advance(request: $_model.FaceLivenessV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceLivenessV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let faceLivenessV2Req = new $_model.FaceLivenessV2Request({ });
    OpenApiUtil.convert(request, faceLivenessV2Req);
    if (!$dara.isNull(request.facePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.facePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      faceLivenessV2Req.facePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let faceLivenessV2Resp = await this.faceLivenessV2WithOptions(faceLivenessV2Req, runtime);
    return faceLivenessV2Resp;
  }

  /**
   * 人脸活体验证
   * 
   * @remarks
   * 调用FaceVerifyIntl接口对人脸图片进行活体检测。
   * 
   * @param request - FaceVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceVerifyIntlResponse
   */
  async faceVerifyIntlWithOptions(request: $_model.FaceVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceVerifyIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRegistration)) {
      query["AutoRegistration"] = request.autoRegistration;
    }

    if (!$dara.isNull(request.faceGroupCodes)) {
      query["FaceGroupCodes"] = request.faceGroupCodes;
    }

    if (!$dara.isNull(request.faceQualityCheck)) {
      query["FaceQualityCheck"] = request.faceQualityCheck;
    }

    if (!$dara.isNull(request.faceRegisterGroupCode)) {
      query["FaceRegisterGroupCode"] = request.faceRegisterGroupCode;
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

    if (!$dara.isNull(request.returnFaces)) {
      query["ReturnFaces"] = request.returnFaces;
    }

    if (!$dara.isNull(request.sourceFacePictureFile)) {
      query["SourceFacePictureFile"] = request.sourceFacePictureFile;
    }

    if (!$dara.isNull(request.sourceFacePictureUrl)) {
      query["SourceFacePictureUrl"] = request.sourceFacePictureUrl;
    }

    if (!$dara.isNull(request.targetFacePictureFile)) {
      query["TargetFacePictureFile"] = request.targetFacePictureFile;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    if (!$dara.isNull(request.verifyModel)) {
      query["VerifyModel"] = request.verifyModel;
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
      action: "FaceVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.FaceVerifyIntlResponse({}));
  }

  /**
   * 人脸活体验证
   * 
   * @remarks
   * 调用FaceVerifyIntl接口对人脸图片进行活体检测。
   * 
   * @param request - FaceVerifyIntlRequest
   * @returns FaceVerifyIntlResponse
   */
  async faceVerifyIntl(request: $_model.FaceVerifyIntlRequest): Promise<$_model.FaceVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceVerifyIntlWithOptions(request, runtime);
  }

  async faceVerifyIntlAdvance(request: $_model.FaceVerifyIntlAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceVerifyIntlResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let faceVerifyIntlReq = new $_model.FaceVerifyIntlRequest({ });
    OpenApiUtil.convert(request, faceVerifyIntlReq);
    if (!$dara.isNull(request.sourceFacePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.sourceFacePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      faceVerifyIntlReq.sourceFacePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.targetFacePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.targetFacePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      faceVerifyIntlReq.targetFacePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let faceVerifyIntlResp = await this.faceVerifyIntlWithOptions(faceVerifyIntlReq, runtime);
    return faceVerifyIntlResp;
  }

  /**
   * Calls the eKYC global anti-spoofing callback operation.
   * 
   * @deprecated OpenAPI FraudResultCallBack is deprecated
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
   * Calls the eKYC global anti-spoofing callback operation.
   * 
   * @deprecated OpenAPI FraudResultCallBack is deprecated
   * 
   * @param request - FraudResultCallBackRequest
   * @returns FraudResultCallBackResponse
   */
  // Deprecated
  async fraudResultCallBack(request: $_model.FraudResultCallBackRequest): Promise<$_model.FraudResultCallBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fraudResultCallBackWithOptions(request, runtime);
  }

  /**
   * Verifies the validity period of an identity document as a two-factor authentication element.
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
   * Verifies the validity period of an identity document as a two-factor authentication element.
   * 
   * @param request - Id2MetaPeriodVerifyIntlRequest
   * @returns Id2MetaPeriodVerifyIntlResponse
   */
  async id2MetaPeriodVerifyIntl(request: $_model.Id2MetaPeriodVerifyIntlRequest): Promise<$_model.Id2MetaPeriodVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Verifies the authenticity and consistency of a name and ID card number against an authoritative data source.
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
   * Verifies the authenticity and consistency of a name and ID card number against an authoritative data source.
   * 
   * @param request - Id2MetaVerifyIntlRequest
   * @returns Id2MetaVerifyIntlResponse
   */
  async id2MetaVerifyIntl(request: $_model.Id2MetaVerifyIntlRequest): Promise<$_model.Id2MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Initializes an authentication session.
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

    if (!$dara.isNull(request.autoRegistration)) {
      query["AutoRegistration"] = request.autoRegistration;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.chameleonFrameEnable)) {
      query["ChameleonFrameEnable"] = request.chameleonFrameEnable;
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

    if (!$dara.isNull(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      query["DocNo"] = request.docNo;
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

    if (!$dara.isNull(request.editOcrResult)) {
      query["EditOcrResult"] = request.editOcrResult;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.experienceCode)) {
      query["ExperienceCode"] = request.experienceCode;
    }

    if (!$dara.isNull(request.faceGroupCodes)) {
      query["FaceGroupCodes"] = request.faceGroupCodes;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceRegisterGroupCode)) {
      query["FaceRegisterGroupCode"] = request.faceRegisterGroupCode;
    }

    if (!$dara.isNull(request.faceVerifyThreshold)) {
      query["FaceVerifyThreshold"] = request.faceVerifyThreshold;
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

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.ocrValueStandard)) {
      query["OcrValueStandard"] = request.ocrValueStandard;
    }

    if (!$dara.isNull(request.pages)) {
      query["Pages"] = request.pages;
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

    if (!$dara.isNull(request.returnFaces)) {
      query["ReturnFaces"] = request.returnFaces;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.saveFacePicture)) {
      query["SaveFacePicture"] = request.saveFacePicture;
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

    if (!$dara.isNull(request.targetFacePicture)) {
      query["TargetFacePicture"] = request.targetFacePicture;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateRanCount)) {
      query["TemplateRanCount"] = request.templateRanCount;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.useNFC)) {
      query["UseNFC"] = request.useNFC;
    }

    if (!$dara.isNull(request.verifyModel)) {
      query["VerifyModel"] = request.verifyModel;
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
   * Initializes an authentication session.
   * 
   * @param request - InitializeRequest
   * @returns InitializeResponse
   */
  async initialize(request: $_model.InitializeRequest): Promise<$_model.InitializeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeWithOptions(request, runtime);
  }

  /**
   * 认证初始化
   * 
   * @param tmpReq - InitializeV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeV2Response
   */
  async initializeV2WithOptions(tmpReq: $_model.InitializeV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeV2Response> {
    tmpReq.validate();
    let request = new $_model.InitializeV2ShrinkRequest({ });
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

    if (!$dara.isNull(request.autoRegistration)) {
      query["AutoRegistration"] = request.autoRegistration;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.chameleonFrameEnable)) {
      query["ChameleonFrameEnable"] = request.chameleonFrameEnable;
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

    if (!$dara.isNull(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docNo)) {
      query["DocNo"] = request.docNo;
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

    if (!$dara.isNull(request.editOcrResult)) {
      query["EditOcrResult"] = request.editOcrResult;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.experienceCode)) {
      query["ExperienceCode"] = request.experienceCode;
    }

    if (!$dara.isNull(request.faceGroupCodes)) {
      query["FaceGroupCodes"] = request.faceGroupCodes;
    }

    if (!$dara.isNull(request.facePictureFile)) {
      query["FacePictureFile"] = request.facePictureFile;
    }

    if (!$dara.isNull(request.facePictureUrl)) {
      query["FacePictureUrl"] = request.facePictureUrl;
    }

    if (!$dara.isNull(request.faceRegisterGroupCode)) {
      query["FaceRegisterGroupCode"] = request.faceRegisterGroupCode;
    }

    if (!$dara.isNull(request.faceVerifyThreshold)) {
      query["FaceVerifyThreshold"] = request.faceVerifyThreshold;
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

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.ocr)) {
      query["Ocr"] = request.ocr;
    }

    if (!$dara.isNull(request.ocrValueStandard)) {
      query["OcrValueStandard"] = request.ocrValueStandard;
    }

    if (!$dara.isNull(request.pages)) {
      query["Pages"] = request.pages;
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

    if (!$dara.isNull(request.returnFaces)) {
      query["ReturnFaces"] = request.returnFaces;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.saveFacePicture)) {
      query["SaveFacePicture"] = request.saveFacePicture;
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

    if (!$dara.isNull(request.targetFacePictureFile)) {
      query["TargetFacePictureFile"] = request.targetFacePictureFile;
    }

    if (!$dara.isNull(request.targetFacePictureUrl)) {
      query["TargetFacePictureUrl"] = request.targetFacePictureUrl;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateRanCount)) {
      query["TemplateRanCount"] = request.templateRanCount;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.useNFC)) {
      query["UseNFC"] = request.useNFC;
    }

    if (!$dara.isNull(request.verifyModel)) {
      query["VerifyModel"] = request.verifyModel;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.facePictureBase64)) {
      body["FacePictureBase64"] = request.facePictureBase64;
    }

    if (!$dara.isNull(request.targetFacePicture)) {
      body["TargetFacePicture"] = request.targetFacePicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeV2",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeV2Response>(await this.callApi(params, req, runtime), new $_model.InitializeV2Response({}));
  }

  /**
   * 认证初始化
   * 
   * @param request - InitializeV2Request
   * @returns InitializeV2Response
   */
  async initializeV2(request: $_model.InitializeV2Request): Promise<$_model.InitializeV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeV2WithOptions(request, runtime);
  }

  async initializeV2Advance(request: $_model.InitializeV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeV2Response> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
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
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Cloudauth-intl",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let initializeV2Req = new $_model.InitializeV2Request({ });
    OpenApiUtil.convert(request, initializeV2Req);
    if (!$dara.isNull(request.facePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.facePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      initializeV2Req.facePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.targetFacePictureFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.targetFacePictureFileObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      initializeV2Req.targetFacePictureFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let initializeV2Resp = await this.initializeV2WithOptions(initializeV2Req, runtime);
    return initializeV2Resp;
  }

  /**
   * Configures client connection keep-alive settings.
   * 
   * @remarks
   * Configures client connection keep-alive settings.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KeepaliveIntlResponse
   */
  async keepaliveIntlWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.KeepaliveIntlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "KeepaliveIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KeepaliveIntlResponse>(await this.callApi(params, req, runtime), new $_model.KeepaliveIntlResponse({}));
  }

  /**
   * Configures client connection keep-alive settings.
   * 
   * @remarks
   * Configures client connection keep-alive settings.
   * @returns KeepaliveIntlResponse
   */
  async keepaliveIntl(): Promise<$_model.KeepaliveIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.keepaliveIntlWithOptions(runtime);
  }

  /**
   * Verifies the identity of a phone number owner by using two-factor authentication.
   * 
   * @remarks
   * Pass in a phone number and name to verify their authenticity and consistency through an authoritative data source. Before using this operation, make sure that you fully understand the billing method and pricing of the two-factor phone number verification service.
   * 
   * @param request - Mobile2MetaVerifyIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile2MetaVerifyIntlResponse
   */
  async mobile2MetaVerifyIntlWithOptions(request: $_model.Mobile2MetaVerifyIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile2MetaVerifyIntlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile2MetaVerifyIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile2MetaVerifyIntlResponse>(await this.callApi(params, req, runtime), new $_model.Mobile2MetaVerifyIntlResponse({}));
  }

  /**
   * Verifies the identity of a phone number owner by using two-factor authentication.
   * 
   * @remarks
   * Pass in a phone number and name to verify their authenticity and consistency through an authoritative data source. Before using this operation, make sure that you fully understand the billing method and pricing of the two-factor phone number verification service.
   * 
   * @param request - Mobile2MetaVerifyIntlRequest
   * @returns Mobile2MetaVerifyIntlResponse
   */
  async mobile2MetaVerifyIntl(request: $_model.Mobile2MetaVerifyIntlRequest): Promise<$_model.Mobile2MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile2MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Verifies the authenticity and consistency of a phone number, name, and ID card number against an authoritative data source. If the information is inconsistent, returns the reason for the inconsistency.
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
   * Verifies the authenticity and consistency of a phone number, name, and ID card number against an authoritative data source. If the information is inconsistent, returns the reason for the inconsistency.
   * 
   * @param request - Mobile3MetaVerifyIntlRequest
   * @returns Mobile3MetaVerifyIntlResponse
   */
  async mobile3MetaVerifyIntl(request: $_model.Mobile3MetaVerifyIntlRequest): Promise<$_model.Mobile3MetaVerifyIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaVerifyIntlWithOptions(request, runtime);
  }

  /**
   * Modifies a face library.
   * 
   * @param request - ModifyFaceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFaceGroupResponse
   */
  async modifyFaceGroupWithOptions(request: $_model.ModifyFaceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFaceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFaceGroup",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFaceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFaceGroupResponse({}));
  }

  /**
   * Modifies a face library.
   * 
   * @param request - ModifyFaceGroupRequest
   * @returns ModifyFaceGroupResponse
   */
  async modifyFaceGroup(request: $_model.ModifyFaceGroupRequest): Promise<$_model.ModifyFaceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFaceGroupWithOptions(request, runtime);
  }

  /**
   * Edits a face record.
   * 
   * @param request - ModifyFaceRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFaceRecordResponse
   */
  async modifyFaceRecordWithOptions(request: $_model.ModifyFaceRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFaceRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceGroupCode)) {
      body["FaceGroupCode"] = request.faceGroupCode;
    }

    if (!$dara.isNull(request.imgOssInfos)) {
      body["ImgOssInfos"] = request.imgOssInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFaceRecord",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFaceRecordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFaceRecordResponse({}));
  }

  /**
   * Edits a face record.
   * 
   * @param request - ModifyFaceRecordRequest
   * @returns ModifyFaceRecordResponse
   */
  async modifyFaceRecord(request: $_model.ModifyFaceRecordRequest): Promise<$_model.ModifyFaceRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFaceRecordWithOptions(request, runtime);
  }

  /**
   * Queries face libraries.
   * 
   * @param request - QueryFaceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceGroupResponse
   */
  async queryFaceGroupWithOptions(request: $_model.QueryFaceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.groupCode)) {
      query["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceGroup",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceGroupResponse({}));
  }

  /**
   * Queries face libraries.
   * 
   * @param request - QueryFaceGroupRequest
   * @returns QueryFaceGroupResponse
   */
  async queryFaceGroup(request: $_model.QueryFaceGroupRequest): Promise<$_model.QueryFaceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceGroupWithOptions(request, runtime);
  }

  /**
   * Queries face records.
   * 
   * @param request - QueryFaceRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceRecordResponse
   */
  async queryFaceRecordWithOptions(request: $_model.QueryFaceRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.faceGroupCode)) {
      query["FaceGroupCode"] = request.faceGroupCode;
    }

    if (!$dara.isNull(request.faceId)) {
      query["FaceId"] = request.faceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.registrationType)) {
      query["RegistrationType"] = request.registrationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceRecord",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceRecordResponse({}));
  }

  /**
   * Queries face records.
   * 
   * @param request - QueryFaceRecordRequest
   * @returns QueryFaceRecordResponse
   */
  async queryFaceRecord(request: $_model.QueryFaceRecordRequest): Promise<$_model.QueryFaceRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves a temporary token.
   * 
   * @param request - TempAccessTokenIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempAccessTokenIntlResponse
   */
  async tempAccessTokenIntlWithOptions(request: $_model.TempAccessTokenIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempAccessTokenIntlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TempAccessTokenIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempAccessTokenIntlResponse>(await this.callApi(params, req, runtime), new $_model.TempAccessTokenIntlResponse({}));
  }

  /**
   * Retrieves a temporary token.
   * 
   * @param request - TempAccessTokenIntlRequest
   * @returns TempAccessTokenIntlResponse
   */
  async tempAccessTokenIntl(request: $_model.TempAccessTokenIntlRequest): Promise<$_model.TempAccessTokenIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempAccessTokenIntlWithOptions(request, runtime);
  }

  /**
   * Retrieves a temporary URL for a file.
   * 
   * @param request - TempOssUrlIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempOssUrlIntlResponse
   */
  async tempOssUrlIntlWithOptions(request: $_model.TempOssUrlIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempOssUrlIntlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectName)) {
      body["ObjectName"] = request.objectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TempOssUrlIntl",
      version: "2022-08-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempOssUrlIntlResponse>(await this.callApi(params, req, runtime), new $_model.TempOssUrlIntlResponse({}));
  }

  /**
   * Retrieves a temporary URL for a file.
   * 
   * @param request - TempOssUrlIntlRequest
   * @returns TempOssUrlIntlResponse
   */
  async tempOssUrlIntl(request: $_model.TempOssUrlIntlRequest): Promise<$_model.TempOssUrlIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempOssUrlIntlWithOptions(request, runtime);
  }

}
