// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
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
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: String(form["host"]),
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
   * Add AIGC Face Detection Capability
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
   * Add AIGC Face Detection Capability
   * 
   * @param request - AIGCFaceVerifyRequest
   * @returns AIGCFaceVerifyResponse
   */
  async aIGCFaceVerify(request: $_model.AIGCFaceVerifyRequest): Promise<$_model.AIGCFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aIGCFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Bank Card Element Verification Interface
   * 
   * @remarks
   * Bank card verification, including: two elements (name + bank card number), three elements (name + ID number + bank card number), and four elements (name + ID number + mobile phone number + bank card number) consistency verification.
   * - Service address:
   *   - Beijing region: cloudauth.cn-beijing.aliyuncs.com (IPv4) or cloudauth-dualstack.cn-beijing.aliyuncs.com (IPv6).
   *   - Shanghai region: cloudauth.cn-shanghai.aliyuncs.com (IPv4) or cloudauth-dualstack.cn-shanghai.aliyuncs.com (IPv6).
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
   * Bank Card Element Verification Interface
   * 
   * @remarks
   * Bank card verification, including: two elements (name + bank card number), three elements (name + ID number + bank card number), and four elements (name + ID number + mobile phone number + bank card number) consistency verification.
   * - Service address:
   *   - Beijing region: cloudauth.cn-beijing.aliyuncs.com (IPv4) or cloudauth-dualstack.cn-beijing.aliyuncs.com (IPv6).
   *   - Shanghai region: cloudauth.cn-shanghai.aliyuncs.com (IPv4) or cloudauth-dualstack.cn-shanghai.aliyuncs.com (IPv6).
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
   * Financial-grade Pure Server-Side API for Face Comparison.
   * 
   * @remarks
   * - API Name: CompareFaceVerify.
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - API Description: An interface to achieve real-person authentication through server-side integration.
   * #### Photo Format Requirements
   * When performing face comparison, please upload 2 facial photos that meet all the following conditions:
   * - Recent photo/recent database photo, with a complete, clear, unobstructed face, natural expression, and facing the camera directly.
   * - Clear photo with normal exposure, no overly dark, overly bright, or halo effects on the face, and no significant angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, recommended to scale the shorter side to 720 pixels, with a compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in cases of multiple faces, the largest face will be selected.
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
   * Financial-grade Pure Server-Side API for Face Comparison.
   * 
   * @remarks
   * - API Name: CompareFaceVerify.
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - API Description: An interface to achieve real-person authentication through server-side integration.
   * #### Photo Format Requirements
   * When performing face comparison, please upload 2 facial photos that meet all the following conditions:
   * - Recent photo/recent database photo, with a complete, clear, unobstructed face, natural expression, and facing the camera directly.
   * - Clear photo with normal exposure, no overly dark, overly bright, or halo effects on the face, and no significant angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, recommended to scale the shorter side to 720 pixels, with a compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in cases of multiple faces, the largest face will be selected.
   * 
   * @param request - CompareFaceVerifyRequest
   * @returns CompareFaceVerifyResponse
   */
  async compareFaceVerify(request: $_model.CompareFaceVerifyRequest): Promise<$_model.CompareFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Invoke CompareFaces for face comparison.
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * Interface Description: Compares two face images and outputs the similarity score of the faces in the two images as the result.
   * - At least one of the specified comparison images should be a face photo (FacePic).
   * - If an image contains multiple faces, the algorithm will automatically select the largest face in the image.
   * - If one of the two comparison images does not detect a face, the system will return an error message stating \\"No face detected\\".
   * When uploading images, you need to provide the HTTP address or base64 encoding of the image.
   * - HTTP Address: A publicly accessible HTTP address. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 Encoding: An image encoded in base64, formatted as `base64://<base64 string of the image>`.
   * Image Restrictions
   * - Does not support relative or absolute paths for local images.
   * - Please keep the size of a single image within 2MB to avoid timeout during retrieval by the algorithm.
   * - The body of a single request has a size limit of 8MB; please calculate the total size of all images and other information in the request to ensure it does not exceed this limit.
   * - When using base64 to transmit images, the request method must be changed to POST; the header description such as `data:image/png;base64,` should be removed from the base64 string of the image.
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
   * Invoke CompareFaces for face comparison.
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * Interface Description: Compares two face images and outputs the similarity score of the faces in the two images as the result.
   * - At least one of the specified comparison images should be a face photo (FacePic).
   * - If an image contains multiple faces, the algorithm will automatically select the largest face in the image.
   * - If one of the two comparison images does not detect a face, the system will return an error message stating \\"No face detected\\".
   * When uploading images, you need to provide the HTTP address or base64 encoding of the image.
   * - HTTP Address: A publicly accessible HTTP address. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 Encoding: An image encoded in base64, formatted as `base64://<base64 string of the image>`.
   * Image Restrictions
   * - Does not support relative or absolute paths for local images.
   * - Please keep the size of a single image within 2MB to avoid timeout during retrieval by the algorithm.
   * - The body of a single request has a size limit of 8MB; please calculate the total size of all images and other information in the request to ensure it does not exceed this limit.
   * - When using base64 to transmit images, the request method must be changed to POST; the header description such as `data:image/png;base64,` should be removed from the base64 string of the image.
   * 
   * @param request - CompareFacesRequest
   * @returns CompareFacesResponse
   */
  async compareFaces(request: $_model.CompareFacesRequest): Promise<$_model.CompareFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  /**
   * This interface is used to submit authentication materials for verification and comparison, and it synchronously returns the authentication result.
   * 
   * @remarks
   * - Interface Name: ContrastFaceVerify.
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - Interface Description: An interface for real person authentication through server-side integration.
   * #### Image Format Requirements
   * When performing real person authentication, please ensure that the images you upload meet all of the following conditions:
   * - Recent photo with a clear, unobstructed, and natural expression, facing the camera directly.
   * - Clear and properly exposed photo, without overly dark, bright, or haloed faces, and with minimal angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, with the shorter side recommended to be resized to 720 pixels, and a compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in cases of multiple faces, the largest face will be selected.
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
   * This interface is used to submit authentication materials for verification and comparison, and it synchronously returns the authentication result.
   * 
   * @remarks
   * - Interface Name: ContrastFaceVerify.
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - Interface Description: An interface for real person authentication through server-side integration.
   * #### Image Format Requirements
   * When performing real person authentication, please ensure that the images you upload meet all of the following conditions:
   * - Recent photo with a clear, unobstructed, and natural expression, facing the camera directly.
   * - Clear and properly exposed photo, without overly dark, bright, or haloed faces, and with minimal angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, with the shorter side recommended to be resized to 720 pixels, and a compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in cases of multiple faces, the largest face will be selected.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * Create a financial-grade authentication scenario
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Create a financial-grade authentication scenario
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - CreateAntCloudAuthSceneRequest
   * @returns CreateAntCloudAuthSceneResponse
   */
  async createAntCloudAuthScene(request: $_model.CreateAntCloudAuthSceneRequest): Promise<$_model.CreateAntCloudAuthSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAntCloudAuthSceneWithOptions(request, runtime);
  }

  /**
   * Call CreateAuthKey to get the authorization key, which is used for offline face recognition SDK activation.
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
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
   * Call CreateAuthKey to get the authorization key, which is used for offline face recognition SDK activation.
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @param request - CreateAuthKeyRequest
   * @returns CreateAuthKeyResponse
   */
  async createAuthKey(request: $_model.CreateAuthKeyRequest): Promise<$_model.CreateAuthKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  /**
   * Create Cloud Scene
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Create Cloud Scene
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - CreateCloudauthstSceneRequest
   * @returns CreateCloudauthstSceneResponse
   */
  async createCloudauthstScene(request: $_model.CreateCloudauthstSceneRequest): Promise<$_model.CreateCloudauthstSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudauthstSceneWithOptions(request, runtime);
  }

  /**
   * Create Scene Configuration
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST.
   * Request Address: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Create Scene Configuration
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST.
   * Request Address: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - CreateSceneConfigRequest
   * @returns CreateSceneConfigResponse
   */
  async createSceneConfig(request: $_model.CreateSceneConfigRequest): Promise<$_model.CreateSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSceneConfigWithOptions(request, runtime);
  }

  /**
   * Call CreateVerifySetting to create a verification scenario configuration. This operation is equivalent to creating a new verification scenario on the console.
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
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
   * Call CreateVerifySetting to create a verification scenario configuration. This operation is equivalent to creating a new verification scenario on the console.
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * 
   * @param request - CreateVerifySettingRequest
   * @returns CreateVerifySettingResponse
   */
  async createVerifySetting(request: $_model.CreateVerifySettingRequest): Promise<$_model.CreateVerifySettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
  }

  /**
   * Create Whitelist
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
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
   * Create Whitelist
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * 
   * @param request - CreateWhitelistSettingRequest
   * @returns CreateWhitelistSettingResponse
   */
  async createWhitelistSetting(request: $_model.CreateWhitelistSettingRequest): Promise<$_model.CreateWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * Product Credential Verification
   * 
   * @remarks
   * Upload e-commerce product images to perform tampering, quality (clarity), and similar image detection, returning risk labels and scores.
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
   * Product Credential Verification
   * 
   * @remarks
   * Upload e-commerce product images to perform tampering, quality (clarity), and similar image detection, returning risk labels and scores.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * Credential verification
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
   * Credential verification
   * 
   * @param request - CredentialVerifyRequest
   * @returns CredentialVerifyResponse
   */
  async credentialVerify(request: $_model.CredentialVerifyRequest): Promise<$_model.CredentialVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialVerifyWithOptions(request, runtime);
  }

  /**
   * Credential Verification
   * 
   * @remarks
   * Input credential image information, perform image tampering and forgery detection, and image semantic understanding. Return the risk detection results.
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
   * Credential Verification
   * 
   * @remarks
   * Input credential image information, perform image tampering and forgery detection, and image semantic understanding. Return the risk detection results.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * Face Credential Verification Service
   * 
   * @remarks
   * > The Face Deepfake Detection API is currently in the free public beta stage, which will end on August 30, 2024, at 23:59:59. During the public beta, the QPS (Queries Per Second) cannot exceed 3 times/second.
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * Face Credential Verification Service
   * 
   * @remarks
   * > The Face Deepfake Detection API is currently in the free public beta stage, which will end on August 30, 2024, at 23:59:59. During the public beta, the QPS (Queries Per Second) cannot exceed 3 times/second.
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * Delete All Custom Flow Control Strategies
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Delete All Custom Flow Control Strategies
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - DeleteAllCustomizeFlowStrategyRequest
   * @returns DeleteAllCustomizeFlowStrategyResponse
   */
  async deleteAllCustomizeFlowStrategy(request: $_model.DeleteAllCustomizeFlowStrategyRequest): Promise<$_model.DeleteAllCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * Delete Watermark Scene
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * Delete Watermark Scene
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DeleteAntCloudAuthSceneRequest
   * @returns DeleteAntCloudAuthSceneResponse
   */
  async deleteAntCloudAuthScene(request: $_model.DeleteAntCloudAuthSceneRequest): Promise<$_model.DeleteAntCloudAuthSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAntCloudAuthSceneWithOptions(request, runtime);
  }

  /**
   * Delete Black and White List Policy
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
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
   * Delete Black and White List Policy
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
   * 
   * @param request - DeleteBlackListStrategyRequest
   * @returns DeleteBlackListStrategyResponse
   */
  async deleteBlackListStrategy(request: $_model.DeleteBlackListStrategyRequest): Promise<$_model.DeleteBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Delete Cloud Scene
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
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
   * Delete Cloud Scene
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @param request - DeleteCloudauthstSceneRequest
   * @returns DeleteCloudauthstSceneResponse
   */
  async deleteCloudauthstScene(request: $_model.DeleteCloudauthstSceneRequest): Promise<$_model.DeleteCloudauthstSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudauthstSceneWithOptions(request, runtime);
  }

  /**
   * Delete Security Control Strategy
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST.
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
   * Delete Security Control Strategy
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST.
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
   * Delete Customized Flow Control Strategy
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Delete Customized Flow Control Strategy
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - DeleteCustomizeFlowStrategyRequest
   * @returns DeleteCustomizeFlowStrategyResponse
   */
  async deleteCustomizeFlowStrategy(request: $_model.DeleteCustomizeFlowStrategyRequest): Promise<$_model.DeleteCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * Financial Level Sensitive Data Deletion Interface
   * 
   * @remarks
   * Deletes all personal information fields in the request, including name, ID number, phone number, IP, images, videos, and device information, etc.
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
   * Financial Level Sensitive Data Deletion Interface
   * 
   * @remarks
   * Deletes all personal information fields in the request, including name, ID number, phone number, IP, images, videos, and device information, etc.
   * 
   * @param request - DeleteFaceVerifyResultRequest
   * @returns DeleteFaceVerifyResultResponse
   */
  async deleteFaceVerifyResult(request: $_model.DeleteFaceVerifyResultRequest): Promise<$_model.DeleteFaceVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceVerifyResultWithOptions(request, runtime);
  }

  /**
   * Delete Scene Configuration
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Request URL: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
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
   * Delete Scene Configuration
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Request URL: cloudauth.aliyuncs.com.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @param request - DeleteSceneConfigRequest
   * @returns DeleteSceneConfigResponse
   */
  async deleteSceneConfig(request: $_model.DeleteSceneConfigRequest): Promise<$_model.DeleteSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSceneConfigWithOptions(request, runtime);
  }

  /**
   * Delete Whitelist Configuration
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
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
   * Delete Whitelist Configuration
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
   * 
   * @param request - DeleteWhitelistSettingRequest
   * @returns DeleteWhitelistSettingResponse
   */
  async deleteWhitelistSetting(request: $_model.DeleteWhitelistSettingRequest): Promise<$_model.DeleteWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * Query the User Status of Ant Blockchain
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @param request - DescribeAntAndCloudAuthUserStatusRequest
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
   * Query the User Status of Ant Blockchain
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * @returns DescribeAntAndCloudAuthUserStatusResponse
   */
  async describeAntAndCloudAuthUserStatus(): Promise<$_model.DescribeAntAndCloudAuthUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAntAndCloudAuthUserStatusWithOptions(runtime);
  }

  /**
   * 获取结果
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
   * 获取结果
   * 
   * @param request - DescribeAuthVerifyRequest
   * @returns DescribeAuthVerifyResponse
   */
  async describeAuthVerify(request: $_model.DescribeAuthVerifyRequest): Promise<$_model.DescribeAuthVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthVerifyWithOptions(request, runtime);
  }

  /**
   * Obtain Authentication Results from Image Element Verification
   * 
   * @remarks
   * After receiving the callback notification, you can use this interface on the server side to obtain the corresponding authentication status and information.
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
   * Obtain Authentication Results from Image Element Verification
   * 
   * @remarks
   * After receiving the callback notification, you can use this interface on the server side to obtain the corresponding authentication status and information.
   * 
   * @param request - DescribeCardVerifyRequest
   * @returns DescribeCardVerifyResponse
   */
  async describeCardVerify(request: $_model.DescribeCardVerifyRequest): Promise<$_model.DescribeCardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCardVerifyWithOptions(request, runtime);
  }

  /**
   * Query Dashboard Data
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
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
   * Query Dashboard Data
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to reacquire it before each activation.
   * 
   * @param request - DescribeCloudauthstSceneListRequest
   * @returns DescribeCloudauthstSceneListResponse
   */
  async describeCloudauthstSceneList(request: $_model.DescribeCloudauthstSceneListRequest): Promise<$_model.DescribeCloudauthstSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudauthstSceneListWithOptions(request, runtime);
  }

  /**
   * Call DescribeDeviceInfo to query device-related information, such as the validity period of authorization, business identifiers customized by the access party, and device ID, etc.
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
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
   * Call DescribeDeviceInfo to query device-related information, such as the validity period of authorization, business identifiers customized by the access party, and device ID, etc.
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * 
   * @param request - DescribeDeviceInfoRequest
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: $_model.DescribeDeviceInfoRequest): Promise<$_model.DescribeDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Financial-Grade Face Guard Service
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
   * Financial-Grade Face Guard Service
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRisk(request: $_model.DescribeFaceGuardRiskRequest): Promise<$_model.DescribeFaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceGuardRiskWithOptions(request, runtime);
  }

  /**
   * After the mobile end of the integrator receives the callback, its server can call this interface to obtain the corresponding authentication status and authentication information.
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * After the mobile end of the integrator receives the callback, its server can call this interface to obtain the corresponding authentication status and authentication information.
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DescribeFaceVerifyRequest
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerify(request: $_model.DescribeFaceVerifyRequest): Promise<$_model.DescribeFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  /**
   * 查询任务导出记录
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
   * 查询任务导出记录
   * 
   * @param request - DescribeInfoCheckExportRecordRequest
   * @returns DescribeInfoCheckExportRecordResponse
   */
  async describeInfoCheckExportRecord(request: $_model.DescribeInfoCheckExportRecordRequest): Promise<$_model.DescribeInfoCheckExportRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInfoCheckExportRecordWithOptions(request, runtime);
  }

  /**
   * Query the cloud scenario authentication records of a specific region
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
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
   * Query the cloud scenario authentication records of a specific region
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * > The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @param request - DescribeListAntCloudAuthScenesRequest
   * @returns DescribeListAntCloudAuthScenesResponse
   */
  async describeListAntCloudAuthScenes(request: $_model.DescribeListAntCloudAuthScenesRequest): Promise<$_model.DescribeListAntCloudAuthScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListAntCloudAuthScenesWithOptions(request, runtime);
  }

  /**
   * Query Face Verification Data
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * Query Face Verification Data
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DescribeListFaceVerifyDataRequest
   * @returns DescribeListFaceVerifyDataResponse
   */
  async describeListFaceVerifyData(request: $_model.DescribeListFaceVerifyDataRequest): Promise<$_model.DescribeListFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * Get Face Verification Information
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Get Face Verification Information
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * 查询页面元数据
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
   * 查询页面元数据
   * 
   * @param request - DescribeMetaSearchPageListRequest
   * @returns DescribeMetaSearchPageListResponse
   */
  async describeMetaSearchPageList(request: $_model.DescribeMetaSearchPageListRequest): Promise<$_model.DescribeMetaSearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaSearchPageListWithOptions(request, runtime);
  }

  /**
   * 查询认证统计信息
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
   * 查询认证统计信息
   * 
   * @param request - DescribeMetaStatisticsListRequest
   * @returns DescribeMetaStatisticsListResponse
   */
  async describeMetaStatisticsList(request: $_model.DescribeMetaStatisticsListRequest): Promise<$_model.DescribeMetaStatisticsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaStatisticsListWithOptions(request, runtime);
  }

  /**
   * 查询认证统计页面
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
   * 查询认证统计页面
   * 
   * @param request - DescribeMetaStatisticsPageListRequest
   * @returns DescribeMetaStatisticsPageListResponse
   */
  async describeMetaStatisticsPageList(request: $_model.DescribeMetaStatisticsPageListRequest): Promise<$_model.DescribeMetaStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * Query OSS status
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
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
   * Query OSS status
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusRequest
   * @returns DescribeOssStatusResponse
   */
  async describeOssStatus(request: $_model.DescribeOssStatusRequest): Promise<$_model.DescribeOssStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssStatusWithOptions(request, runtime);
  }

  /**
   * Get OSS Activation Status
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
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
   * Get OSS Activation Status
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeOssStatusV2Request
   * @returns DescribeOssStatusV2Response
   */
  async describeOssStatusV2(request: $_model.DescribeOssStatusV2Request): Promise<$_model.DescribeOssStatusV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssStatusV2WithOptions(request, runtime);
  }

  /**
   * Call DescribeOssUploadToken to get the Token required for uploading photos to OSS.
   * 
   * @param request - DescribeOssUploadTokenRequest
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
   * Call DescribeOssUploadToken to get the Token required for uploading photos to OSS.
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadToken(): Promise<$_model.DescribeOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  /**
   * Open API adds financial-grade data statistics API
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
   * Open API adds financial-grade data statistics API
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyData(request: $_model.DescribePageFaceVerifyDataRequest): Promise<$_model.DescribePageFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * Query Page Settings
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
   * 
   * @param request - DescribePageSettingRequest
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
   * Query Page Settings
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
   * @returns DescribePageSettingResponse
   */
  async describePageSetting(): Promise<$_model.DescribePageSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageSettingWithOptions(runtime);
  }

  /**
   * Get Product Code
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS GET/POST methods.
   * 
   * @param request - DescribeProductCodeRequest
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
   * Get Product Code
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS GET/POST methods.
   * @returns DescribeProductCodeResponse
   */
  async describeProductCode(): Promise<$_model.DescribeProductCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductCodeWithOptions(runtime);
  }

  /**
   * Enhanced Real Person Authentication Call Statistics Pagination Query Interface
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
   * Enhanced Real Person Authentication Call Statistics Pagination Query Interface
   * 
   * @param request - DescribeSmartStatisticsPageListRequest
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageList(request: $_model.DescribeSmartStatisticsPageListRequest): Promise<$_model.DescribeSmartStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * Get Verification Device Statistics
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Get Verification Device Statistics
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Overview of authentication request statistics
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
   * Overview of authentication request statistics
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
   * Query Statistics on Device Face Comparison
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * Query Statistics on Device Face Comparison
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasDeviceModelStatisticsRequest
   * @returns DescribeVerifyPersonasDeviceModelStatisticsResponse
   */
  async describeVerifyPersonasDeviceModelStatistics(request: $_model.DescribeVerifyPersonasDeviceModelStatisticsRequest): Promise<$_model.DescribeVerifyPersonasDeviceModelStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasDeviceModelStatisticsWithOptions(request, runtime);
  }

  /**
   * Query Authentication Personnel Statistics
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Query Authentication Personnel Statistics
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Obtain statistical information on the location of authenticated individuals
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * Obtain statistical information on the location of authenticated individuals
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifyPersonasProvinceStatisticsRequest
   * @returns DescribeVerifyPersonasProvinceStatisticsResponse
   */
  async describeVerifyPersonasProvinceStatistics(request: $_model.DescribeVerifyPersonasProvinceStatisticsRequest): Promise<$_model.DescribeVerifyPersonasProvinceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyPersonasProvinceStatisticsWithOptions(request, runtime);
  }

  /**
   * Query gender statistics of authentication
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Query gender statistics of authentication
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com.
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
   * Query the result of real-person authentication.
   * 
   * @remarks
   * Prerequisites: Before accessing this API, please ensure that you have completed the necessary preparations. For more details, see [Real Person Authentication Server-side Preparation](https://help.aliyun.com/document_detail/127471.html) and [Liveness Face Verification Server-side Preparation](https://help.aliyun.com/document_detail/127717.html).
   * > Alibaba Cloud Real Person Authentication only stores authentication data for the last 180 days. For any subsequent business use, please call this interface in a timely manner to retrieve and store the data yourself to avoid any impact on usage.
   * Request Method: HTTPS POST and GET.
   * Interface Description: After the mobile end of the access party receives the callback, its server can call this interface to obtain the corresponding authentication status and authentication information.
   * Applicable Scope: This interface is applicable to the authentication solution with SDK + server-side integration.
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
   * Query the result of real-person authentication.
   * 
   * @remarks
   * Prerequisites: Before accessing this API, please ensure that you have completed the necessary preparations. For more details, see [Real Person Authentication Server-side Preparation](https://help.aliyun.com/document_detail/127471.html) and [Liveness Face Verification Server-side Preparation](https://help.aliyun.com/document_detail/127717.html).
   * > Alibaba Cloud Real Person Authentication only stores authentication data for the last 180 days. For any subsequent business use, please call this interface in a timely manner to retrieve and store the data yourself to avoid any impact on usage.
   * Request Method: HTTPS POST and GET.
   * Interface Description: After the mobile end of the access party receives the callback, its server can call this interface to obtain the corresponding authentication status and authentication information.
   * Applicable Scope: This interface is applicable to the authentication solution with SDK + server-side integration.
   * 
   * @param request - DescribeVerifyResultRequest
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResult(request: $_model.DescribeVerifyResultRequest): Promise<$_model.DescribeVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  /**
   * Call DescribeVerifySDK to get the offline SDK download address.
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * Interface Description: Obtain the SDK generation result based on the task ID for generating an offline facial recognition SDK.
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
   * Call DescribeVerifySDK to get the offline SDK download address.
   * 
   * @remarks
   * Request Method: Supports sending requests via HTTPS POST and GET methods.
   * Interface Description: Obtain the SDK generation result based on the task ID for generating an offline facial recognition SDK.
   * 
   * @param request - DescribeVerifySDKRequest
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDK(request: $_model.DescribeVerifySDKRequest): Promise<$_model.DescribeVerifySDKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  /**
   * Query the list of authentication schemes
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
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
   * Query the list of authentication schemes
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * 
   * @param request - DescribeVerifySearchPageListRequest
   * @returns DescribeVerifySearchPageListResponse
   */
  async describeVerifySearchPageList(request: $_model.DescribeVerifySearchPageListRequest): Promise<$_model.DescribeVerifySearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySearchPageListWithOptions(request, runtime);
  }

  /**
   * Query Authentication Statistics
   * 
   * @remarks
   * - Request Method: Supports sending requests using HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
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
   * Query Authentication Statistics
   * 
   * @remarks
   * - Request Method: Supports sending requests using HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
   * 
   * @param request - DescribeVerifyStatisticsRequest
   * @returns DescribeVerifyStatisticsResponse
   */
  async describeVerifyStatistics(request: $_model.DescribeVerifyStatisticsRequest): Promise<$_model.DescribeVerifyStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyStatisticsWithOptions(request, runtime);
  }

  /**
   * Call DescribeVerifyToken to initiate an authentication request and obtain an authentication Token. This interface is suitable for authentication solutions using SDK + server-side integration.
   * 
   * @remarks
   * Preparation for Access: When integrating this API, please ensure that the corresponding preparations have been completed. For details, see [Overview of Real Person Authentication Solution Integration Process](https://help.aliyun.com/document_detail/127536.html) and [Overview of Live Face Verification Solution (Liveness Detection Solution) Integration Process](https://help.aliyun.com/document_detail/127687.html).
   * Request Method: HTTPS POST and GET
   * API Description: Before each authentication, use this interface to obtain an authentication Token (VerifyToken), which is used to link various interfaces in the authentication request.
   * Applicable Scope: This interface is suitable for wireless SDK integration.
   * Image Address: Use HTTP or HTTPS addresses that are publicly accessible over the Internet. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * Image Restrictions:
   * - Relative or absolute paths of local images are not supported.
   * - The size of a single image should be controlled within 2 MB to avoid algorithm retrieval timeout.
   * - The face area in the image must be at least 64*64 pixels (px).
   * - There is an 8 MB size limit for the Body of a single request. Please calculate the total size of all images and other information in the request to ensure it does not exceed the limit.
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
   * Call DescribeVerifyToken to initiate an authentication request and obtain an authentication Token. This interface is suitable for authentication solutions using SDK + server-side integration.
   * 
   * @remarks
   * Preparation for Access: When integrating this API, please ensure that the corresponding preparations have been completed. For details, see [Overview of Real Person Authentication Solution Integration Process](https://help.aliyun.com/document_detail/127536.html) and [Overview of Live Face Verification Solution (Liveness Detection Solution) Integration Process](https://help.aliyun.com/document_detail/127687.html).
   * Request Method: HTTPS POST and GET
   * API Description: Before each authentication, use this interface to obtain an authentication Token (VerifyToken), which is used to link various interfaces in the authentication request.
   * Applicable Scope: This interface is suitable for wireless SDK integration.
   * Image Address: Use HTTP or HTTPS addresses that are publicly accessible over the Internet. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * Image Restrictions:
   * - Relative or absolute paths of local images are not supported.
   * - The size of a single image should be controlled within 2 MB to avoid algorithm retrieval timeout.
   * - The face area in the image must be at least 64*64 pixels (px).
   * - There is an 8 MB size limit for the Body of a single request. Please calculate the total size of all images and other information in the request to ensure it does not exceed the limit.
   * 
   * @param request - DescribeVerifyTokenRequest
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyToken(request: $_model.DescribeVerifyTokenRequest): Promise<$_model.DescribeVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  /**
   * Get Whitelist Collection Get Whitelist Collection
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
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
   * Get Whitelist Collection Get Whitelist Collection
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST method.
   * 
   * @param request - DescribeWhitelistSettingRequest
   * @returns DescribeWhitelistSettingResponse
   */
  async describeWhitelistSetting(request: $_model.DescribeWhitelistSettingRequest): Promise<$_model.DescribeWhitelistSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhitelistSettingWithOptions(request, runtime);
  }

  /**
   * Detect Validity Attributes in Face Photos
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * Interface Description: Detects the validity-related attributes of faces in the input photo, which helps the business side to determine whether the photo meets their own business retention or comparison requirements. The currently supported face validity-related attributes include: whether it is a face, whether it is blurry, whether glasses are worn, face pose, whether it is a smile, etc.
   * Instructions for Uploading Image Addresses: When passing in images, you need to upload their corresponding HTTP, OSS addresses, or Base64 encoding.
   * - HTTP Address: A publicly accessible HTTP address. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 Encoding: An image encoded through base64, with the format being `base64://<image base64 string>`.
   * Image Limitations:
   * - Does not support relative or absolute paths of local images.
   * - Please keep the size of a single image within 2 MB to avoid algorithm timeout.
   * - There is an 8 MB size limit for the Body of a single request; please calculate the total size of all images and other information in the request and do not exceed the limit.
   * - When using Base64 to pass images, the request method needs to be changed to POST; the header description of the image Base64 string, such as `data:image/png;base64`, should be removed.
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
   * Detect Validity Attributes in Face Photos
   * 
   * @remarks
   * Request Method: Only supports sending requests via HTTPS POST.
   * Interface Description: Detects the validity-related attributes of faces in the input photo, which helps the business side to determine whether the photo meets their own business retention or comparison requirements. The currently supported face validity-related attributes include: whether it is a face, whether it is blurry, whether glasses are worn, face pose, whether it is a smile, etc.
   * Instructions for Uploading Image Addresses: When passing in images, you need to upload their corresponding HTTP, OSS addresses, or Base64 encoding.
   * - HTTP Address: A publicly accessible HTTP address. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - Base64 Encoding: An image encoded through base64, with the format being `base64://<image base64 string>`.
   * Image Limitations:
   * - Does not support relative or absolute paths of local images.
   * - Please keep the size of a single image within 2 MB to avoid algorithm timeout.
   * - There is an 8 MB size limit for the Body of a single request; please calculate the total size of all images and other information in the request and do not exceed the limit.
   * - When using Base64 to pass images, the request method needs to be changed to POST; the header description of the image Base64 string, such as `data:image/png;base64`, should be removed.
   * 
   * @param request - DetectFaceAttributesRequest
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributes(request: $_model.DetectFaceAttributesRequest): Promise<$_model.DetectFaceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  /**
   * Real-person Authentication Record Download
   * 
   * @remarks
   * Obtain the download link for statistical call data files under the product plan based on query conditions.
   * - Method: HTTPS POST
   * - Service Address: cloudauth.aliyuncs.com
   * > Real-person authentication products use CertifyId to count call volumes. For ease of reconciliation, please retain the CertifyId field in your system.
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
   * Real-person Authentication Record Download
   * 
   * @remarks
   * Obtain the download link for statistical call data files under the product plan based on query conditions.
   * - Method: HTTPS POST
   * - Service Address: cloudauth.aliyuncs.com
   * > Real-person authentication products use CertifyId to count call volumes. For ease of reconciliation, please retain the CertifyId field in your system.
   * 
   * @param request - DownloadVerifyRecordsRequest
   * @returns DownloadVerifyRecordsResponse
   */
  async downloadVerifyRecords(request: $_model.DownloadVerifyRecordsRequest): Promise<$_model.DownloadVerifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadVerifyRecordsWithOptions(request, runtime);
  }

  /**
   * Two-Factor Validity Verification API
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
   * Two-Factor Validity Verification API
   * 
   * @param request - Id2MetaPeriodVerifyRequest
   * @returns Id2MetaPeriodVerifyResponse
   */
  async id2MetaPeriodVerify(request: $_model.Id2MetaPeriodVerifyRequest): Promise<$_model.Id2MetaPeriodVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyWithOptions(request, runtime);
  }

  /**
   * Identity Two-Factor Standard
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
   * Identity Two-Factor Standard
   * 
   * @param request - Id2MetaStandardVerifyRequest
   * @returns Id2MetaStandardVerifyResponse
   */
  async id2MetaStandardVerify(request: $_model.Id2MetaStandardVerifyRequest): Promise<$_model.Id2MetaStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Identity Two-Factor Interface
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * Identity Two-Factor Interface
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * ID Two-Factor Image Verification
   * 
   * @remarks
   * Upload both sides of the ID card, and get the verification result of the two factors from an authoritative data source.
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
   * ID Two-Factor Image Verification
   * 
   * @remarks
   * Upload both sides of the ID card, and get the verification result of the two factors from an authoritative data source.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * Identity Three Elements Verification
   * 
   * @remarks
   * Input name, ID number, and face photo to verify their authenticity and consistency through authoritative sources.
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
   * Identity Three Elements Verification
   * 
   * @remarks
   * Input name, ID number, and face photo to verify their authenticity and consistency through authoritative sources.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * Identity Three Elements Image Verification
   * 
   * @remarks
   * Upload both sides of the ID card to get the verification result of the three identity elements from an authoritative data source.
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
   * Identity Three Elements Image Verification
   * 
   * @remarks
   * Upload both sides of the ID card to get the verification result of the three identity elements from an authoritative data source.
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
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
   * 服务端初始化
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
   * 服务端初始化
   * 
   * @param request - InitAuthVerifyRequest
   * @returns InitAuthVerifyResponse
   */
  async initAuthVerify(request: $_model.InitAuthVerifyRequest): Promise<$_model.InitAuthVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initAuthVerifyWithOptions(request, runtime);
  }

  /**
   * Initiate an authentication request for image verification
   * 
   * @remarks
   * Before each authentication, use this interface to obtain the CertifyId, which is used to link various interfaces in the authentication request.
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
   * Initiate an authentication request for image verification
   * 
   * @remarks
   * Before each authentication, use this interface to obtain the CertifyId, which is used to link various interfaces in the authentication request.
   * 
   * @param request - InitCardVerifyRequest
   * @returns InitCardVerifyResponse
   */
  async initCardVerify(request: $_model.InitCardVerifyRequest): Promise<$_model.InitCardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initCardVerifyWithOptions(request, runtime);
  }

  /**
   * Real-Person Server Initialization Interface
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * - This interface uses different parameters for different product solutions. For details, please refer to the [official documentation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/product-overview/introduction/?spm=a2c4g.11186623.help-menu-2401581.d_0_0.13f644ecRzFHfm&scm=20140722.H_99169._.OR_help-T_cn~zh-V_1).
   * #### Image Format Requirements
   * When performing real-person authentication, please provide images that meet all of the following conditions:
   * - Recent photo with a clear, unobstructed face, natural expression, and facing the camera directly.
   * - Clear photo with normal exposure, no overexposure, underexposure, or halo effects, and no significant angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, recommended short side scaled to 720 pixels, compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in the case of multiple faces, the largest face will be selected.
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
   * Real-Person Server Initialization Interface
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * - This interface uses different parameters for different product solutions. For details, please refer to the [official documentation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/product-overview/introduction/?spm=a2c4g.11186623.help-menu-2401581.d_0_0.13f644ecRzFHfm&scm=20140722.H_99169._.OR_help-T_cn~zh-V_1).
   * #### Image Format Requirements
   * When performing real-person authentication, please provide images that meet all of the following conditions:
   * - Recent photo with a clear, unobstructed face, natural expression, and facing the camera directly.
   * - Clear photo with normal exposure, no overexposure, underexposure, or halo effects, and no significant angle deviation.
   * - Resolution not exceeding 1920*1080, at least 640*480, recommended short side scaled to 720 pixels, compression ratio greater than 0.9.
   * - Photo size: <1MB.
   * - Supports 90, 180, and 270-degree photos; in the case of multiple faces, the largest face will be selected.
   * 
   * @param request - InitFaceVerifyRequest
   * @returns InitFaceVerifyResponse
   */
  async initFaceVerify(request: $_model.InitFaceVerifyRequest): Promise<$_model.InitFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Add Real Person Whitelist
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
   * Add Real Person Whitelist
   * 
   * @param request - InsertWhiteListSettingRequest
   * @returns InsertWhiteListSettingResponse
   */
  async insertWhiteListSetting(request: $_model.InsertWhiteListSettingRequest): Promise<$_model.InsertWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * Silent Liveness Face (LivenessFaceVerify) refers to a service that performs real face detection by inputting pre-obtained face images through an API. The algorithm primarily identifies whether the face is from a screen recording, printed picture, or other types of liveness attacks. This service is suitable for low-risk business scenarios or in conjunction with offline facial recognition SDKs. If your business has higher requirements for real face security, it is recommended to integrate App or WebSDK mode, or integrate with Deepfake face detection services to assist in identifying more dimensions of face forgery risks.
   * 
   * @remarks
   * Invoke the LivenessFaceVerify interface to perform liveness detection on a face image.
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
   * Silent Liveness Face (LivenessFaceVerify) refers to a service that performs real face detection by inputting pre-obtained face images through an API. The algorithm primarily identifies whether the face is from a screen recording, printed picture, or other types of liveness attacks. This service is suitable for low-risk business scenarios or in conjunction with offline facial recognition SDKs. If your business has higher requirements for real face security, it is recommended to integrate App or WebSDK mode, or integrate with Deepfake face detection services to assist in identifying more dimensions of face forgery risks.
   * 
   * @remarks
   * Invoke the LivenessFaceVerify interface to perform liveness detection on a face image.
   * 
   * @param request - LivenessFaceVerifyRequest
   * @returns LivenessFaceVerifyResponse
   */
  async livenessFaceVerify(request: $_model.LivenessFaceVerifyRequest): Promise<$_model.LivenessFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.livenessFaceVerifyWithOptions(request, runtime);
  }

  /**
   * Mobile Two-Factor Verification
   * 
   * @remarks
   * Input the phone number and name, verify their authenticity and consistency through authoritative data sources.
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
   * Mobile Two-Factor Verification
   * 
   * @remarks
   * Input the phone number and name, verify their authenticity and consistency through authoritative data sources.
   * 
   * @param request - Mobile2MetaVerifyRequest
   * @returns Mobile2MetaVerifyResponse
   */
  async mobile2MetaVerify(request: $_model.Mobile2MetaVerifyRequest): Promise<$_model.Mobile2MetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile2MetaVerifyWithOptions(request, runtime);
  }

  /**
   * Detailed Three-Element Verification for Phone Number_Standard Version
   * 
   * @remarks
   * Input the phone number, name, and ID number to verify their authenticity and consistency through authoritative data sources. If they do not match, the reason for the mismatch is returned.
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
   * Detailed Three-Element Verification for Phone Number_Standard Version
   * 
   * @remarks
   * Input the phone number, name, and ID number to verify their authenticity and consistency through authoritative data sources. If they do not match, the reason for the mismatch is returned.
   * 
   * @param request - Mobile3MetaDetailStandardVerifyRequest
   * @returns Mobile3MetaDetailStandardVerifyResponse
   */
  async mobile3MetaDetailStandardVerify(request: $_model.Mobile3MetaDetailStandardVerifyRequest): Promise<$_model.Mobile3MetaDetailStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaDetailStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Detailed Mobile Three-Element Verification Interface
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * Detailed Mobile Three-Element Verification Interface
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com (IPv4) or cloudauth-dualstack.aliyuncs.com (IPv6).
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
   * Simplified Three-Element Verification for Phone Number_Standard Version
   * 
   * @remarks
   * Input the phone number, name, and ID number to verify their authenticity and consistency through authoritative data sources.
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
   * Simplified Three-Element Verification for Phone Number_Standard Version
   * 
   * @remarks
   * Input the phone number, name, and ID number to verify their authenticity and consistency through authoritative data sources.
   * 
   * @param request - Mobile3MetaSimpleStandardVerifyRequest
   * @returns Mobile3MetaSimpleStandardVerifyResponse
   */
  async mobile3MetaSimpleStandardVerify(request: $_model.Mobile3MetaSimpleStandardVerifyRequest): Promise<$_model.Mobile3MetaSimpleStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaSimpleStandardVerifyWithOptions(request, runtime);
  }

  /**
   * Mobile Three Elements Simplified Interface
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
   * Mobile Three Elements Simplified Interface
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
   * Number Detection
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
   * Number Detection
   * 
   * @param request - MobileDetectRequest
   * @returns MobileDetectResponse
   */
  async mobileDetect(request: $_model.MobileDetectRequest): Promise<$_model.MobileDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileDetectWithOptions(request, runtime);
  }

  /**
   * Query the online status of a mobile number
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
   * Query the online status of a mobile number
   * 
   * @param request - MobileOnlineStatusRequest
   * @returns MobileOnlineStatusResponse
   */
  async mobileOnlineStatus(request: $_model.MobileOnlineStatusRequest): Promise<$_model.MobileOnlineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineStatusWithOptions(request, runtime);
  }

  /**
   * Query the online duration of a mobile number
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
   * Query the online duration of a mobile number
   * 
   * @param request - MobileOnlineTimeRequest
   * @returns MobileOnlineTimeResponse
   */
  async mobileOnlineTime(request: $_model.MobileOnlineTimeRequest): Promise<$_model.MobileOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineTimeWithOptions(request, runtime);
  }

  /**
   * Modify Black and White List Policy
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - Interface Description: Add or modify blacklist rule.
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
   * Modify Black and White List Policy
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com.
   * - Request Method: HTTPS POST and GET.
   * - Interface Description: Add or modify blacklist rule.
   * 
   * @param request - ModifyBlackListStrategyRequest
   * @returns ModifyBlackListStrategyResponse
   */
  async modifyBlackListStrategy(request: $_model.ModifyBlackListStrategyRequest): Promise<$_model.ModifyBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Modify Security Control Strategy
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST method.
   * - Request Address: cloudauth.aliyuncs.com.
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
   * Modify Security Control Strategy
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST method.
   * - Request Address: cloudauth.aliyuncs.com.
   * 
   * @param request - ModifyControlStrategyRequest
   * @returns ModifyControlStrategyResponse
   */
  async modifyControlStrategy(request: $_model.ModifyControlStrategyRequest): Promise<$_model.ModifyControlStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyControlStrategyWithOptions(request, runtime);
  }

  /**
   * Information Verification Security Management
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
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
   * Information Verification Security Management
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Service Address: cloudauth.aliyuncs.com.
   * 
   * @param request - ModifyCustomizeFlowStrategyListRequest
   * @returns ModifyCustomizeFlowStrategyListResponse
   */
  async modifyCustomizeFlowStrategyList(request: $_model.ModifyCustomizeFlowStrategyListRequest): Promise<$_model.ModifyCustomizeFlowStrategyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomizeFlowStrategyListWithOptions(request, runtime);
  }

  /**
   * Call ModifyDeviceInfo to update device-related information, such as extending the device authorization validity period, updating the business party\\"s custom business identifier, and device ID. Suitable for scenarios like renewing the device validity period.
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
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
   * Call ModifyDeviceInfo to update device-related information, such as extending the device authorization validity period, updating the business party\\"s custom business identifier, and device ID. Suitable for scenarios like renewing the device validity period.
   * 
   * @remarks
   * Request Method: Supports sending requests using HTTPS POST and GET methods.
   * 
   * @param request - ModifyDeviceInfoRequest
   * @returns ModifyDeviceInfoResponse
   */
  async modifyDeviceInfo(request: $_model.ModifyDeviceInfoRequest): Promise<$_model.ModifyDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Paging Query for Real Person Whitelist Configuration
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
   * Paging Query for Real Person Whitelist Configuration
   * 
   * @param request - PageQueryWhiteListSettingRequest
   * @returns PageQueryWhiteListSettingResponse
   */
  async pageQueryWhiteListSetting(request: $_model.PageQueryWhiteListSettingRequest): Promise<$_model.PageQueryWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageQueryWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * Query Blacklist and Whitelist Policies
   * 
   * @remarks
   * - Request URL: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * > Supports setting blacklists for IP, ID number, phone number, bank card number, etc. When a blacklist is hit, the system rejects the request and returns a fixed error code.
   * Supports setting blacklists for IP, ID number, phone number, bank card number, etc. When a blacklist is hit, the system rejects the request and returns a fixed error code.
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
   * Query Blacklist and Whitelist Policies
   * 
   * @remarks
   * - Request URL: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * > Supports setting blacklists for IP, ID number, phone number, bank card number, etc. When a blacklist is hit, the system rejects the request and returns a fixed error code.
   * Supports setting blacklists for IP, ID number, phone number, bank card number, etc. When a blacklist is hit, the system rejects the request and returns a fixed error code.
   * 
   * @param request - QueryBlackListStrategyRequest
   * @returns QueryBlackListStrategyResponse
   */
  async queryBlackListStrategy(request: $_model.QueryBlackListStrategyRequest): Promise<$_model.QueryBlackListStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBlackListStrategyWithOptions(request, runtime);
  }

  /**
   * Query Security Control Strategy
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Request Address: cloudauth.aliyuncs.com.
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
   * Query Security Control Strategy
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST and GET methods.
   * - Request Address: cloudauth.aliyuncs.com.
   * 
   * @param request - QueryControlStrategyRequest
   * @returns QueryControlStrategyResponse
   */
  async queryControlStrategy(request: $_model.QueryControlStrategyRequest): Promise<$_model.QueryControlStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryControlStrategyWithOptions(request, runtime);
  }

  /**
   * Query Custom Flow Control Strategy
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * - Security Rules: These are rules to ensure system security, such as monitoring for API abuse, account theft, etc. When a threshold is triggered, the system supports alerting.
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
   * Query Custom Flow Control Strategy
   * 
   * @remarks
   * - Service Address: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * - Security Rules: These are rules to ensure system security, such as monitoring for API abuse, account theft, etc. When a threshold is triggered, the system supports alerting.
   * 
   * @param request - QueryCustomizeFlowStrategyRequest
   * @returns QueryCustomizeFlowStrategyResponse
   */
  async queryCustomizeFlowStrategy(request: $_model.QueryCustomizeFlowStrategyRequest): Promise<$_model.QueryCustomizeFlowStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomizeFlowStrategyWithOptions(request, runtime);
  }

  /**
   * Query Scene Configuration
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
   * Query Scene Configuration
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
   * Query Real-Person Download Task
   * 
   * @remarks
   * Obtain the download link for statistical call data files under the product plan based on query conditions.
   * - Method: HTTPS POST
   * - Service Address: cloudauth.aliyuncs.com
   * > The real-person authentication product uses CertifyId to count the number of calls. For ease of reconciliation, please retain the CertifyId field in your system.
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
   * Query Real-Person Download Task
   * 
   * @remarks
   * Obtain the download link for statistical call data files under the product plan based on query conditions.
   * - Method: HTTPS POST
   * - Service Address: cloudauth.aliyuncs.com
   * > The real-person authentication product uses CertifyId to count the number of calls. For ease of reconciliation, please retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyDownloadTaskRequest
   * @returns QueryVerifyDownloadTaskResponse
   */
  async queryVerifyDownloadTask(request: $_model.QueryVerifyDownloadTaskRequest): Promise<$_model.QueryVerifyDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Query Flow Package
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This interface uses different parameters for different product solutions. For details, please refer to the [official documentation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/product-overview/introduction/?spm=a2c4g.11186623.help-menu-2401581.d_0_0.13f644ecRzFHfm&scm=20140722.H_99169._.OR_help-T_cn~zh-V_1).
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
   * Query Flow Package
   * 
   * @remarks
   * - Service address: cloudauth.aliyuncs.com
   * - Request method: HTTPS POST and GET.
   * - This interface uses different parameters for different product solutions. For details, please refer to the [official documentation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/product-overview/introduction/?spm=a2c4g.11186623.help-menu-2401581.d_0_0.13f644ecRzFHfm&scm=20140722.H_99169._.OR_help-T_cn~zh-V_1).
   * 
   * @param request - QueryVerifyFlowPackageRequest
   * @returns QueryVerifyFlowPackageResponse
   */
  async queryVerifyFlowPackage(request: $_model.QueryVerifyFlowPackageRequest): Promise<$_model.QueryVerifyFlowPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyFlowPackageWithOptions(request, runtime);
  }

  /**
   * Call Volume Statistics
   * 
   * @remarks
   * - Request URL: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * > Real-person authentication products use CertifyId to count call volume. For ease of reconciliation, please retain the CertifyId field in your system.
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
   * Call Volume Statistics
   * 
   * @remarks
   * - Request URL: cloudauth.aliyuncs.com
   * - Request Method: HTTPS POST and GET.
   * > Real-person authentication products use CertifyId to count call volume. For ease of reconciliation, please retain the CertifyId field in your system.
   * 
   * @param request - QueryVerifyInvokeSatisticRequest
   * @returns QueryVerifyInvokeSatisticResponse
   */
  async queryVerifyInvokeSatistic(request: $_model.QueryVerifyInvokeSatisticRequest): Promise<$_model.QueryVerifyInvokeSatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVerifyInvokeSatisticWithOptions(request, runtime);
  }

  /**
   * Delete Real Person Whitelist
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
   * Delete Real Person Whitelist
   * 
   * @param request - RemoveWhiteListSettingRequest
   * @returns RemoveWhiteListSettingResponse
   */
  async removeWhiteListSetting(request: $_model.RemoveWhiteListSettingRequest): Promise<$_model.RemoveWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * Update Ant Blockchain Transaction Scenario
   * 
   * @remarks
   * Update the information of a financial-level authentication scenario based on the scenario ID.
   * - Service address: cloudauth.aliyuncs.com.
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
   * Update Ant Blockchain Transaction Scenario
   * 
   * @remarks
   * Update the information of a financial-level authentication scenario based on the scenario ID.
   * - Service address: cloudauth.aliyuncs.com.
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
   * Update Scene Configuration
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST.
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
   * Update Scene Configuration
   * 
   * @remarks
   * - Request Method: Supports sending requests via HTTPS POST.
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
   * Five-Item Vehicle Information Recognition
   * 
   * @remarks
   * Query basic vehicle information through the license plate number and vehicle type.
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
   * Five-Item Vehicle Information Recognition
   * 
   * @remarks
   * Query basic vehicle information through the license plate number and vehicle type.
   * 
   * @param request - Vehicle5ItemQueryRequest
   * @returns Vehicle5ItemQueryResponse
   */
  async vehicle5ItemQuery(request: $_model.Vehicle5ItemQueryRequest): Promise<$_model.Vehicle5ItemQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicle5ItemQueryWithOptions(request, runtime);
  }

  /**
   * Vehicle Insurance Date Inquiry
   * 
   * @remarks
   * Query the vehicle insurance date through the license plate number, vehicle type, and vehicle identification number (VIN).
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
   * Vehicle Insurance Date Inquiry
   * 
   * @remarks
   * Query the vehicle insurance date through the license plate number, vehicle type, and vehicle identification number (VIN).
   * 
   * @param request - VehicleInsureQueryRequest
   * @returns VehicleInsureQueryResponse
   */
  async vehicleInsureQuery(request: $_model.VehicleInsureQueryRequest): Promise<$_model.VehicleInsureQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleInsureQueryWithOptions(request, runtime);
  }

  /**
   * Vehicle Element Verification
   * 
   * @remarks
   * Verifies the consistency of name, ID number, vehicle license plate, and vehicle type.
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
   * Vehicle Element Verification
   * 
   * @remarks
   * Verifies the consistency of name, ID number, vehicle license plate, and vehicle type.
   * 
   * @param request - VehicleMetaVerifyRequest
   * @returns VehicleMetaVerifyResponse
   */
  async vehicleMetaVerify(request: $_model.VehicleMetaVerifyRequest): Promise<$_model.VehicleMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyWithOptions(request, runtime);
  }

  /**
   * Enhanced Vehicle Element Verification
   * 
   * @remarks
   * Verifies the consistency of name, ID number, license plate number, and vehicle type, and supports returning detailed vehicle information.
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
   * Enhanced Vehicle Element Verification
   * 
   * @remarks
   * Verifies the consistency of name, ID number, license plate number, and vehicle type, and supports returning detailed vehicle information.
   * 
   * @param request - VehicleMetaVerifyV2Request
   * @returns VehicleMetaVerifyV2Response
   */
  async vehicleMetaVerifyV2(request: $_model.VehicleMetaVerifyV2Request): Promise<$_model.VehicleMetaVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyV2WithOptions(request, runtime);
  }

  /**
   * Vehicle Information Recognition
   * 
   * @remarks
   * Query detailed vehicle information through the license plate number and vehicle type.
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
   * Vehicle Information Recognition
   * 
   * @remarks
   * Query detailed vehicle information through the license plate number and vehicle type.
   * 
   * @param request - VehicleQueryRequest
   * @returns VehicleQueryResponse
   */
  async vehicleQuery(request: $_model.VehicleQueryRequest): Promise<$_model.VehicleQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleQueryWithOptions(request, runtime);
  }

  /**
   * Call VerifyMaterial, in a pure server-side access authentication solution, input name, ID number, portrait photo, and front and back photos of the ID card (optional) for real-person authentication, and return the authentication result synchronously.
   * 
   * @remarks
   * Preparation for Access: When integrating this API, please ensure that the corresponding preparatory work has been completed. For details, please refer to [Server-side Access Preparation](https://help.aliyun.com/document_detail/127471.html).
   * Request Method: HTTPS POST and GET.
   * API Description: The server of the access party submits the authentication materials to the real-person authentication service for verification and comparison, with the results returned synchronously.
   * Applicable Scope: This interface is only applicable to pure server-side access authentication solutions.
   * Image Upload Address Explanation:
   * - HTTP or HTTPS address: Supports publicly accessible HTTP or HTTPS addresses. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - OSS address: If the images from the access party are local files, Alibaba Cloud also provides an upload SDK, supporting the business party to upload the images to the specified OSS bucket of the real-person authentication service, and use the obtained OSS address as the image address parameter in the interface. If your business needs to use the upload SDK, please submit a [ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us for acquisition.
   * Image Limitations:
   * - Does not support relative or absolute paths of local images.
   * - Please keep the size of a single image within 2 MB to avoid algorithm retrieval timeout.
   * - The face area in the image should be at least 64*64 pixels.
   * - There is an 8 MB size limit for the Body of a single request. Please calculate the total size of all images and other information in the request, and do not exceed the limit.
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
   * Call VerifyMaterial, in a pure server-side access authentication solution, input name, ID number, portrait photo, and front and back photos of the ID card (optional) for real-person authentication, and return the authentication result synchronously.
   * 
   * @remarks
   * Preparation for Access: When integrating this API, please ensure that the corresponding preparatory work has been completed. For details, please refer to [Server-side Access Preparation](https://help.aliyun.com/document_detail/127471.html).
   * Request Method: HTTPS POST and GET.
   * API Description: The server of the access party submits the authentication materials to the real-person authentication service for verification and comparison, with the results returned synchronously.
   * Applicable Scope: This interface is only applicable to pure server-side access authentication solutions.
   * Image Upload Address Explanation:
   * - HTTP or HTTPS address: Supports publicly accessible HTTP or HTTPS addresses. For example, `http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg`.
   * - OSS address: If the images from the access party are local files, Alibaba Cloud also provides an upload SDK, supporting the business party to upload the images to the specified OSS bucket of the real-person authentication service, and use the obtained OSS address as the image address parameter in the interface. If your business needs to use the upload SDK, please submit a [ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us for acquisition.
   * Image Limitations:
   * - Does not support relative or absolute paths of local images.
   * - Please keep the size of a single image within 2 MB to avoid algorithm retrieval timeout.
   * - The face area in the image should be at least 64*64 pixels.
   * - There is an 8 MB size limit for the Body of a single request. Please calculate the total size of all images and other information in the request, and do not exceed the limit.
   * 
   * @param request - VerifyMaterialRequest
   * @returns VerifyMaterialResponse
   */
  async verifyMaterial(request: $_model.VerifyMaterialRequest): Promise<$_model.VerifyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}
