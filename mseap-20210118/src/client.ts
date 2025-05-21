// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mseap", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: $_model.ActivateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.licensePublisher)) {
      query["LicensePublisher"] = request.licensePublisher;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateLicense",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateLicenseResponse>(await this.callApi(params, req, runtime), new $_model.ActivateLicenseResponse({}));
  }

  /**
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: $_model.ActivateLicenseRequest): Promise<$_model.ActivateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * 任务回调
   * 
   * @param request - CallbackTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CallbackTaskResponse
   */
  async callbackTaskWithOptions(request: $_model.CallbackTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CallbackTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.outTaskId)) {
      query["OutTaskId"] = request.outTaskId;
    }

    if (!$dara.isNull(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!$dara.isNull(request.taskData)) {
      query["TaskData"] = request.taskData;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CallbackTask",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CallbackTaskResponse>(await this.callApi(params, req, runtime), new $_model.CallbackTaskResponse({}));
  }

  /**
   * 任务回调
   * 
   * @param request - CallbackTaskRequest
   * @returns CallbackTaskResponse
   */
  async callbackTask(request: $_model.CallbackTaskRequest): Promise<$_model.CallbackTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.callbackTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAgreementStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAgreementStatusResponse
   */
  async describeAgreementStatusWithOptions(request: $_model.DescribeAgreementStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgreementStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agreementCode)) {
      query["AgreementCode"] = request.agreementCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAgreementStatus",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAgreementStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAgreementStatusResponse({}));
  }

  /**
   * @param request - DescribeAgreementStatusRequest
   * @returns DescribeAgreementStatusResponse
   */
  async describeAgreementStatus(request: $_model.DescribeAgreementStatusRequest): Promise<$_model.DescribeAgreementStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAgreementStatusWithOptions(request, runtime);
  }

  /**
   * 合作伙伴生成上传文件策略
   * 
   * @param request - GenerateUploadFilePolicyForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadFilePolicyForPartnerResponse
   */
  async generateUploadFilePolicyForPartnerWithOptions(request: $_model.GenerateUploadFilePolicyForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUploadFilePolicyForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUploadFilePolicyForPartner",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUploadFilePolicyForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUploadFilePolicyForPartnerResponse({}));
  }

  /**
   * 合作伙伴生成上传文件策略
   * 
   * @param request - GenerateUploadFilePolicyForPartnerRequest
   * @returns GenerateUploadFilePolicyForPartnerResponse
   */
  async generateUploadFilePolicyForPartner(request: $_model.GenerateUploadFilePolicyForPartnerRequest): Promise<$_model.GenerateUploadFilePolicyForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUploadFilePolicyForPartnerWithOptions(request, runtime);
  }

  /**
   * 获取node节点通过流程id
   * 
   * @param request - GetNodeByFlowIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeByFlowIdResponse
   */
  async getNodeByFlowIdWithOptions(request: $_model.GetNodeByFlowIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeByFlowIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeByFlowId",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeByFlowIdResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeByFlowIdResponse({}));
  }

  /**
   * 获取node节点通过流程id
   * 
   * @param request - GetNodeByFlowIdRequest
   * @returns GetNodeByFlowIdResponse
   */
  async getNodeByFlowId(request: $_model.GetNodeByFlowIdRequest): Promise<$_model.GetNodeByFlowIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeByFlowIdWithOptions(request, runtime);
  }

  /**
   * 获取node节点通过模版id
   * 
   * @param request - GetNodeByTemplateIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeByTemplateIdResponse
   */
  async getNodeByTemplateIdWithOptions(request: $_model.GetNodeByTemplateIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeByTemplateIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeByTemplateId",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeByTemplateIdResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeByTemplateIdResponse({}));
  }

  /**
   * 获取node节点通过模版id
   * 
   * @param request - GetNodeByTemplateIdRequest
   * @returns GetNodeByTemplateIdResponse
   */
  async getNodeByTemplateId(request: $_model.GetNodeByTemplateIdRequest): Promise<$_model.GetNodeByTemplateIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeByTemplateIdWithOptions(request, runtime);
  }

  /**
   * 合作伙伴获取用户跨平台信息
   * 
   * @param request - GetPlatformUserInfoForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlatformUserInfoForPartnerResponse
   */
  async getPlatformUserInfoForPartnerWithOptions(request: $_model.GetPlatformUserInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlatformUserInfoForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlatformUserInfoForPartner",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlatformUserInfoForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetPlatformUserInfoForPartnerResponse({}));
  }

  /**
   * 合作伙伴获取用户跨平台信息
   * 
   * @param request - GetPlatformUserInfoForPartnerRequest
   * @returns GetPlatformUserInfoForPartnerResponse
   */
  async getPlatformUserInfoForPartner(request: $_model.GetPlatformUserInfoForPartnerRequest): Promise<$_model.GetPlatformUserInfoForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlatformUserInfoForPartnerWithOptions(request, runtime);
  }

  /**
   * 获取代理
   * 
   * @param request - GetProxyByTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProxyByTypeResponse
   */
  async getProxyByTypeWithOptions(request: $_model.GetProxyByTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProxyByTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProxyByType",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProxyByTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetProxyByTypeResponse({}));
  }

  /**
   * 获取代理
   * 
   * @param request - GetProxyByTypeRequest
   * @returns GetProxyByTypeResponse
   */
  async getProxyByType(request: $_model.GetProxyByTypeRequest): Promise<$_model.GetProxyByTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProxyByTypeWithOptions(request, runtime);
  }

  /**
   * 获取redis值
   * 
   * @param request - GetRedisValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRedisValueResponse
   */
  async getRedisValueWithOptions(request: $_model.GetRedisValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRedisValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRedisValue",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRedisValueResponse>(await this.callApi(params, req, runtime), new $_model.GetRedisValueResponse({}));
  }

  /**
   * 获取redis值
   * 
   * @param request - GetRedisValueRequest
   * @returns GetRedisValueResponse
   */
  async getRedisValue(request: $_model.GetRedisValueRequest): Promise<$_model.GetRedisValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRedisValueWithOptions(request, runtime);
  }

  /**
   * 获取变量
   * 
   * @param request - GetVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVariableResponse
   */
  async getVariableWithOptions(request: $_model.GetVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVariable",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVariableResponse>(await this.callApi(params, req, runtime), new $_model.GetVariableResponse({}));
  }

  /**
   * 获取变量
   * 
   * @param request - GetVariableRequest
   * @returns GetVariableResponse
   */
  async getVariable(request: $_model.GetVariableRequest): Promise<$_model.GetVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVariableWithOptions(request, runtime);
  }

  /**
   * 识别验证码
   * 
   * @param request - IdentifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IdentifyCodeResponse
   */
  async identifyCodeWithOptions(request: $_model.IdentifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IdentifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IdentifyCode",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IdentifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.IdentifyCodeResponse({}));
  }

  /**
   * 识别验证码
   * 
   * @param request - IdentifyCodeRequest
   * @returns IdentifyCodeResponse
   */
  async identifyCode(request: $_model.IdentifyCodeRequest): Promise<$_model.IdentifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.identifyCodeWithOptions(request, runtime);
  }

  /**
   * 拉取协议变更识别模型
   * 
   * @param request - PullRpaModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullRpaModelResponse
   */
  async pullRpaModelWithOptions(request: $_model.PullRpaModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PullRpaModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PullRpaModel",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PullRpaModelResponse>(await this.callApi(params, req, runtime), new $_model.PullRpaModelResponse({}));
  }

  /**
   * 拉取协议变更识别模型
   * 
   * @param request - PullRpaModelRequest
   * @returns PullRpaModelResponse
   */
  async pullRpaModel(request: $_model.PullRpaModelRequest): Promise<$_model.PullRpaModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pullRpaModelWithOptions(request, runtime);
  }

  /**
   * RPA拉取任务
   * 
   * @param request - PullTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullTaskResponse
   */
  async pullTaskWithOptions(request: $_model.PullTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PullTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.principalKey)) {
      query["PrincipalKey"] = request.principalKey;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerSecurityTransport)) {
      query["UserCallerSecurityTransport"] = request.userCallerSecurityTransport;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PullTask",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PullTaskResponse>(await this.callApi(params, req, runtime), new $_model.PullTaskResponse({}));
  }

  /**
   * RPA拉取任务
   * 
   * @param request - PullTaskRequest
   * @returns PullTaskResponse
   */
  async pullTask(request: $_model.PullTaskRequest): Promise<$_model.PullTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pullTaskWithOptions(request, runtime);
  }

  /**
   * 推送RPA运行时任务
   * 
   * @param request - PushRpaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushRpaTaskResponse
   */
  async pushRpaTaskWithOptions(request: $_model.PushRpaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushRpaTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.request)) {
      query["Request"] = request.request;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushRpaTask",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushRpaTaskResponse>(await this.callApi(params, req, runtime), new $_model.PushRpaTaskResponse({}));
  }

  /**
   * 推送RPA运行时任务
   * 
   * @param request - PushRpaTaskRequest
   * @returns PushRpaTaskResponse
   */
  async pushRpaTask(request: $_model.PushRpaTaskRequest): Promise<$_model.PushRpaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushRpaTaskWithOptions(request, runtime);
  }

  /**
   * 推送运行时任务明细
   * 
   * @param request - PushRpaTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushRpaTaskDetailResponse
   */
  async pushRpaTaskDetailWithOptions(request: $_model.PushRpaTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushRpaTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.inputData)) {
      query["InputData"] = request.inputData;
    }

    if (!$dara.isNull(request.inputHtml)) {
      query["InputHtml"] = request.inputHtml;
    }

    if (!$dara.isNull(request.inputScreenshot)) {
      query["InputScreenshot"] = request.inputScreenshot;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.modelDetailId)) {
      query["ModelDetailId"] = request.modelDetailId;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.outputData)) {
      query["OutputData"] = request.outputData;
    }

    if (!$dara.isNull(request.outputHtml)) {
      query["OutputHtml"] = request.outputHtml;
    }

    if (!$dara.isNull(request.outputScreenshot)) {
      query["OutputScreenshot"] = request.outputScreenshot;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskDetailId)) {
      query["TaskDetailId"] = request.taskDetailId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushRpaTaskDetail",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushRpaTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.PushRpaTaskDetailResponse({}));
  }

  /**
   * 推送运行时任务明细
   * 
   * @param request - PushRpaTaskDetailRequest
   * @returns PushRpaTaskDetailResponse
   */
  async pushRpaTaskDetail(request: $_model.PushRpaTaskDetailRequest): Promise<$_model.PushRpaTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushRpaTaskDetailWithOptions(request, runtime);
  }

  /**
   * 合作伙伴发送消息通知
   * 
   * @param tmpReq - SendNotificationForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendNotificationForPartnerResponse
   */
  async sendNotificationForPartnerWithOptions(tmpReq: $_model.SendNotificationForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendNotificationForPartnerResponse> {
    tmpReq.validate();
    let request = new $_model.SendNotificationForPartnerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.paramMap)) {
      request.paramMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paramMap, "ParamMap", "json");
    }

    if (!$dara.isNull(tmpReq.smartSubChannels)) {
      request.smartSubChannelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.smartSubChannels, "SmartSubChannels", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.notifycationEventType)) {
      query["NotifycationEventType"] = request.notifycationEventType;
    }

    if (!$dara.isNull(request.paramMapShrink)) {
      query["ParamMap"] = request.paramMapShrink;
    }

    if (!$dara.isNull(request.sendTarget)) {
      query["SendTarget"] = request.sendTarget;
    }

    if (!$dara.isNull(request.smartSubChannelsShrink)) {
      query["SmartSubChannels"] = request.smartSubChannelsShrink;
    }

    if (!$dara.isNull(request.trackId)) {
      query["TrackId"] = request.trackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendNotificationForPartner",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendNotificationForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.SendNotificationForPartnerResponse({}));
  }

  /**
   * 合作伙伴发送消息通知
   * 
   * @param request - SendNotificationForPartnerRequest
   * @returns SendNotificationForPartnerResponse
   */
  async sendNotificationForPartner(request: $_model.SendNotificationForPartnerRequest): Promise<$_model.SendNotificationForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendNotificationForPartnerWithOptions(request, runtime);
  }

  /**
   * redis设置
   * 
   * @param request - SetRedisValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRedisValueResponse
   */
  async setRedisValueWithOptions(request: $_model.SetRedisValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRedisValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunKp)) {
      query["AliyunKp"] = request.aliyunKp;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.originalRequest)) {
      query["OriginalRequest"] = request.originalRequest;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userBid)) {
      query["UserBid"] = request.userBid;
    }

    if (!$dara.isNull(request.userCallerParentId)) {
      query["UserCallerParentId"] = request.userCallerParentId;
    }

    if (!$dara.isNull(request.userCallerType)) {
      query["UserCallerType"] = request.userCallerType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userKp)) {
      query["UserKp"] = request.userKp;
    }

    if (!$dara.isNull(request.userMfaPresent)) {
      query["UserMfaPresent"] = request.userMfaPresent;
    }

    if (!$dara.isNull(request.userSecurityToken)) {
      query["UserSecurityToken"] = request.userSecurityToken;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRedisValue",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRedisValueResponse>(await this.callApi(params, req, runtime), new $_model.SetRedisValueResponse({}));
  }

  /**
   * redis设置
   * 
   * @param request - SetRedisValueRequest
   * @returns SetRedisValueResponse
   */
  async setRedisValue(request: $_model.SetRedisValueRequest): Promise<$_model.SetRedisValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRedisValueWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAgreementStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgreementStatusResponse
   */
  async updateAgreementStatusWithOptions(request: $_model.UpdateAgreementStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgreementStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agreementCode)) {
      query["AgreementCode"] = request.agreementCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgreementStatus",
      version: "2021-01-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgreementStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgreementStatusResponse({}));
  }

  /**
   * @param request - UpdateAgreementStatusRequest
   * @returns UpdateAgreementStatusResponse
   */
  async updateAgreementStatus(request: $_model.UpdateAgreementStatusRequest): Promise<$_model.UpdateAgreementStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgreementStatusWithOptions(request, runtime);
  }

}
