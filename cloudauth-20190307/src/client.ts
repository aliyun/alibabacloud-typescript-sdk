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

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
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
    let response_ = await $dara.doAction(request_);

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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      contrastFaceVerifyReq.faceContrastFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let contrastFaceVerifyResp = await this.contrastFaceVerifyWithOptions(contrastFaceVerifyReq, runtime);
    return contrastFaceVerifyResp;
  }

  /**
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
   * @param request - CreateAuthKeyRequest
   * @returns CreateAuthKeyResponse
   */
  async createAuthKey(request: $_model.CreateAuthKeyRequest): Promise<$_model.CreateAuthKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateVerifySettingRequest
   * @returns CreateVerifySettingResponse
   */
  async createVerifySetting(request: $_model.CreateVerifySettingRequest): Promise<$_model.CreateVerifySettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      credentialProductVerifyV2Req.imageFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let credentialProductVerifyV2Resp = await this.credentialProductVerifyV2WithOptions(credentialProductVerifyV2Req, runtime);
    return credentialProductVerifyV2Resp;
  }

  /**
   * 凭证核验
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
   * 凭证核验
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
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
   * 图片要素核验获取认证结果
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
   * 图片要素核验获取认证结果
   * 
   * @param request - DescribeCardVerifyRequest
   * @returns DescribeCardVerifyResponse
   */
  async describeCardVerify(request: $_model.DescribeCardVerifyRequest): Promise<$_model.DescribeCardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCardVerifyWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeDeviceInfoRequest
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: $_model.DescribeDeviceInfoRequest): Promise<$_model.DescribeDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 金融级人脸保镖服务
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
   * 金融级人脸保镖服务
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRisk(request: $_model.DescribeFaceGuardRiskRequest): Promise<$_model.DescribeFaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceGuardRiskWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeFaceVerifyRequest
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerify(request: $_model.DescribeFaceVerifyRequest): Promise<$_model.DescribeFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  /**
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
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadToken(): Promise<$_model.DescribeOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  /**
   * Open API新增金融级数据统计API
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
   * Open API新增金融级数据统计API
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyData(request: $_model.DescribePageFaceVerifyDataRequest): Promise<$_model.DescribePageFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageFaceVerifyDataWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeSmartStatisticsPageListRequest
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageList(request: $_model.DescribeSmartStatisticsPageListRequest): Promise<$_model.DescribeSmartStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartStatisticsPageListWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeVerifyResultRequest
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResult(request: $_model.DescribeVerifyResultRequest): Promise<$_model.DescribeVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeVerifySDKRequest
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDK(request: $_model.DescribeVerifySDKRequest): Promise<$_model.DescribeVerifySDKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  /**
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
   * @param request - DescribeVerifyTokenRequest
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyToken(request: $_model.DescribeVerifyTokenRequest): Promise<$_model.DescribeVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  /**
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
   * @param request - DetectFaceAttributesRequest
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributes(request: $_model.DetectFaceAttributesRequest): Promise<$_model.DetectFaceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
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
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      id2MetaVerifyWithOCRReq.certNationalFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let id2MetaVerifyWithOCRResp = await this.id2MetaVerifyWithOCRWithOptions(id2MetaVerifyWithOCRReq, runtime);
    return id2MetaVerifyWithOCRResp;
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
   * @param request - VerifyMaterialRequest
   * @returns VerifyMaterialResponse
   */
  async verifyMaterial(request: $_model.VerifyMaterialRequest): Promise<$_model.VerifyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}
