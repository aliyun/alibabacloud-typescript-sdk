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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "mt.cn-hangzhou.aliyuncs.com",
      'ap-northeast-1': "mt.aliyuncs.com",
      'ap-northeast-2-pop': "mt.aliyuncs.com",
      'ap-south-1': "mt.aliyuncs.com",
      'ap-southeast-1': "mt.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "mt.aliyuncs.com",
      'ap-southeast-3': "mt.aliyuncs.com",
      'ap-southeast-5': "mt.aliyuncs.com",
      'cn-beijing': "mt.aliyuncs.com",
      'cn-beijing-finance-1': "mt.aliyuncs.com",
      'cn-beijing-finance-pop': "mt.aliyuncs.com",
      'cn-beijing-gov-1': "mt.aliyuncs.com",
      'cn-beijing-nu16-b01': "mt.aliyuncs.com",
      'cn-chengdu': "mt.aliyuncs.com",
      'cn-edge-1': "mt.aliyuncs.com",
      'cn-fujian': "mt.aliyuncs.com",
      'cn-haidian-cm12-c01': "mt.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mt.aliyuncs.com",
      'cn-hangzhou-finance': "mt.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mt.aliyuncs.com",
      'cn-hangzhou-test-306': "mt.aliyuncs.com",
      'cn-hongkong': "mt.aliyuncs.com",
      'cn-hongkong-finance-pop': "mt.aliyuncs.com",
      'cn-huhehaote': "mt.aliyuncs.com",
      'cn-north-2-gov-1': "mt.aliyuncs.com",
      'cn-qingdao': "mt.aliyuncs.com",
      'cn-qingdao-nebula': "mt.aliyuncs.com",
      'cn-shanghai': "mt.aliyuncs.com",
      'cn-shanghai-et15-b01': "mt.aliyuncs.com",
      'cn-shanghai-et2-b01': "mt.aliyuncs.com",
      'cn-shanghai-finance-1': "mt.aliyuncs.com",
      'cn-shanghai-inner': "mt.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mt.aliyuncs.com",
      'cn-shenzhen': "mt.aliyuncs.com",
      'cn-shenzhen-finance-1': "mt.aliyuncs.com",
      'cn-shenzhen-inner': "mt.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mt.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mt.aliyuncs.com",
      'cn-wuhan': "mt.aliyuncs.com",
      'cn-yushanfang': "mt.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mt.aliyuncs.com",
      'cn-zhangjiakou': "mt.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mt.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mt.aliyuncs.com",
      'eu-central-1': "mt.aliyuncs.com",
      'eu-west-1': "mt.aliyuncs.com",
      'eu-west-1-oxs': "mt.aliyuncs.com",
      'me-east-1': "mt.aliyuncs.com",
      'rus-west-1-pop': "mt.aliyuncs.com",
      'us-east-1': "mt.aliyuncs.com",
      'us-west-1': "mt.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alimt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 大文本异步翻译，支持5000-50000字翻译
   * 
   * @param request - CreateAsyncTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsyncTranslateResponse
   */
  async createAsyncTranslateWithOptions(request: $_model.CreateAsyncTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAsyncTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsyncTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAsyncTranslateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAsyncTranslateResponse({}));
  }

  /**
   * 大文本异步翻译，支持5000-50000字翻译
   * 
   * @param request - CreateAsyncTranslateRequest
   * @returns CreateAsyncTranslateResponse
   */
  async createAsyncTranslate(request: $_model.CreateAsyncTranslateRequest): Promise<$_model.CreateAsyncTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsyncTranslateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDocTranslateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocTranslateTaskResponse
   */
  async createDocTranslateTaskWithOptions(request: $_model.CreateDocTranslateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocTranslateTaskResponse({}));
  }

  /**
   * @param request - CreateDocTranslateTaskRequest
   * @returns CreateDocTranslateTaskResponse
   */
  async createDocTranslateTask(request: $_model.CreateDocTranslateTaskRequest): Promise<$_model.CreateDocTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocTranslateTaskWithOptions(request, runtime);
  }

  async createDocTranslateTaskAdvance(request: $_model.CreateDocTranslateTaskAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocTranslateTaskResponse> {
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
      product: "alimt",
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
    let createDocTranslateTaskReq = new $_model.CreateDocTranslateTaskRequest({ });
    OpenApiUtil.convert(request, createDocTranslateTaskReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      createDocTranslateTaskReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createDocTranslateTaskResp = await this.createDocTranslateTaskWithOptions(createDocTranslateTaskReq, runtime);
    return createDocTranslateTaskResp;
  }

  /**
   * @param request - CreateImageTranslateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageTranslateTaskResponse
   */
  async createImageTranslateTaskWithOptions(request: $_model.CreateImageTranslateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.urlList)) {
      body["UrlList"] = request.urlList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageTranslateTaskResponse({}));
  }

  /**
   * @param request - CreateImageTranslateTaskRequest
   * @returns CreateImageTranslateTaskResponse
   */
  async createImageTranslateTask(request: $_model.CreateImageTranslateTaskRequest): Promise<$_model.CreateImageTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageTranslateTaskWithOptions(request, runtime);
  }

  /**
   * 大文本异步翻译，支持5000-50000字翻译
   * 
   * @param request - GetAsyncTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTranslateResponse
   */
  async getAsyncTranslateWithOptions(request: $_model.GetAsyncTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncTranslateResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncTranslateResponse({}));
  }

  /**
   * 大文本异步翻译，支持5000-50000字翻译
   * 
   * @param request - GetAsyncTranslateRequest
   * @returns GetAsyncTranslateResponse
   */
  async getAsyncTranslate(request: $_model.GetAsyncTranslateRequest): Promise<$_model.GetAsyncTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncTranslateWithOptions(request, runtime);
  }

  /**
   * @param request - GetBatchTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTranslateResponse
   */
  async getBatchTranslateWithOptions(request: $_model.GetBatchTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTranslateResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTranslateResponse({}));
  }

  /**
   * @param request - GetBatchTranslateRequest
   * @returns GetBatchTranslateResponse
   */
  async getBatchTranslate(request: $_model.GetBatchTranslateRequest): Promise<$_model.GetBatchTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTranslateWithOptions(request, runtime);
  }

  /**
   * GetBatchTranslateByVPC
   * 
   * @param request - GetBatchTranslateByVPCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTranslateByVPCResponse
   */
  async getBatchTranslateByVPCWithOptions(request: $_model.GetBatchTranslateByVPCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchTranslateByVPCResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchTranslateByVPC",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchTranslateByVPCResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchTranslateByVPCResponse({}));
  }

  /**
   * GetBatchTranslateByVPC
   * 
   * @param request - GetBatchTranslateByVPCRequest
   * @returns GetBatchTranslateByVPCResponse
   */
  async getBatchTranslateByVPC(request: $_model.GetBatchTranslateByVPCRequest): Promise<$_model.GetBatchTranslateByVPCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchTranslateByVPCWithOptions(request, runtime);
  }

  /**
   * 语种识别
   * 
   * @param request - GetDetectLanguageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetectLanguageResponse
   */
  async getDetectLanguageWithOptions(request: $_model.GetDetectLanguageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetectLanguageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetectLanguage",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetectLanguageResponse>(await this.callApi(params, req, runtime), new $_model.GetDetectLanguageResponse({}));
  }

  /**
   * 语种识别
   * 
   * @param request - GetDetectLanguageRequest
   * @returns GetDetectLanguageResponse
   */
  async getDetectLanguage(request: $_model.GetDetectLanguageRequest): Promise<$_model.GetDetectLanguageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetectLanguageWithOptions(request, runtime);
  }

  /**
   * 语种识别
   * 
   * @param request - GetDetectLanguageVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetectLanguageVpcResponse
   */
  async getDetectLanguageVpcWithOptions(request: $_model.GetDetectLanguageVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetectLanguageVpcResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetectLanguageVpc",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetectLanguageVpcResponse>(await this.callApi(params, req, runtime), new $_model.GetDetectLanguageVpcResponse({}));
  }

  /**
   * 语种识别
   * 
   * @param request - GetDetectLanguageVpcRequest
   * @returns GetDetectLanguageVpcResponse
   */
  async getDetectLanguageVpc(request: $_model.GetDetectLanguageVpcRequest): Promise<$_model.GetDetectLanguageVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetectLanguageVpcWithOptions(request, runtime);
  }

  /**
   * 获取文档翻译任务
   * 
   * @param request - GetDocTranslateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocTranslateTaskResponse
   */
  async getDocTranslateTaskWithOptions(request: $_model.GetDocTranslateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocTranslateTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetDocTranslateTaskResponse({}));
  }

  /**
   * 获取文档翻译任务
   * 
   * @param request - GetDocTranslateTaskRequest
   * @returns GetDocTranslateTaskResponse
   */
  async getDocTranslateTask(request: $_model.GetDocTranslateTaskRequest): Promise<$_model.GetDocTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocTranslateTaskWithOptions(request, runtime);
  }

  /**
   * @param request - GetImageDiagnoseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageDiagnoseResponse
   */
  async getImageDiagnoseWithOptions(request: $_model.GetImageDiagnoseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageDiagnoseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageDiagnose",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageDiagnoseResponse>(await this.callApi(params, req, runtime), new $_model.GetImageDiagnoseResponse({}));
  }

  /**
   * @param request - GetImageDiagnoseRequest
   * @returns GetImageDiagnoseResponse
   */
  async getImageDiagnose(request: $_model.GetImageDiagnoseRequest): Promise<$_model.GetImageDiagnoseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageDiagnoseWithOptions(request, runtime);
  }

  /**
   * @param request - GetImageTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageTranslateResponse
   */
  async getImageTranslateWithOptions(request: $_model.GetImageTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageTranslateResponse>(await this.callApi(params, req, runtime), new $_model.GetImageTranslateResponse({}));
  }

  /**
   * @param request - GetImageTranslateRequest
   * @returns GetImageTranslateResponse
   */
  async getImageTranslate(request: $_model.GetImageTranslateRequest): Promise<$_model.GetImageTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageTranslateWithOptions(request, runtime);
  }

  /**
   * @param request - GetImageTranslateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageTranslateTaskResponse
   */
  async getImageTranslateTaskWithOptions(request: $_model.GetImageTranslateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetImageTranslateTaskResponse({}));
  }

  /**
   * @param request - GetImageTranslateTaskRequest
   * @returns GetImageTranslateTaskResponse
   */
  async getImageTranslateTask(request: $_model.GetImageTranslateTaskRequest): Promise<$_model.GetImageTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageTranslateTaskWithOptions(request, runtime);
  }

  /**
   * GetTitleDiagnose
   * 
   * @param request - GetTitleDiagnoseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTitleDiagnoseResponse
   */
  async getTitleDiagnoseWithOptions(request: $_model.GetTitleDiagnoseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTitleDiagnoseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTitleDiagnose",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTitleDiagnoseResponse>(await this.callApi(params, req, runtime), new $_model.GetTitleDiagnoseResponse({}));
  }

  /**
   * GetTitleDiagnose
   * 
   * @param request - GetTitleDiagnoseRequest
   * @returns GetTitleDiagnoseResponse
   */
  async getTitleDiagnose(request: $_model.GetTitleDiagnoseRequest): Promise<$_model.GetTitleDiagnoseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTitleDiagnoseWithOptions(request, runtime);
  }

  /**
   * GetTitleGenerate
   * 
   * @param request - GetTitleGenerateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTitleGenerateResponse
   */
  async getTitleGenerateWithOptions(request: $_model.GetTitleGenerateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTitleGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["Attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.hotWords)) {
      body["HotWords"] = request.hotWords;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTitleGenerate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTitleGenerateResponse>(await this.callApi(params, req, runtime), new $_model.GetTitleGenerateResponse({}));
  }

  /**
   * GetTitleGenerate
   * 
   * @param request - GetTitleGenerateRequest
   * @returns GetTitleGenerateResponse
   */
  async getTitleGenerate(request: $_model.GetTitleGenerateRequest): Promise<$_model.GetTitleGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTitleGenerateWithOptions(request, runtime);
  }

  /**
   * GetTitleIntelligence
   * 
   * @param request - GetTitleIntelligenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTitleIntelligenceResponse
   */
  async getTitleIntelligenceWithOptions(request: $_model.GetTitleIntelligenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTitleIntelligenceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catLevelThreeId)) {
      body["CatLevelThreeId"] = request.catLevelThreeId;
    }

    if (!$dara.isNull(request.catLevelTwoId)) {
      body["CatLevelTwoId"] = request.catLevelTwoId;
    }

    if (!$dara.isNull(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTitleIntelligence",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTitleIntelligenceResponse>(await this.callApi(params, req, runtime), new $_model.GetTitleIntelligenceResponse({}));
  }

  /**
   * GetTitleIntelligence
   * 
   * @param request - GetTitleIntelligenceRequest
   * @returns GetTitleIntelligenceResponse
   */
  async getTitleIntelligence(request: $_model.GetTitleIntelligenceRequest): Promise<$_model.GetTitleIntelligenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTitleIntelligenceWithOptions(request, runtime);
  }

  /**
   * 获取图片批量翻译结果
   * 
   * @param request - GetTranslateImageBatchResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranslateImageBatchResultResponse
   */
  async getTranslateImageBatchResultWithOptions(request: $_model.GetTranslateImageBatchResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranslateImageBatchResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranslateImageBatchResult",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranslateImageBatchResultResponse>(await this.callApi(params, req, runtime), new $_model.GetTranslateImageBatchResultResponse({}));
  }

  /**
   * 获取图片批量翻译结果
   * 
   * @param request - GetTranslateImageBatchResultRequest
   * @returns GetTranslateImageBatchResultResponse
   */
  async getTranslateImageBatchResult(request: $_model.GetTranslateImageBatchResultRequest): Promise<$_model.GetTranslateImageBatchResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslateImageBatchResultWithOptions(request, runtime);
  }

  /**
   * GetTranslateReport
   * 
   * @param request - GetTranslateReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranslateReportResponse
   */
  async getTranslateReportWithOptions(request: $_model.GetTranslateReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranslateReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranslateReport",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranslateReportResponse>(await this.callApi(params, req, runtime), new $_model.GetTranslateReportResponse({}));
  }

  /**
   * GetTranslateReport
   * 
   * @param request - GetTranslateReportRequest
   * @returns GetTranslateReportResponse
   */
  async getTranslateReport(request: $_model.GetTranslateReportRequest): Promise<$_model.GetTranslateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranslateReportWithOptions(request, runtime);
  }

  /**
   * 开通服务
   * 
   * @param request - OpenAlimtServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenAlimtServiceResponse
   */
  async openAlimtServiceWithOptions(request: $_model.OpenAlimtServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenAlimtServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenAlimtService",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenAlimtServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenAlimtServiceResponse({}));
  }

  /**
   * 开通服务
   * 
   * @param request - OpenAlimtServiceRequest
   * @returns OpenAlimtServiceResponse
   */
  async openAlimtService(request: $_model.OpenAlimtServiceRequest): Promise<$_model.OpenAlimtServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openAlimtServiceWithOptions(request, runtime);
  }

  /**
   * 专业文本翻译
   * 
   * @param request - TranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateResponse
   */
  async translateWithOptions(request: $_model.TranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Translate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateResponse>(await this.callApi(params, req, runtime), new $_model.TranslateResponse({}));
  }

  /**
   * 专业文本翻译
   * 
   * @param request - TranslateRequest
   * @returns TranslateResponse
   */
  async translate(request: $_model.TranslateRequest): Promise<$_model.TranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateWithOptions(request, runtime);
  }

  /**
   * TranslateCertificate
   * 
   * @param request - TranslateCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateCertificateResponse
   */
  async translateCertificateWithOptions(request: $_model.TranslateCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateCertificateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificateType)) {
      body["CertificateType"] = request.certificateType;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.resultType)) {
      body["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateCertificate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateCertificateResponse>(await this.callApi(params, req, runtime), new $_model.TranslateCertificateResponse({}));
  }

  /**
   * TranslateCertificate
   * 
   * @param request - TranslateCertificateRequest
   * @returns TranslateCertificateResponse
   */
  async translateCertificate(request: $_model.TranslateCertificateRequest): Promise<$_model.TranslateCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateCertificateWithOptions(request, runtime);
  }

  async translateCertificateAdvance(request: $_model.TranslateCertificateAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateCertificateResponse> {
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
      product: "alimt",
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
    let translateCertificateReq = new $_model.TranslateCertificateRequest({ });
    OpenApiUtil.convert(request, translateCertificateReq);
    if (!$dara.isNull(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      translateCertificateReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let translateCertificateResp = await this.translateCertificateWithOptions(translateCertificateReq, runtime);
    return translateCertificateResp;
  }

  /**
   * TranslateECommerce
   * 
   * @deprecated OpenAPI TranslateECommerce is deprecated, please use alimt::2018-10-12::Translate instead.
   * 
   * @param request - TranslateECommerceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateECommerceResponse
   */
  // Deprecated
  async translateECommerceWithOptions(request: $_model.TranslateECommerceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateECommerceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateECommerce",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateECommerceResponse>(await this.callApi(params, req, runtime), new $_model.TranslateECommerceResponse({}));
  }

  /**
   * TranslateECommerce
   * 
   * @deprecated OpenAPI TranslateECommerce is deprecated, please use alimt::2018-10-12::Translate instead.
   * 
   * @param request - TranslateECommerceRequest
   * @returns TranslateECommerceResponse
   */
  // Deprecated
  async translateECommerce(request: $_model.TranslateECommerceRequest): Promise<$_model.TranslateECommerceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateECommerceWithOptions(request, runtime);
  }

  /**
   * 文本通用翻译
   * 
   * @param request - TranslateGeneralRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateGeneralResponse
   */
  async translateGeneralWithOptions(request: $_model.TranslateGeneralRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateGeneralResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateGeneral",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateGeneralResponse>(await this.callApi(params, req, runtime), new $_model.TranslateGeneralResponse({}));
  }

  /**
   * 文本通用翻译
   * 
   * @param request - TranslateGeneralRequest
   * @returns TranslateGeneralResponse
   */
  async translateGeneral(request: $_model.TranslateGeneralRequest): Promise<$_model.TranslateGeneralResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateGeneralWithOptions(request, runtime);
  }

  /**
   * TranslateGeneralVpc
   * 
   * @param request - TranslateGeneralVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateGeneralVpcResponse
   */
  async translateGeneralVpcWithOptions(request: $_model.TranslateGeneralVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateGeneralVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateGeneralVpc",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateGeneralVpcResponse>(await this.callApi(params, req, runtime), new $_model.TranslateGeneralVpcResponse({}));
  }

  /**
   * TranslateGeneralVpc
   * 
   * @param request - TranslateGeneralVpcRequest
   * @returns TranslateGeneralVpcResponse
   */
  async translateGeneralVpc(request: $_model.TranslateGeneralVpcRequest): Promise<$_model.TranslateGeneralVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateGeneralVpcWithOptions(request, runtime);
  }

  /**
   * 公有云图片翻译产品API
   * 
   * @param request - TranslateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateImageResponse
   */
  async translateImageWithOptions(request: $_model.TranslateImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ext)) {
      body["Ext"] = request.ext;
    }

    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.imageBase64)) {
      body["ImageBase64"] = request.imageBase64;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateImage",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateImageResponse>(await this.callApi(params, req, runtime), new $_model.TranslateImageResponse({}));
  }

  /**
   * 公有云图片翻译产品API
   * 
   * @param request - TranslateImageRequest
   * @returns TranslateImageResponse
   */
  async translateImage(request: $_model.TranslateImageRequest): Promise<$_model.TranslateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateImageWithOptions(request, runtime);
  }

  /**
   * 批量图片翻译接口
   * 
   * @param request - TranslateImageBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateImageBatchResponse
   */
  async translateImageBatchWithOptions(request: $_model.TranslateImageBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateImageBatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customTaskId)) {
      body["CustomTaskId"] = request.customTaskId;
    }

    if (!$dara.isNull(request.ext)) {
      body["Ext"] = request.ext;
    }

    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.imageUrls)) {
      body["ImageUrls"] = request.imageUrls;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateImageBatch",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateImageBatchResponse>(await this.callApi(params, req, runtime), new $_model.TranslateImageBatchResponse({}));
  }

  /**
   * 批量图片翻译接口
   * 
   * @param request - TranslateImageBatchRequest
   * @returns TranslateImageBatchResponse
   */
  async translateImageBatch(request: $_model.TranslateImageBatchRequest): Promise<$_model.TranslateImageBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateImageBatchWithOptions(request, runtime);
  }

  /**
   * 搜索翻译
   * 
   * @param request - TranslateSearchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateSearchResponse
   */
  async translateSearchWithOptions(request: $_model.TranslateSearchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateSearch",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateSearchResponse>(await this.callApi(params, req, runtime), new $_model.TranslateSearchResponse({}));
  }

  /**
   * 搜索翻译
   * 
   * @param request - TranslateSearchRequest
   * @returns TranslateSearchResponse
   */
  async translateSearch(request: $_model.TranslateSearchRequest): Promise<$_model.TranslateSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateSearchWithOptions(request, runtime);
  }

}
