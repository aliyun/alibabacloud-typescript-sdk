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
      'us-west-1': "cloudauth.aliyuncs.com",
      'us-east-1': "cloudauth.aliyuncs.com",
      'me-east-1': "cloudauth.aliyuncs.com",
      'eu-west-1': "cloudauth.aliyuncs.com",
      'eu-central-1': "cloudauth.aliyuncs.com",
      'cn-zhangjiakou': "cloudauth.aliyuncs.com",
      'cn-shenzhen-finance-1': "cloudauth.aliyuncs.com",
      'cn-shenzhen': "cloudauth.aliyuncs.com",
      'cn-shanghai-finance-1': "cloudauth.aliyuncs.com",
      'cn-shanghai': "cloudauth.aliyuncs.com",
      'cn-qingdao': "cloudauth.cn-qingdao.aliyuncs.com",
      'cn-north-2-gov-1': "cloudauth.aliyuncs.com",
      'cn-huhehaote': "cloudauth.aliyuncs.com",
      'cn-hongkong': "cloudauth.aliyuncs.com",
      'cn-hangzhou-finance': "cloudauth.aliyuncs.com",
      'cn-hangzhou': "cloudauth.aliyuncs.com",
      'cn-chengdu': "cloudauth.aliyuncs.com",
      'cn-beijing': "cloudauth.cn-beijing.aliyuncs.com",
      'ap-southeast-5': "cloudauth.aliyuncs.com",
      'ap-southeast-3': "cloudauth.aliyuncs.com",
      'ap-southeast-2': "cloudauth.aliyuncs.com",
      'ap-southeast-1': "cloudauth.aliyuncs.com",
      'ap-south-1': "cloudauth.aliyuncs.com",
      'ap-northeast-1': "cloudauth.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Detects whether an image is generated by AIGC and returns the detection result.
   * 
   * @param request - AIGCFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AIGCFaceVerifyResponse
   */
  async aIGCFaceVerifyWithOptions(request: $_model.AIGCFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AIGCFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AIGCFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AIGCFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.AIGCFaceVerifyResponse({}));
  }

  /**
   * Detects whether an image is generated by AIGC and returns the detection result.
   * 
   * @param request - AIGCFaceVerifyRequest
   * @returns AIGCFaceVerifyResponse
   */
  async aIGCFaceVerify(request: $_model.AIGCFaceVerifyRequest): Promise<$_model.AIGCFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aIGCFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Provides API operations for bank card element verification, including two-element, three-element, and four-element verification.
   * 
   * @remarks
   * Verifies bank card information consistency, including two-element verification (name + bank card number), three-element verification (name + ID card number + bank card number), and four-element verification (name + ID card number + phone number + bank card number).
   * - Service endpoint:
   *   - Singapore region: cloudauth.ap-southeast-1.aliyuncs.com (IPv4) or cloudauth-dualstack.ap-southeast-1.aliyuncs.com (IPv6).
   *   - Malaysia region: cloudauth.ap-southeast-3.aliyuncs.com (IPv4) or cloudauth-dualstack.ap-southeast-3.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - BankMetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BankMetaVerifyResponse
   */
  async bankMetaVerifyWithOptions(request: $_model.BankMetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BankMetaVerifyResponse> {
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
      action: "BankMetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BankMetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.BankMetaVerifyResponse({}));
  }

  /**
   * Provides API operations for bank card element verification, including two-element, three-element, and four-element verification.
   * 
   * @remarks
   * Verifies bank card information consistency, including two-element verification (name + bank card number), three-element verification (name + ID card number + bank card number), and four-element verification (name + ID card number + phone number + bank card number).
   * - Service endpoint:
   *   - Singapore region: cloudauth.ap-southeast-1.aliyuncs.com (IPv4) or cloudauth-dualstack.ap-southeast-1.aliyuncs.com (IPv6).
   *   - Malaysia region: cloudauth.ap-southeast-3.aliyuncs.com (IPv4) or cloudauth-dualstack.ap-southeast-3.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - BankMetaVerifyRequest
   * @returns BankMetaVerifyResponse
   */
  async bankMetaVerify(request: $_model.BankMetaVerifyRequest): Promise<$_model.BankMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bankMetaVerifyWithOptions(request, runtime);
  }

  /**
   * Provides a financial-grade server-side API for face comparison.
   * 
   * @remarks
   * - API operation: CompareFaceVerify.
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: Implements ID Verification through server-side integration.
   * #### Photo format requirements
   * When performing face comparison, submit two face photos that meet all of the following conditions:
   * - Recent photos or recent reference photos with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - Clear photos with normal exposure. The face must not be too dark, too bright, or have lens flare, and the angle must not deviate significantly.
   * - Resolution must not exceed 1920×1080 and must be at least 640×480. The short side is recommended to be scaled to 720 pixels with a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. If multiple faces are detected, the largest face is selected.
   * 
   * @param request - CompareFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFaceVerifyResponse
   */
  async compareFaceVerifyWithOptions(request: $_model.CompareFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFaceVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sourceCertifyId)) {
      body["SourceCertifyId"] = request.sourceCertifyId;
    }

    if (!$dara.isNull(request.sourceFaceContrastPicture)) {
      body["SourceFaceContrastPicture"] = request.sourceFaceContrastPicture;
    }

    if (!$dara.isNull(request.sourceFaceContrastPictureUrl)) {
      body["SourceFaceContrastPictureUrl"] = request.sourceFaceContrastPictureUrl;
    }

    if (!$dara.isNull(request.sourceOssBucketName)) {
      body["SourceOssBucketName"] = request.sourceOssBucketName;
    }

    if (!$dara.isNull(request.sourceOssObjectName)) {
      body["SourceOssObjectName"] = request.sourceOssObjectName;
    }

    if (!$dara.isNull(request.targetCertifyId)) {
      body["TargetCertifyId"] = request.targetCertifyId;
    }

    if (!$dara.isNull(request.targetFaceContrastPicture)) {
      body["TargetFaceContrastPicture"] = request.targetFaceContrastPicture;
    }

    if (!$dara.isNull(request.targetFaceContrastPictureUrl)) {
      body["TargetFaceContrastPictureUrl"] = request.targetFaceContrastPictureUrl;
    }

    if (!$dara.isNull(request.targetOssBucketName)) {
      body["TargetOssBucketName"] = request.targetOssBucketName;
    }

    if (!$dara.isNull(request.targetOssObjectName)) {
      body["TargetOssObjectName"] = request.targetOssObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.CompareFaceVerifyResponse({}));
  }

  /**
   * Provides a financial-grade server-side API for face comparison.
   * 
   * @remarks
   * - API operation: CompareFaceVerify.
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: Implements ID Verification through server-side integration.
   * #### Photo format requirements
   * When performing face comparison, submit two face photos that meet all of the following conditions:
   * - Recent photos or recent reference photos with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - Clear photos with normal exposure. The face must not be too dark, too bright, or have lens flare, and the angle must not deviate significantly.
   * - Resolution must not exceed 1920×1080 and must be at least 640×480. The short side is recommended to be scaled to 720 pixels with a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. If multiple faces are detected, the largest face is selected.
   * 
   * @param request - CompareFaceVerifyRequest
   * @returns CompareFaceVerifyResponse
   */
  async compareFaceVerify(request: $_model.CompareFaceVerifyRequest): Promise<$_model.CompareFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Performs face comparison.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * Operation description: Specifies two face images for comparison and returns a similarity score between the faces in the two images.
   * - At least one of the specified comparison images must be of the face photo type (FacePic).
   * - If an image contains multiple faces, the algorithm automatically selects the face that occupies the largest area in the image.
   * - If no face is detected in one of the two comparison images, the system returns a "No face detected" error.
   * When you submit images, you must provide the corresponding HTTP URL or Base64 encoding of each image.
   * - HTTP URL: A publicly accessible HTTP URL. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 encoding: A Base64-encoded image in the format `base64://<Base64-encoded image string>`.
   * Image limits.
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep the size of each image within 2 MB to avoid algorithm retrieval timeout.
   * - The body of a single request has a size limit of 8 MB. Make sure that the total size of all images and other information in the request does not exceed this limit.
   * - When you use Base64 to transmit images, set the request method to POST. Remove the header description from the Base64 character string, such as `data:image/png;base64,`.
   * 
   * @param request - CompareFacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFacesResponse
   */
  async compareFacesWithOptions(request: $_model.CompareFacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareFacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceImageType)) {
      body["SourceImageType"] = request.sourceImageType;
    }

    if (!$dara.isNull(request.sourceImageValue)) {
      body["SourceImageValue"] = request.sourceImageValue;
    }

    if (!$dara.isNull(request.targetImageType)) {
      body["TargetImageType"] = request.targetImageType;
    }

    if (!$dara.isNull(request.targetImageValue)) {
      body["TargetImageValue"] = request.targetImageValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareFaces",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareFacesResponse>(await this.callApi(params, req, runtime), new $_model.CompareFacesResponse({}));
  }

  /**
   * Performs face comparison.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * Operation description: Specifies two face images for comparison and returns a similarity score between the faces in the two images.
   * - At least one of the specified comparison images must be of the face photo type (FacePic).
   * - If an image contains multiple faces, the algorithm automatically selects the face that occupies the largest area in the image.
   * - If no face is detected in one of the two comparison images, the system returns a "No face detected" error.
   * When you submit images, you must provide the corresponding HTTP URL or Base64 encoding of each image.
   * - HTTP URL: A publicly accessible HTTP URL. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 encoding: A Base64-encoded image in the format `base64://<Base64-encoded image string>`.
   * Image limits.
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep the size of each image within 2 MB to avoid algorithm retrieval timeout.
   * - The body of a single request has a size limit of 8 MB. Make sure that the total size of all images and other information in the request does not exceed this limit.
   * - When you use Base64 to transmit images, set the request method to POST. Remove the header description from the Base64 character string, such as `data:image/png;base64,`.
   * 
   * @param request - CompareFacesRequest
   * @returns CompareFacesResponse
   */
  async compareFaces(request: $_model.CompareFacesRequest): Promise<$_model.CompareFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  /**
   * Submits verification materials for identity comparison and synchronously returns the verification result.
   * 
   * @remarks
   * - API operation: ContrastFaceVerify.
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: An API operation that implements ID Verification through server-side integration.
   * #### Image format requirements
   * When performing ID Verification, submit images that meet all of the following conditions:
   * - A recent photo with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - A clear photo with normal exposure. The face must not be too dark, too bright, or have glare, and the angle must not deviate significantly.
   * - The resolution must not exceed 1920 × 1080 and must be at least 640 × 480. We recommend scaling the short side to 720 pixels with a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. If multiple faces are detected, the largest face is selected.
   * 
   * @param request - ContrastFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContrastFaceVerifyResponse
   */
  async contrastFaceVerifyWithOptions(request: $_model.ContrastFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContrastFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      body["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.encryptType)) {
      body["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.faceContrastFile)) {
      body["FaceContrastFile"] = request.faceContrastFile;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContrastFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContrastFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.ContrastFaceVerifyResponse({}));
  }

  /**
   * Submits verification materials for identity comparison and synchronously returns the verification result.
   * 
   * @remarks
   * - API operation: ContrastFaceVerify.
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: An API operation that implements ID Verification through server-side integration.
   * #### Image format requirements
   * When performing ID Verification, submit images that meet all of the following conditions:
   * - A recent photo with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - A clear photo with normal exposure. The face must not be too dark, too bright, or have glare, and the angle must not deviate significantly.
   * - The resolution must not exceed 1920 × 1080 and must be at least 640 × 480. We recommend scaling the short side to 720 pixels with a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. If multiple faces are detected, the largest face is selected.
   * 
   * @param request - ContrastFaceVerifyRequest
   * @returns ContrastFaceVerifyResponse
   */
  async contrastFaceVerify(request: $_model.ContrastFaceVerifyRequest): Promise<$_model.ContrastFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contrastFaceVerifyWithOptions(request, runtime);
  }

  async contrastFaceVerifyAdvance(request: $_model.ContrastFaceVerifyAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContrastFaceVerifyResponse> {
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
      Product: "Cloudauth",
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
    let contrastFaceVerifyReq = new $_model.ContrastFaceVerifyRequest({ });
    OpenApiUtil.convert(request, contrastFaceVerifyReq);
    if (!$dara.isNull(request.faceContrastFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.faceContrastFileObject,
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
      contrastFaceVerifyReq.faceContrastFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let contrastFaceVerifyResp = await this.contrastFaceVerifyWithOptions(contrastFaceVerifyReq, runtime);
    return contrastFaceVerifyResp;
  }

  /**
   * Creates a network access credential.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateAntCloudAuthSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAntCloudAuthSceneResponse
   */
  async createAntCloudAuthSceneWithOptions(request: $_model.CreateAntCloudAuthSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAntCloudAuthSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindMiniProgram)) {
      query["BindMiniProgram"] = request.bindMiniProgram;
    }

    if (!$dara.isNull(request.checkFileBody)) {
      query["CheckFileBody"] = request.checkFileBody;
    }

    if (!$dara.isNull(request.checkFileName)) {
      query["CheckFileName"] = request.checkFileName;
    }

    if (!$dara.isNull(request.deviceRiskPlus)) {
      query["DeviceRiskPlus"] = request.deviceRiskPlus;
    }

    if (!$dara.isNull(request.miniProgramName)) {
      query["MiniProgramName"] = request.miniProgramName;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.returnPicCount)) {
      query["ReturnPicCount"] = request.returnPicCount;
    }

    if (!$dara.isNull(request.returnVideoLength)) {
      query["ReturnVideoLength"] = request.returnVideoLength;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.storeImage)) {
      query["StoreImage"] = request.storeImage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAntCloudAuthScene",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAntCloudAuthSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateAntCloudAuthSceneResponse({}));
  }

  /**
   * Creates a network access credential.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateAntCloudAuthSceneRequest
   * @returns CreateAntCloudAuthSceneResponse
   */
  async createAntCloudAuthScene(request: $_model.CreateAntCloudAuthSceneRequest): Promise<$_model.CreateAntCloudAuthSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAntCloudAuthSceneWithOptions(request, runtime);
  }

  /**
   * Obtains an authorization key for activating the offline facial recognition SDK.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateAuthKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthKeyResponse
   */
  async createAuthKeyWithOptions(request: $_model.CreateAuthKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuthKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authYears)) {
      query["AuthYears"] = request.authYears;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.test)) {
      query["Test"] = request.test;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthKey",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuthKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuthKeyResponse({}));
  }

  /**
   * Obtains an authorization key for activating the offline facial recognition SDK.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateAuthKeyRequest
   * @returns CreateAuthKeyResponse
   */
  async createAuthKey(request: $_model.CreateAuthKeyRequest): Promise<$_model.CreateAuthKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  /**
   * Creates an authentication scenario for enhanced ID Verification.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization code is valid for 30 minutes and cannot be reused. Obtain a new authorization code before each activation.
   * 
   * @param request - CreateCloudauthstSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudauthstSceneResponse
   */
  async createCloudauthstSceneWithOptions(request: $_model.CreateCloudauthstSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudauthstSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.storeImage)) {
      query["StoreImage"] = request.storeImage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudauthstScene",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudauthstSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudauthstSceneResponse({}));
  }

  /**
   * Creates an authentication scenario for enhanced ID Verification.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization code is valid for 30 minutes and cannot be reused. Obtain a new authorization code before each activation.
   * 
   * @param request - CreateCloudauthstSceneRequest
   * @returns CreateCloudauthstSceneResponse
   */
  async createCloudauthstScene(request: $_model.CreateCloudauthstSceneRequest): Promise<$_model.CreateCloudauthstSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudauthstSceneWithOptions(request, runtime);
  }

  /**
   * Creates a willingness authentication configuration.
   * 
   * @remarks
   * Request method: Send requests by using the HTTPS POST method.
   * Request URL: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateSceneConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSceneConfigResponse
   */
  async createSceneConfigWithOptions(request: $_model.CreateSceneConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSceneConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["sceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSceneConfig",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSceneConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSceneConfigResponse({}));
  }

  /**
   * Creates a willingness authentication configuration.
   * 
   * @remarks
   * Request method: Send requests by using the HTTPS POST method.
   * Request URL: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - CreateSceneConfigRequest
   * @returns CreateSceneConfigResponse
   */
  async createSceneConfig(request: $_model.CreateSceneConfigRequest): Promise<$_model.CreateSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSceneConfigWithOptions(request, runtime);
  }

  /**
   * Creates an ID Verification scenario configuration. This is equivalent to creating a verification scenario in the console.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - CreateVerifySettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVerifySettingResponse
   */
  async createVerifySettingWithOptions(request: $_model.CreateVerifySettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVerifySettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.guideStep)) {
      query["GuideStep"] = request.guideStep;
    }

    if (!$dara.isNull(request.privacyStep)) {
      query["PrivacyStep"] = request.privacyStep;
    }

    if (!$dara.isNull(request.resultStep)) {
      query["ResultStep"] = request.resultStep;
    }

    if (!$dara.isNull(request.solution)) {
      query["Solution"] = request.solution;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVerifySetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVerifySettingResponse>(await this.callApi(params, req, runtime), new $_model.CreateVerifySettingResponse({}));
  }

  /**
   * Creates an ID Verification scenario configuration. This is equivalent to creating a verification scenario in the console.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - CreateVerifySettingRequest
   * @returns CreateVerifySettingResponse
   */
  async createVerifySetting(request: $_model.CreateVerifySettingRequest): Promise<$_model.CreateVerifySettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
  }

  /**
   * Creates an authentication whitelist.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - CreateWhitelistSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWhitelistSettingResponse
   */
  async createWhitelistSettingWithOptions(request: $_model.CreateWhitelistSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWhitelistSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.validDay)) {
      query["ValidDay"] = request.validDay;
    }

    if (!$dara.isNull(request.whitelistType)) {
      query["WhitelistType"] = request.whitelistType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWhitelistSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWhitelistSettingResponse>(await this.callApi(params, req, runtime), new $_model.CreateWhitelistSettingResponse({}));
  }

  /**
   * Creates an authentication whitelist.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - CreateWhitelistSettingRequest
   * @returns CreateWhitelistSettingResponse
   */
  async createWhitelistSetting(request: $_model.CreateWhitelistSettingRequest): Promise<$_model.CreateWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * API operation for the product image tampering detection service. Detects image tampering, quality (clarity), and similar images.
   * 
   * @remarks
   * Submits an e-commerce product image to perform tampering detection, quality (clarity) assessment, and similar image detection. Returns risk labels and risk scores.
   * 
   * @param request - CredentialProductVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialProductVerifyV2Response
   */
  async credentialProductVerifyV2WithOptions(request: $_model.CredentialProductVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialProductVerifyV2Response> {
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

    if (!$dara.isNull(request.merchantId)) {
      query["MerchantId"] = request.merchantId;
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
      action: "CredentialProductVerifyV2",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialProductVerifyV2Response>(await this.callApi(params, req, runtime), new $_model.CredentialProductVerifyV2Response({}));
  }

  /**
   * API operation for the product image tampering detection service. Detects image tampering, quality (clarity), and similar images.
   * 
   * @remarks
   * Submits an e-commerce product image to perform tampering detection, quality (clarity) assessment, and similar image detection. Returns risk labels and risk scores.
   * 
   * @param request - CredentialProductVerifyV2Request
   * @returns CredentialProductVerifyV2Response
   */
  async credentialProductVerifyV2(request: $_model.CredentialProductVerifyV2Request): Promise<$_model.CredentialProductVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialProductVerifyV2WithOptions(request, runtime);
  }

  async credentialProductVerifyV2Advance(request: $_model.CredentialProductVerifyV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialProductVerifyV2Response> {
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
      Product: "Cloudauth",
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
    let credentialProductVerifyV2Req = new $_model.CredentialProductVerifyV2Request({ });
    OpenApiUtil.convert(request, credentialProductVerifyV2Req);
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
      credentialProductVerifyV2Req.imageFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let credentialProductVerifyV2Resp = await this.credentialProductVerifyV2WithOptions(credentialProductVerifyV2Req, runtime);
    return credentialProductVerifyV2Resp;
  }

  /**
   * Credential verification.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param tmpReq - CredentialVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialVerifyResponse
   */
  async credentialVerifyWithOptions(tmpReq: $_model.CredentialVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialVerifyResponse> {
    tmpReq.validate();
    let request = new $_model.CredentialVerifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.merchantDetail)) {
      request.merchantDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.merchantDetail, "MerchantDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.certNum)) {
      query["CertNum"] = request.certNum;
    }

    if (!$dara.isNull(request.credName)) {
      query["CredName"] = request.credName;
    }

    if (!$dara.isNull(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.isCheck)) {
      query["IsCheck"] = request.isCheck;
    }

    if (!$dara.isNull(request.isOCR)) {
      query["IsOCR"] = request.isOCR;
    }

    if (!$dara.isNull(request.merchantDetailShrink)) {
      query["MerchantDetail"] = request.merchantDetailShrink;
    }

    if (!$dara.isNull(request.merchantId)) {
      query["MerchantId"] = request.merchantId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptModel)) {
      query["PromptModel"] = request.promptModel;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageContext)) {
      body["ImageContext"] = request.imageContext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialVerifyResponse>(await this.callApi(params, req, runtime), new $_model.CredentialVerifyResponse({}));
  }

  /**
   * Credential verification.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - CredentialVerifyRequest
   * @returns CredentialVerifyResponse
   */
  async credentialVerify(request: $_model.CredentialVerifyRequest): Promise<$_model.CredentialVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialVerifyWithOptions(request, runtime);
  }

  /**
   * Credential verification.
   * 
   * @remarks
   * Submits a credential image to perform image tampering and forgery detection and image semantic understanding. Returns risk detection results.
   * 
   * @param tmpReq - CredentialVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialVerifyV2Response
   */
  async credentialVerifyV2WithOptions(tmpReq: $_model.CredentialVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialVerifyV2Response> {
    tmpReq.validate();
    let request = new $_model.CredentialVerifyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.merchantDetail)) {
      request.merchantDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.merchantDetail, "MerchantDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.certNum)) {
      query["CertNum"] = request.certNum;
    }

    if (!$dara.isNull(request.credName)) {
      query["CredName"] = request.credName;
    }

    if (!$dara.isNull(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.isCheck)) {
      query["IsCheck"] = request.isCheck;
    }

    if (!$dara.isNull(request.isOcr)) {
      query["IsOcr"] = request.isOcr;
    }

    if (!$dara.isNull(request.merchantDetailShrink)) {
      query["MerchantDetail"] = request.merchantDetailShrink;
    }

    if (!$dara.isNull(request.merchantId)) {
      query["MerchantId"] = request.merchantId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptModel)) {
      query["PromptModel"] = request.promptModel;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageContext)) {
      body["ImageContext"] = request.imageContext;
    }

    if (!$dara.isNull(request.imageFile)) {
      body["ImageFile"] = request.imageFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CredentialVerifyV2",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CredentialVerifyV2Response>(await this.callApi(params, req, runtime), new $_model.CredentialVerifyV2Response({}));
  }

  /**
   * Credential verification.
   * 
   * @remarks
   * Submits a credential image to perform image tampering and forgery detection and image semantic understanding. Returns risk detection results.
   * 
   * @param request - CredentialVerifyV2Request
   * @returns CredentialVerifyV2Response
   */
  async credentialVerifyV2(request: $_model.CredentialVerifyV2Request): Promise<$_model.CredentialVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialVerifyV2WithOptions(request, runtime);
  }

  async credentialVerifyV2Advance(request: $_model.CredentialVerifyV2AdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CredentialVerifyV2Response> {
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
      Product: "Cloudauth",
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
    let credentialVerifyV2Req = new $_model.CredentialVerifyV2Request({ });
    OpenApiUtil.convert(request, credentialVerifyV2Req);
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
      credentialVerifyV2Req.imageFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let credentialVerifyV2Resp = await this.credentialVerifyV2WithOptions(credentialVerifyV2Req, runtime);
    return credentialVerifyV2Resp;
  }

  /**
   * Accepts a face image and uses algorithms to detect deepfake risks. Covers risk scenarios such as AIGC-generated faces, deepfake face swaps, template faces, and recaptured faces. Returns risk labels and confidence levels.
   * 
   * @remarks
   * > The face deepfake detection operation is currently in free public preview. The free public preview ends at 23:59:59 on August 30, 2024. During the public preview, the QPS cannot exceed 3 queries per second.
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - DeepfakeDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeDetectResponse
   */
  async deepfakeDetectWithOptions(request: $_model.DeepfakeDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepfakeDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceInputType)) {
      query["FaceInputType"] = request.faceInputType;
    }

    if (!$dara.isNull(request.faceUrl)) {
      query["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
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
      action: "DeepfakeDetect",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeepfakeDetectResponse>(await this.callApi(params, req, runtime), new $_model.DeepfakeDetectResponse({}));
  }

  /**
   * Accepts a face image and uses algorithms to detect deepfake risks. Covers risk scenarios such as AIGC-generated faces, deepfake face swaps, template faces, and recaptured faces. Returns risk labels and confidence levels.
   * 
   * @remarks
   * > The face deepfake detection operation is currently in free public preview. The free public preview ends at 23:59:59 on August 30, 2024. During the public preview, the QPS cannot exceed 3 queries per second.
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - DeepfakeDetectRequest
   * @returns DeepfakeDetectResponse
   */
  async deepfakeDetect(request: $_model.DeepfakeDetectRequest): Promise<$_model.DeepfakeDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectWithOptions(request, runtime);
  }

  /**
   * Deletes all custom rate limiting policies.
   * 
   * @remarks
   * Request method: Supports sending requests by using the HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DeleteAllCustomizeFlowStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAllCustomizeFlowStrategyResponse
   */
  async deleteAllCustomizeFlowStrategyWithOptions(request: $_model.DeleteAllCustomizeFlowStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAllCustomizeFlowStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAllCustomizeFlowStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAllCustomizeFlowStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAllCustomizeFlowStrategyResponse({}));
  }

  /**
   * Deletes all custom rate limiting policies.
   * 
   * @remarks
   * Request method: Supports sending requests by using the HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DeleteAllCustomizeFlowStrategyRequest
   * @returns DeleteAllCustomizeFlowStrategyResponse
   */
  async deleteAllCustomizeFlowStrategy(request: $_model.DeleteAllCustomizeFlowStrategyRequest): Promise<$_model.DeleteAllCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes a China Finance Verification scene.
   * 
   * @remarks
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DeleteAntCloudAuthSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAntCloudAuthSceneResponse
   */
  async deleteAntCloudAuthSceneWithOptions(request: $_model.DeleteAntCloudAuthSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAntCloudAuthSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAntCloudAuthScene",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAntCloudAuthSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAntCloudAuthSceneResponse({}));
  }

  /**
   * Deletes a China Finance Verification scene.
   * 
   * @remarks
   * - Endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DeleteAntCloudAuthSceneRequest
   * @returns DeleteAntCloudAuthSceneResponse
   */
  async deleteAntCloudAuthScene(request: $_model.DeleteAntCloudAuthSceneRequest): Promise<$_model.DeleteAntCloudAuthSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAntCloudAuthSceneWithOptions(request, runtime);
  }

  /**
   * Deletes a blacklist rule.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DeleteBlackListStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBlackListStrategyResponse
   */
  async deleteBlackListStrategyWithOptions(request: $_model.DeleteBlackListStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBlackListStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBlackListStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBlackListStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBlackListStrategyResponse({}));
  }

  /**
   * Deletes a blacklist rule.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DeleteBlackListStrategyRequest
   * @returns DeleteBlackListStrategyResponse
   */
  async deleteBlackListStrategy(request: $_model.DeleteBlackListStrategyRequest): Promise<$_model.DeleteBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Delete a specified authentication scene for Enhanced Real-person Identity Verification
   * 
   * @remarks
   * Request method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. We recommend that you obtain a new key before each activation.
   * 
   * @param request - DeleteCloudauthstSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudauthstSceneResponse
   */
  async deleteCloudauthstSceneWithOptions(request: $_model.DeleteCloudauthstSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudauthstSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudauthstScene",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudauthstSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudauthstSceneResponse({}));
  }

  /**
   * Delete a specified authentication scene for Enhanced Real-person Identity Verification
   * 
   * @remarks
   * Request method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. We recommend that you obtain a new key before each activation.
   * 
   * @param request - DeleteCloudauthstSceneRequest
   * @returns DeleteCloudauthstSceneResponse
   */
  async deleteCloudauthstScene(request: $_model.DeleteCloudauthstSceneRequest): Promise<$_model.DeleteCloudauthstSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudauthstSceneWithOptions(request, runtime);
  }

  /**
   * Delete a stability alert rule.
   * 
   * @remarks
   * Request method: Supports sending requests using the HTTPS POST method.
   * Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - DeleteControlStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlStrategyResponse
   */
  async deleteControlStrategyWithOptions(request: $_model.DeleteControlStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteControlStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteControlStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteControlStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteControlStrategyResponse({}));
  }

  /**
   * Delete a stability alert rule.
   * 
   * @remarks
   * Request method: Supports sending requests using the HTTPS POST method.
   * Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - DeleteControlStrategyRequest
   * @returns DeleteControlStrategyResponse
   */
  async deleteControlStrategy(request: $_model.DeleteControlStrategyRequest): Promise<$_model.DeleteControlStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes a custom rate limiting policy.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DeleteCustomizeFlowStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizeFlowStrategyResponse
   */
  async deleteCustomizeFlowStrategyWithOptions(request: $_model.DeleteCustomizeFlowStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomizeFlowStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomizeFlowStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomizeFlowStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomizeFlowStrategyResponse({}));
  }

  /**
   * Deletes a custom rate limiting policy.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DeleteCustomizeFlowStrategyRequest
   * @returns DeleteCustomizeFlowStrategyResponse
   */
  async deleteCustomizeFlowStrategy(request: $_model.DeleteCustomizeFlowStrategyRequest): Promise<$_model.DeleteCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * API for deleting sensitive data in financial-grade services.
   * 
   * @remarks
   * Deletes all personal information fields from the request, including name, ID card number, phone number, IP address, images, videos, device information, etc.
   * 
   * @param request - DeleteFaceVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceVerifyResultResponse
   */
  async deleteFaceVerifyResultWithOptions(request: $_model.DeleteFaceVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.deleteAfterQuery)) {
      query["DeleteAfterQuery"] = request.deleteAfterQuery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceVerifyResult",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceVerifyResultResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceVerifyResultResponse({}));
  }

  /**
   * API for deleting sensitive data in financial-grade services.
   * 
   * @remarks
   * Deletes all personal information fields from the request, including name, ID card number, phone number, IP address, images, videos, device information, etc.
   * 
   * @param request - DeleteFaceVerifyResultRequest
   * @returns DeleteFaceVerifyResultResponse
   */
  async deleteFaceVerifyResult(request: $_model.DeleteFaceVerifyResultRequest): Promise<$_model.DeleteFaceVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceVerifyResultWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario configuration.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Request URL: cloudauth.aliyuncs.com.
   * > The authorization code is valid for 30 minutes and cannot be reused. Obtain a new authorization code before each activation.
   * 
   * @param request - DeleteSceneConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneConfigResponse
   */
  async deleteSceneConfigWithOptions(request: $_model.DeleteSceneConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSceneConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sceneConfigId)) {
      body["sceneConfigId"] = request.sceneConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSceneConfig",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSceneConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSceneConfigResponse({}));
  }

  /**
   * Deletes a scenario configuration.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Request URL: cloudauth.aliyuncs.com.
   * > The authorization code is valid for 30 minutes and cannot be reused. Obtain a new authorization code before each activation.
   * 
   * @param request - DeleteSceneConfigRequest
   * @returns DeleteSceneConfigResponse
   */
  async deleteSceneConfig(request: $_model.DeleteSceneConfigRequest): Promise<$_model.DeleteSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSceneConfigWithOptions(request, runtime);
  }

  /**
   * Deletes the version of a specified cluster.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DeleteWhitelistSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWhitelistSettingResponse
   */
  async deleteWhitelistSettingWithOptions(request: $_model.DeleteWhitelistSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWhitelistSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWhitelistSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWhitelistSettingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWhitelistSettingResponse({}));
  }

  /**
   * Deletes the version of a specified cluster.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DeleteWhitelistSettingRequest
   * @returns DeleteWhitelistSettingResponse
   */
  async deleteWhitelistSetting(request: $_model.DeleteWhitelistSettingRequest): Promise<$_model.DeleteWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * Queries the activation status of different ID Verification product plans.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAntAndCloudAuthUserStatusResponse
   */
  async describeAntAndCloudAuthUserStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAntAndCloudAuthUserStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAntAndCloudAuthUserStatus",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAntAndCloudAuthUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAntAndCloudAuthUserStatusResponse({}));
  }

  /**
   * Queries the activation status of different ID Verification product plans.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * @returns DescribeAntAndCloudAuthUserStatusResponse
   */
  async describeAntAndCloudAuthUserStatus(): Promise<$_model.DescribeAntAndCloudAuthUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAntAndCloudAuthUserStatusWithOptions(runtime);
  }

  /**
   * Retrieves OCR results.
   * 
   * @param request - DescribeAuthVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthVerifyResponse
   */
  async describeAuthVerifyWithOptions(request: $_model.DescribeAuthVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthVerifyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthVerifyResponse({}));
  }

  /**
   * Retrieves OCR results.
   * 
   * @param request - DescribeAuthVerifyRequest
   * @returns DescribeAuthVerifyResponse
   */
  async describeAuthVerify(request: $_model.DescribeAuthVerifyRequest): Promise<$_model.DescribeAuthVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthVerifyWithOptions(request, runtime);
  }

  /**
   * Retrieves the verification result for image element verification.
   * 
   * @remarks
   * After you receive a callback notification, you can call this operation on the server side to obtain the corresponding verification status and verification materials.
   * 
   * @param request - DescribeCardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCardVerifyResponse
   */
  async describeCardVerifyWithOptions(request: $_model.DescribeCardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCardVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCardVerifyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCardVerifyResponse({}));
  }

  /**
   * Retrieves the verification result for image element verification.
   * 
   * @remarks
   * After you receive a callback notification, you can call this operation on the server side to obtain the corresponding verification status and verification materials.
   * 
   * @param request - DescribeCardVerifyRequest
   * @returns DescribeCardVerifyResponse
   */
  async describeCardVerify(request: $_model.DescribeCardVerifyRequest): Promise<$_model.DescribeCardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCardVerifyWithOptions(request, runtime);
  }

  /**
   * Queries the authentication scenarios for enhanced ID Verification.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DescribeCloudauthstSceneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudauthstSceneListResponse
   */
  async describeCloudauthstSceneListWithOptions(request: $_model.DescribeCloudauthstSceneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudauthstSceneListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudauthstSceneList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudauthstSceneListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudauthstSceneListResponse({}));
  }

  /**
   * Queries the authentication scenarios for enhanced ID Verification.
   * 
   * @remarks
   * Request method: Supports sending requests by using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DescribeCloudauthstSceneListRequest
   * @returns DescribeCloudauthstSceneListResponse
   */
  async describeCloudauthstSceneList(request: $_model.DescribeCloudauthstSceneListRequest): Promise<$_model.DescribeCloudauthstSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudauthstSceneListWithOptions(request, runtime);
  }

  /**
   * Such as authorization validity period, custom business identifiers defined by the integrating party, and device IDs.
   * 
   * @remarks
   * Request method: supports sending requests using HTTPS POST and GET methods.
   * 
   * @param request - DescribeDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfoWithOptions(request: $_model.DescribeDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.expiredEndDay)) {
      query["ExpiredEndDay"] = request.expiredEndDay;
    }

    if (!$dara.isNull(request.expiredStartDay)) {
      query["ExpiredStartDay"] = request.expiredStartDay;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceInfo",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceInfoResponse({}));
  }

  /**
   * Such as authorization validity period, custom business identifiers defined by the integrating party, and device IDs.
   * 
   * @remarks
   * Request method: supports sending requests using HTTPS POST and GET methods.
   * 
   * @param request - DescribeDeviceInfoRequest
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: $_model.DescribeDeviceInfoRequest): Promise<$_model.DescribeDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Financial-grade Face Guard service.
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRiskWithOptions(request: $_model.DescribeFaceGuardRiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaceGuardRiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaceGuardRisk",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaceGuardRiskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaceGuardRiskResponse({}));
  }

  /**
   * Financial-grade Face Guard service.
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRisk(request: $_model.DescribeFaceGuardRiskRequest): Promise<$_model.DescribeFaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceGuardRiskWithOptions(request, runtime);
  }

  /**
   * After the China site (Chinese mainland) mobile client receives a callback, the China site (Chinese mainland) server can call this operation to obtain the corresponding verification status and verification materials.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerifyWithOptions(request: $_model.DescribeFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.pictureReturnType)) {
      query["PictureReturnType"] = request.pictureReturnType;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaceVerifyResponse({}));
  }

  /**
   * After the China site (Chinese mainland) mobile client receives a callback, the China site (Chinese mainland) server can call this operation to obtain the corresponding verification status and verification materials.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeFaceVerifyRequest
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerify(request: $_model.DescribeFaceVerifyRequest): Promise<$_model.DescribeFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Queries information verification export tasks by page.
   * 
   * @remarks
   * Request method: Supports sending requests by using the HTTPS POST and GET methods.
   * 
   * @param request - DescribeInfoCheckExportRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInfoCheckExportRecordResponse
   */
  async describeInfoCheckExportRecordWithOptions(request: $_model.DescribeInfoCheckExportRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInfoCheckExportRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInfoCheckExportRecord",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInfoCheckExportRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInfoCheckExportRecordResponse({}));
  }

  /**
   * Queries information verification export tasks by page.
   * 
   * @remarks
   * Request method: Supports sending requests by using the HTTPS POST and GET methods.
   * 
   * @param request - DescribeInfoCheckExportRecordRequest
   * @returns DescribeInfoCheckExportRecordResponse
   */
  async describeInfoCheckExportRecord(request: $_model.DescribeInfoCheckExportRecordRequest): Promise<$_model.DescribeInfoCheckExportRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInfoCheckExportRecordWithOptions(request, runtime);
  }

  /**
   * Queries a specified.
   * 
   * @remarks
   * Request method: Supports HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DescribeListAntCloudAuthScenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListAntCloudAuthScenesResponse
   */
  async describeListAntCloudAuthScenesWithOptions(request: $_model.DescribeListAntCloudAuthScenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListAntCloudAuthScenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListAntCloudAuthScenes",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListAntCloudAuthScenesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListAntCloudAuthScenesResponse({}));
  }

  /**
   * Queries a specified.
   * 
   * @remarks
   * Request method: Supports HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. Obtain a new key before each activation.
   * 
   * @param request - DescribeListAntCloudAuthScenesRequest
   * @returns DescribeListAntCloudAuthScenesResponse
   */
  async describeListAntCloudAuthScenes(request: $_model.DescribeListAntCloudAuthScenesRequest): Promise<$_model.DescribeListAntCloudAuthScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListAntCloudAuthScenesWithOptions(request, runtime);
  }

  /**
   * Queries the list of facial recognition data.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeListFaceVerifyDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListFaceVerifyDataResponse
   */
  async describeListFaceVerifyDataWithOptions(request: $_model.DescribeListFaceVerifyDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListFaceVerifyDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gmtEnd)) {
      query["GmtEnd"] = request.gmtEnd;
    }

    if (!$dara.isNull(request.gmtStart)) {
      query["GmtStart"] = request.gmtStart;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListFaceVerifyData",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListFaceVerifyDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListFaceVerifyDataResponse({}));
  }

  /**
   * Queries the list of facial recognition data.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeListFaceVerifyDataRequest
   * @returns DescribeListFaceVerifyDataResponse
   */
  async describeListFaceVerifyData(request: $_model.DescribeListFaceVerifyDataRequest): Promise<$_model.DescribeListFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * Retrieves facial recognition authentication records (legacy).
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeListFaceVerifyInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListFaceVerifyInfosResponse
   */
  async describeListFaceVerifyInfosWithOptions(request: $_model.DescribeListFaceVerifyInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListFaceVerifyInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.gmtEnd)) {
      query["GmtEnd"] = request.gmtEnd;
    }

    if (!$dara.isNull(request.gmtStart)) {
      query["GmtStart"] = request.gmtStart;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListFaceVerifyInfos",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListFaceVerifyInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListFaceVerifyInfosResponse({}));
  }

  /**
   * Retrieves facial recognition authentication records (legacy).
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeListFaceVerifyInfosRequest
   * @returns DescribeListFaceVerifyInfosResponse
   */
  async describeListFaceVerifyInfos(request: $_model.DescribeListFaceVerifyInfosRequest): Promise<$_model.DescribeListFaceVerifyInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListFaceVerifyInfosWithOptions(request, runtime);
  }

  /**
   * Queries information verification details by paging.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeMetaSearchPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetaSearchPageListResponse
   */
  async describeMetaSearchPageListWithOptions(request: $_model.DescribeMetaSearchPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaSearchPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.bankCard)) {
      query["BankCard"] = request.bankCard;
    }

    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.ispName)) {
      query["IspName"] = request.ispName;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subCode)) {
      query["SubCode"] = request.subCode;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetaSearchPageList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetaSearchPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetaSearchPageListResponse({}));
  }

  /**
   * Queries information verification details by paging.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeMetaSearchPageListRequest
   * @returns DescribeMetaSearchPageListResponse
   */
  async describeMetaSearchPageList(request: $_model.DescribeMetaSearchPageListRequest): Promise<$_model.DescribeMetaSearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaSearchPageListWithOptions(request, runtime);
  }

  /**
   * Queries statistics information for information verification and authentication.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeMetaStatisticsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetaStatisticsListResponse
   */
  async describeMetaStatisticsListWithOptions(request: $_model.DescribeMetaStatisticsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaStatisticsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetaStatisticsList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetaStatisticsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetaStatisticsListResponse({}));
  }

  /**
   * Queries statistics information for information verification and authentication.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeMetaStatisticsListRequest
   * @returns DescribeMetaStatisticsListResponse
   */
  async describeMetaStatisticsList(request: $_model.DescribeMetaStatisticsListRequest): Promise<$_model.DescribeMetaStatisticsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaStatisticsListWithOptions(request, runtime);
  }

  /**
   * Queries information verification and authentication data with pagination.
   * 
   * @remarks
   * - Request method: Supports sending requests using HTTPS POST and GET methods.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeMetaStatisticsPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetaStatisticsPageListResponse
   */
  async describeMetaStatisticsPageListWithOptions(request: $_model.DescribeMetaStatisticsPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaStatisticsPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetaStatisticsPageList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetaStatisticsPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetaStatisticsPageListResponse({}));
  }

  /**
   * Queries information verification and authentication data with pagination.
   * 
   * @remarks
   * - Request method: Supports sending requests using HTTPS POST and GET methods.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeMetaStatisticsPageListRequest
   * @returns DescribeMetaStatisticsPageListResponse
   */
  async describeMetaStatisticsPageList(request: $_model.DescribeMetaStatisticsPageListRequest): Promise<$_model.DescribeMetaStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * Queries the status of OSS.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Endpoint: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssStatusResponse
   */
  async describeOssStatusWithOptions(request: $_model.DescribeOssStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssStatus",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssStatusResponse({}));
  }

  /**
   * Queries the status of OSS.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Endpoint: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusRequest
   * @returns DescribeOssStatusResponse
   */
  async describeOssStatus(request: $_model.DescribeOssStatusRequest): Promise<$_model.DescribeOssStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssStatusWithOptions(request, runtime);
  }

  /**
   * Queries the OSS status of a user (V2).
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssStatusV2Response
   */
  async describeOssStatusV2WithOptions(request: $_model.DescribeOssStatusV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssStatusV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssStatusV2",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssStatusV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeOssStatusV2Response({}));
  }

  /**
   * Queries the OSS status of a user (V2).
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusV2Request
   * @returns DescribeOssStatusV2Response
   */
  async describeOssStatusV2(request: $_model.DescribeOssStatusV2Request): Promise<$_model.DescribeOssStatusV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssStatusV2WithOptions(request, runtime);
  }

  /**
   * Retrieves the token required for uploading photos to OSS.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadTokenWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssUploadTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssUploadToken",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssUploadTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssUploadTokenResponse({}));
  }

  /**
   * Retrieves the token required for uploading photos to OSS.
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadToken(): Promise<$_model.DescribeOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  /**
   * Queries financial-grade ID Verification call statistics by using a paging query operation.
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyDataWithOptions(request: $_model.DescribePageFaceVerifyDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePageFaceVerifyDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePageFaceVerifyData",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePageFaceVerifyDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribePageFaceVerifyDataResponse({}));
  }

  /**
   * Queries financial-grade ID Verification call statistics by using a paging query operation.
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyData(request: $_model.DescribePageFaceVerifyDataRequest): Promise<$_model.DescribePageFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * Queries page settings and returns the reasons for authentication failure.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePageSettingResponse
   */
  async describePageSettingWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribePageSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribePageSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePageSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribePageSettingResponse({}));
  }

  /**
   * Queries page settings and returns the reasons for authentication failure.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * @returns DescribePageSettingResponse
   */
  async describePageSetting(): Promise<$_model.DescribePageSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageSettingWithOptions(runtime);
  }

  /**
   * Retrieves the product codes for financial-grade ID Verification.
   * 
   * @remarks
   * Request method: Send requests by using the HTTPS GET or POST method.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductCodeResponse
   */
  async describeProductCodeWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductCodeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductCode",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductCodeResponse({}));
  }

  /**
   * Retrieves the product codes for financial-grade ID Verification.
   * 
   * @remarks
   * Request method: Send requests by using the HTTPS GET or POST method.
   * @returns DescribeProductCodeResponse
   */
  async describeProductCode(): Promise<$_model.DescribeProductCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductCodeWithOptions(runtime);
  }

  /**
   * Queries the invoke statistics of enhanced ID Verification by using a paged query.
   * 
   * @param request - DescribeSmartStatisticsPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageListWithOptions(request: $_model.DescribeSmartStatisticsPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartStatisticsPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartStatisticsPageList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartStatisticsPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartStatisticsPageListResponse({}));
  }

  /**
   * Queries the invoke statistics of enhanced ID Verification by using a paged query.
   * 
   * @param request - DescribeSmartStatisticsPageListRequest
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageList(request: $_model.DescribeSmartStatisticsPageListRequest): Promise<$_model.DescribeSmartStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * Retrieves statistics of verification devices.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyDeviceRiskStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyDeviceRiskStatisticsResponse
   */
  async describeVerifyDeviceRiskStatisticsWithOptions(request: $_model.DescribeVerifyDeviceRiskStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyDeviceRiskStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyDeviceRiskStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyDeviceRiskStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyDeviceRiskStatisticsResponse({}));
  }

  /**
   * Retrieves statistics of verification devices.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyDeviceRiskStatisticsRequest
   * @returns DescribeVerifyDeviceRiskStatisticsResponse
   */
  async describeVerifyDeviceRiskStatistics(request: $_model.DescribeVerifyDeviceRiskStatisticsRequest): Promise<$_model.DescribeVerifyDeviceRiskStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyDeviceRiskStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the total number of failed authentication requests.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyFailStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyFailStatisticsResponse
   */
  async describeVerifyFailStatisticsWithOptions(request: $_model.DescribeVerifyFailStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyFailStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ageGt)) {
      query["AgeGt"] = request.ageGt;
    }

    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyFailStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyFailStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyFailStatisticsResponse({}));
  }

  /**
   * Queries the total number of failed authentication requests.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyFailStatisticsRequest
   * @returns DescribeVerifyFailStatisticsResponse
   */
  async describeVerifyFailStatistics(request: $_model.DescribeVerifyFailStatisticsRequest): Promise<$_model.DescribeVerifyFailStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyFailStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the distribution data of phone models used by authenticated users.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasDeviceModelStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyPersonasDeviceModelStatisticsResponse
   */
  async describeVerifyPersonasDeviceModelStatisticsWithOptions(request: $_model.DescribeVerifyPersonasDeviceModelStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyPersonasDeviceModelStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyPersonasDeviceModelStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyPersonasDeviceModelStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyPersonasDeviceModelStatisticsResponse({}));
  }

  /**
   * Queries the distribution data of phone models used by authenticated users.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasDeviceModelStatisticsRequest
   * @returns DescribeVerifyPersonasDeviceModelStatisticsResponse
   */
  async describeVerifyPersonasDeviceModelStatistics(request: $_model.DescribeVerifyPersonasDeviceModelStatisticsRequest): Promise<$_model.DescribeVerifyPersonasDeviceModelStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasDeviceModelStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the distribution data of ID Verification devices.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasOsStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyPersonasOsStatisticsResponse
   */
  async describeVerifyPersonasOsStatisticsWithOptions(request: $_model.DescribeVerifyPersonasOsStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyPersonasOsStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyPersonasOsStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyPersonasOsStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyPersonasOsStatisticsResponse({}));
  }

  /**
   * Queries the distribution data of ID Verification devices.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasOsStatisticsRequest
   * @returns DescribeVerifyPersonasOsStatisticsResponse
   */
  async describeVerifyPersonasOsStatistics(request: $_model.DescribeVerifyPersonasOsStatisticsRequest): Promise<$_model.DescribeVerifyPersonasOsStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasOsStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries authentication statistics by province of the individual.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasProvinceStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyPersonasProvinceStatisticsResponse
   */
  async describeVerifyPersonasProvinceStatisticsWithOptions(request: $_model.DescribeVerifyPersonasProvinceStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyPersonasProvinceStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyPersonasProvinceStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyPersonasProvinceStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyPersonasProvinceStatisticsResponse({}));
  }

  /**
   * Queries authentication statistics by province of the individual.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasProvinceStatisticsRequest
   * @returns DescribeVerifyPersonasProvinceStatisticsResponse
   */
  async describeVerifyPersonasProvinceStatistics(request: $_model.DescribeVerifyPersonasProvinceStatisticsRequest): Promise<$_model.DescribeVerifyPersonasProvinceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasProvinceStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries ID Verification statistics by gender.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasSexStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyPersonasSexStatisticsResponse
   */
  async describeVerifyPersonasSexStatisticsWithOptions(request: $_model.DescribeVerifyPersonasSexStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyPersonasSexStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyPersonasSexStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyPersonasSexStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyPersonasSexStatisticsResponse({}));
  }

  /**
   * Queries ID Verification statistics by gender.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasSexStatisticsRequest
   * @returns DescribeVerifyPersonasSexStatisticsResponse
   */
  async describeVerifyPersonasSexStatistics(request: $_model.DescribeVerifyPersonasSexStatisticsRequest): Promise<$_model.DescribeVerifyPersonasSexStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasSexStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the result of an ID Verification task.
   * 
   * @remarks
   * Before you begin: Before calling this API, make sure that you have completed the required preparations. For more information, see [ID Verification server-side integration preparations](https://help.aliyun.com/document_detail/127471.html) and [Face liveness verification server-side integration preparations](https://help.aliyun.com/document_detail/127717.html).
   * > Alibaba Cloud ID Verification retains verification data for only the last 180 days. To use verification data for subsequent business purposes, call this operation promptly to retrieve and store the data to avoid data loss.
   * Request method: HTTPS POST and GET.
   * Operation description: After the caller\\"s mobile client receives a callback, the server can call this operation to obtain the corresponding verification status and verification materials.
   * Applicable scope: This operation is applicable to the SDK + server-side integration verification solution.
   * 
   * @param request - DescribeVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResultWithOptions(request: $_model.DescribeVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyResult",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyResultResponse({}));
  }

  /**
   * Queries the result of an ID Verification task.
   * 
   * @remarks
   * Before you begin: Before calling this API, make sure that you have completed the required preparations. For more information, see [ID Verification server-side integration preparations](https://help.aliyun.com/document_detail/127471.html) and [Face liveness verification server-side integration preparations](https://help.aliyun.com/document_detail/127717.html).
   * > Alibaba Cloud ID Verification retains verification data for only the last 180 days. To use verification data for subsequent business purposes, call this operation promptly to retrieve and store the data to avoid data loss.
   * Request method: HTTPS POST and GET.
   * Operation description: After the caller\\"s mobile client receives a callback, the server can call this operation to obtain the corresponding verification status and verification materials.
   * Applicable scope: This operation is applicable to the SDK + server-side integration verification solution.
   * 
   * @param request - DescribeVerifyResultRequest
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResult(request: $_model.DescribeVerifyResultRequest): Promise<$_model.DescribeVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the download URL of an offline SDK.
   * 
   * @remarks
   * Request method: Supports HTTPS POST and GET methods.
   * Operation description: Retrieves the result of an offline facial recognition SDK generation task based on the task ID.
   * 
   * @param request - DescribeVerifySDKRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDKWithOptions(request: $_model.DescribeVerifySDKRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifySDKResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifySDK",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifySDKResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifySDKResponse({}));
  }

  /**
   * Retrieves the download URL of an offline SDK.
   * 
   * @remarks
   * Request method: Supports HTTPS POST and GET methods.
   * Operation description: Retrieves the result of an offline facial recognition SDK generation task based on the task ID.
   * 
   * @param request - DescribeVerifySDKRequest
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDK(request: $_model.DescribeVerifySDKRequest): Promise<$_model.DescribeVerifySDKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  /**
   * Query authentication details by page with conditions.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request methods: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifySearchPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifySearchPageListResponse
   */
  async describeVerifySearchPageListWithOptions(request: $_model.DescribeVerifySearchPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifySearchPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.hasDeviceRisk)) {
      query["HasDeviceRisk"] = request.hasDeviceRisk;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.passed)) {
      query["Passed"] = request.passed;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.riskBizScenario)) {
      query["RiskBizScenario"] = request.riskBizScenario;
    }

    if (!$dara.isNull(request.riskDevice)) {
      query["RiskDevice"] = request.riskDevice;
    }

    if (!$dara.isNull(request.riskDeviceToken)) {
      query["RiskDeviceToken"] = request.riskDeviceToken;
    }

    if (!$dara.isNull(request.riskGeneric)) {
      query["RiskGeneric"] = request.riskGeneric;
    }

    if (!$dara.isNull(request.riskModelMining)) {
      query["RiskModelMining"] = request.riskModelMining;
    }

    if (!$dara.isNull(request.root)) {
      query["Root"] = request.root;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.simulator)) {
      query["Simulator"] = request.simulator;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subCode)) {
      query["SubCode"] = request.subCode;
    }

    if (!$dara.isNull(request.subCodes)) {
      query["SubCodes"] = request.subCodes;
    }

    if (!$dara.isNull(request.virtualVideo)) {
      query["VirtualVideo"] = request.virtualVideo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifySearchPageList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifySearchPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifySearchPageListResponse({}));
  }

  /**
   * Query authentication details by page with conditions.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request methods: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifySearchPageListRequest
   * @returns DescribeVerifySearchPageListResponse
   */
  async describeVerifySearchPageList(request: $_model.DescribeVerifySearchPageListRequest): Promise<$_model.DescribeVerifySearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySearchPageListWithOptions(request, runtime);
  }

  /**
   * Queries the statistics information of authentication requests.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeVerifyStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyStatisticsResponse
   */
  async describeVerifyStatisticsWithOptions(request: $_model.DescribeVerifyStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ageGt)) {
      query["AgeGt"] = request.ageGt;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyStatistics",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyStatisticsResponse({}));
  }

  /**
   * Queries the statistics information of authentication requests.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Service address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeVerifyStatisticsRequest
   * @returns DescribeVerifyStatisticsResponse
   */
  async describeVerifyStatistics(request: $_model.DescribeVerifyStatisticsRequest): Promise<$_model.DescribeVerifyStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyStatisticsWithOptions(request, runtime);
  }

  /**
   * Initiates an authentication request and obtains an authentication token. This operation is applicable to authentication schemes that use SDK and server-side integration.
   * 
   * @remarks
   * Preparations: Before calling this operation, make sure that you have completed the required preparations. For more information, see [Overview of the ID Verification scheme integration process](https://help.aliyun.com/document_detail/127536.html) and [Overview of the face liveness verification scheme (liveness detection scheme) integration process](https://help.aliyun.com/document_detail/127687.html).
   * Request method: HTTPS POST and GET.
   * Operation description: Before each authentication, call this operation to obtain an authentication token (VerifyToken), which is used to connect the various operations in the authentication request.
   * Scope of application: This operation is applicable to mobile SDK integration.
   * Image URL: Use a publicly accessible HTTP or HTTPS URL. Example: `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * Image limits:
   * - The relative path or absolute path of local images is not supported.
   * - Keep the size of a single image within 2 MB to avoid algorithm fetch timeout.
   * - The face area in the image must be at least 64 × 64 pixels (px).
   * - The body of a single request has a size limit of 8 MB. Make sure that the total size of all images and other information in the request does not exceed this limit.
   * 
   * @param request - DescribeVerifyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyTokenWithOptions(request: $_model.DescribeVerifyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackSeed)) {
      query["CallbackSeed"] = request.callbackSeed;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.faceRetainedImageUrl)) {
      query["FaceRetainedImageUrl"] = request.faceRetainedImageUrl;
    }

    if (!$dara.isNull(request.failedRedirectUrl)) {
      query["FailedRedirectUrl"] = request.failedRedirectUrl;
    }

    if (!$dara.isNull(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!$dara.isNull(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!$dara.isNull(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.passedRedirectUrl)) {
      query["PassedRedirectUrl"] = request.passedRedirectUrl;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userIp)) {
      query["UserIp"] = request.userIp;
    }

    if (!$dara.isNull(request.userPhoneNumber)) {
      query["UserPhoneNumber"] = request.userPhoneNumber;
    }

    if (!$dara.isNull(request.userRegistTime)) {
      query["UserRegistTime"] = request.userRegistTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyToken",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyTokenResponse({}));
  }

  /**
   * Initiates an authentication request and obtains an authentication token. This operation is applicable to authentication schemes that use SDK and server-side integration.
   * 
   * @remarks
   * Preparations: Before calling this operation, make sure that you have completed the required preparations. For more information, see [Overview of the ID Verification scheme integration process](https://help.aliyun.com/document_detail/127536.html) and [Overview of the face liveness verification scheme (liveness detection scheme) integration process](https://help.aliyun.com/document_detail/127687.html).
   * Request method: HTTPS POST and GET.
   * Operation description: Before each authentication, call this operation to obtain an authentication token (VerifyToken), which is used to connect the various operations in the authentication request.
   * Scope of application: This operation is applicable to mobile SDK integration.
   * Image URL: Use a publicly accessible HTTP or HTTPS URL. Example: `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * Image limits:
   * - The relative path or absolute path of local images is not supported.
   * - Keep the size of a single image within 2 MB to avoid algorithm fetch timeout.
   * - The face area in the image must be at least 64 × 64 pixels (px).
   * - The body of a single request has a size limit of 8 MB. Make sure that the total size of all images and other information in the request does not exceed this limit.
   * 
   * @param request - DescribeVerifyTokenRequest
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyToken(request: $_model.DescribeVerifyTokenRequest): Promise<$_model.DescribeVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist of a scenario.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DescribeWhitelistSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhitelistSettingResponse
   */
  async describeWhitelistSettingWithOptions(request: $_model.DescribeWhitelistSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.validEndDate)) {
      query["ValidEndDate"] = request.validEndDate;
    }

    if (!$dara.isNull(request.validStartDate)) {
      query["ValidStartDate"] = request.validStartDate;
    }

    if (!$dara.isNull(request.whitelistType)) {
      query["WhitelistType"] = request.whitelistType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWhitelistSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWhitelistSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWhitelistSettingResponse({}));
  }

  /**
   * Queries the whitelist of a scenario.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * 
   * @param request - DescribeWhitelistSettingRequest
   * @returns DescribeWhitelistSettingResponse
   */
  async describeWhitelistSetting(request: $_model.DescribeWhitelistSettingRequest): Promise<$_model.DescribeWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * Detects validity attributes of faces in a photo.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * Operation description: Detects validity-related attributes of faces in an input photo, helping you determine whether the photo meets your business requirements for retention or comparison. Currently supported face validity attributes include: whether a face is present, whether the face is blurry, whether glasses are worn, facial pose, and whether the face is smiling.
   * Notes on uploading image addresses: When submitting an image, provide its HTTP URL, OSS address, or Base64 encoding.
   * - HTTP address: A publicly accessible HTTP URL. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 encoding: A Base64-encoded image in the format `base64://<Base64-encoded image string>`.
   * Image limits:
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep the size of a single image within 2 MB to avoid algorithm fetch timeouts.
   * - The request body has a size limit of 8 MB. Make sure the total size of all images and other information in the request does not exceed this limit.
   * - When using Base64 to transmit images, set the request method to POST. Remove the header description from the Base64 character string, such as `data:image/png,base64`.
   * 
   * @param request - DetectFaceAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributesWithOptions(request: $_model.DetectFaceAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectFaceAttributesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.materialValue)) {
      body["MaterialValue"] = request.materialValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectFaceAttributes",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectFaceAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DetectFaceAttributesResponse({}));
  }

  /**
   * Detects validity attributes of faces in a photo.
   * 
   * @remarks
   * Request method: Only HTTPS POST requests are supported.
   * Operation description: Detects validity-related attributes of faces in an input photo, helping you determine whether the photo meets your business requirements for retention or comparison. Currently supported face validity attributes include: whether a face is present, whether the face is blurry, whether glasses are worn, facial pose, and whether the face is smiling.
   * Notes on uploading image addresses: When submitting an image, provide its HTTP URL, OSS address, or Base64 encoding.
   * - HTTP address: A publicly accessible HTTP URL. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 encoding: A Base64-encoded image in the format `base64://<Base64-encoded image string>`.
   * Image limits:
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep the size of a single image within 2 MB to avoid algorithm fetch timeouts.
   * - The request body has a size limit of 8 MB. Make sure the total size of all images and other information in the request does not exceed this limit.
   * - When using Base64 to transmit images, set the request method to POST. Remove the header description from the Base64 character string, such as `data:image/png,base64`.
   * 
   * @param request - DetectFaceAttributesRequest
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributes(request: $_model.DetectFaceAttributesRequest): Promise<$_model.DetectFaceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  /**
   * Retrieves statistical call volume data.
   * 
   * @remarks
   * Retrieves the download link for the statistical call data file under a product plan based on the specified query conditions.
   * - Method: HTTPS POST
   * - Endpoint: cloudauth.aliyuncs.com
   * > ID Verification counts call volume by CertifyId. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - DownloadVerifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadVerifyRecordsResponse
   */
  async downloadVerifyRecordsWithOptions(request: $_model.DownloadVerifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadVerifyRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizParam)) {
      query["BizParam"] = request.bizParam;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadVerifyRecords",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadVerifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadVerifyRecordsResponse({}));
  }

  /**
   * Retrieves statistical call volume data.
   * 
   * @remarks
   * Retrieves the download link for the statistical call data file under a product plan based on the specified query conditions.
   * - Method: HTTPS POST
   * - Endpoint: cloudauth.aliyuncs.com
   * > ID Verification counts call volume by CertifyId. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - DownloadVerifyRecordsRequest
   * @returns DownloadVerifyRecordsResponse
   */
  async downloadVerifyRecords(request: $_model.DownloadVerifyRecordsRequest): Promise<$_model.DownloadVerifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadVerifyRecordsWithOptions(request, runtime);
  }

  /**
   * Verifies the validity period of a two-factor identity document.
   * 
   * @param request - Id2MetaPeriodVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaPeriodVerifyResponse
   */
  async id2MetaPeriodVerifyWithOptions(request: $_model.Id2MetaPeriodVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaPeriodVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
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
      action: "Id2MetaPeriodVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaPeriodVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaPeriodVerifyResponse({}));
  }

  /**
   * Verifies the validity period of a two-factor identity document.
   * 
   * @param request - Id2MetaPeriodVerifyRequest
   * @returns Id2MetaPeriodVerifyResponse
   */
  async id2MetaPeriodVerify(request: $_model.Id2MetaPeriodVerifyRequest): Promise<$_model.Id2MetaPeriodVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyWithOptions(request, runtime);
  }

  /**
   * Two-factor identity verification Standard Edition.
   * 
   * @param request - Id2MetaStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaStandardVerifyResponse
   */
  async id2MetaStandardVerifyWithOptions(request: $_model.Id2MetaStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaStandardVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaStandardVerifyResponse({}));
  }

  /**
   * Two-factor identity verification Standard Edition.
   * 
   * @param request - Id2MetaStandardVerifyRequest
   * @returns Id2MetaStandardVerifyResponse
   */
  async id2MetaStandardVerify(request: $_model.Id2MetaStandardVerifyRequest): Promise<$_model.Id2MetaStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the authenticity and consistency of a name and ID card number against an authoritative data source.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Id2MetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyResponse
   */
  async id2MetaVerifyWithOptions(request: $_model.Id2MetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaVerifyResponse({}));
  }

  /**
   * Verifies the authenticity and consistency of a name and ID card number against an authoritative data source.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Id2MetaVerifyRequest
   * @returns Id2MetaVerifyResponse
   */
  async id2MetaVerify(request: $_model.Id2MetaVerifyRequest): Promise<$_model.Id2MetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the authenticity and consistency of an identity by taking images of both sides of an ID card, extracting the name and ID number via OCR, and checking them against an authoritative source.
   * 
   * @remarks
   * Takes images of both sides of an ID card and returns the verification result of the two factors from an authoritative data source.
   * 
   * @param request - Id2MetaVerifyWithOCRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyWithOCRResponse
   */
  async id2MetaVerifyWithOCRWithOptions(request: $_model.Id2MetaVerifyWithOCRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaVerifyWithOCRResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certFile)) {
      body["CertFile"] = request.certFile;
    }

    if (!$dara.isNull(request.certNationalFile)) {
      body["CertNationalFile"] = request.certNationalFile;
    }

    if (!$dara.isNull(request.certNationalUrl)) {
      body["CertNationalUrl"] = request.certNationalUrl;
    }

    if (!$dara.isNull(request.certUrl)) {
      body["CertUrl"] = request.certUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaVerifyWithOCR",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id2MetaVerifyWithOCRResponse>(await this.callApi(params, req, runtime), new $_model.Id2MetaVerifyWithOCRResponse({}));
  }

  /**
   * Verifies the authenticity and consistency of an identity by taking images of both sides of an ID card, extracting the name and ID number via OCR, and checking them against an authoritative source.
   * 
   * @remarks
   * Takes images of both sides of an ID card and returns the verification result of the two factors from an authoritative data source.
   * 
   * @param request - Id2MetaVerifyWithOCRRequest
   * @returns Id2MetaVerifyWithOCRResponse
   */
  async id2MetaVerifyWithOCR(request: $_model.Id2MetaVerifyWithOCRRequest): Promise<$_model.Id2MetaVerifyWithOCRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyWithOCRWithOptions(request, runtime);
  }

  async id2MetaVerifyWithOCRAdvance(request: $_model.Id2MetaVerifyWithOCRAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id2MetaVerifyWithOCRResponse> {
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
      Product: "Cloudauth",
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
    let id2MetaVerifyWithOCRReq = new $_model.Id2MetaVerifyWithOCRRequest({ });
    OpenApiUtil.convert(request, id2MetaVerifyWithOCRReq);
    if (!$dara.isNull(request.certFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.certFileObject,
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
      id2MetaVerifyWithOCRReq.certFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.certNationalFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.certNationalFileObject,
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
      id2MetaVerifyWithOCRReq.certNationalFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let id2MetaVerifyWithOCRResp = await this.id2MetaVerifyWithOCRWithOptions(id2MetaVerifyWithOCRReq, runtime);
    return id2MetaVerifyWithOCRResp;
  }

  /**
   * Verifies the authenticity and consistency of a name, ID card number, and facial photo against an authoritative data source.
   * 
   * @remarks
   * Verifies the authenticity and consistency of a name, ID card number, and facial photo against an authoritative data source.
   * 
   * @param request - Id3MetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id3MetaVerifyResponse
   */
  async id3MetaVerifyWithOptions(request: $_model.Id3MetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id3MetaVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.faceFile)) {
      body["FaceFile"] = request.faceFile;
    }

    if (!$dara.isNull(request.facePicture)) {
      body["FacePicture"] = request.facePicture;
    }

    if (!$dara.isNull(request.faceUrl)) {
      body["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id3MetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id3MetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Id3MetaVerifyResponse({}));
  }

  /**
   * Verifies the authenticity and consistency of a name, ID card number, and facial photo against an authoritative data source.
   * 
   * @remarks
   * Verifies the authenticity and consistency of a name, ID card number, and facial photo against an authoritative data source.
   * 
   * @param request - Id3MetaVerifyRequest
   * @returns Id3MetaVerifyResponse
   */
  async id3MetaVerify(request: $_model.Id3MetaVerifyRequest): Promise<$_model.Id3MetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id3MetaVerifyWithOptions(request, runtime);
  }

  async id3MetaVerifyAdvance(request: $_model.Id3MetaVerifyAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id3MetaVerifyResponse> {
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
      Product: "Cloudauth",
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
    let id3MetaVerifyReq = new $_model.Id3MetaVerifyRequest({ });
    OpenApiUtil.convert(request, id3MetaVerifyReq);
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
      id3MetaVerifyReq.faceFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let id3MetaVerifyResp = await this.id3MetaVerifyWithOptions(id3MetaVerifyReq, runtime);
    return id3MetaVerifyResp;
  }

  /**
   * Accepts images of the front and back of an ID card, extracts the name, ID number, and facial photo by using OCR, and verifies the authenticity and consistency of the three facial elements against an authoritative source.
   * 
   * @remarks
   * Submits images of the front and back of an ID card and returns the verification result of the three facial elements from an authoritative data source.
   * 
   * @param request - Id3MetaVerifyWithOCRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id3MetaVerifyWithOCRResponse
   */
  async id3MetaVerifyWithOCRWithOptions(request: $_model.Id3MetaVerifyWithOCRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id3MetaVerifyWithOCRResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certFile)) {
      body["CertFile"] = request.certFile;
    }

    if (!$dara.isNull(request.certNationalFile)) {
      body["CertNationalFile"] = request.certNationalFile;
    }

    if (!$dara.isNull(request.certNationalUrl)) {
      body["CertNationalUrl"] = request.certNationalUrl;
    }

    if (!$dara.isNull(request.certUrl)) {
      body["CertUrl"] = request.certUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id3MetaVerifyWithOCR",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Id3MetaVerifyWithOCRResponse>(await this.callApi(params, req, runtime), new $_model.Id3MetaVerifyWithOCRResponse({}));
  }

  /**
   * Accepts images of the front and back of an ID card, extracts the name, ID number, and facial photo by using OCR, and verifies the authenticity and consistency of the three facial elements against an authoritative source.
   * 
   * @remarks
   * Submits images of the front and back of an ID card and returns the verification result of the three facial elements from an authoritative data source.
   * 
   * @param request - Id3MetaVerifyWithOCRRequest
   * @returns Id3MetaVerifyWithOCRResponse
   */
  async id3MetaVerifyWithOCR(request: $_model.Id3MetaVerifyWithOCRRequest): Promise<$_model.Id3MetaVerifyWithOCRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id3MetaVerifyWithOCRWithOptions(request, runtime);
  }

  async id3MetaVerifyWithOCRAdvance(request: $_model.Id3MetaVerifyWithOCRAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Id3MetaVerifyWithOCRResponse> {
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
      Product: "Cloudauth",
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
    let id3MetaVerifyWithOCRReq = new $_model.Id3MetaVerifyWithOCRRequest({ });
    OpenApiUtil.convert(request, id3MetaVerifyWithOCRReq);
    if (!$dara.isNull(request.certFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.certFileObject,
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
      id3MetaVerifyWithOCRReq.certFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    if (!$dara.isNull(request.certNationalFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.certNationalFileObject,
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
      id3MetaVerifyWithOCRReq.certNationalFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let id3MetaVerifyWithOCRResp = await this.id3MetaVerifyWithOCRWithOptions(id3MetaVerifyWithOCRReq, runtime);
    return id3MetaVerifyWithOCRResp;
  }

  /**
   * Initiates an OCR request.
   * 
   * @param request - InitAuthVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitAuthVerifyResponse
   */
  async initAuthVerifyWithOptions(request: $_model.InitAuthVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitAuthVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackToken)) {
      body["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.cardPageNumber)) {
      body["CardPageNumber"] = request.cardPageNumber;
    }

    if (!$dara.isNull(request.cardType)) {
      body["CardType"] = request.cardType;
    }

    if (!$dara.isNull(request.docScanMode)) {
      body["DocScanMode"] = request.docScanMode;
    }

    if (!$dara.isNull(request.idSpoof)) {
      body["IdSpoof"] = request.idSpoof;
    }

    if (!$dara.isNull(request.metaInfo)) {
      body["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitAuthVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitAuthVerifyResponse>(await this.callApi(params, req, runtime), new $_model.InitAuthVerifyResponse({}));
  }

  /**
   * Initiates an OCR request.
   * 
   * @param request - InitAuthVerifyRequest
   * @returns InitAuthVerifyResponse
   */
  async initAuthVerify(request: $_model.InitAuthVerifyRequest): Promise<$_model.InitAuthVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initAuthVerifyWithOptions(request, runtime);
  }

  /**
   * Initiates an image verification authentication request.
   * 
   * @remarks
   * Retrieves a CertifyId before each authentication session. The CertifyId links all API operations within the authentication request.
   * 
   * @param request - InitCardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitCardVerifyResponse
   */
  async initCardVerifyWithOptions(request: $_model.InitCardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitCardVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.cardPageNumber)) {
      query["CardPageNumber"] = request.cardPageNumber;
    }

    if (!$dara.isNull(request.cardType)) {
      query["CardType"] = request.cardType;
    }

    if (!$dara.isNull(request.docScanMode)) {
      query["DocScanMode"] = request.docScanMode;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.pictureSave)) {
      query["PictureSave"] = request.pictureSave;
    }

    if (!$dara.isNull(request.verifyMeta)) {
      query["VerifyMeta"] = request.verifyMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitCardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitCardVerifyResponse>(await this.callApi(params, req, runtime), new $_model.InitCardVerifyResponse({}));
  }

  /**
   * Initiates an image verification authentication request.
   * 
   * @remarks
   * Retrieves a CertifyId before each authentication session. The CertifyId links all API operations within the authentication request.
   * 
   * @param request - InitCardVerifyRequest
   * @returns InitCardVerifyResponse
   */
  async initCardVerify(request: $_model.InitCardVerifyRequest): Promise<$_model.InitCardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initCardVerifyWithOptions(request, runtime);
  }

  /**
   * Obtains a CertifyId before each authentication to link the interfaces in the authentication request.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This operation uses different parameters for different product plans. For more information, refer to the [official documentation](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/product-overview/introduction/).
   * #### Image format requirements
   * When performing ID Verification, submit images that meet all of the following conditions:
   * - A recent photo with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - A clear photo with normal exposure. The face must not be too dark, too bright, or have glare, and the angle must not deviate significantly.
   * - Resolution must not exceed 1920×1080 and must be at least 640×480. Scale the short side to 720 pixels and use a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. For photos with multiple faces, the largest face is selected.
   * 
   * @param request - InitFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitFaceVerifyResponse
   */
  async initFaceVerifyWithOptions(request: $_model.InitFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appQualityCheck)) {
      query["AppQualityCheck"] = request.appQualityCheck;
    }

    if (!$dara.isNull(request.birthday)) {
      query["Birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.cameraSelection)) {
      query["CameraSelection"] = request.cameraSelection;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.certifyUrlStyle)) {
      query["CertifyUrlStyle"] = request.certifyUrlStyle;
    }

    if (!$dara.isNull(request.certifyUrlType)) {
      query["CertifyUrlType"] = request.certifyUrlType;
    }

    if (!$dara.isNull(request.enableBeauty)) {
      query["EnableBeauty"] = request.enableBeauty;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.faceGuardOutput)) {
      query["FaceGuardOutput"] = request.faceGuardOutput;
    }

    if (!$dara.isNull(request.h5DegradeConfirmBtn)) {
      query["H5DegradeConfirmBtn"] = request.h5DegradeConfirmBtn;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.needMultiFaceCheck)) {
      query["NeedMultiFaceCheck"] = request.needMultiFaceCheck;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.rarelyCharacters)) {
      query["RarelyCharacters"] = request.rarelyCharacters;
    }

    if (!$dara.isNull(request.readImg)) {
      query["ReadImg"] = request.readImg;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.suitableType)) {
      query["SuitableType"] = request.suitableType;
    }

    if (!$dara.isNull(request.uiCustomUrl)) {
      query["UiCustomUrl"] = request.uiCustomUrl;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.validityDate)) {
      query["ValidityDate"] = request.validityDate;
    }

    if (!$dara.isNull(request.videoEvidence)) {
      query["VideoEvidence"] = request.videoEvidence;
    }

    if (!$dara.isNull(request.voluntaryCustomizedContent)) {
      query["VoluntaryCustomizedContent"] = request.voluntaryCustomizedContent;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authId)) {
      body["AuthId"] = request.authId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.InitFaceVerifyResponse({}));
  }

  /**
   * Obtains a CertifyId before each authentication to link the interfaces in the authentication request.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This operation uses different parameters for different product plans. For more information, refer to the [official documentation](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/product-overview/introduction/).
   * #### Image format requirements
   * When performing ID Verification, submit images that meet all of the following conditions:
   * - A recent photo with a complete, clear, and unobstructed face, a natural expression, and the subject facing the camera directly.
   * - A clear photo with normal exposure. The face must not be too dark, too bright, or have glare, and the angle must not deviate significantly.
   * - Resolution must not exceed 1920×1080 and must be at least 640×480. Scale the short side to 720 pixels and use a compression ratio greater than 0.9.
   * - Photo size: < 1 MB.
   * - Photos rotated 90, 180, and 270 degrees are supported. For photos with multiple faces, the largest face is selected.
   * 
   * @param request - InitFaceVerifyRequest
   * @returns InitFaceVerifyResponse
   */
  async initFaceVerify(request: $_model.InitFaceVerifyRequest): Promise<$_model.InitFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Adds an ID Verification whitelist entry.
   * 
   * @param request - InsertWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertWhiteListSettingResponse
   */
  async insertWhiteListSettingWithOptions(request: $_model.InsertWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertWhiteListSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.validDay)) {
      query["ValidDay"] = request.validDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertWhiteListSettingResponse>(await this.callApi(params, req, runtime), new $_model.InsertWhiteListSettingResponse({}));
  }

  /**
   * Adds an ID Verification whitelist entry.
   * 
   * @param request - InsertWhiteListSettingRequest
   * @returns InsertWhiteListSettingResponse
   */
  async insertWhiteListSetting(request: $_model.InsertWhiteListSettingRequest): Promise<$_model.InsertWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * LivenessFaceVerify is a service that performs passive liveness detection on face images submitted through an API operation. The algorithm primarily identifies liveness attack types such as screen replay and printed photo attacks. This service is suitable for low-risk business scenarios or for use in conjunction with an offline facial recognition SDK. If your business requires a higher level of security for real face verification, integrate the App or WebSDK pattern, or integrate the face Deepfake detection service to identify face forgery risks across more dimensions.
   * 
   * @remarks
   * Calls the LivenessFaceVerify operation to perform liveness detection on a face image.
   * 
   * @param request - LivenessFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LivenessFaceVerifyResponse
   */
  async livenessFaceVerifyWithOptions(request: $_model.LivenessFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LivenessFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LivenessFaceVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LivenessFaceVerifyResponse>(await this.callApi(params, req, runtime), new $_model.LivenessFaceVerifyResponse({}));
  }

  /**
   * LivenessFaceVerify is a service that performs passive liveness detection on face images submitted through an API operation. The algorithm primarily identifies liveness attack types such as screen replay and printed photo attacks. This service is suitable for low-risk business scenarios or for use in conjunction with an offline facial recognition SDK. If your business requires a higher level of security for real face verification, integrate the App or WebSDK pattern, or integrate the face Deepfake detection service to identify face forgery risks across more dimensions.
   * 
   * @remarks
   * Calls the LivenessFaceVerify operation to perform liveness detection on a face image.
   * 
   * @param request - LivenessFaceVerifyRequest
   * @returns LivenessFaceVerifyResponse
   */
  async livenessFaceVerify(request: $_model.LivenessFaceVerifyRequest): Promise<$_model.LivenessFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.livenessFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the consistency of a mobile phone number and the owner\\"s name.
   * 
   * @remarks
   * Passes in a mobile phone number and a name, and verifies their authenticity and consistency through an authoritative data source.
   * 
   * @param request - Mobile2MetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile2MetaVerifyResponse
   */
  async mobile2MetaVerifyWithOptions(request: $_model.Mobile2MetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile2MetaVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile2MetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile2MetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Mobile2MetaVerifyResponse({}));
  }

  /**
   * Verifies the consistency of a mobile phone number and the owner\\"s name.
   * 
   * @remarks
   * Passes in a mobile phone number and a name, and verifies their authenticity and consistency through an authoritative data source.
   * 
   * @param request - Mobile2MetaVerifyRequest
   * @returns Mobile2MetaVerifyResponse
   */
  async mobile2MetaVerify(request: $_model.Mobile2MetaVerifyRequest): Promise<$_model.Mobile2MetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile2MetaVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the three-element identity of a phone number (detailed version - standard edition).
   * 
   * @remarks
   * Passes in a phone number, name, and ID card number, and verifies their authenticity and consistency through an authoritative data source. If the information is inconsistent, the reason for the inconsistency is returned.
   * 
   * @param request - Mobile3MetaDetailStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaDetailStandardVerifyResponse
   */
  async mobile3MetaDetailStandardVerifyWithOptions(request: $_model.Mobile3MetaDetailStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile3MetaDetailStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaDetailStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile3MetaDetailStandardVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Mobile3MetaDetailStandardVerifyResponse({}));
  }

  /**
   * Verifies the three-element identity of a phone number (detailed version - standard edition).
   * 
   * @remarks
   * Passes in a phone number, name, and ID card number, and verifies their authenticity and consistency through an authoritative data source. If the information is inconsistent, the reason for the inconsistency is returned.
   * 
   * @param request - Mobile3MetaDetailStandardVerifyRequest
   * @returns Mobile3MetaDetailStandardVerifyResponse
   */
  async mobile3MetaDetailStandardVerify(request: $_model.Mobile3MetaDetailStandardVerifyRequest): Promise<$_model.Mobile3MetaDetailStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaDetailStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the authenticity and consistency of a phone number, name, and ID card number against authoritative data sources, and returns the reason for any inconsistency.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Mobile3MetaDetailVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerifyWithOptions(request: $_model.Mobile3MetaDetailVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile3MetaDetailVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaDetailVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile3MetaDetailVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Mobile3MetaDetailVerifyResponse({}));
  }

  /**
   * Verifies the authenticity and consistency of a phone number, name, and ID card number against authoritative data sources, and returns the reason for any inconsistency.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Mobile3MetaDetailVerifyRequest
   * @returns Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerify(request: $_model.Mobile3MetaDetailVerifyRequest): Promise<$_model.Mobile3MetaDetailVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaDetailVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies the three-element identity of a phone number (Standard Edition).
   * 
   * @remarks
   * Passes in a phone number, name, and ID card number, and verifies their authenticity and consistency through an authoritative data source.
   * 
   * @param request - Mobile3MetaSimpleStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaSimpleStandardVerifyResponse
   */
  async mobile3MetaSimpleStandardVerifyWithOptions(request: $_model.Mobile3MetaSimpleStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile3MetaSimpleStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaSimpleStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile3MetaSimpleStandardVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Mobile3MetaSimpleStandardVerifyResponse({}));
  }

  /**
   * Verifies the three-element identity of a phone number (Standard Edition).
   * 
   * @remarks
   * Passes in a phone number, name, and ID card number, and verifies their authenticity and consistency through an authoritative data source.
   * 
   * @param request - Mobile3MetaSimpleStandardVerifyRequest
   * @returns Mobile3MetaSimpleStandardVerifyResponse
   */
  async mobile3MetaSimpleStandardVerify(request: $_model.Mobile3MetaSimpleStandardVerifyRequest): Promise<$_model.Mobile3MetaSimpleStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaSimpleStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Pass in the name and ID card number to verify their authenticity and consistency through authoritative data sources.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Mobile3MetaSimpleVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerifyWithOptions(request: $_model.Mobile3MetaSimpleVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Mobile3MetaSimpleVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaSimpleVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Mobile3MetaSimpleVerifyResponse>(await this.callApi(params, req, runtime), new $_model.Mobile3MetaSimpleVerifyResponse({}));
  }

  /**
   * Pass in the name and ID card number to verify their authenticity and consistency through authoritative data sources.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
   * - Request method: POST and GET.
   * - Transfer protocol: HTTPS.
   * 
   * @param request - Mobile3MetaSimpleVerifyRequest
   * @returns Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerify(request: $_model.Mobile3MetaSimpleVerifyRequest): Promise<$_model.Mobile3MetaSimpleVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaSimpleVerifyWithOptions(request, runtime);
  }

  /**
   * Detects phone numbers.
   * 
   * @param request - MobileDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileDetectResponse
   */
  async mobileDetectWithOptions(request: $_model.MobileDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MobileDetectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobiles)) {
      body["Mobiles"] = request.mobiles;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MobileDetect",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MobileDetectResponse>(await this.callApi(params, req, runtime), new $_model.MobileDetectResponse({}));
  }

  /**
   * Detects phone numbers.
   * 
   * @param request - MobileDetectRequest
   * @returns MobileDetectResponse
   */
  async mobileDetect(request: $_model.MobileDetectRequest): Promise<$_model.MobileDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileDetectWithOptions(request, runtime);
  }

  /**
   * Queries the network availability status of a phone number.
   * 
   * @param request - MobileOnlineStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileOnlineStatusResponse
   */
  async mobileOnlineStatusWithOptions(request: $_model.MobileOnlineStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MobileOnlineStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MobileOnlineStatus",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MobileOnlineStatusResponse>(await this.callApi(params, req, runtime), new $_model.MobileOnlineStatusResponse({}));
  }

  /**
   * Queries the network availability status of a phone number.
   * 
   * @param request - MobileOnlineStatusRequest
   * @returns MobileOnlineStatusResponse
   */
  async mobileOnlineStatus(request: $_model.MobileOnlineStatusRequest): Promise<$_model.MobileOnlineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineStatusWithOptions(request, runtime);
  }

  /**
   * Queries the length of time a phone number has been active on a network.
   * 
   * @param request - MobileOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileOnlineTimeResponse
   */
  async mobileOnlineTimeWithOptions(request: $_model.MobileOnlineTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MobileOnlineTimeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MobileOnlineTime",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MobileOnlineTimeResponse>(await this.callApi(params, req, runtime), new $_model.MobileOnlineTimeResponse({}));
  }

  /**
   * Queries the length of time a phone number has been active on a network.
   * 
   * @param request - MobileOnlineTimeRequest
   * @returns MobileOnlineTimeResponse
   */
  async mobileOnlineTime(request: $_model.MobileOnlineTimeRequest): Promise<$_model.MobileOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineTimeWithOptions(request, runtime);
  }

  /**
   * Verifies whether a phone number has been reassigned to a new subscriber.
   * 
   * @remarks
   * Passes in a phone number and its registration date, and verifies the authenticity and consistency of the information through an authoritative data source.
   * 
   * @param request - MobileRecycledMetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileRecycledMetaVerifyResponse
   */
  async mobileRecycledMetaVerifyWithOptions(request: $_model.MobileRecycledMetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MobileRecycledMetaVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.registerDate)) {
      query["RegisterDate"] = request.registerDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MobileRecycledMetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MobileRecycledMetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.MobileRecycledMetaVerifyResponse({}));
  }

  /**
   * Verifies whether a phone number has been reassigned to a new subscriber.
   * 
   * @remarks
   * Passes in a phone number and its registration date, and verifies the authenticity and consistency of the information through an authoritative data source.
   * 
   * @param request - MobileRecycledMetaVerifyRequest
   * @returns MobileRecycledMetaVerifyResponse
   */
  async mobileRecycledMetaVerify(request: $_model.MobileRecycledMetaVerifyRequest): Promise<$_model.MobileRecycledMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileRecycledMetaVerifyWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a blacklist rule.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: Creates or modifies a blacklist rule.
   * 
   * @param tmpReq - ModifyBlackListStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBlackListStrategyResponse
   */
  async modifyBlackListStrategyWithOptions(tmpReq: $_model.ModifyBlackListStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBlackListStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBlackListStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.blackListStrategy)) {
      request.blackListStrategyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.blackListStrategy, "BlackListStrategy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.blackListStrategyShrink)) {
      query["BlackListStrategy"] = request.blackListStrategyShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBlackListStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBlackListStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBlackListStrategyResponse({}));
  }

  /**
   * Creates or modifies a blacklist rule.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * - Operation description: Creates or modifies a blacklist rule.
   * 
   * @param request - ModifyBlackListStrategyRequest
   * @returns ModifyBlackListStrategyResponse
   */
  async modifyBlackListStrategy(request: $_model.ModifyBlackListStrategyRequest): Promise<$_model.ModifyBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Adjusts stability alert rules.
   * 
   * @remarks
   * - Request method: HTTPS POST.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param tmpReq - ModifyControlStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyControlStrategyResponse
   */
  async modifyControlStrategyWithOptions(tmpReq: $_model.ModifyControlStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyControlStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyControlStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.controlStrategyList)) {
      request.controlStrategyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.controlStrategyList, "ControlStrategyList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.controlStrategyListShrink)) {
      query["ControlStrategyList"] = request.controlStrategyListShrink;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyControlStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyControlStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyControlStrategyResponse({}));
  }

  /**
   * Adjusts stability alert rules.
   * 
   * @remarks
   * - Request method: HTTPS POST.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - ModifyControlStrategyRequest
   * @returns ModifyControlStrategyResponse
   */
  async modifyControlStrategy(request: $_model.ModifyControlStrategyRequest): Promise<$_model.ModifyControlStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyControlStrategyWithOptions(request, runtime);
  }

  /**
   * Adjusts the list of custom rate limiting policies.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Endpoint: cloudauth.aliyuncs.com.
   * 
   * @param tmpReq - ModifyCustomizeFlowStrategyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomizeFlowStrategyListResponse
   */
  async modifyCustomizeFlowStrategyListWithOptions(tmpReq: $_model.ModifyCustomizeFlowStrategyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomizeFlowStrategyListResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCustomizeFlowStrategyListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.strategyObject)) {
      request.strategyObjectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.strategyObject, "StrategyObject", "json");
    }

    let query = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.strategyObjectShrink)) {
      query["StrategyObject"] = request.strategyObjectShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomizeFlowStrategyList",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomizeFlowStrategyListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomizeFlowStrategyListResponse({}));
  }

  /**
   * Adjusts the list of custom rate limiting policies.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET methods are supported.
   * - Endpoint: cloudauth.aliyuncs.com.
   * 
   * @param request - ModifyCustomizeFlowStrategyListRequest
   * @returns ModifyCustomizeFlowStrategyListResponse
   */
  async modifyCustomizeFlowStrategyList(request: $_model.ModifyCustomizeFlowStrategyListRequest): Promise<$_model.ModifyCustomizeFlowStrategyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomizeFlowStrategyListWithOptions(request, runtime);
  }

  /**
   * Updates device-related information, such as extending the device authorization validity period, updating custom business identifiers, and updating device IDs. This operation is applicable to scenarios such as device validity period renewal.
   * 
   * @remarks
   * Request method: You can send requests by using the HTTPS POST and GET methods.
   * 
   * @param request - ModifyDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceInfoResponse
   */
  async modifyDeviceInfoWithOptions(request: $_model.ModifyDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expiredDay)) {
      query["ExpiredDay"] = request.expiredDay;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceInfo",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceInfoResponse({}));
  }

  /**
   * Updates device-related information, such as extending the device authorization validity period, updating custom business identifiers, and updating device IDs. This operation is applicable to scenarios such as device validity period renewal.
   * 
   * @remarks
   * Request method: You can send requests by using the HTTPS POST and GET methods.
   * 
   * @param request - ModifyDeviceInfoRequest
   * @returns ModifyDeviceInfoResponse
   */
  async modifyDeviceInfo(request: $_model.ModifyDeviceInfoRequest): Promise<$_model.ModifyDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Queries ID Verification whitelist configurations by using paging.
   * 
   * @param request - PageQueryWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageQueryWhiteListSettingResponse
   */
  async pageQueryWhiteListSettingWithOptions(request: $_model.PageQueryWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageQueryWhiteListSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.validEndDate)) {
      query["ValidEndDate"] = request.validEndDate;
    }

    if (!$dara.isNull(request.validStartDate)) {
      query["ValidStartDate"] = request.validStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageQueryWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageQueryWhiteListSettingResponse>(await this.callApi(params, req, runtime), new $_model.PageQueryWhiteListSettingResponse({}));
  }

  /**
   * Queries ID Verification whitelist configurations by using paging.
   * 
   * @param request - PageQueryWhiteListSettingRequest
   * @returns PageQueryWhiteListSettingResponse
   */
  async pageQueryWhiteListSetting(request: $_model.PageQueryWhiteListSettingRequest): Promise<$_model.PageQueryWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageQueryWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * Queries the blacklist configuration list.
   * 
   * @remarks
   * - Request endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * > You can configure blacklists for IP addresses, ID card numbers, phone numbers, and bank card numbers. When a request matches a blacklist entry, the system rejects the request and returns a fixed error code.
   * You can configure blacklists for IP addresses, ID card numbers, phone numbers, and bank card numbers. When a request matches a blacklist entry, the system rejects the request and returns a fixed error code.
   * 
   * @param request - QueryBlackListStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBlackListStrategyResponse
   */
  async queryBlackListStrategyWithOptions(request: $_model.QueryBlackListStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBlackListStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBlackListStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBlackListStrategyResponse>(await this.callApi(params, req, runtime), new $_model.QueryBlackListStrategyResponse({}));
  }

  /**
   * Queries the blacklist configuration list.
   * 
   * @remarks
   * - Request endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * > You can configure blacklists for IP addresses, ID card numbers, phone numbers, and bank card numbers. When a request matches a blacklist entry, the system rejects the request and returns a fixed error code.
   * You can configure blacklists for IP addresses, ID card numbers, phone numbers, and bank card numbers. When a request matches a blacklist entry, the system rejects the request and returns a fixed error code.
   * 
   * @param request - QueryBlackListStrategyRequest
   * @returns QueryBlackListStrategyResponse
   */
  async queryBlackListStrategy(request: $_model.QueryBlackListStrategyRequest): Promise<$_model.QueryBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Queries the list of stability rules. The system monitors the stability of the server-side InitFaceVerify operation and API integration operations. If a threshold is triggered, the system sends an alert.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - QueryControlStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryControlStrategyResponse
   */
  async queryControlStrategyWithOptions(request: $_model.QueryControlStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryControlStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryControlStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryControlStrategyResponse>(await this.callApi(params, req, runtime), new $_model.QueryControlStrategyResponse({}));
  }

  /**
   * Queries the list of stability rules. The system monitors the stability of the server-side InitFaceVerify operation and API integration operations. If a threshold is triggered, the system sends an alert.
   * 
   * @remarks
   * - Request method: HTTPS POST and GET.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - QueryControlStrategyRequest
   * @returns QueryControlStrategyResponse
   */
  async queryControlStrategy(request: $_model.QueryControlStrategyRequest): Promise<$_model.QueryControlStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryControlStrategyWithOptions(request, runtime);
  }

  /**
   * Queries security rules.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - Security rules: monitoring rules that ensure system security, such as API abuse and abnormal account theft. When a threshold is triggered, the system sends an alert.
   * 
   * @param request - QueryCustomizeFlowStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomizeFlowStrategyResponse
   */
  async queryCustomizeFlowStrategyWithOptions(request: $_model.QueryCustomizeFlowStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomizeFlowStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomizeFlowStrategy",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomizeFlowStrategyResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomizeFlowStrategyResponse({}));
  }

  /**
   * Queries security rules.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - Security rules: monitoring rules that ensure system security, such as API abuse and abnormal account theft. When a threshold is triggered, the system sends an alert.
   * 
   * @param request - QueryCustomizeFlowStrategyRequest
   * @returns QueryCustomizeFlowStrategyResponse
   */
  async queryCustomizeFlowStrategy(request: $_model.QueryCustomizeFlowStrategyRequest): Promise<$_model.QueryCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * Queries the list of intent verification settings.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - QuerySceneConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySceneConfigsResponse
   */
  async querySceneConfigsWithOptions(request: $_model.QuerySceneConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySceneConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySceneConfigs",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySceneConfigsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySceneConfigsResponse({}));
  }

  /**
   * Queries the list of intent verification settings.
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST and GET.
   * 
   * @param request - QuerySceneConfigsRequest
   * @returns QuerySceneConfigsResponse
   */
  async querySceneConfigs(request: $_model.QuerySceneConfigsRequest): Promise<$_model.QuerySceneConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySceneConfigsWithOptions(request, runtime);
  }

  /**
   * Queries an ID Verification download task.
   * 
   * @remarks
   * Retrieves the download link of a statistical call data file under a product plan based on query conditions.
   * - Method: HTTPS POST
   * - Endpoint: cloudauth.aliyuncs.com
   * > ID Verification uses CertifyId to calculate the call volume. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVerifyDownloadTaskResponse
   */
  async queryVerifyDownloadTaskWithOptions(request: $_model.QueryVerifyDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVerifyDownloadTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVerifyDownloadTask",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVerifyDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryVerifyDownloadTaskResponse({}));
  }

  /**
   * Queries an ID Verification download task.
   * 
   * @remarks
   * Retrieves the download link of a statistical call data file under a product plan based on query conditions.
   * - Method: HTTPS POST
   * - Endpoint: cloudauth.aliyuncs.com
   * > ID Verification uses CertifyId to calculate the call volume. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyDownloadTaskRequest
   * @returns QueryVerifyDownloadTaskResponse
   */
  async queryVerifyDownloadTask(request: $_model.QueryVerifyDownloadTaskRequest): Promise<$_model.QueryVerifyDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Queries data transfer plans.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This operation uses different parameters for different product plans. For more information, see [official documentation](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/product-overview/introduction/).
   * 
   * @param request - QueryVerifyFlowPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVerifyFlowPackageResponse
   */
  async queryVerifyFlowPackageWithOptions(request: $_model.QueryVerifyFlowPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVerifyFlowPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVerifyFlowPackage",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVerifyFlowPackageResponse>(await this.callApi(params, req, runtime), new $_model.QueryVerifyFlowPackageResponse({}));
  }

  /**
   * Queries data transfer plans.
   * 
   * @remarks
   * - Service endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This operation uses different parameters for different product plans. For more information, see [official documentation](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/product-overview/introduction/).
   * 
   * @param request - QueryVerifyFlowPackageRequest
   * @returns QueryVerifyFlowPackageResponse
   */
  async queryVerifyFlowPackage(request: $_model.QueryVerifyFlowPackageRequest): Promise<$_model.QueryVerifyFlowPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyFlowPackageWithOptions(request, runtime);
  }

  /**
   * Queries the call volume of a product code based on different product plans.
   * 
   * @remarks
   * - Request endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * > ID Verification counts call volume by CertifyId. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyInvokeSatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVerifyInvokeSatisticResponse
   */
  async queryVerifyInvokeSatisticWithOptions(request: $_model.QueryVerifyInvokeSatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVerifyInvokeSatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productProgramList)) {
      query["ProductProgramList"] = request.productProgramList;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sceneIdList)) {
      query["SceneIdList"] = request.sceneIdList;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statisticsType)) {
      query["StatisticsType"] = request.statisticsType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVerifyInvokeSatistic",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVerifyInvokeSatisticResponse>(await this.callApi(params, req, runtime), new $_model.QueryVerifyInvokeSatisticResponse({}));
  }

  /**
   * Queries the call volume of a product code based on different product plans.
   * 
   * @remarks
   * - Request endpoint: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * > ID Verification counts call volume by CertifyId. To facilitate reconciliation, retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyInvokeSatisticRequest
   * @returns QueryVerifyInvokeSatisticResponse
   */
  async queryVerifyInvokeSatistic(request: $_model.QueryVerifyInvokeSatisticRequest): Promise<$_model.QueryVerifyInvokeSatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyInvokeSatisticWithOptions(request, runtime);
  }

  /**
   * Deletes an ID Verification whitelist.
   * 
   * @param tmpReq - RemoveWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveWhiteListSettingResponse
   */
  async removeWhiteListSettingWithOptions(tmpReq: $_model.RemoveWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveWhiteListSettingResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveWhiteListSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveWhiteListSettingResponse>(await this.callApi(params, req, runtime), new $_model.RemoveWhiteListSettingResponse({}));
  }

  /**
   * Deletes an ID Verification whitelist.
   * 
   * @param request - RemoveWhiteListSettingRequest
   * @returns RemoveWhiteListSettingResponse
   */
  async removeWhiteListSetting(request: $_model.RemoveWhiteListSettingRequest): Promise<$_model.RemoveWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * Updates a China Finance Certification Initiative (CFCI) scenario.
   * 
   * @remarks
   * Updates the information of a China Finance Certification Initiative (CFCI) scenario based on the scenario ID.
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST.
   * 
   * @param request - UpdateAntCloudAuthSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAntCloudAuthSceneResponse
   */
  async updateAntCloudAuthSceneWithOptions(request: $_model.UpdateAntCloudAuthSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAntCloudAuthSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindMiniProgram)) {
      query["BindMiniProgram"] = request.bindMiniProgram;
    }

    if (!$dara.isNull(request.checkFileBody)) {
      query["CheckFileBody"] = request.checkFileBody;
    }

    if (!$dara.isNull(request.checkFileName)) {
      query["CheckFileName"] = request.checkFileName;
    }

    if (!$dara.isNull(request.deviceRiskPlus)) {
      query["DeviceRiskPlus"] = request.deviceRiskPlus;
    }

    if (!$dara.isNull(request.miniProgramName)) {
      query["MiniProgramName"] = request.miniProgramName;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.returnPicCount)) {
      query["ReturnPicCount"] = request.returnPicCount;
    }

    if (!$dara.isNull(request.returnVideoLength)) {
      query["ReturnVideoLength"] = request.returnVideoLength;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.storeImage)) {
      query["StoreImage"] = request.storeImage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAntCloudAuthScene",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAntCloudAuthSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAntCloudAuthSceneResponse({}));
  }

  /**
   * Updates a China Finance Certification Initiative (CFCI) scenario.
   * 
   * @remarks
   * Updates the information of a China Finance Certification Initiative (CFCI) scenario based on the scenario ID.
   * - Service endpoint: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST.
   * 
   * @param request - UpdateAntCloudAuthSceneRequest
   * @returns UpdateAntCloudAuthSceneResponse
   */
  async updateAntCloudAuthScene(request: $_model.UpdateAntCloudAuthSceneRequest): Promise<$_model.UpdateAntCloudAuthSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAntCloudAuthSceneWithOptions(request, runtime);
  }

  /**
   * Updates the intent scenario configuration.
   * 
   * @remarks
   * - Request method: HTTPS POST.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - UpdateSceneConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSceneConfigResponse
   */
  async updateSceneConfigWithOptions(request: $_model.UpdateSceneConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSceneConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["sceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSceneConfig",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSceneConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSceneConfigResponse({}));
  }

  /**
   * Updates the intent scenario configuration.
   * 
   * @remarks
   * - Request method: HTTPS POST.
   * - Request URL: cloudauth.aliyuncs.com.
   * 
   * @param request - UpdateSceneConfigRequest
   * @returns UpdateSceneConfigResponse
   */
  async updateSceneConfig(request: $_model.UpdateSceneConfigRequest): Promise<$_model.UpdateSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSceneConfigWithOptions(request, runtime);
  }

  /**
   * Identifies the five key attributes of a vehicle.
   * 
   * @remarks
   * Queries basic vehicle information by license plate number and vehicle type.
   * 
   * @param request - Vehicle5ItemQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Vehicle5ItemQueryResponse
   */
  async vehicle5ItemQueryWithOptions(request: $_model.Vehicle5ItemQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.Vehicle5ItemQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Vehicle5ItemQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.Vehicle5ItemQueryResponse>(await this.callApi(params, req, runtime), new $_model.Vehicle5ItemQueryResponse({}));
  }

  /**
   * Identifies the five key attributes of a vehicle.
   * 
   * @remarks
   * Queries basic vehicle information by license plate number and vehicle type.
   * 
   * @param request - Vehicle5ItemQueryRequest
   * @returns Vehicle5ItemQueryResponse
   */
  async vehicle5ItemQuery(request: $_model.Vehicle5ItemQueryRequest): Promise<$_model.Vehicle5ItemQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicle5ItemQueryWithOptions(request, runtime);
  }

  /**
   * Queries the insurance date of a vehicle.
   * 
   * @remarks
   * Queries the insurance date of a vehicle by license plate number, vehicle type, and vehicle identification number (VIN).
   * 
   * @param request - VehicleInsureQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleInsureQueryResponse
   */
  async vehicleInsureQueryWithOptions(request: $_model.VehicleInsureQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VehicleInsureQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.vin)) {
      query["Vin"] = request.vin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleInsureQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VehicleInsureQueryResponse>(await this.callApi(params, req, runtime), new $_model.VehicleInsureQueryResponse({}));
  }

  /**
   * Queries the insurance date of a vehicle.
   * 
   * @remarks
   * Queries the insurance date of a vehicle by license plate number, vehicle type, and vehicle identification number (VIN).
   * 
   * @param request - VehicleInsureQueryRequest
   * @returns VehicleInsureQueryResponse
   */
  async vehicleInsureQuery(request: $_model.VehicleInsureQueryRequest): Promise<$_model.VehicleInsureQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleInsureQueryWithOptions(request, runtime);
  }

  /**
   * Verifies vehicle element consistency.
   * 
   * @remarks
   * Verifies the consistency of the name, ID card number, license plate number, and vehicle type.
   * 
   * @param request - VehicleMetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleMetaVerifyResponse
   */
  async vehicleMetaVerifyWithOptions(request: $_model.VehicleMetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VehicleMetaVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.verifyMetaType)) {
      query["VerifyMetaType"] = request.verifyMetaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleMetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VehicleMetaVerifyResponse>(await this.callApi(params, req, runtime), new $_model.VehicleMetaVerifyResponse({}));
  }

  /**
   * Verifies vehicle element consistency.
   * 
   * @remarks
   * Verifies the consistency of the name, ID card number, license plate number, and vehicle type.
   * 
   * @param request - VehicleMetaVerifyRequest
   * @returns VehicleMetaVerifyResponse
   */
  async vehicleMetaVerify(request: $_model.VehicleMetaVerifyRequest): Promise<$_model.VehicleMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyWithOptions(request, runtime);
  }

  /**
   * Verifies vehicle element information (enhanced edition).
   * 
   * @remarks
   * Verifies the consistency of the name, ID card number, license plate number, and vehicle type, and supports returning vehicle details.
   * 
   * @param request - VehicleMetaVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleMetaVerifyV2Response
   */
  async vehicleMetaVerifyV2WithOptions(request: $_model.VehicleMetaVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.VehicleMetaVerifyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.verifyMetaType)) {
      query["VerifyMetaType"] = request.verifyMetaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleMetaVerifyV2",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VehicleMetaVerifyV2Response>(await this.callApi(params, req, runtime), new $_model.VehicleMetaVerifyV2Response({}));
  }

  /**
   * Verifies vehicle element information (enhanced edition).
   * 
   * @remarks
   * Verifies the consistency of the name, ID card number, license plate number, and vehicle type, and supports returning vehicle details.
   * 
   * @param request - VehicleMetaVerifyV2Request
   * @returns VehicleMetaVerifyV2Response
   */
  async vehicleMetaVerifyV2(request: $_model.VehicleMetaVerifyV2Request): Promise<$_model.VehicleMetaVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyV2WithOptions(request, runtime);
  }

  /**
   * Identifies vehicle information.
   * 
   * @remarks
   * Queries detailed vehicle information by license plate number and vehicle type.
   * 
   * @param request - VehicleQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleQueryResponse
   */
  async vehicleQueryWithOptions(request: $_model.VehicleQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VehicleQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VehicleQueryResponse>(await this.callApi(params, req, runtime), new $_model.VehicleQueryResponse({}));
  }

  /**
   * Identifies vehicle information.
   * 
   * @remarks
   * Queries detailed vehicle information by license plate number and vehicle type.
   * 
   * @param request - VehicleQueryRequest
   * @returns VehicleQueryResponse
   */
  async vehicleQuery(request: $_model.VehicleQueryRequest): Promise<$_model.VehicleQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleQueryWithOptions(request, runtime);
  }

  /**
   * Submits a name, ID card number, facial photo, and optional front and back photos of the ID card for ID Verification, and synchronously returns the result.
   * 
   * @remarks
   * Before you begin: Before calling this API, ensure that you have completed the required preparations. For more information, see [Server-side integration preparations](https://help.aliyun.com/document_detail/127471.html).
   * Request method: HTTPS POST and GET.
   * Operation description: The caller\\"s server submits verification materials to the ID Verification service for comparison and validation. The result is returned synchronously.
   * Applicable scope: This operation is applicable only to server-side-only verification solutions.
   * Image URL description:
   * - HTTP or HTTPS URL: Publicly accessible HTTP or HTTPS URLs are supported. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - OSS URL: If the caller\\"s images are local files, Alibaba Cloud provides an upload SDK that allows you to upload images to the OSS bucket designated by the ID Verification service and obtain the corresponding OSS URL to use as the image URL parameter. If your business requires the upload SDK, [submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * Image restrictions:
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep each image within 2 MB to avoid algorithm fetch timeouts.
   * - The face area in the image must be at least 64 × 64 pixels.
   * - The request body has an 8 MB size limit. Ensure that the total size of all images and other information in the request does not exceed this limit.
   * 
   * @param request - VerifyMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyMaterialResponse
   */
  async verifyMaterialWithOptions(request: $_model.VerifyMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyMaterialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.faceImageUrl)) {
      query["FaceImageUrl"] = request.faceImageUrl;
    }

    if (!$dara.isNull(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!$dara.isNull(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!$dara.isNull(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyMaterial",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyMaterialResponse>(await this.callApi(params, req, runtime), new $_model.VerifyMaterialResponse({}));
  }

  /**
   * Submits a name, ID card number, facial photo, and optional front and back photos of the ID card for ID Verification, and synchronously returns the result.
   * 
   * @remarks
   * Before you begin: Before calling this API, ensure that you have completed the required preparations. For more information, see [Server-side integration preparations](https://help.aliyun.com/document_detail/127471.html).
   * Request method: HTTPS POST and GET.
   * Operation description: The caller\\"s server submits verification materials to the ID Verification service for comparison and validation. The result is returned synchronously.
   * Applicable scope: This operation is applicable only to server-side-only verification solutions.
   * Image URL description:
   * - HTTP or HTTPS URL: Publicly accessible HTTP or HTTPS URLs are supported. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - OSS URL: If the caller\\"s images are local files, Alibaba Cloud provides an upload SDK that allows you to upload images to the OSS bucket designated by the ID Verification service and obtain the corresponding OSS URL to use as the image URL parameter. If your business requires the upload SDK, [submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * Image restrictions:
   * - Relative paths or absolute paths of local images are not supported.
   * - Keep each image within 2 MB to avoid algorithm fetch timeouts.
   * - The face area in the image must be at least 64 × 64 pixels.
   * - The request body has an 8 MB size limit. Ensure that the total size of all images and other information in the request does not exceed this limit.
   * 
   * @param request - VerifyMaterialRequest
   * @returns VerifyMaterialResponse
   */
  async verifyMaterial(request: $_model.VerifyMaterialRequest): Promise<$_model.VerifyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}
