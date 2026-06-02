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
    this._endpoint = this.getEndpoint("appflow", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建连接流
   * 
   * @param request - CreateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(request: $_model.CreateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowDesc)) {
      query["FlowDesc"] = request.flowDesc;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.flowTemplate)) {
      query["FlowTemplate"] = request.flowTemplate;
    }

    if (!$dara.isNull(request.launchStatus)) {
      query["LaunchStatus"] = request.launchStatus;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowResponse({}));
  }

  /**
   * 创建连接流
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: $_model.CreateFlowRequest): Promise<$_model.CreateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * 创建用户鉴权凭证
   * 
   * @param request - CreateUserAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserAuthConfigResponse
   */
  async createUserAuthConfigWithOptions(request: $_model.CreateUserAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authConfig)) {
      query["AuthConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.authConfigName)) {
      query["AuthConfigName"] = request.authConfigName;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserAuthConfig",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserAuthConfigResponse({}));
  }

  /**
   * 创建用户鉴权凭证
   * 
   * @param request - CreateUserAuthConfigRequest
   * @returns CreateUserAuthConfigResponse
   */
  async createUserAuthConfig(request: $_model.CreateUserAuthConfigRequest): Promise<$_model.CreateUserAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserAuthConfigWithOptions(request, runtime);
  }

  /**
   * 删除连接流
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: $_model.DeleteFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowResponse({}));
  }

  /**
   * 删除连接流
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: $_model.DeleteFlowRequest): Promise<$_model.DeleteFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * 删除用户鉴权凭证
   * 
   * @param request - DeleteUserAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserAuthConfigResponse
   */
  async deleteUserAuthConfigWithOptions(request: $_model.DeleteUserAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authConfigId)) {
      query["AuthConfigId"] = request.authConfigId;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserAuthConfig",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserAuthConfigResponse({}));
  }

  /**
   * 删除用户鉴权凭证
   * 
   * @param request - DeleteUserAuthConfigRequest
   * @returns DeleteUserAuthConfigResponse
   */
  async deleteUserAuthConfig(request: $_model.DeleteUserAuthConfigRequest): Promise<$_model.DeleteUserAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserAuthConfigWithOptions(request, runtime);
  }

  /**
   * 禁用连接流
   * 
   * @param request - DisableFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableFlowResponse
   */
  async disableFlowWithOptions(request: $_model.DisableFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableFlowResponse>(await this.callApi(params, req, runtime), new $_model.DisableFlowResponse({}));
  }

  /**
   * 禁用连接流
   * 
   * @param request - DisableFlowRequest
   * @returns DisableFlowResponse
   */
  async disableFlow(request: $_model.DisableFlowRequest): Promise<$_model.DisableFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableFlowWithOptions(request, runtime);
  }

  /**
   * 启用连接流
   * 
   * @param request - EnableFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFlowResponse
   */
  async enableFlowWithOptions(request: $_model.EnableFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableFlowResponse>(await this.callApi(params, req, runtime), new $_model.EnableFlowResponse({}));
  }

  /**
   * 启用连接流
   * 
   * @param request - EnableFlowRequest
   * @returns EnableFlowResponse
   */
  async enableFlow(request: $_model.EnableFlowRequest): Promise<$_model.EnableFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableFlowWithOptions(request, runtime);
  }

  /**
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionTokenWithOptions(request: $_model.GenerateUserSessionTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUserSessionTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.expireSecond)) {
      query["ExpireSecond"] = request.expireSecond;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.integrateId)) {
      query["IntegrateId"] = request.integrateId;
    }

    if (!$dara.isNull(request.userAvatar)) {
      query["UserAvatar"] = request.userAvatar;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUserSessionToken",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUserSessionTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUserSessionTokenResponse({}));
  }

  /**
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionToken(request: $_model.GenerateUserSessionTokenRequest): Promise<$_model.GenerateUserSessionTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUserSessionTokenWithOptions(request, runtime);
  }

  /**
   * 获取连接流详情
   * 
   * @param request - GetFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowResponse
   */
  async getFlowWithOptions(request: $_model.GetFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowResponse({}));
  }

  /**
   * 获取连接流详情
   * 
   * @param request - GetFlowRequest
   * @returns GetFlowResponse
   */
  async getFlow(request: $_model.GetFlowRequest): Promise<$_model.GetFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  /**
   * 获取用户鉴权凭证详情
   * 
   * @param request - GetUserAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAuthConfigResponse
   */
  async getUserAuthConfigWithOptions(request: $_model.GetUserAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authConfigId)) {
      query["AuthConfigId"] = request.authConfigId;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAuthConfig",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAuthConfigResponse({}));
  }

  /**
   * 获取用户鉴权凭证详情
   * 
   * @param request - GetUserAuthConfigRequest
   * @returns GetUserAuthConfigResponse
   */
  async getUserAuthConfig(request: $_model.GetUserAuthConfigRequest): Promise<$_model.GetUserAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAuthConfigWithOptions(request, runtime);
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param tmpReq - InvokeActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeActionResponse
   */
  async *invokeActionWithSSE(tmpReq: $_model.InvokeActionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.InvokeActionResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.InvokeActionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConfig)) {
      request.authConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConfig, "AuthConfig", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    if (!$dara.isNull(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    if (!$dara.isNull(tmpReq.path)) {
      request.pathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.path, "Path", "json");
    }

    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionId)) {
      query["ActionId"] = request.actionId;
    }

    if (!$dara.isNull(request.actionVersion)) {
      query["ActionVersion"] = request.actionVersion;
    }

    if (!$dara.isNull(request.authConfigShrink)) {
      query["AuthConfig"] = request.authConfigShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    if (!$dara.isNull(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!$dara.isNull(request.pathShrink)) {
      query["Path"] = request.pathShrink;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAction",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.InvokeActionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.InvokeActionResponse({}));
      }

    }
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param tmpReq - InvokeActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeActionResponse
   */
  async invokeActionWithOptions(tmpReq: $_model.InvokeActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeActionResponse> {
    tmpReq.validate();
    let request = new $_model.InvokeActionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConfig)) {
      request.authConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConfig, "AuthConfig", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    if (!$dara.isNull(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    if (!$dara.isNull(tmpReq.path)) {
      request.pathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.path, "Path", "json");
    }

    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionId)) {
      query["ActionId"] = request.actionId;
    }

    if (!$dara.isNull(request.actionVersion)) {
      query["ActionVersion"] = request.actionVersion;
    }

    if (!$dara.isNull(request.authConfigShrink)) {
      query["AuthConfig"] = request.authConfigShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    if (!$dara.isNull(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!$dara.isNull(request.pathShrink)) {
      query["Path"] = request.pathShrink;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAction",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeActionResponse>(await this.callApi(params, req, runtime), new $_model.InvokeActionResponse({}));
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param request - InvokeActionRequest
   * @returns InvokeActionResponse
   */
  async invokeAction(request: $_model.InvokeActionRequest): Promise<$_model.InvokeActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeActionWithOptions(request, runtime);
  }

  /**
   * 发布连接流
   * 
   * @param request - LaunchFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchFlowResponse
   */
  async launchFlowWithOptions(request: $_model.LaunchFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LaunchFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowDesc)) {
      query["FlowDesc"] = request.flowDesc;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.flowTemplate)) {
      query["FlowTemplate"] = request.flowTemplate;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LaunchFlowResponse>(await this.callApi(params, req, runtime), new $_model.LaunchFlowResponse({}));
  }

  /**
   * 发布连接流
   * 
   * @param request - LaunchFlowRequest
   * @returns LaunchFlowResponse
   */
  async launchFlow(request: $_model.LaunchFlowRequest): Promise<$_model.LaunchFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchFlowWithOptions(request, runtime);
  }

  /**
   * 获取用户鉴权凭证列表
   * 
   * @param request - ListUserAuthConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAuthConfigsResponse
   */
  async listUserAuthConfigsWithOptions(request: $_model.ListUserAuthConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserAuthConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
      action: "ListUserAuthConfigs",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserAuthConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserAuthConfigsResponse({}));
  }

  /**
   * 获取用户鉴权凭证列表
   * 
   * @param request - ListUserAuthConfigsRequest
   * @returns ListUserAuthConfigsResponse
   */
  async listUserAuthConfigs(request: $_model.ListUserAuthConfigsRequest): Promise<$_model.ListUserAuthConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserAuthConfigsWithOptions(request, runtime);
  }

  /**
   * 更新连接流
   * 
   * @param request - UpdateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowResponse
   */
  async updateFlowWithOptions(request: $_model.UpdateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.flowDesc)) {
      query["FlowDesc"] = request.flowDesc;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.flowTemplate)) {
      query["FlowTemplate"] = request.flowTemplate;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowResponse({}));
  }

  /**
   * 更新连接流
   * 
   * @param request - UpdateFlowRequest
   * @returns UpdateFlowResponse
   */
  async updateFlow(request: $_model.UpdateFlowRequest): Promise<$_model.UpdateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  /**
   * 编辑用户鉴权凭证
   * 
   * @param request - UpdateUserAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserAuthConfigResponse
   */
  async updateUserAuthConfigWithOptions(request: $_model.UpdateUserAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserAuthConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authConfig)) {
      query["AuthConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.authConfigId)) {
      query["AuthConfigId"] = request.authConfigId;
    }

    if (!$dara.isNull(request.authConfigName)) {
      query["AuthConfigName"] = request.authConfigName;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserAuthConfig",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserAuthConfigResponse({}));
  }

  /**
   * 编辑用户鉴权凭证
   * 
   * @param request - UpdateUserAuthConfigRequest
   * @returns UpdateUserAuthConfigResponse
   */
  async updateUserAuthConfig(request: $_model.UpdateUserAuthConfigRequest): Promise<$_model.UpdateUserAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserAuthConfigWithOptions(request, runtime);
  }

  /**
   * 下线连接流
   * 
   * @param request - WithdrawFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawFlowResponse
   */
  async withdrawFlowWithOptions(request: $_model.WithdrawFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawFlow",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawFlowResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawFlowResponse({}));
  }

  /**
   * 下线连接流
   * 
   * @param request - WithdrawFlowRequest
   * @returns WithdrawFlowResponse
   */
  async withdrawFlow(request: $_model.WithdrawFlowRequest): Promise<$_model.WithdrawFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawFlowWithOptions(request, runtime);
  }

}
