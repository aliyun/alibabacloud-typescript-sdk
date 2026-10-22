// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-zhangjiakou': "websitebuild.aliyuncs.com",
      'ap-southeast-1': "websitebuild-intl.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("websitebuild", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Performs resource allocation for a Supabase instance.
   * 
   * @remarks
   * Queries the information about the Supabase instance associated with a resource.
   * 
   * @param request - AllocateSupabaseForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateSupabaseForAdminResponse
   */
  async allocateSupabaseForAdminWithOptions(request: $_model.AllocateSupabaseForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateSupabaseForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateSupabaseForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateSupabaseForAdminResponse>(await this.callApi(params, req, runtime), new $_model.AllocateSupabaseForAdminResponse({}));
  }

  /**
   * Performs resource allocation for a Supabase instance.
   * 
   * @remarks
   * Queries the information about the Supabase instance associated with a resource.
   * 
   * @param request - AllocateSupabaseForAdminRequest
   * @returns AllocateSupabaseForAdminResponse
   */
  async allocateSupabaseForAdmin(request: $_model.AllocateSupabaseForAdminRequest): Promise<$_model.AllocateSupabaseForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateSupabaseForAdminWithOptions(request, runtime);
  }

  /**
   * Grants a role to a user.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - AssignRbacUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignRbacUserRoleResponse
   */
  async assignRbacUserRoleWithOptions(request: $_model.AssignRbacUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignRbacUserRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.userRoleData)) {
      query["UserRoleData"] = request.userRoleData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignRbacUserRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignRbacUserRoleResponse>(await this.callApi(params, req, runtime), new $_model.AssignRbacUserRoleResponse({}));
  }

  /**
   * Grants a role to a user.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - AssignRbacUserRoleRequest
   * @returns AssignRbacUserRoleResponse
   */
  async assignRbacUserRole(request: $_model.AssignRbacUserRoleRequest): Promise<$_model.AssignRbacUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignRbacUserRoleWithOptions(request, runtime);
  }

  /**
   * Grants proxy-based O&M permissions for an application instance.
   * 
   * @param request - AuthorizeAppProxyOpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeAppProxyOpsResponse
   */
  async authorizeAppProxyOpsWithOptions(request: $_model.AuthorizeAppProxyOpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeAppProxyOpsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeAppProxyOps",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeAppProxyOpsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeAppProxyOpsResponse({}));
  }

  /**
   * Grants proxy-based O&M permissions for an application instance.
   * 
   * @param request - AuthorizeAppProxyOpsRequest
   * @returns AuthorizeAppProxyOpsResponse
   */
  async authorizeAppProxyOps(request: $_model.AuthorizeAppProxyOpsRequest): Promise<$_model.AuthorizeAppProxyOpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeAppProxyOpsWithOptions(request, runtime);
  }

  /**
   * Checks resource usage in batches.
   * 
   * @remarks
   * Manages the Supabase instance information associated with the resources.
   * 
   * @param request - BatchCheckResourceMeasureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCheckResourceMeasureResponse
   */
  async batchCheckResourceMeasureWithOptions(request: $_model.BatchCheckResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCheckResourceMeasureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.belongIdType)) {
      query["BelongIdType"] = request.belongIdType;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.espBizId)) {
      query["EspBizId"] = request.espBizId;
    }

    if (!$dara.isNull(request.orderComponentParams)) {
      query["OrderComponentParams"] = request.orderComponentParams;
    }

    if (!$dara.isNull(request.resourceCheckItems)) {
      query["ResourceCheckItems"] = request.resourceCheckItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCheckResourceMeasure",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCheckResourceMeasureResponse>(await this.callApi(params, req, runtime), new $_model.BatchCheckResourceMeasureResponse({}));
  }

  /**
   * Checks resource usage in batches.
   * 
   * @remarks
   * Manages the Supabase instance information associated with the resources.
   * 
   * @param request - BatchCheckResourceMeasureRequest
   * @returns BatchCheckResourceMeasureResponse
   */
  async batchCheckResourceMeasure(request: $_model.BatchCheckResourceMeasureRequest): Promise<$_model.BatchCheckResourceMeasureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCheckResourceMeasureWithOptions(request, runtime);
  }

  /**
   * Binds a custom domain name to an application and automatically completes DNS resolution verification.
   * 
   * @param request - BindAppDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAppDomainResponse
   */
  async bindAppDomainWithOptions(request: $_model.BindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAppDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAppDomain",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAppDomainResponse>(await this.callApi(params, req, runtime), new $_model.BindAppDomainResponse({}));
  }

  /**
   * Binds a custom domain name to an application and automatically completes DNS resolution verification.
   * 
   * @param request - BindAppDomainRequest
   * @returns BindAppDomainResponse
   */
  async bindAppDomain(request: $_model.BindAppDomainRequest): Promise<$_model.BindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAppDomainWithOptions(request, runtime);
  }

  /**
   * Verifies a verification code.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CheckAppVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAppVerifyCodeResponse
   */
  async checkAppVerifyCodeWithOptions(request: $_model.CheckAppVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAppVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAppVerifyCode",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAppVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.CheckAppVerifyCodeResponse({}));
  }

  /**
   * Verifies a verification code.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CheckAppVerifyCodeRequest
   * @returns CheckAppVerifyCodeResponse
   */
  async checkAppVerifyCode(request: $_model.CheckAppVerifyCodeRequest): Promise<$_model.CheckAppVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAppVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Checks resource usage.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - CheckResourceMeasureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourceMeasureResponse
   */
  async checkResourceMeasureWithOptions(request: $_model.CheckResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckResourceMeasureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.belongIdType)) {
      query["BelongIdType"] = request.belongIdType;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.desiredTotal)) {
      query["DesiredTotal"] = request.desiredTotal;
    }

    if (!$dara.isNull(request.espBizId)) {
      query["EspBizId"] = request.espBizId;
    }

    if (!$dara.isNull(request.orderComponentParams)) {
      query["OrderComponentParams"] = request.orderComponentParams;
    }

    if (!$dara.isNull(request.resourceCode)) {
      query["ResourceCode"] = request.resourceCode;
    }

    if (!$dara.isNull(request.resourceValue)) {
      query["ResourceValue"] = request.resourceValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResourceMeasure",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckResourceMeasureResponse>(await this.callApi(params, req, runtime), new $_model.CheckResourceMeasureResponse({}));
  }

  /**
   * Checks resource usage.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - CheckResourceMeasureRequest
   * @returns CheckResourceMeasureResponse
   */
  async checkResourceMeasure(request: $_model.CheckResourceMeasureRequest): Promise<$_model.CheckResourceMeasureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourceMeasureWithOptions(request, runtime);
  }

  /**
   * Validates user resource metering.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - CheckUserResourceMeasureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUserResourceMeasureResponse
   */
  async checkUserResourceMeasureWithOptions(request: $_model.CheckUserResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUserResourceMeasureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.belongIdType)) {
      query["BelongIdType"] = request.belongIdType;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.desiredTotal)) {
      query["DesiredTotal"] = request.desiredTotal;
    }

    if (!$dara.isNull(request.espBizId)) {
      query["EspBizId"] = request.espBizId;
    }

    if (!$dara.isNull(request.orderComponentParams)) {
      query["OrderComponentParams"] = request.orderComponentParams;
    }

    if (!$dara.isNull(request.resourceCode)) {
      query["ResourceCode"] = request.resourceCode;
    }

    if (!$dara.isNull(request.resourceValue)) {
      query["ResourceValue"] = request.resourceValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUserResourceMeasure",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUserResourceMeasureResponse>(await this.callApi(params, req, runtime), new $_model.CheckUserResourceMeasureResponse({}));
  }

  /**
   * Validates user resource metering.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - CheckUserResourceMeasureRequest
   * @returns CheckUserResourceMeasureResponse
   */
  async checkUserResourceMeasure(request: $_model.CheckUserResourceMeasureRequest): Promise<$_model.CheckUserResourceMeasureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUserResourceMeasureWithOptions(request, runtime);
  }

  /**
   * Converts a trial instance to a paid instance.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ConfirmAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmAppInstanceResponse
   */
  async confirmAppInstanceWithOptions(request: $_model.ConfirmAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.trialBizId)) {
      query["TrialBizId"] = request.trialBizId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmAppInstanceResponse({}));
  }

  /**
   * Converts a trial instance to a paid instance.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ConfirmAppInstanceRequest
   * @returns ConfirmAppInstanceResponse
   */
  async confirmAppInstance(request: $_model.ConfirmAppInstanceRequest): Promise<$_model.ConfirmAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmAppInstanceWithOptions(request, runtime);
  }

  /**
   * Copies the plug-in configuration.
   * 
   * @remarks
   * Retrieves the code generation plug-in configuration information.
   * 
   * @param request - CopyAppPluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyAppPluginConfigResponse
   */
  async copyAppPluginConfigWithOptions(request: $_model.CopyAppPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyAppPluginConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceBizId)) {
      query["SourceBizId"] = request.sourceBizId;
    }

    if (!$dara.isNull(request.targetBizId)) {
      query["TargetBizId"] = request.targetBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyAppPluginConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyAppPluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.CopyAppPluginConfigResponse({}));
  }

  /**
   * Copies the plug-in configuration.
   * 
   * @remarks
   * Retrieves the code generation plug-in configuration information.
   * 
   * @param request - CopyAppPluginConfigRequest
   * @returns CopyAppPluginConfigResponse
   */
  async copyAppPluginConfig(request: $_model.CopyAppPluginConfigRequest): Promise<$_model.CopyAppPluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyAppPluginConfigWithOptions(request, runtime);
  }

  /**
   * Asynchronously initiates a conversation with an AI employee.
   * 
   * @remarks
   * Initiates a WanXiaoZhi 2.0 AI conversation.
   * 
   * @param request - CreateAIStaffChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAIStaffChatResponse
   */
  async createAIStaffChatWithOptions(request: $_model.CreateAIStaffChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIStaffChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metaData)) {
      bodyFlat["MetaData"] = request.metaData;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAIStaffChat",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAIStaffChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateAIStaffChatResponse({}));
  }

  /**
   * Asynchronously initiates a conversation with an AI employee.
   * 
   * @remarks
   * Initiates a WanXiaoZhi 2.0 AI conversation.
   * 
   * @param request - CreateAIStaffChatRequest
   * @returns CreateAIStaffChatResponse
   */
  async createAIStaffChat(request: $_model.CreateAIStaffChatRequest): Promise<$_model.CreateAIStaffChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAIStaffChatWithOptions(request, runtime);
  }

  /**
   * Creates an AI employee session.
   * 
   * @remarks
   * Creates an AI session for Wan Xiaozhi 2.0.
   * 
   * @param request - CreateAIStaffConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAIStaffConversationResponse
   */
  async createAIStaffConversationWithOptions(request: $_model.CreateAIStaffConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIStaffConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAIStaffConversation",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAIStaffConversationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAIStaffConversationResponse({}));
  }

  /**
   * Creates an AI employee session.
   * 
   * @remarks
   * Creates an AI session for Wan Xiaozhi 2.0.
   * 
   * @param request - CreateAIStaffConversationRequest
   * @returns CreateAIStaffConversationResponse
   */
  async createAIStaffConversation(request: $_model.CreateAIStaffConversationRequest): Promise<$_model.CreateAIStaffConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAIStaffConversationWithOptions(request, runtime);
  }

  /**
   * Creates an application assistant agent.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppAssistantAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppAssistantAgentResponse
   */
  async createAppAssistantAgentWithOptions(request: $_model.CreateAppAssistantAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppAssistantAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppAssistantAgent",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppAssistantAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppAssistantAgentResponse({}));
  }

  /**
   * Creates an application assistant agent.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppAssistantAgentRequest
   * @returns CreateAppAssistantAgentResponse
   */
  async createAppAssistantAgent(request: $_model.CreateAppAssistantAgentRequest): Promise<$_model.CreateAppAssistantAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppAssistantAgentWithOptions(request, runtime);
  }

  /**
   * Generates an SSO logon-free URL for the application assistant.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppAssistantAgentSsoLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppAssistantAgentSsoLoginResponse
   */
  async createAppAssistantAgentSsoLoginWithOptions(request: $_model.CreateAppAssistantAgentSsoLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppAssistantAgentSsoLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    if (!$dara.isNull(request.targetUrl)) {
      query["TargetUrl"] = request.targetUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppAssistantAgentSsoLogin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppAssistantAgentSsoLoginResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppAssistantAgentSsoLoginResponse({}));
  }

  /**
   * Generates an SSO logon-free URL for the application assistant.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppAssistantAgentSsoLoginRequest
   * @returns CreateAppAssistantAgentSsoLoginResponse
   */
  async createAppAssistantAgentSsoLogin(request: $_model.CreateAppAssistantAgentSsoLoginRequest): Promise<$_model.CreateAppAssistantAgentSsoLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppAssistantAgentSsoLoginWithOptions(request, runtime);
  }

  /**
   * Initiates an AI conversation with WanXiaoZhi.
   * 
   * @param request - CreateAppChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppChatResponse
   */
  async *createAppChatWithSSE(request: $_model.CreateAppChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateAppChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      body["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppChat",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.CreateAppChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateAppChatResponse({}));
      }

    }
  }

  /**
   * Initiates an AI conversation with WanXiaoZhi.
   * 
   * @param request - CreateAppChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppChatResponse
   */
  async createAppChatWithOptions(request: $_model.CreateAppChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      body["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppChat",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    return $dara.cast<$_model.CreateAppChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppChatResponse({}));
  }

  /**
   * Initiates an AI conversation with WanXiaoZhi.
   * 
   * @param request - CreateAppChatRequest
   * @returns CreateAppChatResponse
   */
  async createAppChat(request: $_model.CreateAppChatRequest): Promise<$_model.CreateAppChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppChatWithOptions(request, runtime);
  }

  /**
   * Creates a website builder application instance.
   * 
   * @param tmpReq - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createAction)) {
      query["CreateAction"] = request.createAction;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
  }

  /**
   * Creates a website builder application instance.
   * 
   * @param request - CreateAppInstanceRequest
   * @returns CreateAppInstanceResponse
   */
  async createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a logon-free ticket.
   * 
   * @param request - CreateAppInstanceTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceTicketResponse
   */
  async createAppInstanceTicketWithOptions(request: $_model.CreateAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstanceTicket",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceTicketResponse({}));
  }

  /**
   * Creates a logon-free ticket.
   * 
   * @param request - CreateAppInstanceTicketRequest
   * @returns CreateAppInstanceTicketResponse
   */
  async createAppInstanceTicket(request: $_model.CreateAppInstanceTicketRequest): Promise<$_model.CreateAppInstanceTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceTicketWithOptions(request, runtime);
  }

  /**
   * Creates an LLM gateway API key for an application instance.
   * 
   * @remarks
   * Retrieves the code generation plugin configuration information.
   * 
   * @param request - CreateAppLlmApiKeyForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppLlmApiKeyForPartnerResponse
   */
  async createAppLlmApiKeyForPartnerWithOptions(request: $_model.CreateAppLlmApiKeyForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppLlmApiKeyForPartnerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      body["IpWhiteList"] = request.ipWhiteList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppLlmApiKeyForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppLlmApiKeyForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppLlmApiKeyForPartnerResponse({}));
  }

  /**
   * Creates an LLM gateway API key for an application instance.
   * 
   * @remarks
   * Retrieves the code generation plugin configuration information.
   * 
   * @param request - CreateAppLlmApiKeyForPartnerRequest
   * @returns CreateAppLlmApiKeyForPartnerResponse
   */
  async createAppLlmApiKeyForPartner(request: $_model.CreateAppLlmApiKeyForPartnerRequest): Promise<$_model.CreateAppLlmApiKeyForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppLlmApiKeyForPartnerWithOptions(request, runtime);
  }

  /**
   * Creates a message notification scenario.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - CreateAppNotificationSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppNotificationSceneResponse
   */
  async createAppNotificationSceneWithOptions(request: $_model.CreateAppNotificationSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppNotificationSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.butlerChannelTypesJson)) {
      query["ButlerChannelTypesJson"] = request.butlerChannelTypesJson;
    }

    if (!$dara.isNull(request.butlerFieldsJson)) {
      query["ButlerFieldsJson"] = request.butlerFieldsJson;
    }

    if (!$dara.isNull(request.channelsJson)) {
      query["ChannelsJson"] = request.channelsJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.emailFieldsJson)) {
      query["EmailFieldsJson"] = request.emailFieldsJson;
    }

    if (!$dara.isNull(request.emailLimitJson)) {
      query["EmailLimitJson"] = request.emailLimitJson;
    }

    if (!$dara.isNull(request.emailRecipientIdsJson)) {
      query["EmailRecipientIdsJson"] = request.emailRecipientIdsJson;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phoneRecipientIdsJson)) {
      query["PhoneRecipientIdsJson"] = request.phoneRecipientIdsJson;
    }

    if (!$dara.isNull(request.smsFieldsJson)) {
      query["SmsFieldsJson"] = request.smsFieldsJson;
    }

    if (!$dara.isNull(request.smsLimitJson)) {
      query["SmsLimitJson"] = request.smsLimitJson;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.triggerEventsJson)) {
      query["TriggerEventsJson"] = request.triggerEventsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppNotificationScene",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppNotificationSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppNotificationSceneResponse({}));
  }

  /**
   * Creates a message notification scenario.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - CreateAppNotificationSceneRequest
   * @returns CreateAppNotificationSceneResponse
   */
  async createAppNotificationScene(request: $_model.CreateAppNotificationSceneRequest): Promise<$_model.CreateAppNotificationSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppNotificationSceneWithOptions(request, runtime);
  }

  /**
   * Creates an application plug-in.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - CreateAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppPluginResponse
   */
  async createAppPluginWithOptions(request: $_model.CreateAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppPluginResponse({}));
  }

  /**
   * Creates an application plug-in.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - CreateAppPluginRequest
   * @returns CreateAppPluginResponse
   */
  async createAppPlugin(request: $_model.CreateAppPluginRequest): Promise<$_model.CreateAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppPluginWithOptions(request, runtime);
  }

  /**
   * Activates the Wanxiaozhi inspiration value service.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppTokenServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppTokenServiceResponse
   */
  async createAppTokenServiceWithOptions(request: $_model.CreateAppTokenServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppTokenServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createAction)) {
      query["CreateAction"] = request.createAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppTokenService",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppTokenServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppTokenServiceResponse({}));
  }

  /**
   * Activates the Wanxiaozhi inspiration value service.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - CreateAppTokenServiceRequest
   * @returns CreateAppTokenServiceResponse
   */
  async createAppTokenService(request: $_model.CreateAppTokenServiceRequest): Promise<$_model.CreateAppTokenServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppTokenServiceWithOptions(request, runtime);
  }

  /**
   * Distributes and generates channel drafts.
   * 
   * @remarks
   * Distributes and generates channel drafts.
   * 
   * @param tmpReq - CreateDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDistributionResponse
   */
  async createDistributionWithOptions(tmpReq: $_model.CreateDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDistributionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDistributionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.channels)) {
      request.channelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channels, "Channels", "json");
    }

    let query = { };
    if (!$dara.isNull(request.articleId)) {
      query["ArticleId"] = request.articleId;
    }

    if (!$dara.isNull(request.channelsShrink)) {
      query["Channels"] = request.channelsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDistribution",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDistributionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDistributionResponse({}));
  }

  /**
   * Distributes and generates channel drafts.
   * 
   * @remarks
   * Distributes and generates channel drafts.
   * 
   * @param request - CreateDistributionRequest
   * @returns CreateDistributionResponse
   */
  async createDistribution(request: $_model.CreateDistributionRequest): Promise<$_model.CreateDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDistributionWithOptions(request, runtime);
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateInspirationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInspirationResponse
   */
  async createInspirationWithOptions(request: $_model.CreateInspirationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspirationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amountspec)) {
      query["Amountspec"] = request.amountspec;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInspiration",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInspirationResponse>(await this.callApi(params, req, runtime), new $_model.CreateInspirationResponse({}));
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateInspirationRequest
   * @returns CreateInspirationResponse
   */
  async createInspiration(request: $_model.CreateInspirationRequest): Promise<$_model.CreateInspirationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInspirationWithOptions(request, runtime);
  }

  /**
   * Submits a logo creation task.
   * 
   * @param request - CreateLogoTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogoTaskResponse
   */
  async createLogoTaskWithOptions(request: $_model.CreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogoTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logoVersion)) {
      query["LogoVersion"] = request.logoVersion;
    }

    if (!$dara.isNull(request.negativePrompt)) {
      query["NegativePrompt"] = request.negativePrompt;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogoTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogoTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogoTaskResponse({}));
  }

  /**
   * Submits a logo creation task.
   * 
   * @param request - CreateLogoTaskRequest
   * @returns CreateLogoTaskResponse
   */
  async createLogoTask(request: $_model.CreateLogoTaskRequest): Promise<$_model.CreateLogoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogoTaskWithOptions(request, runtime);
  }

  /**
   * Creates a subfolder in a parent folder.
   * 
   * @param request - CreateMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaterialDirectoryResponse
   */
  async createMaterialDirectoryWithOptions(request: $_model.CreateMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["ParentDirectoryId"] = request.parentDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMaterialDirectoryResponse({}));
  }

  /**
   * Creates a subfolder in a parent folder.
   * 
   * @param request - CreateMaterialDirectoryRequest
   * @returns CreateMaterialDirectoryResponse
   */
  async createMaterialDirectory(request: $_model.CreateMaterialDirectoryRequest): Promise<$_model.CreateMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * Creates an organizational unit.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - CreateRbacOrgUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRbacOrgUnitResponse
   */
  async createRbacOrgUnitWithOptions(request: $_model.CreateRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacOrgUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.orgUnitData)) {
      query["OrgUnitData"] = request.orgUnitData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRbacOrgUnit",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRbacOrgUnitResponse>(await this.callApi(params, req, runtime), new $_model.CreateRbacOrgUnitResponse({}));
  }

  /**
   * Creates an organizational unit.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - CreateRbacOrgUnitRequest
   * @returns CreateRbacOrgUnitResponse
   */
  async createRbacOrgUnit(request: $_model.CreateRbacOrgUnitRequest): Promise<$_model.CreateRbacOrgUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRbacOrgUnitWithOptions(request, runtime);
  }

  /**
   * Creates an RBAC permission.
   * 
   * @remarks
   * Creates an AI conversation session through Wanxiaozhi 2.0.
   * 
   * @param request - CreateRbacPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRbacPermissionResponse
   */
  async createRbacPermissionWithOptions(request: $_model.CreateRbacPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.permissionData)) {
      query["PermissionData"] = request.permissionData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRbacPermission",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRbacPermissionResponse>(await this.callApi(params, req, runtime), new $_model.CreateRbacPermissionResponse({}));
  }

  /**
   * Creates an RBAC permission.
   * 
   * @remarks
   * Creates an AI conversation session through Wanxiaozhi 2.0.
   * 
   * @param request - CreateRbacPermissionRequest
   * @returns CreateRbacPermissionResponse
   */
  async createRbacPermission(request: $_model.CreateRbacPermissionRequest): Promise<$_model.CreateRbacPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRbacPermissionWithOptions(request, runtime);
  }

  /**
   * Creates an RBAC role.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - CreateRbacRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRbacRoleResponse
   */
  async createRbacRoleWithOptions(request: $_model.CreateRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.roleData)) {
      query["RoleData"] = request.roleData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRbacRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRbacRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRbacRoleResponse({}));
  }

  /**
   * Creates an RBAC role.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - CreateRbacRoleRequest
   * @returns CreateRbacRoleResponse
   */
  async createRbacRole(request: $_model.CreateRbacRoleRequest): Promise<$_model.CreateRbacRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRbacRoleWithOptions(request, runtime);
  }

  /**
   * Deletes and unbinds the SSL certificate associated with a website.
   * 
   * @param request - DeleteAppDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppDomainCertificateResponse
   */
  async deleteAppDomainCertificateWithOptions(request: $_model.DeleteAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppDomainCertificate",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainCertificateResponse({}));
  }

  /**
   * Deletes and unbinds the SSL certificate associated with a website.
   * 
   * @param request - DeleteAppDomainCertificateRequest
   * @returns DeleteAppDomainCertificateResponse
   */
  async deleteAppDomainCertificate(request: $_model.DeleteAppDomainCertificateRequest): Promise<$_model.DeleteAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes an HTTP 301 status code redirect record bound to a website.
   * 
   * @param request - DeleteAppDomainRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppDomainRedirectResponse
   */
  async deleteAppDomainRedirectWithOptions(request: $_model.DeleteAppDomainRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppDomainRedirect",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppDomainRedirectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainRedirectResponse({}));
  }

  /**
   * Deletes an HTTP 301 status code redirect record bound to a website.
   * 
   * @param request - DeleteAppDomainRedirectRequest
   * @returns DeleteAppDomainRedirectResponse
   */
  async deleteAppDomainRedirect(request: $_model.DeleteAppDomainRedirectRequest): Promise<$_model.DeleteAppDomainRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainRedirectWithOptions(request, runtime);
  }

  /**
   * Deletes a file.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppFileResponse
   */
  async deleteAppFileWithOptions(request: $_model.DeleteAppFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppFileResponse({}));
  }

  /**
   * Deletes a file.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppFileRequest
   * @returns DeleteAppFileResponse
   */
  async deleteAppFile(request: $_model.DeleteAppFileRequest): Promise<$_model.DeleteAppFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppFileWithOptions(request, runtime);
  }

  /**
   * Deletes a file.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppInstanceFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceFileResponse
   */
  async deleteAppInstanceFileWithOptions(request: $_model.DeleteAppInstanceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstanceFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstanceFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceFileResponse({}));
  }

  /**
   * Deletes a file.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppInstanceFileRequest
   * @returns DeleteAppInstanceFileResponse
   */
  async deleteAppInstanceFile(request: $_model.DeleteAppInstanceFileRequest): Promise<$_model.DeleteAppInstanceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceFileWithOptions(request, runtime);
  }

  /**
   * Deletes a message notification scenario.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppNotificationSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppNotificationSceneResponse
   */
  async deleteAppNotificationSceneWithOptions(request: $_model.DeleteAppNotificationSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppNotificationSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppNotificationScene",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppNotificationSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppNotificationSceneResponse({}));
  }

  /**
   * Deletes a message notification scenario.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppNotificationSceneRequest
   * @returns DeleteAppNotificationSceneResponse
   */
  async deleteAppNotificationScene(request: $_model.DeleteAppNotificationSceneRequest): Promise<$_model.DeleteAppNotificationSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppNotificationSceneWithOptions(request, runtime);
  }

  /**
   * Deletes an application plugin.
   * 
   * @param request - DeleteAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppPluginResponse
   */
  async deleteAppPluginWithOptions(request: $_model.DeleteAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppPluginResponse({}));
  }

  /**
   * Deletes an application plugin.
   * 
   * @param request - DeleteAppPluginRequest
   * @returns DeleteAppPluginResponse
   */
  async deleteAppPlugin(request: $_model.DeleteAppPluginRequest): Promise<$_model.DeleteAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppPluginWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario recipient.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppSceneRecipientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppSceneRecipientResponse
   */
  async deleteAppSceneRecipientWithOptions(request: $_model.DeleteAppSceneRecipientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSceneRecipientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.recipientId)) {
      query["RecipientId"] = request.recipientId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppSceneRecipient",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppSceneRecipientResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppSceneRecipientResponse({}));
  }

  /**
   * Deletes a scenario recipient.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteAppSceneRecipientRequest
   * @returns DeleteAppSceneRecipientResponse
   */
  async deleteAppSceneRecipient(request: $_model.DeleteAppSceneRecipientRequest): Promise<$_model.DeleteAppSceneRecipientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppSceneRecipientWithOptions(request, runtime);
  }

  /**
   * Deletes a Supabase key.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - DeleteAppSupabaseSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppSupabaseSecretsResponse
   */
  async deleteAppSupabaseSecretsWithOptions(request: $_model.DeleteAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSupabaseSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.keysJson)) {
      query["KeysJson"] = request.keysJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppSupabaseSecrets",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppSupabaseSecretsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppSupabaseSecretsResponse({}));
  }

  /**
   * Deletes a Supabase key.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - DeleteAppSupabaseSecretsRequest
   * @returns DeleteAppSupabaseSecretsResponse
   */
  async deleteAppSupabaseSecrets(request: $_model.DeleteAppSupabaseSecretsRequest): Promise<$_model.DeleteAppSupabaseSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppSupabaseSecretsWithOptions(request, runtime);
  }

  /**
   * Deletes a material folder.
   * 
   * @param request - DeleteMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialDirectoryResponse
   */
  async deleteMaterialDirectoryWithOptions(request: $_model.DeleteMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaterialDirectoryResponse({}));
  }

  /**
   * Deletes a material folder.
   * 
   * @param request - DeleteMaterialDirectoryRequest
   * @returns DeleteMaterialDirectoryResponse
   */
  async deleteMaterialDirectory(request: $_model.DeleteMaterialDirectoryRequest): Promise<$_model.DeleteMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * Deletes a material generation task.
   * 
   * @param tmpReq - DeleteMaterialTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialTaskResponse
   */
  async deleteMaterialTaskWithOptions(tmpReq: $_model.DeleteMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMaterialTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterialTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaterialTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaterialTaskResponse({}));
  }

  /**
   * Deletes a material generation task.
   * 
   * @param request - DeleteMaterialTaskRequest
   * @returns DeleteMaterialTaskResponse
   */
  async deleteMaterialTask(request: $_model.DeleteMaterialTaskRequest): Promise<$_model.DeleteMaterialTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaterialTaskWithOptions(request, runtime);
  }

  /**
   * Deletes an organizational unit.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteRbacOrgUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRbacOrgUnitResponse
   */
  async deleteRbacOrgUnitWithOptions(request: $_model.DeleteRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacOrgUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.orgUnitId)) {
      query["OrgUnitId"] = request.orgUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRbacOrgUnit",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRbacOrgUnitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRbacOrgUnitResponse({}));
  }

  /**
   * Deletes an organizational unit.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteRbacOrgUnitRequest
   * @returns DeleteRbacOrgUnitResponse
   */
  async deleteRbacOrgUnit(request: $_model.DeleteRbacOrgUnitRequest): Promise<$_model.DeleteRbacOrgUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRbacOrgUnitWithOptions(request, runtime);
  }

  /**
   * Deletes an RBAC permission.
   * 
   * @remarks
   * Creates an AI conversation session for WanXiaoZhi 2.0.
   * 
   * @param request - DeleteRbacPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRbacPermissionResponse
   */
  async deleteRbacPermissionWithOptions(request: $_model.DeleteRbacPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.permissionId)) {
      query["PermissionId"] = request.permissionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRbacPermission",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRbacPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRbacPermissionResponse({}));
  }

  /**
   * Deletes an RBAC permission.
   * 
   * @remarks
   * Creates an AI conversation session for WanXiaoZhi 2.0.
   * 
   * @param request - DeleteRbacPermissionRequest
   * @returns DeleteRbacPermissionResponse
   */
  async deleteRbacPermission(request: $_model.DeleteRbacPermissionRequest): Promise<$_model.DeleteRbacPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRbacPermissionWithOptions(request, runtime);
  }

  /**
   * Deletes an RBAC role.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteRbacRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRbacRoleResponse
   */
  async deleteRbacRoleWithOptions(request: $_model.DeleteRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRbacRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRbacRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRbacRoleResponse({}));
  }

  /**
   * Deletes an RBAC role.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - DeleteRbacRoleRequest
   * @returns DeleteRbacRoleResponse
   */
  async deleteRbacRole(request: $_model.DeleteRbacRoleRequest): Promise<$_model.DeleteRbacRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRbacRoleWithOptions(request, runtime);
  }

  /**
   * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
   * 
   * @param request - DescribeAppDomainDnsRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppDomainDnsRecordResponse
   */
  async describeAppDomainDnsRecordWithOptions(request: $_model.DescribeAppDomainDnsRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppDomainDnsRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.purpose)) {
      query["Purpose"] = request.purpose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppDomainDnsRecord",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppDomainDnsRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppDomainDnsRecordResponse({}));
  }

  /**
   * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
   * 
   * @param request - DescribeAppDomainDnsRecordRequest
   * @returns DescribeAppDomainDnsRecordResponse
   */
  async describeAppDomainDnsRecord(request: $_model.DescribeAppDomainDnsRecordRequest): Promise<$_model.DescribeAppDomainDnsRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppDomainDnsRecordWithOptions(request, runtime);
  }

  /**
   * Calls a general API operation.
   * 
   * @param request - DispatchConsoleAPIForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DispatchConsoleAPIForPartnerResponse
   */
  async dispatchConsoleAPIForPartnerWithOptions(request: $_model.DispatchConsoleAPIForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DispatchConsoleAPIForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.liveToken)) {
      query["LiveToken"] = request.liveToken;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.siteHost)) {
      query["SiteHost"] = request.siteHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DispatchConsoleAPIForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DispatchConsoleAPIForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.DispatchConsoleAPIForPartnerResponse({}));
  }

  /**
   * Calls a general API operation.
   * 
   * @param request - DispatchConsoleAPIForPartnerRequest
   * @returns DispatchConsoleAPIForPartnerResponse
   */
  async dispatchConsoleAPIForPartner(request: $_model.DispatchConsoleAPIForPartnerRequest): Promise<$_model.DispatchConsoleAPIForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dispatchConsoleAPIForPartnerWithOptions(request, runtime);
  }

  /**
   * Edits a plug-in configuration.
   * 
   * @param request - EditPluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditPluginConfigResponse
   */
  async editPluginConfigWithOptions(request: $_model.EditPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditPluginConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.pluginConfig)) {
      query["PluginConfig"] = request.pluginConfig;
    }

    if (!$dara.isNull(request.pluginDesc)) {
      query["PluginDesc"] = request.pluginDesc;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditPluginConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditPluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.EditPluginConfigResponse({}));
  }

  /**
   * Edits a plug-in configuration.
   * 
   * @param request - EditPluginConfigRequest
   * @returns EditPluginConfigResponse
   */
  async editPluginConfig(request: $_model.EditPluginConfigRequest): Promise<$_model.EditPluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editPluginConfigWithOptions(request, runtime);
  }

  /**
   * Exports material files.
   * 
   * @param tmpReq - ExportMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportMaterialFileResponse
   */
  async exportMaterialFileWithOptions(tmpReq: $_model.ExportMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportMaterialFileResponse> {
    tmpReq.validate();
    let request = new $_model.ExportMaterialFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.ExportMaterialFileResponse({}));
  }

  /**
   * Exports material files.
   * 
   * @param request - ExportMaterialFileRequest
   * @returns ExportMaterialFileResponse
   */
  async exportMaterialFile(request: $_model.ExportMaterialFileRequest): Promise<$_model.ExportMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportMaterialFileWithOptions(request, runtime);
  }

  /**
   * Exports the RBAC configuration.
   * 
   * @remarks
   * Queries the Supabase instance configuration information corresponding to a resource.
   * 
   * @param request - ExportRbacConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportRbacConfigResponse
   */
  async exportRbacConfigWithOptions(request: $_model.ExportRbacConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportRbacConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportRbacConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportRbacConfigResponse>(await this.callApi(params, req, runtime), new $_model.ExportRbacConfigResponse({}));
  }

  /**
   * Exports the RBAC configuration.
   * 
   * @remarks
   * Queries the Supabase instance configuration information corresponding to a resource.
   * 
   * @param request - ExportRbacConfigRequest
   * @returns ExportRbacConfigResponse
   */
  async exportRbacConfig(request: $_model.ExportRbacConfigRequest): Promise<$_model.ExportRbacConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportRbacConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the site preview URL for WanXiaoZhi 2.0.
   * 
   * @remarks
   * Retrieves the site preview URL for WanXiaoZhi 2.0.
   * 
   * @param request - GetAIStaffPreviewUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIStaffPreviewUrlResponse
   */
  async getAIStaffPreviewUrlWithOptions(request: $_model.GetAIStaffPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIStaffPreviewUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.restart)) {
      body["Restart"] = request.restart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIStaffPreviewUrl",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIStaffPreviewUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAIStaffPreviewUrlResponse({}));
  }

  /**
   * Retrieves the site preview URL for WanXiaoZhi 2.0.
   * 
   * @remarks
   * Retrieves the site preview URL for WanXiaoZhi 2.0.
   * 
   * @param request - GetAIStaffPreviewUrlRequest
   * @returns GetAIStaffPreviewUrlResponse
   */
  async getAIStaffPreviewUrl(request: $_model.GetAIStaffPreviewUrlRequest): Promise<$_model.GetAIStaffPreviewUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIStaffPreviewUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a code workspace.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppCodeWorkspaceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppCodeWorkspaceDetailResponse
   */
  async getAppCodeWorkspaceDetailWithOptions(request: $_model.GetAppCodeWorkspaceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppCodeWorkspaceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppCodeWorkspaceDetail",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppCodeWorkspaceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetAppCodeWorkspaceDetailResponse({}));
  }

  /**
   * Retrieves the details of a code workspace.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppCodeWorkspaceDetailRequest
   * @returns GetAppCodeWorkspaceDetailResponse
   */
  async getAppCodeWorkspaceDetail(request: $_model.GetAppCodeWorkspaceDetailRequest): Promise<$_model.GetAppCodeWorkspaceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppCodeWorkspaceDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a conversation.
   * 
   * @remarks
   * The Wanxiaozhi 2.0 API operation for creating AI conversations.
   * 
   * @param request - GetAppConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConversationResponse
   */
  async getAppConversationWithOptions(request: $_model.GetAppConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConversationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.botId)) {
      query["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppConversation",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppConversationResponse>(await this.callApi(params, req, runtime), new $_model.GetAppConversationResponse({}));
  }

  /**
   * Retrieves the details of a conversation.
   * 
   * @remarks
   * The Wanxiaozhi 2.0 API operation for creating AI conversations.
   * 
   * @param request - GetAppConversationRequest
   * @returns GetAppConversationResponse
   */
  async getAppConversation(request: $_model.GetAppConversationRequest): Promise<$_model.GetAppConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppConversationWithOptions(request, runtime);
  }

  /**
   * Retrieves the lock status of a session.
   * 
   * @remarks
   * The API operation for creating an AI session in Wanxiaozhi 2.0.
   * 
   * @param request - GetAppConversationLockStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConversationLockStatusResponse
   */
  async getAppConversationLockStatusWithOptions(request: $_model.GetAppConversationLockStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConversationLockStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppConversationLockStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppConversationLockStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAppConversationLockStatusResponse({}));
  }

  /**
   * Retrieves the lock status of a session.
   * 
   * @remarks
   * The API operation for creating an AI session in Wanxiaozhi 2.0.
   * 
   * @param request - GetAppConversationLockStatusRequest
   * @returns GetAppConversationLockStatusResponse
   */
  async getAppConversationLockStatus(request: $_model.GetAppConversationLockStatusRequest): Promise<$_model.GetAppConversationLockStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppConversationLockStatusWithOptions(request, runtime);
  }

  /**
   * Queries the table schema of a database.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppDatabaseTableSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppDatabaseTableSchemasResponse
   */
  async getAppDatabaseTableSchemasWithOptions(request: $_model.GetAppDatabaseTableSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppDatabaseTableSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppDatabaseTableSchemas",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppDatabaseTableSchemasResponse>(await this.callApi(params, req, runtime), new $_model.GetAppDatabaseTableSchemasResponse({}));
  }

  /**
   * Queries the table schema of a database.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppDatabaseTableSchemasRequest
   * @returns GetAppDatabaseTableSchemasResponse
   */
  async getAppDatabaseTableSchemas(request: $_model.GetAppDatabaseTableSchemasRequest): Promise<$_model.GetAppDatabaseTableSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppDatabaseTableSchemasWithOptions(request, runtime);
  }

  /**
   * Retrieves a file and its modification time.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppFileContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppFileContentResponse
   */
  async getAppFileContentWithOptions(request: $_model.GetAppFileContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppFileContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppFileContent",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppFileContentResponse>(await this.callApi(params, req, runtime), new $_model.GetAppFileContentResponse({}));
  }

  /**
   * Retrieves a file and its modification time.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppFileContentRequest
   * @returns GetAppFileContentResponse
   */
  async getAppFileContent(request: $_model.GetAppFileContentRequest): Promise<$_model.GetAppFileContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppFileContentWithOptions(request, runtime);
  }

  /**
   * Queries the details of a website builder application instance.
   * 
   * @remarks
   * Queries the details of a website builder application instance.
   * 
   * @param request - GetAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceResponse
   */
  async getAppInstanceWithOptions(request: $_model.GetAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceResponse({}));
  }

  /**
   * Queries the details of a website builder application instance.
   * 
   * @remarks
   * Queries the details of a website builder application instance.
   * 
   * @param request - GetAppInstanceRequest
   * @returns GetAppInstanceResponse
   */
  async getAppInstance(request: $_model.GetAppInstanceRequest): Promise<$_model.GetAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the entitlement information of an application instance.
   * 
   * @remarks
   * Queries the entitlement information of an application instance.
   * 
   * @param request - GetAppInstanceEntitlementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceEntitlementResponse
   */
  async getAppInstanceEntitlementWithOptions(request: $_model.GetAppInstanceEntitlementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceEntitlementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstanceEntitlement",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceEntitlementResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceEntitlementResponse({}));
  }

  /**
   * Queries the entitlement information of an application instance.
   * 
   * @remarks
   * Queries the entitlement information of an application instance.
   * 
   * @param request - GetAppInstanceEntitlementRequest
   * @returns GetAppInstanceEntitlementResponse
   */
  async getAppInstanceEntitlement(request: $_model.GetAppInstanceEntitlementRequest): Promise<$_model.GetAppInstanceEntitlementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceEntitlementWithOptions(request, runtime);
  }

  /**
   * Queries application instance information.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppInstanceForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceForAdminResponse
   */
  async getAppInstanceForAdminWithOptions(request: $_model.GetAppInstanceForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstanceForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceForAdminResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceForAdminResponse({}));
  }

  /**
   * Queries application instance information.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppInstanceForAdminRequest
   * @returns GetAppInstanceForAdminResponse
   */
  async getAppInstanceForAdmin(request: $_model.GetAppInstanceForAdminRequest): Promise<$_model.GetAppInstanceForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceForAdminWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceForPartnerResponse
   */
  async getAppInstanceForPartnerWithOptions(request: $_model.GetAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceForPartnerResponse({}));
  }

  /**
   * Queries the details of an instance.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppInstanceForPartnerRequest
   * @returns GetAppInstanceForPartnerResponse
   */
  async getAppInstanceForPartner(request: $_model.GetAppInstanceForPartnerRequest): Promise<$_model.GetAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Retrieves the temporary short link for an application.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppInstanceTempShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceTempShortUrlResponse
   */
  async getAppInstanceTempShortUrlWithOptions(request: $_model.GetAppInstanceTempShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceTempShortUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstanceTempShortUrl",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceTempShortUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceTempShortUrlResponse({}));
  }

  /**
   * Retrieves the temporary short link for an application.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppInstanceTempShortUrlRequest
   * @returns GetAppInstanceTempShortUrlResponse
   */
  async getAppInstanceTempShortUrl(request: $_model.GetAppInstanceTempShortUrlRequest): Promise<$_model.GetAppInstanceTempShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceTempShortUrlWithOptions(request, runtime);
  }

  /**
   * Queries the details of an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plugin.
   * 
   * @param request - GetAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppPluginResponse
   */
  async getAppPluginWithOptions(request: $_model.GetAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.GetAppPluginResponse({}));
  }

  /**
   * Queries the details of an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plugin.
   * 
   * @param request - GetAppPluginRequest
   * @returns GetAppPluginResponse
   */
  async getAppPlugin(request: $_model.GetAppPluginRequest): Promise<$_model.GetAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPluginWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration information of a plugin.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plugin.
   * 
   * @param request - GetAppPluginConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppPluginConfigResponse
   */
  async getAppPluginConfigWithOptions(request: $_model.GetAppPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPluginConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.pluginId)) {
      body["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppPluginConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppPluginConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAppPluginConfigResponse({}));
  }

  /**
   * Retrieves the configuration information of a plugin.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plugin.
   * 
   * @param request - GetAppPluginConfigRequest
   * @returns GetAppPluginConfigResponse
   */
  async getAppPluginConfig(request: $_model.GetAppPluginConfigRequest): Promise<$_model.GetAppPluginConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPluginConfigWithOptions(request, runtime);
  }

  /**
   * Queries the publish status.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppPublishStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppPublishStatusResponse
   */
  async getAppPublishStatusWithOptions(request: $_model.GetAppPublishStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPublishStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    if (!$dara.isNull(request.websiteDomain)) {
      query["WebsiteDomain"] = request.websiteDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppPublishStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppPublishStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAppPublishStatusResponse({}));
  }

  /**
   * Queries the publish status.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppPublishStatusRequest
   * @returns GetAppPublishStatusResponse
   */
  async getAppPublishStatus(request: $_model.GetAppPublishStatusRequest): Promise<$_model.GetAppPublishStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPublishStatusWithOptions(request, runtime);
  }

  /**
   * Queries recommended commodities.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - GetAppRecommendedCommoditiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppRecommendedCommoditiesResponse
   */
  async getAppRecommendedCommoditiesWithOptions(request: $_model.GetAppRecommendedCommoditiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppRecommendedCommoditiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.resourceConditions)) {
      query["ResourceConditions"] = request.resourceConditions;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppRecommendedCommodities",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppRecommendedCommoditiesResponse>(await this.callApi(params, req, runtime), new $_model.GetAppRecommendedCommoditiesResponse({}));
  }

  /**
   * Queries recommended commodities.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - GetAppRecommendedCommoditiesRequest
   * @returns GetAppRecommendedCommoditiesResponse
   */
  async getAppRecommendedCommodities(request: $_model.GetAppRecommendedCommoditiesRequest): Promise<$_model.GetAppRecommendedCommoditiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppRecommendedCommoditiesWithOptions(request, runtime);
  }

  /**
   * Queries requirements.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppRequirementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppRequirementResponse
   */
  async getAppRequirementWithOptions(request: $_model.GetAppRequirementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppRequirementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppRequirement",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppRequirementResponse>(await this.callApi(params, req, runtime), new $_model.GetAppRequirementResponse({}));
  }

  /**
   * Queries requirements.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppRequirementRequest
   * @returns GetAppRequirementResponse
   */
  async getAppRequirement(request: $_model.GetAppRequirementRequest): Promise<$_model.GetAppRequirementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppRequirementWithOptions(request, runtime);
  }

  /**
   * Retrieves the sandbox preview URL.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - Retrieves the site preview URL.
   * 
   * @param request - GetAppSandboxPreviewUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSandboxPreviewUrlResponse
   */
  async getAppSandboxPreviewUrlWithOptions(request: $_model.GetAppSandboxPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSandboxPreviewUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.restart)) {
      body["Restart"] = request.restart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSandboxPreviewUrl",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSandboxPreviewUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSandboxPreviewUrlResponse({}));
  }

  /**
   * Retrieves the sandbox preview URL.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - Retrieves the site preview URL.
   * 
   * @param request - GetAppSandboxPreviewUrlRequest
   * @returns GetAppSandboxPreviewUrlResponse
   */
  async getAppSandboxPreviewUrl(request: $_model.GetAppSandboxPreviewUrlRequest): Promise<$_model.GetAppSandboxPreviewUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSandboxPreviewUrlWithOptions(request, runtime);
  }

  /**
   * Queries the SEO index status.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSeoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSeoStatusResponse
   */
  async getAppSeoStatusWithOptions(request: $_model.GetAppSeoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSeoStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.seType)) {
      query["SeType"] = request.seType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSeoStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSeoStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSeoStatusResponse({}));
  }

  /**
   * Queries the SEO index status.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSeoStatusRequest
   * @returns GetAppSeoStatusResponse
   */
  async getAppSeoStatus(request: $_model.GetAppSeoStatusRequest): Promise<$_model.GetAppSeoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSeoStatusWithOptions(request, runtime);
  }

  /**
   * SEO index chart.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSeoTrendsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSeoTrendsResponse
   */
  async getAppSeoTrendsWithOptions(request: $_model.GetAppSeoTrendsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSeoTrendsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.seType)) {
      query["SeType"] = request.seType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSeoTrends",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSeoTrendsResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSeoTrendsResponse({}));
  }

  /**
   * SEO index chart.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSeoTrendsRequest
   * @returns GetAppSeoTrendsResponse
   */
  async getAppSeoTrends(request: $_model.GetAppSeoTrendsRequest): Promise<$_model.GetAppSeoTrendsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSeoTrendsWithOptions(request, runtime);
  }

  /**
   * Retrieves the sitemap.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSitemapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSitemapResponse
   */
  async getAppSitemapWithOptions(request: $_model.GetAppSitemapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSitemapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.seType)) {
      query["SeType"] = request.seType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSitemap",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSitemapResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSitemapResponse({}));
  }

  /**
   * Retrieves the sitemap.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetAppSitemapRequest
   * @returns GetAppSitemapResponse
   */
  async getAppSitemap(request: $_model.GetAppSitemapRequest): Promise<$_model.GetAppSitemapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSitemapWithOptions(request, runtime);
  }

  /**
   * Queries the Supabase authentication settings.
   * 
   * @remarks
   * Queries the Supabase instance authentication configuration information for a specified resource.
   * 
   * @param request - GetAppSupabaseAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSupabaseAuthConfigResponse
   */
  async getAppSupabaseAuthConfigWithOptions(request: $_model.GetAppSupabaseAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSupabaseAuthConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSupabaseAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseAuthConfigResponse({}));
  }

  /**
   * Queries the Supabase authentication settings.
   * 
   * @remarks
   * Queries the Supabase instance authentication configuration information for a specified resource.
   * 
   * @param request - GetAppSupabaseAuthConfigRequest
   * @returns GetAppSupabaseAuthConfigResponse
   */
  async getAppSupabaseAuthConfig(request: $_model.GetAppSupabaseAuthConfigRequest): Promise<$_model.GetAppSupabaseAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSupabaseAuthConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a Supabase instance.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppSupabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSupabaseInstanceResponse
   */
  async getAppSupabaseInstanceWithOptions(request: $_model.GetAppSupabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSupabaseInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSupabaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseInstanceResponse({}));
  }

  /**
   * Retrieves information about a Supabase instance.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - GetAppSupabaseInstanceRequest
   * @returns GetAppSupabaseInstanceResponse
   */
  async getAppSupabaseInstance(request: $_model.GetAppSupabaseInstanceRequest): Promise<$_model.GetAppSupabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSupabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Queries Supabase keys.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the specified resource.
   * 
   * @param request - GetAppSupabaseSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSupabaseSecretsResponse
   */
  async getAppSupabaseSecretsWithOptions(request: $_model.GetAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSupabaseSecrets",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSupabaseSecretsResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseSecretsResponse({}));
  }

  /**
   * Queries Supabase keys.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the specified resource.
   * 
   * @param request - GetAppSupabaseSecretsRequest
   * @returns GetAppSupabaseSecretsResponse
   */
  async getAppSupabaseSecrets(request: $_model.GetAppSupabaseSecretsRequest): Promise<$_model.GetAppSupabaseSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSupabaseSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a template.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plug-in.
   * 
   * @param request - GetAppTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppTemplateResponse
   */
  async getAppTemplateWithOptions(request: $_model.GetAppTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppTemplate",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAppTemplateResponse({}));
  }

  /**
   * Queries the details of a template.
   * 
   * @remarks
   * Retrieves the configuration information of a code generation plug-in.
   * 
   * @param request - GetAppTemplateRequest
   * @returns GetAppTemplateResponse
   */
  async getAppTemplate(request: $_model.GetAppTemplateRequest): Promise<$_model.GetAppTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the Wanxiaozhi inspiration value service.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppTokenServiceResponse
   */
  async getAppTokenServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAppTokenServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAppTokenService",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppTokenServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetAppTokenServiceResponse({}));
  }

  /**
   * Queries the Wanxiaozhi inspiration value service.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * @returns GetAppTokenServiceResponse
   */
  async getAppTokenService(): Promise<$_model.GetAppTokenServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppTokenServiceWithOptions(runtime);
  }

  /**
   * Retrieves the directory structure of a workspace.
   * 
   * @remarks
   * Queries the information of an application instance.
   * 
   * @param request - GetAppWorkspaceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppWorkspaceDirectoryResponse
   */
  async getAppWorkspaceDirectoryWithOptions(request: $_model.GetAppWorkspaceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppWorkspaceDirectoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.deep)) {
      body["Deep"] = request.deep;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppWorkspaceDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppWorkspaceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAppWorkspaceDirectoryResponse({}));
  }

  /**
   * Retrieves the directory structure of a workspace.
   * 
   * @remarks
   * Queries the information of an application instance.
   * 
   * @param request - GetAppWorkspaceDirectoryRequest
   * @returns GetAppWorkspaceDirectoryResponse
   */
  async getAppWorkspaceDirectory(request: $_model.GetAppWorkspaceDirectoryRequest): Promise<$_model.GetAppWorkspaceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppWorkspaceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries a logo creation task.
   * 
   * @param request - GetCreateLogoTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateLogoTaskResponse
   */
  async getCreateLogoTaskWithOptions(request: $_model.GetCreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateLogoTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateLogoTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateLogoTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateLogoTaskResponse({}));
  }

  /**
   * Queries a logo creation task.
   * 
   * @param request - GetCreateLogoTaskRequest
   * @returns GetCreateLogoTaskResponse
   */
  async getCreateLogoTask(request: $_model.GetCreateLogoTaskRequest): Promise<$_model.GetCreateLogoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateLogoTaskWithOptions(request, runtime);
  }

  /**
   * Provides a domain name query API for service providers.
   * 
   * @param request - GetDomainInfoForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainInfoForPartnerResponse
   */
  async getDomainInfoForPartnerWithOptions(request: $_model.GetDomainInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainInfoForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainInfoForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainInfoForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainInfoForPartnerResponse({}));
  }

  /**
   * Provides a domain name query API for service providers.
   * 
   * @param request - GetDomainInfoForPartnerRequest
   * @returns GetDomainInfoForPartnerResponse
   */
  async getDomainInfoForPartner(request: $_model.GetDomainInfoForPartnerRequest): Promise<$_model.GetDomainInfoForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainInfoForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the China Internet Content Provider (ICP) filing information of a domain name.
   * 
   * @param request - GetIcpFilingInfoForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIcpFilingInfoForPartnerResponse
   */
  async getIcpFilingInfoForPartnerWithOptions(request: $_model.GetIcpFilingInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIcpFilingInfoForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIcpFilingInfoForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIcpFilingInfoForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetIcpFilingInfoForPartnerResponse({}));
  }

  /**
   * Queries the China Internet Content Provider (ICP) filing information of a domain name.
   * 
   * @param request - GetIcpFilingInfoForPartnerRequest
   * @returns GetIcpFilingInfoForPartnerResponse
   */
  async getIcpFilingInfoForPartner(request: $_model.GetIcpFilingInfoForPartnerRequest): Promise<$_model.GetIcpFilingInfoForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIcpFilingInfoForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the LLM Proxy configuration.
   * 
   * @remarks
   * Queries the Supabase instance configuration information corresponding to a resource.
   * 
   * @param request - GetLlmProxyConfigForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLlmProxyConfigForAdminResponse
   */
  async getLlmProxyConfigForAdminWithOptions(request: $_model.GetLlmProxyConfigForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLlmProxyConfigForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.capability)) {
      query["Capability"] = request.capability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLlmProxyConfigForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLlmProxyConfigForAdminResponse>(await this.callApi(params, req, runtime), new $_model.GetLlmProxyConfigForAdminResponse({}));
  }

  /**
   * Queries the LLM Proxy configuration.
   * 
   * @remarks
   * Queries the Supabase instance configuration information corresponding to a resource.
   * 
   * @param request - GetLlmProxyConfigForAdminRequest
   * @returns GetLlmProxyConfigForAdminResponse
   */
  async getLlmProxyConfigForAdmin(request: $_model.GetLlmProxyConfigForAdminRequest): Promise<$_model.GetLlmProxyConfigForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLlmProxyConfigForAdminWithOptions(request, runtime);
  }

  /**
   * Retrieves the authorization URL for a mini program.
   * 
   * @param request - GetMiniAppAuthUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMiniAppAuthUrlResponse
   */
  async getMiniAppAuthUrlWithOptions(request: $_model.GetMiniAppAuthUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppAuthUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.redirectUri)) {
      query["RedirectUri"] = request.redirectUri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMiniAppAuthUrl",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMiniAppAuthUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetMiniAppAuthUrlResponse({}));
  }

  /**
   * Retrieves the authorization URL for a mini program.
   * 
   * @param request - GetMiniAppAuthUrlRequest
   * @returns GetMiniAppAuthUrlResponse
   */
  async getMiniAppAuthUrl(request: $_model.GetMiniAppAuthUrlRequest): Promise<$_model.GetMiniAppAuthUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMiniAppAuthUrlWithOptions(request, runtime);
  }

  /**
   * Queries the mini programs bound to a site.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param tmpReq - GetMiniAppBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMiniAppBindingResponse
   */
  async getMiniAppBindingWithOptions(tmpReq: $_model.GetMiniAppBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppBindingResponse> {
    tmpReq.validate();
    let request = new $_model.GetMiniAppBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.settingKeys)) {
      request.settingKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settingKeys, "SettingKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.settingKeysShrink)) {
      query["SettingKeys"] = request.settingKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMiniAppBinding",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMiniAppBindingResponse>(await this.callApi(params, req, runtime), new $_model.GetMiniAppBindingResponse({}));
  }

  /**
   * Queries the mini programs bound to a site.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetMiniAppBindingRequest
   * @returns GetMiniAppBindingResponse
   */
  async getMiniAppBinding(request: $_model.GetMiniAppBindingRequest): Promise<$_model.GetMiniAppBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMiniAppBindingWithOptions(request, runtime);
  }

  /**
   * Queries the mini programs attached to an application instance by using a conditional query.
   * 
   * @param request - GetMiniAppBindingForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMiniAppBindingForAdminResponse
   */
  async getMiniAppBindingForAdminWithOptions(request: $_model.GetMiniAppBindingForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppBindingForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.platformAppid)) {
      query["PlatformAppid"] = request.platformAppid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMiniAppBindingForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMiniAppBindingForAdminResponse>(await this.callApi(params, req, runtime), new $_model.GetMiniAppBindingForAdminResponse({}));
  }

  /**
   * Queries the mini programs attached to an application instance by using a conditional query.
   * 
   * @param request - GetMiniAppBindingForAdminRequest
   * @returns GetMiniAppBindingForAdminResponse
   */
  async getMiniAppBindingForAdmin(request: $_model.GetMiniAppBindingForAdminRequest): Promise<$_model.GetMiniAppBindingForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMiniAppBindingForAdminWithOptions(request, runtime);
  }

  /**
   * Generates a file upload policy.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - GetOssUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadPolicyResponse
   */
  async getOssUploadPolicyWithOptions(request: $_model.GetOssUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUploadPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scenario)) {
      body["Scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUploadPolicy",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetOssUploadPolicyResponse({}));
  }

  /**
   * Generates a file upload policy.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - GetOssUploadPolicyRequest
   * @returns GetOssUploadPolicyResponse
   */
  async getOssUploadPolicy(request: $_model.GetOssUploadPolicyRequest): Promise<$_model.GetOssUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssUploadPolicyWithOptions(request, runtime);
  }

  /**
   * Retrieves a temporary download URL.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetTempDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTempDownloadUrlResponse
   */
  async getTempDownloadUrlWithOptions(request: $_model.GetTempDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTempDownloadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTempDownloadUrl",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTempDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetTempDownloadUrlResponse({}));
  }

  /**
   * Retrieves a temporary download URL.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - GetTempDownloadUrlRequest
   * @returns GetTempDownloadUrlResponse
   */
  async getTempDownloadUrl(request: $_model.GetTempDownloadUrlRequest): Promise<$_model.GetTempDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTempDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Exchanges a temporary AccessKey for an access token.
   * 
   * @param request - GetUserAccessTokenForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAccessTokenForPartnerResponse
   */
  async getUserAccessTokenForPartnerWithOptions(request: $_model.GetUserAccessTokenForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAccessTokenForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteHost)) {
      query["SiteHost"] = request.siteHost;
    }

    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAccessTokenForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAccessTokenForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAccessTokenForPartnerResponse({}));
  }

  /**
   * Exchanges a temporary AccessKey for an access token.
   * 
   * @param request - GetUserAccessTokenForPartnerRequest
   * @returns GetUserAccessTokenForPartnerResponse
   */
  async getUserAccessTokenForPartner(request: $_model.GetUserAccessTokenForPartnerRequest): Promise<$_model.GetUserAccessTokenForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAccessTokenForPartnerWithOptions(request, runtime);
  }

  /**
   * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
   * 
   * @param request - GetUserTmpIdentityForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserTmpIdentityForPartnerResponse
   */
  async getUserTmpIdentityForPartnerWithOptions(request: $_model.GetUserTmpIdentityForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserTmpIdentityForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPurpose)) {
      query["AuthPurpose"] = request.authPurpose;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserTmpIdentityForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserTmpIdentityForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetUserTmpIdentityForPartnerResponse({}));
  }

  /**
   * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
   * 
   * @param request - GetUserTmpIdentityForPartnerRequest
   * @returns GetUserTmpIdentityForPartnerResponse
   */
  async getUserTmpIdentityForPartner(request: $_model.GetUserTmpIdentityForPartnerRequest): Promise<$_model.GetUserTmpIdentityForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserTmpIdentityForPartnerWithOptions(request, runtime);
  }

  /**
   * Grants promotional benefits to partners.
   * 
   * @remarks
   * Retrieves the configuration information for the code generation plugin.
   * 
   * @param request - GrantPromotionOfferForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantPromotionOfferForPartnerResponse
   */
  async grantPromotionOfferForPartnerWithOptions(request: $_model.GrantPromotionOfferForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantPromotionOfferForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantPromotionOfferForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantPromotionOfferForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GrantPromotionOfferForPartnerResponse({}));
  }

  /**
   * Grants promotional benefits to partners.
   * 
   * @remarks
   * Retrieves the configuration information for the code generation plugin.
   * 
   * @param request - GrantPromotionOfferForPartnerRequest
   * @returns GrantPromotionOfferForPartnerResponse
   */
  async grantPromotionOfferForPartner(request: $_model.GrantPromotionOfferForPartnerRequest): Promise<$_model.GrantPromotionOfferForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantPromotionOfferForPartnerWithOptions(request, runtime);
  }

  /**
   * Installs an application plugin to the current user account.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - InstallAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAppPluginResponse
   */
  async installAppPluginWithOptions(request: $_model.InstallAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallAppPluginResponse({}));
  }

  /**
   * Installs an application plugin to the current user account.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - InstallAppPluginRequest
   * @returns InstallAppPluginResponse
   */
  async installAppPlugin(request: $_model.InstallAppPluginRequest): Promise<$_model.InstallAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAppPluginWithOptions(request, runtime);
  }

  /**
   * Introspection analysis of免登 accessToken
   * 
   * @param request - IntrospectAppInstanceTicketForPreviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntrospectAppInstanceTicketForPreviewResponse
   */
  async introspectAppInstanceTicketForPreviewWithOptions(request: $_model.IntrospectAppInstanceTicketForPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntrospectAppInstanceTicketForPreview",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntrospectAppInstanceTicketForPreviewResponse>(await this.callApi(params, req, runtime), new $_model.IntrospectAppInstanceTicketForPreviewResponse({}));
  }

  /**
   * Introspection analysis of免登 accessToken
   * 
   * @param request - IntrospectAppInstanceTicketForPreviewRequest
   * @returns IntrospectAppInstanceTicketForPreviewResponse
   */
  async introspectAppInstanceTicketForPreview(request: $_model.IntrospectAppInstanceTicketForPreviewRequest): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.introspectAppInstanceTicketForPreviewWithOptions(request, runtime);
  }

  /**
   * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
   * 
   * @param request - ListAIStaffChatEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIStaffChatEventsResponse
   */
  async listAIStaffChatEventsWithOptions(request: $_model.ListAIStaffChatEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIStaffChatEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.lastEventId)) {
      body["LastEventId"] = request.lastEventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIStaffChatEvents",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIStaffChatEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAIStaffChatEventsResponse({}));
  }

  /**
   * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
   * 
   * @param request - ListAIStaffChatEventsRequest
   * @returns ListAIStaffChatEventsResponse
   */
  async listAIStaffChatEvents(request: $_model.ListAIStaffChatEventsRequest): Promise<$_model.ListAIStaffChatEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIStaffChatEventsWithOptions(request, runtime);
  }

  /**
   * Performs a paging query on the list of conversation messages for an AI agent.
   * 
   * @remarks
   * Queries the AI conversation history for Wanxiaozhi 2.0.
   * 
   * @param request - ListAIStaffChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIStaffChatMessagesResponse
   */
  async listAIStaffChatMessagesWithOptions(request: $_model.ListAIStaffChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIStaffChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startCreateTime)) {
      body["StartCreateTime"] = request.startCreateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIStaffChatMessages",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIStaffChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListAIStaffChatMessagesResponse({}));
  }

  /**
   * Performs a paging query on the list of conversation messages for an AI agent.
   * 
   * @remarks
   * Queries the AI conversation history for Wanxiaozhi 2.0.
   * 
   * @param request - ListAIStaffChatMessagesRequest
   * @returns ListAIStaffChatMessagesResponse
   */
  async listAIStaffChatMessages(request: $_model.ListAIStaffChatMessagesRequest): Promise<$_model.ListAIStaffChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIStaffChatMessagesWithOptions(request, runtime);
  }

  /**
   * Queries the list of application assistant agents.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListAppAssistantAgentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppAssistantAgentsResponse
   */
  async listAppAssistantAgentsWithOptions(request: $_model.ListAppAssistantAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppAssistantAgentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppAssistantAgents",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppAssistantAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppAssistantAgentsResponse({}));
  }

  /**
   * Queries the list of application assistant agents.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListAppAssistantAgentsRequest
   * @returns ListAppAssistantAgentsResponse
   */
  async listAppAssistantAgents(request: $_model.ListAppAssistantAgentsRequest): Promise<$_model.ListAppAssistantAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppAssistantAgentsWithOptions(request, runtime);
  }

  /**
   * Queries the messages in a specified chat.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - AI conversation history query API.
   * 
   * @param request - ListAppChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppChatMessagesResponse
   */
  async listAppChatMessagesWithOptions(request: $_model.ListAppChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatId)) {
      query["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sectionId)) {
      query["SectionId"] = request.sectionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppChatMessages",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppChatMessagesResponse({}));
  }

  /**
   * Queries the messages in a specified chat.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - AI conversation history query API.
   * 
   * @param request - ListAppChatMessagesRequest
   * @returns ListAppChatMessagesResponse
   */
  async listAppChatMessages(request: $_model.ListAppChatMessagesRequest): Promise<$_model.ListAppChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppChatMessagesWithOptions(request, runtime);
  }

  /**
   * The product information data.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppCommoditySpecificationsForPartnerResponse
   */
  // Deprecated
  async listAppCommoditySpecificationsForPartnerWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAppCommoditySpecificationsForPartnerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAppCommoditySpecificationsForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppCommoditySpecificationsForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.ListAppCommoditySpecificationsForPartnerResponse({}));
  }

  /**
   * The product information data.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
   * @returns ListAppCommoditySpecificationsForPartnerResponse
   */
  // Deprecated
  async listAppCommoditySpecificationsForPartner(): Promise<$_model.ListAppCommoditySpecificationsForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppCommoditySpecificationsForPartnerWithOptions(runtime);
  }

  /**
   * Query Website Build Product Details
   * 
   * @remarks
   * Get QR code plugin configuration information
   * 
   * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
   */
  async listAppCommoditySpecificationsV2ForPartnerWithOptions(request: $_model.ListAppCommoditySpecificationsV2ForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppCommoditySpecificationsV2ForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppCommoditySpecificationsV2ForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppCommoditySpecificationsV2ForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.ListAppCommoditySpecificationsV2ForPartnerResponse({}));
  }

  /**
   * Query Website Build Product Details
   * 
   * @remarks
   * Get QR code plugin configuration information
   * 
   * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
   * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
   */
  async listAppCommoditySpecificationsV2ForPartner(request: $_model.ListAppCommoditySpecificationsV2ForPartnerRequest): Promise<$_model.ListAppCommoditySpecificationsV2ForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppCommoditySpecificationsV2ForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the list of conversation messages by paging.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - API for querying AI session history information.
   * 
   * @param request - ListAppConversationMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppConversationMessagesResponse
   */
  async listAppConversationMessagesWithOptions(request: $_model.ListAppConversationMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConversationMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startCreateTime)) {
      query["StartCreateTime"] = request.startCreateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppConversationMessages",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppConversationMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppConversationMessagesResponse({}));
  }

  /**
   * Queries the list of conversation messages by paging.
   * 
   * @remarks
   * Wanxiaozhi 2.0 - API for querying AI session history information.
   * 
   * @param request - ListAppConversationMessagesRequest
   * @returns ListAppConversationMessagesResponse
   */
  async listAppConversationMessages(request: $_model.ListAppConversationMessagesRequest): Promise<$_model.ListAppConversationMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppConversationMessagesWithOptions(request, runtime);
  }

  /**
   * Queries the conversation list.
   * 
   * @remarks
   * Creates an AI conversation in Wanxiaozhi 2.0.
   * 
   * @param request - ListAppConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppConversationsResponse
   */
  async listAppConversationsWithOptions(request: $_model.ListAppConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConversationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.botId)) {
      query["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.endModifyTime)) {
      query["EndModifyTime"] = request.endModifyTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startModifyTime)) {
      query["StartModifyTime"] = request.startModifyTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppConversations",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppConversationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppConversationsResponse({}));
  }

  /**
   * Queries the conversation list.
   * 
   * @remarks
   * Creates an AI conversation in Wanxiaozhi 2.0.
   * 
   * @param request - ListAppConversationsRequest
   * @returns ListAppConversationsResponse
   */
  async listAppConversations(request: $_model.ListAppConversationsRequest): Promise<$_model.ListAppConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppConversationsWithOptions(request, runtime);
  }

  /**
   * Queries the list of HTTP 301 status codes for a website.
   * 
   * @param request - ListAppDomainRedirectRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppDomainRedirectRecordsResponse
   */
  async listAppDomainRedirectRecordsWithOptions(request: $_model.ListAppDomainRedirectRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppDomainRedirectRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppDomainRedirectRecords",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppDomainRedirectRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppDomainRedirectRecordsResponse({}));
  }

  /**
   * Queries the list of HTTP 301 status codes for a website.
   * 
   * @param request - ListAppDomainRedirectRecordsRequest
   * @returns ListAppDomainRedirectRecordsResponse
   */
  async listAppDomainRedirectRecords(request: $_model.ListAppDomainRedirectRecordsRequest): Promise<$_model.ListAppDomainRedirectRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppDomainRedirectRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the domain names bound to a website.
   * 
   * @param request - ListAppInstanceDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstanceDomainsResponse
   */
  async listAppInstanceDomainsWithOptions(request: $_model.ListAppInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstanceDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainKeyword)) {
      query["DomainKeyword"] = request.domainKeyword;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusQueryMode)) {
      query["StatusQueryMode"] = request.statusQueryMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstanceDomains",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstanceDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstanceDomainsResponse({}));
  }

  /**
   * Queries the domain names bound to a website.
   * 
   * @param request - ListAppInstanceDomainsRequest
   * @returns ListAppInstanceDomainsResponse
   */
  async listAppInstanceDomains(request: $_model.ListAppInstanceDomainsRequest): Promise<$_model.ListAppInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * Queries a list of application instances.
   * 
   * @param tmpReq - ListAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstancesResponse
   */
  async listAppInstancesWithOptions(tmpReq: $_model.ListAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAppInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizIds)) {
      request.bizIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizIds, "BizIds", "json");
    }

    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizIdsShrink)) {
      query["BizIds"] = request.bizIdsShrink;
    }

    if (!$dara.isNull(request.endTimeBegin)) {
      query["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstances",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstancesResponse({}));
  }

  /**
   * Queries a list of application instances.
   * 
   * @param request - ListAppInstancesRequest
   * @returns ListAppInstancesResponse
   */
  async listAppInstances(request: $_model.ListAppInstancesRequest): Promise<$_model.ListAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of code generation plug-in configurations.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListAppPluginConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPluginConfigsResponse
   */
  async listAppPluginConfigsWithOptions(request: $_model.ListAppPluginConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPluginConfigs",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPluginConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPluginConfigsResponse({}));
  }

  /**
   * Retrieves the list of code generation plug-in configurations.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListAppPluginConfigsRequest
   * @returns ListAppPluginConfigsResponse
   */
  async listAppPluginConfigs(request: $_model.ListAppPluginConfigsRequest): Promise<$_model.ListAppPluginConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPluginConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the list of application plugin files.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListAppPluginFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPluginFilesResponse
   */
  async listAppPluginFilesWithOptions(request: $_model.ListAppPluginFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPluginFiles",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPluginFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPluginFilesResponse({}));
  }

  /**
   * Queries the list of application plugin files.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListAppPluginFilesRequest
   * @returns ListAppPluginFilesResponse
   */
  async listAppPluginFiles(request: $_model.ListAppPluginFilesRequest): Promise<$_model.ListAppPluginFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPluginFilesWithOptions(request, runtime);
  }

  /**
   * Queries the application plug-in versions.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListAppPluginVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPluginVersionsResponse
   */
  async listAppPluginVersionsWithOptions(request: $_model.ListAppPluginVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPluginVersions",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPluginVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPluginVersionsResponse({}));
  }

  /**
   * Queries the application plug-in versions.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListAppPluginVersionsRequest
   * @returns ListAppPluginVersionsResponse
   */
  async listAppPluginVersions(request: $_model.ListAppPluginVersionsRequest): Promise<$_model.ListAppPluginVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPluginVersionsWithOptions(request, runtime);
  }

  /**
   * Lists application plugins.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plugins.
   * 
   * @param request - ListAppPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPluginsResponse
   */
  async listAppPluginsWithOptions(request: $_model.ListAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPlugins",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPluginsResponse({}));
  }

  /**
   * Lists application plugins.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plugins.
   * 
   * @param request - ListAppPluginsRequest
   * @returns ListAppPluginsResponse
   */
  async listAppPlugins(request: $_model.ListAppPluginsRequest): Promise<$_model.ListAppPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPluginsWithOptions(request, runtime);
  }

  /**
   * Queries the release history.
   * 
   * @remarks
   * Queries the information about application instances.
   * 
   * @param request - ListAppPublishHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPublishHistoryResponse
   */
  async listAppPublishHistoryWithOptions(request: $_model.ListAppPublishHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPublishHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deployChannel)) {
      query["DeployChannel"] = request.deployChannel;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.publishEnv)) {
      query["PublishEnv"] = request.publishEnv;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subchannel)) {
      query["Subchannel"] = request.subchannel;
    }

    if (!$dara.isNull(request.websiteDomain)) {
      query["WebsiteDomain"] = request.websiteDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPublishHistory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPublishHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPublishHistoryResponse({}));
  }

  /**
   * Queries the release history.
   * 
   * @remarks
   * Queries the information about application instances.
   * 
   * @param request - ListAppPublishHistoryRequest
   * @returns ListAppPublishHistoryResponse
   */
  async listAppPublishHistory(request: $_model.ListAppPublishHistoryRequest): Promise<$_model.ListAppPublishHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPublishHistoryWithOptions(request, runtime);
  }

  /**
   * Queries a list of dictionaries.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListAppTemplateDictsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppTemplateDictsResponse
   */
  async listAppTemplateDictsWithOptions(request: $_model.ListAppTemplateDictsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppTemplateDictsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dictType)) {
      query["DictType"] = request.dictType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppTemplateDicts",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppTemplateDictsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppTemplateDictsResponse({}));
  }

  /**
   * Queries a list of dictionaries.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListAppTemplateDictsRequest
   * @returns ListAppTemplateDictsResponse
   */
  async listAppTemplateDicts(request: $_model.ListAppTemplateDictsRequest): Promise<$_model.ListAppTemplateDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppTemplateDictsWithOptions(request, runtime);
  }

  /**
   * Queries a list of templates.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListAppTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppTemplatesResponse
   */
  async listAppTemplatesWithOptions(request: $_model.ListAppTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.colorScheme)) {
      query["ColorScheme"] = request.colorScheme;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppTemplates",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppTemplatesResponse({}));
  }

  /**
   * Queries a list of templates.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListAppTemplatesRequest
   * @returns ListAppTemplatesResponse
   */
  async listAppTemplates(request: $_model.ListAppTemplatesRequest): Promise<$_model.ListAppTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the Alipay ISV plugin configuration.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListIsvPaymentPluginConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIsvPaymentPluginConfigsResponse
   */
  async listIsvPaymentPluginConfigsWithOptions(request: $_model.ListIsvPaymentPluginConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIsvPaymentPluginConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIsvPaymentPluginConfigs",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIsvPaymentPluginConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListIsvPaymentPluginConfigsResponse({}));
  }

  /**
   * Queries the Alipay ISV plugin configuration.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListIsvPaymentPluginConfigsRequest
   * @returns ListIsvPaymentPluginConfigsResponse
   */
  async listIsvPaymentPluginConfigs(request: $_model.ListIsvPaymentPluginConfigsRequest): Promise<$_model.ListIsvPaymentPluginConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIsvPaymentPluginConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the list of application plug-ins in the marketplace.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListMarketplaceAppPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMarketplaceAppPluginsResponse
   */
  async listMarketplaceAppPluginsWithOptions(request: $_model.ListMarketplaceAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMarketplaceAppPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMarketplaceAppPlugins",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMarketplaceAppPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListMarketplaceAppPluginsResponse({}));
  }

  /**
   * Queries the list of application plug-ins in the marketplace.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListMarketplaceAppPluginsRequest
   * @returns ListMarketplaceAppPluginsResponse
   */
  async listMarketplaceAppPlugins(request: $_model.ListMarketplaceAppPluginsRequest): Promise<$_model.ListMarketplaceAppPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMarketplaceAppPluginsWithOptions(request, runtime);
  }

  /**
   * Queries the list of application plugins.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plugins.
   * 
   * @param request - ListMyAppPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyAppPluginsResponse
   */
  async listMyAppPluginsWithOptions(request: $_model.ListMyAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyAppPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyAppPlugins",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyAppPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListMyAppPluginsResponse({}));
  }

  /**
   * Queries the list of application plugins.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plugins.
   * 
   * @param request - ListMyAppPluginsRequest
   * @returns ListMyAppPluginsResponse
   */
  async listMyAppPlugins(request: $_model.ListMyAppPluginsRequest): Promise<$_model.ListMyAppPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMyAppPluginsWithOptions(request, runtime);
  }

  /**
   * Queries the list of application plug-ins that you have installed.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListMyInstalledAppPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyInstalledAppPluginsResponse
   */
  async listMyInstalledAppPluginsWithOptions(request: $_model.ListMyInstalledAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyInstalledAppPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyInstalledAppPlugins",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyInstalledAppPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListMyInstalledAppPluginsResponse({}));
  }

  /**
   * Queries the list of application plug-ins that you have installed.
   * 
   * @remarks
   * Retrieves the configuration information of code generation plug-ins.
   * 
   * @param request - ListMyInstalledAppPluginsRequest
   * @returns ListMyInstalledAppPluginsResponse
   */
  async listMyInstalledAppPlugins(request: $_model.ListMyInstalledAppPluginsRequest): Promise<$_model.ListMyInstalledAppPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMyInstalledAppPluginsWithOptions(request, runtime);
  }

  /**
   * Queries the list of partner promotional activities.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListPromotionActivitiesForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromotionActivitiesForPartnerResponse
   */
  async listPromotionActivitiesForPartnerWithOptions(request: $_model.ListPromotionActivitiesForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromotionActivitiesForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromotionActivitiesForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromotionActivitiesForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.ListPromotionActivitiesForPartnerResponse({}));
  }

  /**
   * Queries the list of partner promotional activities.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListPromotionActivitiesForPartnerRequest
   * @returns ListPromotionActivitiesForPartnerResponse
   */
  async listPromotionActivitiesForPartner(request: $_model.ListPromotionActivitiesForPartnerRequest): Promise<$_model.ListPromotionActivitiesForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPromotionActivitiesForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the benefit issuance records of a partner.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListPromotionOfferRecordsForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromotionOfferRecordsForPartnerResponse
   */
  async listPromotionOfferRecordsForPartnerWithOptions(request: $_model.ListPromotionOfferRecordsForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromotionOfferRecordsForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromotionOfferRecordsForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromotionOfferRecordsForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.ListPromotionOfferRecordsForPartnerResponse({}));
  }

  /**
   * Queries the benefit issuance records of a partner.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ListPromotionOfferRecordsForPartnerRequest
   * @returns ListPromotionOfferRecordsForPartnerResponse
   */
  async listPromotionOfferRecordsForPartner(request: $_model.ListPromotionOfferRecordsForPartnerRequest): Promise<$_model.ListPromotionOfferRecordsForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPromotionOfferRecordsForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the RBAC organization tree.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListRbacOrgTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRbacOrgTreeResponse
   */
  async listRbacOrgTreeWithOptions(request: $_model.ListRbacOrgTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacOrgTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRbacOrgTree",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRbacOrgTreeResponse>(await this.callApi(params, req, runtime), new $_model.ListRbacOrgTreeResponse({}));
  }

  /**
   * Queries the RBAC organization tree.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - ListRbacOrgTreeRequest
   * @returns ListRbacOrgTreeResponse
   */
  async listRbacOrgTree(request: $_model.ListRbacOrgTreeRequest): Promise<$_model.ListRbacOrgTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRbacOrgTreeWithOptions(request, runtime);
  }

  /**
   * Queries the RBAC permission list.
   * 
   * @remarks
   * Creates an AI conversation session through WanXiaoZhi 2.0.
   * 
   * @param request - ListRbacPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRbacPermissionsResponse
   */
  async listRbacPermissionsWithOptions(request: $_model.ListRbacPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacPermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRbacPermissions",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRbacPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRbacPermissionsResponse({}));
  }

  /**
   * Queries the RBAC permission list.
   * 
   * @remarks
   * Creates an AI conversation session through WanXiaoZhi 2.0.
   * 
   * @param request - ListRbacPermissionsRequest
   * @returns ListRbacPermissionsResponse
   */
  async listRbacPermissions(request: $_model.ListRbacPermissionsRequest): Promise<$_model.ListRbacPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRbacPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the RBAC role hierarchy.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListRbacRoleHierarchyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRbacRoleHierarchyResponse
   */
  async listRbacRoleHierarchyWithOptions(request: $_model.ListRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacRoleHierarchyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRbacRoleHierarchy",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRbacRoleHierarchyResponse>(await this.callApi(params, req, runtime), new $_model.ListRbacRoleHierarchyResponse({}));
  }

  /**
   * Queries the RBAC role hierarchy.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListRbacRoleHierarchyRequest
   * @returns ListRbacRoleHierarchyResponse
   */
  async listRbacRoleHierarchy(request: $_model.ListRbacRoleHierarchyRequest): Promise<$_model.ListRbacRoleHierarchyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRbacRoleHierarchyWithOptions(request, runtime);
  }

  /**
   * Queries the list of RBAC roles.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListRbacRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRbacRolesResponse
   */
  async listRbacRolesWithOptions(request: $_model.ListRbacRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRbacRoles",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRbacRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRbacRolesResponse({}));
  }

  /**
   * Queries the list of RBAC roles.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - ListRbacRolesRequest
   * @returns ListRbacRolesResponse
   */
  async listRbacRoles(request: $_model.ListRbacRolesRequest): Promise<$_model.ListRbacRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRbacRolesWithOptions(request, runtime);
  }

  /**
   * Modifies the specifications of a website building application instance.
   * 
   * @remarks
   * Modifies the specifications of a website building application instance.
   * 
   * @param request - ModifyAppInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInstanceSpecResponse
   */
  async modifyAppInstanceSpecWithOptions(request: $_model.ModifyAppInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppInstanceSpec",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceSpecResponse({}));
  }

  /**
   * Modifies the specifications of a website building application instance.
   * 
   * @remarks
   * Modifies the specifications of a website building application instance.
   * 
   * @param request - ModifyAppInstanceSpecRequest
   * @returns ModifyAppInstanceSpecResponse
   */
  async modifyAppInstanceSpec(request: $_model.ModifyAppInstanceSpecRequest): Promise<$_model.ModifyAppInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Updates a material folder.
   * 
   * @param request - ModifyMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialDirectoryResponse
   */
  async modifyMaterialDirectoryWithOptions(request: $_model.ModifyMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialDirectoryResponse({}));
  }

  /**
   * Updates a material folder.
   * 
   * @param request - ModifyMaterialDirectoryRequest
   * @returns ModifyMaterialDirectoryResponse
   */
  async modifyMaterialDirectory(request: $_model.ModifyMaterialDirectoryRequest): Promise<$_model.ModifyMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * Updates a material file.
   * 
   * @param request - ModifyMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialFileResponse
   */
  async modifyMaterialFileWithOptions(request: $_model.ModifyMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileResponse({}));
  }

  /**
   * Updates a material file.
   * 
   * @param request - ModifyMaterialFileRequest
   * @returns ModifyMaterialFileResponse
   */
  async modifyMaterialFile(request: $_model.ModifyMaterialFileRequest): Promise<$_model.ModifyMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialFileWithOptions(request, runtime);
  }

  /**
   * Updates the status of material files.
   * 
   * @param tmpReq - ModifyMaterialFileStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialFileStatusResponse
   */
  async modifyMaterialFileStatusWithOptions(tmpReq: $_model.ModifyMaterialFileStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileStatusResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyMaterialFileStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialFileStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialFileStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileStatusResponse({}));
  }

  /**
   * Updates the status of material files.
   * 
   * @param request - ModifyMaterialFileStatusRequest
   * @returns ModifyMaterialFileStatusResponse
   */
  async modifyMaterialFileStatus(request: $_model.ModifyMaterialFileStatusRequest): Promise<$_model.ModifyMaterialFileStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialFileStatusWithOptions(request, runtime);
  }

  /**
   * Moves an asset folder.
   * 
   * @param request - MoveMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveMaterialDirectoryResponse
   */
  async moveMaterialDirectoryWithOptions(request: $_model.MoveMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["ParentDirectoryId"] = request.parentDirectoryId;
    }

    if (!$dara.isNull(request.sortNum)) {
      query["SortNum"] = request.sortNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.MoveMaterialDirectoryResponse({}));
  }

  /**
   * Moves an asset folder.
   * 
   * @param request - MoveMaterialDirectoryRequest
   * @returns MoveMaterialDirectoryResponse
   */
  async moveMaterialDirectory(request: $_model.MoveMaterialDirectoryRequest): Promise<$_model.MoveMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * Moves asset files.
   * 
   * @param tmpReq - MoveMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveMaterialFileResponse
   */
  async moveMaterialFileWithOptions(tmpReq: $_model.MoveMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialFileResponse> {
    tmpReq.validate();
    let request = new $_model.MoveMaterialFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.MoveMaterialFileResponse({}));
  }

  /**
   * Moves asset files.
   * 
   * @param request - MoveMaterialFileRequest
   * @returns MoveMaterialFileResponse
   */
  async moveMaterialFile(request: $_model.MoveMaterialFileRequest): Promise<$_model.MoveMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveMaterialFileWithOptions(request, runtime);
  }

  /**
   * Triggers a data change notification for administrators.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - NotifyAppNotificationForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NotifyAppNotificationForAdminResponse
   */
  async notifyAppNotificationForAdminWithOptions(request: $_model.NotifyAppNotificationForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NotifyAppNotificationForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.payload)) {
      query["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NotifyAppNotificationForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NotifyAppNotificationForAdminResponse>(await this.callApi(params, req, runtime), new $_model.NotifyAppNotificationForAdminResponse({}));
  }

  /**
   * Triggers a data change notification for administrators.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - NotifyAppNotificationForAdminRequest
   * @returns NotifyAppNotificationForAdminResponse
   */
  async notifyAppNotificationForAdmin(request: $_model.NotifyAppNotificationForAdminRequest): Promise<$_model.NotifyAppNotificationForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.notifyAppNotificationForAdminWithOptions(request, runtime);
  }

  /**
   * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
   * 
   * @param request - OfflineAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineAppInstanceResponse
   */
  async offlineAppInstanceWithOptions(request: $_model.OfflineAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.OfflineAppInstanceResponse({}));
  }

  /**
   * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
   * 
   * @param request - OfflineAppInstanceRequest
   * @returns OfflineAppInstanceResponse
   */
  async offlineAppInstance(request: $_model.OfflineAppInstanceRequest): Promise<$_model.OfflineAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineAppInstanceWithOptions(request, runtime);
  }

  /**
   * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
   * 
   * @param request - OnlineAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineAppInstanceResponse
   */
  async onlineAppInstanceWithOptions(request: $_model.OnlineAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.OnlineAppInstanceResponse({}));
  }

  /**
   * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
   * 
   * @param request - OnlineAppInstanceRequest
   * @returns OnlineAppInstanceResponse
   */
  async onlineAppInstance(request: $_model.OnlineAppInstanceRequest): Promise<$_model.OnlineAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineAppInstanceWithOptions(request, runtime);
  }

  /**
   * Operates an application by a partner.
   * 
   * @param request - OperateAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppInstanceForPartnerResponse
   */
  async operateAppInstanceForPartnerWithOptions(request: $_model.OperateAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppInstanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateEvent)) {
      query["OperateEvent"] = request.operateEvent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppInstanceForPartnerResponse({}));
  }

  /**
   * Operates an application by a partner.
   * 
   * @param request - OperateAppInstanceForPartnerRequest
   * @returns OperateAppInstanceForPartnerResponse
   */
  async operateAppInstanceForPartner(request: $_model.OperateAppInstanceForPartnerRequest): Promise<$_model.OperateAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Operates application services on behalf of a partner.
   * 
   * @param request - OperateAppServiceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppServiceForPartnerResponse
   */
  async operateAppServiceForPartnerWithOptions(request: $_model.OperateAppServiceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppServiceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateEvent)) {
      query["OperateEvent"] = request.operateEvent;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAppServiceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppServiceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppServiceForPartnerResponse({}));
  }

  /**
   * Operates application services on behalf of a partner.
   * 
   * @param request - OperateAppServiceForPartnerRequest
   * @returns OperateAppServiceForPartnerResponse
   */
  async operateAppServiceForPartner(request: $_model.OperateAppServiceForPartnerRequest): Promise<$_model.OperateAppServiceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppServiceForPartnerWithOptions(request, runtime);
  }

  /**
   * Switches the like statistics for a template.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - OperateAppTemplateLikeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppTemplateLikeResponse
   */
  async operateAppTemplateLikeWithOptions(request: $_model.OperateAppTemplateLikeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppTemplateLikeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.liked)) {
      query["Liked"] = request.liked;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAppTemplateLike",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppTemplateLikeResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppTemplateLikeResponse({}));
  }

  /**
   * Switches the like statistics for a template.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - OperateAppTemplateLikeRequest
   * @returns OperateAppTemplateLikeResponse
   */
  async operateAppTemplateLike(request: $_model.OperateAppTemplateLikeRequest): Promise<$_model.OperateAppTemplateLikeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppTemplateLikeWithOptions(request, runtime);
  }

  /**
   * Retrieves the Supabase instance information for the operated resource.
   * 
   * @remarks
   * The Supabase instance information for the operated resource.
   * 
   * @param request - OperateSupabaseForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateSupabaseForAdminResponse
   */
  async operateSupabaseForAdminWithOptions(request: $_model.OperateSupabaseForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateSupabaseForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.executeSql)) {
      query["ExecuteSql"] = request.executeSql;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.orderByClause)) {
      query["OrderByClause"] = request.orderByClause;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.whereClause)) {
      query["WhereClause"] = request.whereClause;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateSupabaseForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateSupabaseForAdminResponse>(await this.callApi(params, req, runtime), new $_model.OperateSupabaseForAdminResponse({}));
  }

  /**
   * Retrieves the Supabase instance information for the operated resource.
   * 
   * @remarks
   * The Supabase instance information for the operated resource.
   * 
   * @param request - OperateSupabaseForAdminRequest
   * @returns OperateSupabaseForAdminResponse
   */
  async operateSupabaseForAdmin(request: $_model.OperateSupabaseForAdminRequest): Promise<$_model.OperateSupabaseForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateSupabaseForAdminWithOptions(request, runtime);
  }

  /**
   * Publishes an application instance.
   * 
   * @remarks
   * Queries the application instance information.
   * 
   * @param request - PublishAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishAppInstanceResponse
   */
  async publishAppInstanceWithOptions(request: $_model.PublishAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deployChannel)) {
      query["DeployChannel"] = request.deployChannel;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.logicalNumber)) {
      query["LogicalNumber"] = request.logicalNumber;
    }

    if (!$dara.isNull(request.publishNumber)) {
      query["PublishNumber"] = request.publishNumber;
    }

    if (!$dara.isNull(request.weappAction)) {
      query["WeappAction"] = request.weappAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.PublishAppInstanceResponse({}));
  }

  /**
   * Publishes an application instance.
   * 
   * @remarks
   * Queries the application instance information.
   * 
   * @param request - PublishAppInstanceRequest
   * @returns PublishAppInstanceResponse
   */
  async publishAppInstance(request: $_model.PublishAppInstanceRequest): Promise<$_model.PublishAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishAppInstanceWithOptions(request, runtime);
  }

  /**
   * Pushes resource metering data.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to a resource.
   * 
   * @param request - PushResourceMeasureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResourceMeasureResponse
   */
  async pushResourceMeasureWithOptions(request: $_model.PushResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushResourceMeasureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.belongIdType)) {
      query["BelongIdType"] = request.belongIdType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.measureData)) {
      query["MeasureData"] = request.measureData;
    }

    if (!$dara.isNull(request.metaData)) {
      query["MetaData"] = request.metaData;
    }

    if (!$dara.isNull(request.resourceCode)) {
      query["ResourceCode"] = request.resourceCode;
    }

    if (!$dara.isNull(request.useTime)) {
      query["UseTime"] = request.useTime;
    }

    if (!$dara.isNull(request.useType)) {
      query["UseType"] = request.useType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushResourceMeasure",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushResourceMeasureResponse>(await this.callApi(params, req, runtime), new $_model.PushResourceMeasureResponse({}));
  }

  /**
   * Pushes resource metering data.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to a resource.
   * 
   * @param request - PushResourceMeasureRequest
   * @returns PushResourceMeasureResponse
   */
  async pushResourceMeasure(request: $_model.PushResourceMeasureRequest): Promise<$_model.PushResourceMeasureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushResourceMeasureWithOptions(request, runtime);
  }

  /**
   * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - QueryInspirationAccountDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInspirationAccountDetailsResponse
   */
  async queryInspirationAccountDetailsWithOptions(request: $_model.QueryInspirationAccountDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationAccountDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInspirationAccountDetails",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInspirationAccountDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QueryInspirationAccountDetailsResponse({}));
  }

  /**
   * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param request - QueryInspirationAccountDetailsRequest
   * @returns QueryInspirationAccountDetailsResponse
   */
  async queryInspirationAccountDetails(request: $_model.QueryInspirationAccountDetailsRequest): Promise<$_model.QueryInspirationAccountDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInspirationAccountDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the overview of the inspiration value balance.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInspirationBalanceResponse
   */
  async queryInspirationBalanceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationBalanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryInspirationBalance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInspirationBalanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryInspirationBalanceResponse({}));
  }

  /**
   * Queries the overview of the inspiration value balance.
   * 
   * @remarks
   * Queries the Supabase instance information corresponding to the resource.
   * @returns QueryInspirationBalanceResponse
   */
  async queryInspirationBalance(): Promise<$_model.QueryInspirationBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInspirationBalanceWithOptions(runtime);
  }

  /**
   * Queries the inspiration value for service providers.
   * 
   * @param request - QueryInspirationBalanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInspirationBalanceForPartnerResponse
   */
  async queryInspirationBalanceForPartnerWithOptions(request: $_model.QueryInspirationBalanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationBalanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.belongIdType)) {
      query["BelongIdType"] = request.belongIdType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInspirationBalanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInspirationBalanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.QueryInspirationBalanceForPartnerResponse({}));
  }

  /**
   * Queries the inspiration value for service providers.
   * 
   * @param request - QueryInspirationBalanceForPartnerRequest
   * @returns QueryInspirationBalanceForPartnerResponse
   */
  async queryInspirationBalanceForPartner(request: $_model.QueryInspirationBalanceForPartnerRequest): Promise<$_model.QueryInspirationBalanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInspirationBalanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Queries the consumption details of inspiration points.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - QueryInspirationConsumeRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInspirationConsumeRecordsResponse
   */
  async queryInspirationConsumeRecordsWithOptions(request: $_model.QueryInspirationConsumeRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationConsumeRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInspirationConsumeRecords",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInspirationConsumeRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryInspirationConsumeRecordsResponse({}));
  }

  /**
   * Queries the consumption details of inspiration points.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - QueryInspirationConsumeRecordsRequest
   * @returns QueryInspirationConsumeRecordsResponse
   */
  async queryInspirationConsumeRecords(request: $_model.QueryInspirationConsumeRecordsRequest): Promise<$_model.QueryInspirationConsumeRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInspirationConsumeRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the asset folder tree.
   * 
   * @param request - QueryMaterialDirectoryTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialDirectoryTreeResponse
   */
  async queryMaterialDirectoryTreeWithOptions(request: $_model.QueryMaterialDirectoryTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialDirectoryTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.hiddenPublic)) {
      query["HiddenPublic"] = request.hiddenPublic;
    }

    if (!$dara.isNull(request.root)) {
      query["Root"] = request.root;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialDirectoryTree",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialDirectoryTreeResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialDirectoryTreeResponse({}));
  }

  /**
   * Queries the asset folder tree.
   * 
   * @param request - QueryMaterialDirectoryTreeRequest
   * @returns QueryMaterialDirectoryTreeResponse
   */
  async queryMaterialDirectoryTree(request: $_model.QueryMaterialDirectoryTreeRequest): Promise<$_model.QueryMaterialDirectoryTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialDirectoryTreeWithOptions(request, runtime);
  }

  /**
   * Queries the details of an asset file.
   * 
   * @param request - QueryMaterialFileDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileDetailResponse
   */
  async queryMaterialFileDetailWithOptions(request: $_model.QueryMaterialFileDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileDetail",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileDetailResponse({}));
  }

  /**
   * Queries the details of an asset file.
   * 
   * @param request - QueryMaterialFileDetailRequest
   * @returns QueryMaterialFileDetailResponse
   */
  async queryMaterialFileDetail(request: $_model.QueryMaterialFileDetailRequest): Promise<$_model.QueryMaterialFileDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of asset files.
   * 
   * @param tmpReq - QueryMaterialFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileListResponse
   */
  async queryMaterialFileListWithOptions(tmpReq: $_model.QueryMaterialFileListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialFileListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.suffixList)) {
      request.suffixListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.suffixList, "SuffixList", "json");
    }

    if (!$dara.isNull(tmpReq.typeList)) {
      request.typeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxFileSize)) {
      query["MaxFileSize"] = request.maxFileSize;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.minFileSize)) {
      query["MinFileSize"] = request.minFileSize;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.suffixListShrink)) {
      query["SuffixList"] = request.suffixListShrink;
    }

    if (!$dara.isNull(request.typeListShrink)) {
      query["TypeList"] = request.typeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileList",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileListResponse({}));
  }

  /**
   * Queries a list of asset files.
   * 
   * @param request - QueryMaterialFileListRequest
   * @returns QueryMaterialFileListResponse
   */
  async queryMaterialFileList(request: $_model.QueryMaterialFileListRequest): Promise<$_model.QueryMaterialFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileListWithOptions(request, runtime);
  }

  /**
   * Queries the file overview.
   * 
   * @param tmpReq - QueryMaterialFileSummaryInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileSummaryInfoResponse
   */
  async queryMaterialFileSummaryInfoWithOptions(tmpReq: $_model.QueryMaterialFileSummaryInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileSummaryInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialFileSummaryInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.typeList)) {
      request.typeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.typeListShrink)) {
      query["TypeList"] = request.typeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileSummaryInfo",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileSummaryInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileSummaryInfoResponse({}));
  }

  /**
   * Queries the file overview.
   * 
   * @param request - QueryMaterialFileSummaryInfoRequest
   * @returns QueryMaterialFileSummaryInfoResponse
   */
  async queryMaterialFileSummaryInfo(request: $_model.QueryMaterialFileSummaryInfoRequest): Promise<$_model.QueryMaterialFileSummaryInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileSummaryInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a material generation task.
   * 
   * @param request - QueryMaterialTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialTaskDetailResponse
   */
  async queryMaterialTaskDetailWithOptions(request: $_model.QueryMaterialTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialTaskDetail",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskDetailResponse({}));
  }

  /**
   * Queries the details of a material generation task.
   * 
   * @param request - QueryMaterialTaskDetailRequest
   * @returns QueryMaterialTaskDetailResponse
   */
  async queryMaterialTaskDetail(request: $_model.QueryMaterialTaskDetailRequest): Promise<$_model.QueryMaterialTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the list of material generation tasks.
   * 
   * @remarks
   * Queries the list of material generation tasks.
   * 
   * @param tmpReq - QueryMaterialTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialTaskListResponse
   */
  async queryMaterialTaskListWithOptions(tmpReq: $_model.QueryMaterialTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialTaskListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.taskTypeList)) {
      request.taskTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizGroupId)) {
      query["BizGroupId"] = request.bizGroupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.taskTypeListShrink)) {
      query["TaskTypeList"] = request.taskTypeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialTaskList",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskListResponse({}));
  }

  /**
   * Queries the list of material generation tasks.
   * 
   * @remarks
   * Queries the list of material generation tasks.
   * 
   * @param request - QueryMaterialTaskListRequest
   * @returns QueryMaterialTaskListResponse
   */
  async queryMaterialTaskList(request: $_model.QueryMaterialTaskListRequest): Promise<$_model.QueryMaterialTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialTaskListWithOptions(request, runtime);
  }

  /**
   * Queries a single RBAC role.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - QueryRbacRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRbacRoleResponse
   */
  async queryRbacRoleWithOptions(request: $_model.QueryRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRbacRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRbacRoleResponse>(await this.callApi(params, req, runtime), new $_model.QueryRbacRoleResponse({}));
  }

  /**
   * Queries a single RBAC role.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - QueryRbacRoleRequest
   * @returns QueryRbacRoleResponse
   */
  async queryRbacRole(request: $_model.QueryRbacRoleRequest): Promise<$_model.QueryRbacRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRbacRoleWithOptions(request, runtime);
  }

  /**
   * Queries the list of role permissions.
   * 
   * @remarks
   * Creates an AI conversation session for Wan Xiaozhi 2.0.
   * 
   * @param request - QueryRbacRolePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRbacRolePermissionsResponse
   */
  async queryRbacRolePermissionsWithOptions(request: $_model.QueryRbacRolePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacRolePermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRbacRolePermissions",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRbacRolePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryRbacRolePermissionsResponse({}));
  }

  /**
   * Queries the list of role permissions.
   * 
   * @remarks
   * Creates an AI conversation session for Wan Xiaozhi 2.0.
   * 
   * @param request - QueryRbacRolePermissionsRequest
   * @returns QueryRbacRolePermissionsResponse
   */
  async queryRbacRolePermissions(request: $_model.QueryRbacRolePermissionsRequest): Promise<$_model.QueryRbacRolePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRbacRolePermissionsWithOptions(request, runtime);
  }

  /**
   * Queries user role bindings.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - QueryRbacUserRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRbacUserRolesResponse
   */
  async queryRbacUserRolesWithOptions(request: $_model.QueryRbacUserRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacUserRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationUserId)) {
      query["ApplicationUserId"] = request.applicationUserId;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRbacUserRoles",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRbacUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.QueryRbacUserRolesResponse({}));
  }

  /**
   * Queries user role bindings.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - QueryRbacUserRolesRequest
   * @returns QueryRbacUserRolesResponse
   */
  async queryRbacUserRoles(request: $_model.QueryRbacUserRolesRequest): Promise<$_model.QueryRbacUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRbacUserRolesWithOptions(request, runtime);
  }

  /**
   * Queries the authentication configuration of the Supabase instance associated with the resource.
   * 
   * @remarks
   * Queries the authentication configuration of the Supabase instance associated with the resource.
   * 
   * @param request - QuerySupabaseAuthConfigsForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySupabaseAuthConfigsForAdminResponse
   */
  async querySupabaseAuthConfigsForAdminWithOptions(request: $_model.QuerySupabaseAuthConfigsForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseAuthConfigsForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySupabaseAuthConfigsForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySupabaseAuthConfigsForAdminResponse>(await this.callApi(params, req, runtime), new $_model.QuerySupabaseAuthConfigsForAdminResponse({}));
  }

  /**
   * Queries the authentication configuration of the Supabase instance associated with the resource.
   * 
   * @remarks
   * Queries the authentication configuration of the Supabase instance associated with the resource.
   * 
   * @param request - QuerySupabaseAuthConfigsForAdminRequest
   * @returns QuerySupabaseAuthConfigsForAdminResponse
   */
  async querySupabaseAuthConfigsForAdmin(request: $_model.QuerySupabaseAuthConfigsForAdminRequest): Promise<$_model.QuerySupabaseAuthConfigsForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySupabaseAuthConfigsForAdminWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information of the Supabase instance associated with a resource.
   * 
   * @remarks
   * Queries the configuration information of the Supabase instance associated with a resource.
   * 
   * @param request - QuerySupabaseConfigsForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySupabaseConfigsForAdminResponse
   */
  async querySupabaseConfigsForAdminWithOptions(request: $_model.QuerySupabaseConfigsForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseConfigsForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySupabaseConfigsForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySupabaseConfigsForAdminResponse>(await this.callApi(params, req, runtime), new $_model.QuerySupabaseConfigsForAdminResponse({}));
  }

  /**
   * Queries the configuration information of the Supabase instance associated with a resource.
   * 
   * @remarks
   * Queries the configuration information of the Supabase instance associated with a resource.
   * 
   * @param request - QuerySupabaseConfigsForAdminRequest
   * @returns QuerySupabaseConfigsForAdminResponse
   */
  async querySupabaseConfigsForAdmin(request: $_model.QuerySupabaseConfigsForAdminRequest): Promise<$_model.QuerySupabaseConfigsForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySupabaseConfigsForAdminWithOptions(request, runtime);
  }

  /**
   * Queries the information of the Supabase instance associated with a resource.
   * 
   * @remarks
   * Queries the information of the Supabase instance associated with a resource.
   * 
   * @param request - QuerySupabaseInstanceInfoForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySupabaseInstanceInfoForAdminResponse
   */
  async querySupabaseInstanceInfoForAdminWithOptions(request: $_model.QuerySupabaseInstanceInfoForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseInstanceInfoForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySupabaseInstanceInfoForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySupabaseInstanceInfoForAdminResponse>(await this.callApi(params, req, runtime), new $_model.QuerySupabaseInstanceInfoForAdminResponse({}));
  }

  /**
   * Queries the information of the Supabase instance associated with a resource.
   * 
   * @remarks
   * Queries the information of the Supabase instance associated with a resource.
   * 
   * @param request - QuerySupabaseInstanceInfoForAdminRequest
   * @returns QuerySupabaseInstanceInfoForAdminResponse
   */
  async querySupabaseInstanceInfoForAdmin(request: $_model.QuerySupabaseInstanceInfoForAdminRequest): Promise<$_model.QuerySupabaseInstanceInfoForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySupabaseInstanceInfoForAdminWithOptions(request, runtime);
  }

  /**
   * Reconnects to an AI conversation.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ReconnectAppChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReconnectAppChatResponse
   */
  async *reconnectAppChatWithSSE(request: $_model.ReconnectAppChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ReconnectAppChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.lastEventId)) {
      body["LastEventId"] = request.lastEventId;
    }

    if (!$dara.isNull(request.latestMessageCreateTime)) {
      body["LatestMessageCreateTime"] = request.latestMessageCreateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReconnectAppChat",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.ReconnectAppChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ReconnectAppChatResponse({}));
      }

    }
  }

  /**
   * Reconnects to an AI conversation.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ReconnectAppChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReconnectAppChatResponse
   */
  async reconnectAppChatWithOptions(request: $_model.ReconnectAppChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReconnectAppChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.lastEventId)) {
      body["LastEventId"] = request.lastEventId;
    }

    if (!$dara.isNull(request.latestMessageCreateTime)) {
      body["LatestMessageCreateTime"] = request.latestMessageCreateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReconnectAppChat",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    return $dara.cast<$_model.ReconnectAppChatResponse>(await this.callApi(params, req, runtime), new $_model.ReconnectAppChatResponse({}));
  }

  /**
   * Reconnects to an AI conversation.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - ReconnectAppChatRequest
   * @returns ReconnectAppChatResponse
   */
  async reconnectAppChat(request: $_model.ReconnectAppChatRequest): Promise<$_model.ReconnectAppChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reconnectAppChatWithOptions(request, runtime);
  }

  /**
   * Refreshes the password-free login ticket for a website building instance.
   * 
   * @param request - RefreshAppInstanceTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAppInstanceTicketResponse
   */
  async refreshAppInstanceTicketWithOptions(request: $_model.RefreshAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAppInstanceTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAppInstanceTicket",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshAppInstanceTicketResponse>(await this.callApi(params, req, runtime), new $_model.RefreshAppInstanceTicketResponse({}));
  }

  /**
   * Refreshes the password-free login ticket for a website building instance.
   * 
   * @param request - RefreshAppInstanceTicketRequest
   * @returns RefreshAppInstanceTicketResponse
   */
  async refreshAppInstanceTicket(request: $_model.RefreshAppInstanceTicketRequest): Promise<$_model.RefreshAppInstanceTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAppInstanceTicketWithOptions(request, runtime);
  }

  /**
   * Processes a refund for a channel partner website building service.
   * 
   * @param request - RefundAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundAppInstanceForPartnerResponse
   */
  async refundAppInstanceForPartnerWithOptions(request: $_model.RefundAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundAppInstanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.refundReason)) {
      query["RefundReason"] = request.refundReason;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.RefundAppInstanceForPartnerResponse({}));
  }

  /**
   * Processes a refund for a channel partner website building service.
   * 
   * @param request - RefundAppInstanceForPartnerRequest
   * @returns RefundAppInstanceForPartnerResponse
   */
  async refundAppInstanceForPartner(request: $_model.RefundAppInstanceForPartnerRequest): Promise<$_model.RefundAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Removes an RBAC role hierarchy.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - RemoveRbacRoleHierarchyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRbacRoleHierarchyResponse
   */
  async removeRbacRoleHierarchyWithOptions(request: $_model.RemoveRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRbacRoleHierarchyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.childRoleId)) {
      query["ChildRoleId"] = request.childRoleId;
    }

    if (!$dara.isNull(request.parentRoleId)) {
      query["ParentRoleId"] = request.parentRoleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRbacRoleHierarchy",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRbacRoleHierarchyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRbacRoleHierarchyResponse({}));
  }

  /**
   * Removes an RBAC role hierarchy.
   * 
   * @remarks
   * Queries application instance information.
   * 
   * @param request - RemoveRbacRoleHierarchyRequest
   * @returns RemoveRbacRoleHierarchyResponse
   */
  async removeRbacRoleHierarchy(request: $_model.RemoveRbacRoleHierarchyRequest): Promise<$_model.RemoveRbacRoleHierarchyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRbacRoleHierarchyWithOptions(request, runtime);
  }

  /**
   * Renews a website builder application instance.
   * 
   * @param request - RenewAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppInstanceResponse
   */
  async renewAppInstanceWithOptions(request: $_model.RenewAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppInstanceResponse({}));
  }

  /**
   * Renews a website builder application instance.
   * 
   * @param request - RenewAppInstanceRequest
   * @returns RenewAppInstanceResponse
   */
  async renewAppInstance(request: $_model.RenewAppInstanceRequest): Promise<$_model.RenewAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppInstanceWithOptions(request, runtime);
  }

  /**
   * Renews or refreshes a sandbox environment.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - RenewAppSandboxRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppSandboxResponse
   */
  async renewAppSandboxWithOptions(request: $_model.RenewAppSandboxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppSandboxResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppSandbox",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppSandboxResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppSandboxResponse({}));
  }

  /**
   * Renews or refreshes a sandbox environment.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - RenewAppSandboxRequest
   * @returns RenewAppSandboxResponse
   */
  async renewAppSandbox(request: $_model.RenewAppSandboxRequest): Promise<$_model.RenewAppSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppSandboxWithOptions(request, runtime);
  }

  /**
   * Reports the publishing result.
   * 
   * @remarks
   * Reports the publishing result.
   * 
   * @param request - ReportChannelPublishResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportChannelPublishResultResponse
   */
  async reportChannelPublishResultWithOptions(request: $_model.ReportChannelPublishResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportChannelPublishResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelAccountName)) {
      query["ChannelAccountName"] = request.channelAccountName;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.externalId)) {
      query["ExternalId"] = request.externalId;
    }

    if (!$dara.isNull(request.externalUrl)) {
      query["ExternalUrl"] = request.externalUrl;
    }

    if (!$dara.isNull(request.failReason)) {
      query["FailReason"] = request.failReason;
    }

    if (!$dara.isNull(request.success)) {
      query["Success"] = request.success;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportChannelPublishResult",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportChannelPublishResultResponse>(await this.callApi(params, req, runtime), new $_model.ReportChannelPublishResultResponse({}));
  }

  /**
   * Reports the publishing result.
   * 
   * @remarks
   * Reports the publishing result.
   * 
   * @param request - ReportChannelPublishResultRequest
   * @returns ReportChannelPublishResultResponse
   */
  async reportChannelPublishResult(request: $_model.ReportChannelPublishResultRequest): Promise<$_model.ReportChannelPublishResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportChannelPublishResultWithOptions(request, runtime);
  }

  /**
   * Retries a publish operation.
   * 
   * @remarks
   * Retries a publish operation.
   * 
   * @param request - RetryChannelPublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryChannelPublishResponse
   */
  async retryChannelPublishWithOptions(request: $_model.RetryChannelPublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryChannelPublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryChannelPublish",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryChannelPublishResponse>(await this.callApi(params, req, runtime), new $_model.RetryChannelPublishResponse({}));
  }

  /**
   * Retries a publish operation.
   * 
   * @remarks
   * Retries a publish operation.
   * 
   * @param request - RetryChannelPublishRequest
   * @returns RetryChannelPublishResponse
   */
  async retryChannelPublish(request: $_model.RetryChannelPublishRequest): Promise<$_model.RetryChannelPublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChannelPublishWithOptions(request, runtime);
  }

  /**
   * Revokes a user role.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - RevokeRbacUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeRbacUserRoleResponse
   */
  async revokeRbacUserRoleWithOptions(request: $_model.RevokeRbacUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRbacUserRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.userRoleData)) {
      query["UserRoleData"] = request.userRoleData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeRbacUserRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeRbacUserRoleResponse>(await this.callApi(params, req, runtime), new $_model.RevokeRbacUserRoleResponse({}));
  }

  /**
   * Revokes a user role.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - RevokeRbacUserRoleRequest
   * @returns RevokeRbacUserRoleResponse
   */
  async revokeRbacUserRole(request: $_model.RevokeRbacUserRoleRequest): Promise<$_model.RevokeRbacUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeRbacUserRoleWithOptions(request, runtime);
  }

  /**
   * Rewrites a channel title using AI.
   * 
   * @remarks
   * Rewrites a channel title.
   * 
   * @param request - RewriteChannelTitleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RewriteChannelTitleResponse
   */
  async rewriteChannelTitleWithOptions(request: $_model.RewriteChannelTitleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RewriteChannelTitleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.userRequirement)) {
      query["UserRequirement"] = request.userRequirement;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RewriteChannelTitle",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RewriteChannelTitleResponse>(await this.callApi(params, req, runtime), new $_model.RewriteChannelTitleResponse({}));
  }

  /**
   * Rewrites a channel title using AI.
   * 
   * @remarks
   * Rewrites a channel title.
   * 
   * @param request - RewriteChannelTitleRequest
   * @returns RewriteChannelTitleResponse
   */
  async rewriteChannelTitle(request: $_model.RewriteChannelTitleRequest): Promise<$_model.RewriteChannelTitleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rewriteChannelTitleWithOptions(request, runtime);
  }

  /**
   * Rolls back a code snapshot.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - RollbackAppCodeSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackAppCodeSnapshotResponse
   */
  async rollbackAppCodeSnapshotWithOptions(request: $_model.RollbackAppCodeSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppCodeSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.targetLogicalNumber)) {
      query["TargetLogicalNumber"] = request.targetLogicalNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackAppCodeSnapshot",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackAppCodeSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.RollbackAppCodeSnapshotResponse({}));
  }

  /**
   * Rolls back a code snapshot.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - RollbackAppCodeSnapshotRequest
   * @returns RollbackAppCodeSnapshotResponse
   */
  async rollbackAppCodeSnapshot(request: $_model.RollbackAppCodeSnapshotRequest): Promise<$_model.RollbackAppCodeSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackAppCodeSnapshotWithOptions(request, runtime);
  }

  /**
   * Rolls back the release of an application instance.
   * 
   * @remarks
   * Queries the details of an application instance.
   * 
   * @param request - RollbackAppInstancePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackAppInstancePublishResponse
   */
  async rollbackAppInstancePublishWithOptions(request: $_model.RollbackAppInstancePublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppInstancePublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deployChannel)) {
      query["DeployChannel"] = request.deployChannel;
    }

    if (!$dara.isNull(request.publishNumber)) {
      query["PublishNumber"] = request.publishNumber;
    }

    if (!$dara.isNull(request.quickRollback)) {
      query["QuickRollback"] = request.quickRollback;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackAppInstancePublish",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackAppInstancePublishResponse>(await this.callApi(params, req, runtime), new $_model.RollbackAppInstancePublishResponse({}));
  }

  /**
   * Rolls back the release of an application instance.
   * 
   * @remarks
   * Queries the details of an application instance.
   * 
   * @param request - RollbackAppInstancePublishRequest
   * @returns RollbackAppInstancePublishResponse
   */
  async rollbackAppInstancePublish(request: $_model.RollbackAppInstancePublishRequest): Promise<$_model.RollbackAppInstancePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackAppInstancePublishWithOptions(request, runtime);
  }

  /**
   * Rolls back the version of an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - RollbackAppPluginVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackAppPluginVersionResponse
   */
  async rollbackAppPluginVersionWithOptions(request: $_model.RollbackAppPluginVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppPluginVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackAppPluginVersion",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackAppPluginVersionResponse>(await this.callApi(params, req, runtime), new $_model.RollbackAppPluginVersionResponse({}));
  }

  /**
   * Rolls back the version of an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - RollbackAppPluginVersionRequest
   * @returns RollbackAppPluginVersionResponse
   */
  async rollbackAppPluginVersion(request: $_model.RollbackAppPluginVersionRequest): Promise<$_model.RollbackAppPluginVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackAppPluginVersionWithOptions(request, runtime);
  }

  /**
   * Save Requirement
   * 
   * @remarks
   * Get code generation plugin configuration information
   * 
   * @param request - SaveAppRequirementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAppRequirementResponse
   */
  async saveAppRequirementWithOptions(request: $_model.SaveAppRequirementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAppRequirementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prd)) {
      body["Prd"] = request.prd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAppRequirement",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAppRequirementResponse>(await this.callApi(params, req, runtime), new $_model.SaveAppRequirementResponse({}));
  }

  /**
   * Save Requirement
   * 
   * @remarks
   * Get code generation plugin configuration information
   * 
   * @param request - SaveAppRequirementRequest
   * @returns SaveAppRequirementResponse
   */
  async saveAppRequirement(request: $_model.SaveAppRequirementRequest): Promise<$_model.SaveAppRequirementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAppRequirementWithOptions(request, runtime);
  }

  /**
   * Saves Supabase secrets.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - SaveAppSupabaseSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAppSupabaseSecretsResponse
   */
  async saveAppSupabaseSecretsWithOptions(request: $_model.SaveAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAppSupabaseSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.secretsJson)) {
      query["SecretsJson"] = request.secretsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAppSupabaseSecrets",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAppSupabaseSecretsResponse>(await this.callApi(params, req, runtime), new $_model.SaveAppSupabaseSecretsResponse({}));
  }

  /**
   * Saves Supabase secrets.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - SaveAppSupabaseSecretsRequest
   * @returns SaveAppSupabaseSecretsResponse
   */
  async saveAppSupabaseSecrets(request: $_model.SaveAppSupabaseSecretsRequest): Promise<$_model.SaveAppSupabaseSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAppSupabaseSecretsWithOptions(request, runtime);
  }

  /**
   * Saves a channel draft.
   * 
   * @remarks
   * Saves a channel draft.
   * 
   * @param tmpReq - SaveChannelDraftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveChannelDraftResponse
   */
  async saveChannelDraftWithOptions(tmpReq: $_model.SaveChannelDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveChannelDraftResponse> {
    tmpReq.validate();
    let request = new $_model.SaveChannelDraftShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.coverImages)) {
      request.coverImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.coverImages, "CoverImages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adaptedContent)) {
      query["AdaptedContent"] = request.adaptedContent;
    }

    if (!$dara.isNull(request.adaptedTitle)) {
      query["AdaptedTitle"] = request.adaptedTitle;
    }

    if (!$dara.isNull(request.channelAccountName)) {
      query["ChannelAccountName"] = request.channelAccountName;
    }

    if (!$dara.isNull(request.coverImagesShrink)) {
      query["CoverImages"] = request.coverImagesShrink;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.websiteNavName)) {
      query["WebsiteNavName"] = request.websiteNavName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveChannelDraft",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveChannelDraftResponse>(await this.callApi(params, req, runtime), new $_model.SaveChannelDraftResponse({}));
  }

  /**
   * Saves a channel draft.
   * 
   * @remarks
   * Saves a channel draft.
   * 
   * @param request - SaveChannelDraftRequest
   * @returns SaveChannelDraftResponse
   */
  async saveChannelDraft(request: $_model.SaveChannelDraftRequest): Promise<$_model.SaveChannelDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveChannelDraftWithOptions(request, runtime);
  }

  /**
   * Searches for images.
   * 
   * @param tmpReq - SearchImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageResponse
   */
  async searchImageWithOptions(tmpReq: $_model.SearchImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageResponse> {
    tmpReq.validate();
    let request = new $_model.SearchImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.colorHex)) {
      query["ColorHex"] = request.colorHex;
    }

    if (!$dara.isNull(request.hasPerson)) {
      query["HasPerson"] = request.hasPerson;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageRatio)) {
      query["ImageRatio"] = request.imageRatio;
    }

    if (!$dara.isNull(request.maxHeight)) {
      query["MaxHeight"] = request.maxHeight;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.maxWidth)) {
      query["MaxWidth"] = request.maxWidth;
    }

    if (!$dara.isNull(request.minHeight)) {
      query["MinHeight"] = request.minHeight;
    }

    if (!$dara.isNull(request.minWidth)) {
      query["MinWidth"] = request.minWidth;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImage",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageResponse({}));
  }

  /**
   * Searches for images.
   * 
   * @param request - SearchImageRequest
   * @returns SearchImageResponse
   */
  async searchImage(request: $_model.SearchImageRequest): Promise<$_model.SearchImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageWithOptions(request, runtime);
  }

  /**
   * Sets the SSL certificate for a website.
   * 
   * @param request - SetAppDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAppDomainCertificateResponse
   */
  async setAppDomainCertificateWithOptions(request: $_model.SetAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!$dara.isNull(request.certificateType)) {
      query["CertificateType"] = request.certificateType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAppDomainCertificate",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAppDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetAppDomainCertificateResponse({}));
  }

  /**
   * Sets the SSL certificate for a website.
   * 
   * @param request - SetAppDomainCertificateRequest
   * @returns SetAppDomainCertificateResponse
   */
  async setAppDomainCertificate(request: $_model.SetAppDomainCertificateRequest): Promise<$_model.SetAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Sets the RBAC role hierarchy.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - SetRbacRoleHierarchyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRbacRoleHierarchyResponse
   */
  async setRbacRoleHierarchyWithOptions(request: $_model.SetRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRbacRoleHierarchyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.childRoleId)) {
      query["ChildRoleId"] = request.childRoleId;
    }

    if (!$dara.isNull(request.parentRoleId)) {
      query["ParentRoleId"] = request.parentRoleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRbacRoleHierarchy",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRbacRoleHierarchyResponse>(await this.callApi(params, req, runtime), new $_model.SetRbacRoleHierarchyResponse({}));
  }

  /**
   * Sets the RBAC role hierarchy.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - SetRbacRoleHierarchyRequest
   * @returns SetRbacRoleHierarchyResponse
   */
  async setRbacRoleHierarchy(request: $_model.SetRbacRoleHierarchyRequest): Promise<$_model.SetRbacRoleHierarchyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRbacRoleHierarchyWithOptions(request, runtime);
  }

  /**
   * Submits an SEO index.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - SubmitAppSeoIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAppSeoIndexResponse
   */
  async submitAppSeoIndexWithOptions(request: $_model.SubmitAppSeoIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAppSeoIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.seType)) {
      query["SeType"] = request.seType;
    }

    if (!$dara.isNull(request.submitLater)) {
      query["SubmitLater"] = request.submitLater;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAppSeoIndex",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAppSeoIndexResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAppSeoIndexResponse({}));
  }

  /**
   * Submits an SEO index.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - SubmitAppSeoIndexRequest
   * @returns SubmitAppSeoIndexResponse
   */
  async submitAppSeoIndex(request: $_model.SubmitAppSeoIndexRequest): Promise<$_model.SubmitAppSeoIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAppSeoIndexWithOptions(request, runtime);
  }

  /**
   * Submits a material generation task.
   * 
   * @remarks
   * Submits a material generation task.
   * 
   * @param request - SubmitMaterialTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMaterialTaskResponse
   */
  async submitMaterialTaskWithOptions(request: $_model.SubmitMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMaterialTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizGroupId)) {
      query["BizGroupId"] = request.bizGroupId;
    }

    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMaterialTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMaterialTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMaterialTaskResponse({}));
  }

  /**
   * Submits a material generation task.
   * 
   * @remarks
   * Submits a material generation task.
   * 
   * @param request - SubmitMaterialTaskRequest
   * @returns SubmitMaterialTaskResponse
   */
  async submitMaterialTask(request: $_model.SubmitMaterialTaskRequest): Promise<$_model.SubmitMaterialTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMaterialTaskWithOptions(request, runtime);
  }

  /**
   * Switches to a specified conversation.
   * 
   * @remarks
   * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
   * 
   * @param request - SwitchAppConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchAppConversationResponse
   */
  async switchAppConversationWithOptions(request: $_model.SwitchAppConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchAppConversationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.botId)) {
      query["BotId"] = request.botId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchAppConversation",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchAppConversationResponse>(await this.callApi(params, req, runtime), new $_model.SwitchAppConversationResponse({}));
  }

  /**
   * Switches to a specified conversation.
   * 
   * @remarks
   * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
   * 
   * @param request - SwitchAppConversationRequest
   * @returns SwitchAppConversationResponse
   */
  async switchAppConversation(request: $_model.SwitchAppConversationRequest): Promise<$_model.SwitchAppConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchAppConversationWithOptions(request, runtime);
  }

  /**
   * Synchronizes an application instance from a partner.
   * 
   * @param tmpReq - SyncAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncAppInstanceForPartnerResponse
   */
  async syncAppInstanceForPartnerWithOptions(tmpReq: $_model.SyncAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncAppInstanceForPartnerResponse> {
    tmpReq.validate();
    let request = new $_model.SyncAppInstanceForPartnerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appInstance)) {
      request.appInstanceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInstance, "AppInstance", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appInstanceShrink)) {
      query["AppInstance"] = request.appInstanceShrink;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.sourceBizId)) {
      query["SourceBizId"] = request.sourceBizId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.SyncAppInstanceForPartnerResponse({}));
  }

  /**
   * Synchronizes an application instance from a partner.
   * 
   * @param request - SyncAppInstanceForPartnerRequest
   * @returns SyncAppInstanceForPartnerResponse
   */
  async syncAppInstanceForPartner(request: $_model.SyncAppInstanceForPartnerRequest): Promise<$_model.SyncAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Translates a channel draft.
   * 
   * @remarks
   * Translates a channel draft.
   * 
   * @param request - TranslateChannelDraftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TranslateChannelDraftResponse
   */
  async translateChannelDraftWithOptions(request: $_model.TranslateChannelDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateChannelDraftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TranslateChannelDraft",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TranslateChannelDraftResponse>(await this.callApi(params, req, runtime), new $_model.TranslateChannelDraftResponse({}));
  }

  /**
   * Translates a channel draft.
   * 
   * @remarks
   * Translates a channel draft.
   * 
   * @param request - TranslateChannelDraftRequest
   * @returns TranslateChannelDraftResponse
   */
  async translateChannelDraft(request: $_model.TranslateChannelDraftRequest): Promise<$_model.TranslateChannelDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.translateChannelDraftWithOptions(request, runtime);
  }

  /**
   * Unbinds a domain name from a website and deletes the associated DNS records.
   * 
   * @param request - UnbindAppDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAppDomainResponse
   */
  async unbindAppDomainWithOptions(request: $_model.UnbindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAppDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAppDomain",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAppDomainResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAppDomainResponse({}));
  }

  /**
   * Unbinds a domain name from a website and deletes the associated DNS records.
   * 
   * @param request - UnbindAppDomainRequest
   * @returns UnbindAppDomainResponse
   */
  async unbindAppDomain(request: $_model.UnbindAppDomainRequest): Promise<$_model.UnbindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAppDomainWithOptions(request, runtime);
  }

  /**
   * Uninstalls an application plug-in from the current user account.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UninstallAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAppPluginResponse
   */
  async uninstallAppPluginWithOptions(request: $_model.UninstallAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.UninstallAppPluginResponse({}));
  }

  /**
   * Uninstalls an application plug-in from the current user account.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UninstallAppPluginRequest
   * @returns UninstallAppPluginResponse
   */
  async uninstallAppPlugin(request: $_model.UninstallAppPluginRequest): Promise<$_model.UninstallAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallAppPluginWithOptions(request, runtime);
  }

  /**
   * Updates the message content.
   * 
   * @remarks
   * Queries the AI conversation history for Wanxiaozhi 2.0.
   * 
   * @param request - UpdateAppChatMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppChatMessageResponse
   */
  async updateAppChatMessageWithOptions(request: $_model.UpdateAppChatMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppChatMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addedMetaData)) {
      query["AddedMetaData"] = request.addedMetaData;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppChatMessage",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppChatMessageResponse({}));
  }

  /**
   * Updates the message content.
   * 
   * @remarks
   * Queries the AI conversation history for Wanxiaozhi 2.0.
   * 
   * @param request - UpdateAppChatMessageRequest
   * @returns UpdateAppChatMessageResponse
   */
  async updateAppChatMessage(request: $_model.UpdateAppChatMessageRequest): Promise<$_model.UpdateAppChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppChatMessageWithOptions(request, runtime);
  }

  /**
   * Edits JSX code.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateAppCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppCodeResponse
   */
  async updateAppCodeWithOptions(request: $_model.UpdateAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppCode",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppCodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppCodeResponse({}));
  }

  /**
   * Edits JSX code.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateAppCodeRequest
   * @returns UpdateAppCodeResponse
   */
  async updateAppCode(request: $_model.UpdateAppCodeRequest): Promise<$_model.UpdateAppCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppCodeWithOptions(request, runtime);
  }

  /**
   * Updates a file.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UpdateAppFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppFileResponse
   */
  async updateAppFileWithOptions(request: $_model.UpdateAppFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppFileResponse({}));
  }

  /**
   * Updates a file.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UpdateAppFileRequest
   * @returns UpdateAppFileResponse
   */
  async updateAppFile(request: $_model.UpdateAppFileRequest): Promise<$_model.UpdateAppFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppFileWithOptions(request, runtime);
  }

  /**
   * Changes the specifications of a website building instance.
   * 
   * @remarks
   * Queries the information of an application instance.
   * 
   * @param tmpReq - UpdateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppInstanceResponse
   */
  async updateAppInstanceWithOptions(tmpReq: $_model.UpdateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.thumbnailUrl)) {
      query["ThumbnailUrl"] = request.thumbnailUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppInstanceResponse({}));
  }

  /**
   * Changes the specifications of a website building instance.
   * 
   * @remarks
   * Queries the information of an application instance.
   * 
   * @param request - UpdateAppInstanceRequest
   * @returns UpdateAppInstanceResponse
   */
  async updateAppInstance(request: $_model.UpdateAppInstanceRequest): Promise<$_model.UpdateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppInstanceWithOptions(request, runtime);
  }

  /**
   * Updates an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UpdateAppPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppPluginResponse
   */
  async updateAppPluginWithOptions(request: $_model.UpdateAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.configItems)) {
      query["ConfigItems"] = request.configItems;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    if (!$dara.isNull(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    if (!$dara.isNull(request.skillHeader)) {
      query["SkillHeader"] = request.skillHeader;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppPlugin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppPluginResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppPluginResponse({}));
  }

  /**
   * Updates an application plugin.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UpdateAppPluginRequest
   * @returns UpdateAppPluginResponse
   */
  async updateAppPlugin(request: $_model.UpdateAppPluginRequest): Promise<$_model.UpdateAppPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppPluginWithOptions(request, runtime);
  }

  /**
   * Updates the SEO index status.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - UpdateAppSeoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppSeoStatusResponse
   */
  async updateAppSeoStatusWithOptions(request: $_model.UpdateAppSeoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSeoStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.seAuthInfo)) {
      query["SeAuthInfo"] = request.seAuthInfo;
    }

    if (!$dara.isNull(request.seIndexStatus)) {
      query["SeIndexStatus"] = request.seIndexStatus;
    }

    if (!$dara.isNull(request.seType)) {
      query["SeType"] = request.seType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppSeoStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppSeoStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppSeoStatusResponse({}));
  }

  /**
   * Updates the SEO index status.
   * 
   * @remarks
   * Wanxiaozhi 2.0 AI conversation.
   * 
   * @param request - UpdateAppSeoStatusRequest
   * @returns UpdateAppSeoStatusResponse
   */
  async updateAppSeoStatus(request: $_model.UpdateAppSeoStatusRequest): Promise<$_model.UpdateAppSeoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppSeoStatusWithOptions(request, runtime);
  }

  /**
   * Updates the Supabase authentication configuration.
   * 
   * @remarks
   * Queries the Supabase instance authentication configuration information corresponding to a resource.
   * 
   * @param request - UpdateAppSupabaseAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppSupabaseAuthConfigResponse
   */
  async updateAppSupabaseAuthConfigWithOptions(request: $_model.UpdateAppSupabaseAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSupabaseAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.configsJson)) {
      query["ConfigsJson"] = request.configsJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppSupabaseAuthConfig",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppSupabaseAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppSupabaseAuthConfigResponse({}));
  }

  /**
   * Updates the Supabase authentication configuration.
   * 
   * @remarks
   * Queries the Supabase instance authentication configuration information corresponding to a resource.
   * 
   * @param request - UpdateAppSupabaseAuthConfigRequest
   * @returns UpdateAppSupabaseAuthConfigResponse
   */
  async updateAppSupabaseAuthConfig(request: $_model.UpdateAppSupabaseAuthConfigRequest): Promise<$_model.UpdateAppSupabaseAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppSupabaseAuthConfigWithOptions(request, runtime);
  }

  /**
   * Updates a Supabase key.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - UpdateAppSupabaseSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppSupabaseSecretResponse
   */
  async updateAppSupabaseSecretWithOptions(request: $_model.UpdateAppSupabaseSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSupabaseSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    if (!$dara.isNull(request.secretValue)) {
      query["SecretValue"] = request.secretValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppSupabaseSecret",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppSupabaseSecretResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppSupabaseSecretResponse({}));
  }

  /**
   * Updates a Supabase key.
   * 
   * @remarks
   * The Supabase instance information corresponding to the operated resource.
   * 
   * @param request - UpdateAppSupabaseSecretRequest
   * @returns UpdateAppSupabaseSecretResponse
   */
  async updateAppSupabaseSecret(request: $_model.UpdateAppSupabaseSecretRequest): Promise<$_model.UpdateAppSupabaseSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppSupabaseSecretWithOptions(request, runtime);
  }

  /**
   * Updates the binding information for a mini program.
   * 
   * @param request - UpdateMiniAppBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMiniAppBindingResponse
   */
  async updateMiniAppBindingWithOptions(request: $_model.UpdateMiniAppBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMiniAppBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.settingKey)) {
      query["SettingKey"] = request.settingKey;
    }

    if (!$dara.isNull(request.settingValue)) {
      query["SettingValue"] = request.settingValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMiniAppBinding",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMiniAppBindingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMiniAppBindingResponse({}));
  }

  /**
   * Updates the binding information for a mini program.
   * 
   * @param request - UpdateMiniAppBindingRequest
   * @returns UpdateMiniAppBindingResponse
   */
  async updateMiniAppBinding(request: $_model.UpdateMiniAppBindingRequest): Promise<$_model.UpdateMiniAppBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMiniAppBindingWithOptions(request, runtime);
  }

  /**
   * Updates an organizational unit.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateRbacOrgUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRbacOrgUnitResponse
   */
  async updateRbacOrgUnitWithOptions(request: $_model.UpdateRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRbacOrgUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.orgUnitData)) {
      query["OrgUnitData"] = request.orgUnitData;
    }

    if (!$dara.isNull(request.orgUnitId)) {
      query["OrgUnitId"] = request.orgUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRbacOrgUnit",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRbacOrgUnitResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRbacOrgUnitResponse({}));
  }

  /**
   * Updates an organizational unit.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateRbacOrgUnitRequest
   * @returns UpdateRbacOrgUnitResponse
   */
  async updateRbacOrgUnit(request: $_model.UpdateRbacOrgUnitRequest): Promise<$_model.UpdateRbacOrgUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRbacOrgUnitWithOptions(request, runtime);
  }

  /**
   * Updates an RBAC role.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateRbacRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRbacRoleResponse
   */
  async updateRbacRoleWithOptions(request: $_model.UpdateRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRbacRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.roleData)) {
      query["RoleData"] = request.roleData;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRbacRole",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRbacRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRbacRoleResponse({}));
  }

  /**
   * Updates an RBAC role.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UpdateRbacRoleRequest
   * @returns UpdateRbacRoleResponse
   */
  async updateRbacRole(request: $_model.UpdateRbacRoleRequest): Promise<$_model.UpdateRbacRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRbacRoleWithOptions(request, runtime);
  }

  /**
   * Uploads an application plugin version.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UploadAppPluginVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAppPluginVersionResponse
   */
  async uploadAppPluginVersionWithOptions(request: $_model.UploadAppPluginVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAppPluginVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changelog)) {
      query["Changelog"] = request.changelog;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["PluginVersion"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadAppPluginVersion",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadAppPluginVersionResponse>(await this.callApi(params, req, runtime), new $_model.UploadAppPluginVersionResponse({}));
  }

  /**
   * Uploads an application plugin version.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plugin.
   * 
   * @param request - UploadAppPluginVersionRequest
   * @returns UploadAppPluginVersionResponse
   */
  async uploadAppPluginVersion(request: $_model.UploadAppPluginVersionRequest): Promise<$_model.UploadAppPluginVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAppPluginVersionWithOptions(request, runtime);
  }

  /**
   * Uploads a file to the root directory of a site.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UploadAppSiteValidationFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAppSiteValidationFileResponse
   */
  async uploadAppSiteValidationFileWithOptions(request: $_model.UploadAppSiteValidationFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAppSiteValidationFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.file)) {
      query["File"] = request.file;
    }

    if (!$dara.isNull(request.fileContent)) {
      query["FileContent"] = request.fileContent;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.siteHost)) {
      query["SiteHost"] = request.siteHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadAppSiteValidationFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadAppSiteValidationFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadAppSiteValidationFileResponse({}));
  }

  /**
   * Uploads a file to the root directory of a site.
   * 
   * @remarks
   * Retrieves the configuration information of the code generation plug-in.
   * 
   * @param request - UploadAppSiteValidationFileRequest
   * @returns UploadAppSiteValidationFileResponse
   */
  async uploadAppSiteValidationFile(request: $_model.UploadAppSiteValidationFileRequest): Promise<$_model.UploadAppSiteValidationFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAppSiteValidationFileWithOptions(request, runtime);
  }

  /**
   * Uploads an asset file.
   * 
   * @remarks
   * The Supabase instance information corresponding to the resource.
   * 
   * @param request - UploadMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMaterialFileResponse
   */
  async uploadMaterialFileWithOptions(request: $_model.UploadMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMaterialFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadMaterialFileResponse({}));
  }

  /**
   * Uploads an asset file.
   * 
   * @remarks
   * The Supabase instance information corresponding to the resource.
   * 
   * @param request - UploadMaterialFileRequest
   * @returns UploadMaterialFileResponse
   */
  async uploadMaterialFile(request: $_model.UploadMaterialFileRequest): Promise<$_model.UploadMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMaterialFileWithOptions(request, runtime);
  }

  /**
   * Uploads a material file as an administrator (AI-generated).
   * 
   * @remarks
   * The Supabase instance information corresponding to the operation resource.
   * 
   * @param request - UploadMaterialFileForAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMaterialFileForAdminResponse
   */
  async uploadMaterialFileForAdminWithOptions(request: $_model.UploadMaterialFileForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMaterialFileForAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.belongId)) {
      query["BelongId"] = request.belongId;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMaterialFileForAdmin",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMaterialFileForAdminResponse>(await this.callApi(params, req, runtime), new $_model.UploadMaterialFileForAdminResponse({}));
  }

  /**
   * Uploads a material file as an administrator (AI-generated).
   * 
   * @remarks
   * The Supabase instance information corresponding to the operation resource.
   * 
   * @param request - UploadMaterialFileForAdminRequest
   * @returns UploadMaterialFileForAdminResponse
   */
  async uploadMaterialFileForAdmin(request: $_model.UploadMaterialFileForAdminRequest): Promise<$_model.UploadMaterialFileForAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMaterialFileForAdminWithOptions(request, runtime);
  }

}
