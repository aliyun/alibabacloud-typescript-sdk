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
    this._endpoint = this.getEndpoint("sfmmultimodalapp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 指令创建
   * 
   * @param tmpReq - CreateCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommandResponse
   */
  async createCommandWithOptions(tmpReq: $_model.CreateCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCommandResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.toolExamples)) {
      request.toolExamplesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolExamples, "ToolExamples", "json");
    }

    if (!$dara.isNull(tmpReq.toolParams)) {
      request.toolParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolParams, "ToolParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.toolDescription)) {
      query["ToolDescription"] = request.toolDescription;
    }

    if (!$dara.isNull(request.toolExamplesShrink)) {
      query["ToolExamples"] = request.toolExamplesShrink;
    }

    if (!$dara.isNull(request.toolName)) {
      query["ToolName"] = request.toolName;
    }

    if (!$dara.isNull(request.toolParamsShrink)) {
      query["ToolParams"] = request.toolParamsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCommand",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCommandResponse>(await this.callApi(params, req, runtime), new $_model.CreateCommandResponse({}));
  }

  /**
   * 指令创建
   * 
   * @param request - CreateCommandRequest
   * @returns CreateCommandResponse
   */
  async createCommand(request: $_model.CreateCommandRequest): Promise<$_model.CreateCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  /**
   * 新增用户记忆
   * 
   * @param tmpReq - CreateMemoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryResponse
   */
  async createMemoryWithOptions(tmpReq: $_model.CreateMemoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMemoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metaData)) {
      request.metaDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metaData, "MetaData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.messagesJson)) {
      query["MessagesJson"] = request.messagesJson;
    }

    if (!$dara.isNull(request.metaDataShrink)) {
      query["MetaData"] = request.metaDataShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemory",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryResponse({}));
  }

  /**
   * 新增用户记忆
   * 
   * @param request - CreateMemoryRequest
   * @returns CreateMemoryResponse
   */
  async createMemory(request: $_model.CreateMemoryRequest): Promise<$_model.CreateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMemoryWithOptions(request, runtime);
  }

  /**
   * 创建多模态应用
   * 
   * @param tmpReq - CreateMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmAppResponse
   */
  async createMmAppWithOptions(tmpReq: $_model.CreateMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMmAppResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMmAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bindingConfig)) {
      request.bindingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bindingConfig, "BindingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.conversationConfig)) {
      request.conversationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conversationConfig, "ConversationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.modelConfig)) {
      request.modelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelConfig, "ModelConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bindingConfigShrink)) {
      query["BindingConfig"] = request.bindingConfigShrink;
    }

    if (!$dara.isNull(request.conversationConfigShrink)) {
      query["ConversationConfig"] = request.conversationConfigShrink;
    }

    if (!$dara.isNull(request.modelConfigShrink)) {
      query["ModelConfig"] = request.modelConfigShrink;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMmAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateMmAppResponse({}));
  }

  /**
   * 创建多模态应用
   * 
   * @param request - CreateMmAppRequest
   * @returns CreateMmAppResponse
   */
  async createMmApp(request: $_model.CreateMmAppRequest): Promise<$_model.CreateMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMmAppWithOptions(request, runtime);
  }

  /**
   * 创建用户画像配置
   * 
   * @param tmpReq - CreateProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProfileResponse
   */
  async createProfileWithOptions(tmpReq: $_model.CreateProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProfileResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.attributesShrink)) {
      query["Attributes"] = request.attributesShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProfile",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateProfileResponse({}));
  }

  /**
   * 创建用户画像配置
   * 
   * @param request - CreateProfileRequest
   * @returns CreateProfileResponse
   */
  async createProfile(request: $_model.CreateProfileRequest): Promise<$_model.CreateProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProfileWithOptions(request, runtime);
  }

  /**
   * 删除指令
   * 
   * @param request - DeleteCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCommandResponse
   */
  async deleteCommandWithOptions(request: $_model.DeleteCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.toolId)) {
      query["ToolId"] = request.toolId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCommand",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCommandResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCommandResponse({}));
  }

  /**
   * 删除指令
   * 
   * @param request - DeleteCommandRequest
   * @returns DeleteCommandResponse
   */
  async deleteCommand(request: $_model.DeleteCommandRequest): Promise<$_model.DeleteCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCommandWithOptions(request, runtime);
  }

  /**
   * 删除用户记忆
   * 
   * @param request - DeleteMemoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(request: $_model.DeleteMemoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.memoryNodeId)) {
      query["MemoryNodeId"] = request.memoryNodeId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemory",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * 删除用户记忆
   * 
   * @param request - DeleteMemoryRequest
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(request: $_model.DeleteMemoryRequest): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMemoryWithOptions(request, runtime);
  }

  /**
   * 删除多模态应用
   * 
   * @param request - DeleteMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMmAppResponse
   */
  async deleteMmAppWithOptions(request: $_model.DeleteMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMmAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMmAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMmAppResponse({}));
  }

  /**
   * 删除多模态应用
   * 
   * @param request - DeleteMmAppRequest
   * @returns DeleteMmAppResponse
   */
  async deleteMmApp(request: $_model.DeleteMmAppRequest): Promise<$_model.DeleteMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMmAppWithOptions(request, runtime);
  }

  /**
   * 删除用户画像配置
   * 
   * @param request - DeleteProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProfileResponse
   */
  async deleteProfileWithOptions(request: $_model.DeleteProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProfile",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProfileResponse({}));
  }

  /**
   * 删除用户画像配置
   * 
   * @param request - DeleteProfileRequest
   * @returns DeleteProfileResponse
   */
  async deleteProfile(request: $_model.DeleteProfileRequest): Promise<$_model.DeleteProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProfileWithOptions(request, runtime);
  }

  /**
   * 指令详情
   * 
   * @param request - DescribeCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommandResponse
   */
  async describeCommandWithOptions(request: $_model.DescribeCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.toolId)) {
      query["ToolId"] = request.toolId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommand",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommandResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommandResponse({}));
  }

  /**
   * 指令详情
   * 
   * @param request - DescribeCommandRequest
   * @returns DescribeCommandResponse
   */
  async describeCommand(request: $_model.DescribeCommandRequest): Promise<$_model.DescribeCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommandWithOptions(request, runtime);
  }

  /**
   * 多模态应用详情
   * 
   * @param request - DescribeMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMmAppResponse
   */
  async describeMmAppWithOptions(request: $_model.DescribeMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMmAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMmAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMmAppResponse({}));
  }

  /**
   * 多模态应用详情
   * 
   * @param request - DescribeMmAppRequest
   * @returns DescribeMmAppResponse
   */
  async describeMmApp(request: $_model.DescribeMmAppRequest): Promise<$_model.DescribeMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMmAppWithOptions(request, runtime);
  }

  /**
   * 指令列表
   * 
   * @param request - ListCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommandResponse
   */
  async listCommandWithOptions(request: $_model.ListCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.toolName)) {
      query["ToolName"] = request.toolName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommand",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommandResponse>(await this.callApi(params, req, runtime), new $_model.ListCommandResponse({}));
  }

  /**
   * 指令列表
   * 
   * @param request - ListCommandRequest
   * @returns ListCommandResponse
   */
  async listCommand(request: $_model.ListCommandRequest): Promise<$_model.ListCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommandWithOptions(request, runtime);
  }

  /**
   * 获取多模态应用列表
   * 
   * @param request - ListMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmAppResponse
   */
  async listMmAppWithOptions(request: $_model.ListMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmAppResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmAppResponse>(await this.callApi(params, req, runtime), new $_model.ListMmAppResponse({}));
  }

  /**
   * 获取多模态应用列表
   * 
   * @param request - ListMmAppRequest
   * @returns ListMmAppResponse
   */
  async listMmApp(request: $_model.ListMmAppRequest): Promise<$_model.ListMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMmAppWithOptions(request, runtime);
  }

  /**
   * 应用发布列表
   * 
   * @param request - ListPublishedMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedMmAppResponse
   */
  async listPublishedMmAppWithOptions(request: $_model.ListPublishedMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishedMmAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishedMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishedMmAppResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishedMmAppResponse({}));
  }

  /**
   * 应用发布列表
   * 
   * @param request - ListPublishedMmAppRequest
   * @returns ListPublishedMmAppResponse
   */
  async listPublishedMmApp(request: $_model.ListPublishedMmAppRequest): Promise<$_model.ListPublishedMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublishedMmAppWithOptions(request, runtime);
  }

  /**
   * 变更用户记忆配置
   * 
   * @param request - PatchMemoryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchMemoryConfigResponse
   */
  async patchMemoryConfigWithOptions(request: $_model.PatchMemoryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PatchMemoryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoUpdate)) {
      query["AutoUpdate"] = request.autoUpdate;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["ExpirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PatchMemoryConfig",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PatchMemoryConfigResponse>(await this.callApi(params, req, runtime), new $_model.PatchMemoryConfigResponse({}));
  }

  /**
   * 变更用户记忆配置
   * 
   * @param request - PatchMemoryConfigRequest
   * @returns PatchMemoryConfigResponse
   */
  async patchMemoryConfig(request: $_model.PatchMemoryConfigRequest): Promise<$_model.PatchMemoryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.patchMemoryConfigWithOptions(request, runtime);
  }

  /**
   * 多模态应用发布
   * 
   * @param request - PublishMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishMmAppResponse
   */
  async publishMmAppWithOptions(request: $_model.PublishMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishMmAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishMmAppResponse>(await this.callApi(params, req, runtime), new $_model.PublishMmAppResponse({}));
  }

  /**
   * 多模态应用发布
   * 
   * @param request - PublishMmAppRequest
   * @returns PublishMmAppResponse
   */
  async publishMmApp(request: $_model.PublishMmAppRequest): Promise<$_model.PublishMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishMmAppWithOptions(request, runtime);
  }

  /**
   * 查询用户记忆配置
   * 
   * @param request - QueryMemoryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMemoryConfigResponse
   */
  async queryMemoryConfigWithOptions(request: $_model.QueryMemoryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMemoryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMemoryConfig",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMemoryConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryMemoryConfigResponse({}));
  }

  /**
   * 查询用户记忆配置
   * 
   * @param request - QueryMemoryConfigRequest
   * @returns QueryMemoryConfigResponse
   */
  async queryMemoryConfig(request: $_model.QueryMemoryConfigRequest): Promise<$_model.QueryMemoryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMemoryConfigWithOptions(request, runtime);
  }

  /**
   * 查询用户记忆列表
   * 
   * @param request - QueryMemoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMemoryListResponse
   */
  async queryMemoryListWithOptions(request: $_model.QueryMemoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMemoryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMemoryList",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMemoryListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMemoryListResponse({}));
  }

  /**
   * 查询用户记忆列表
   * 
   * @param request - QueryMemoryListRequest
   * @returns QueryMemoryListResponse
   */
  async queryMemoryList(request: $_model.QueryMemoryListRequest): Promise<$_model.QueryMemoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMemoryListWithOptions(request, runtime);
  }

  /**
   * 查询用户画像配置
   * 
   * @param request - QueryProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProfileResponse
   */
  async queryProfileWithOptions(request: $_model.QueryProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProfile",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProfileResponse>(await this.callApi(params, req, runtime), new $_model.QueryProfileResponse({}));
  }

  /**
   * 查询用户画像配置
   * 
   * @param request - QueryProfileRequest
   * @returns QueryProfileResponse
   */
  async queryProfile(request: $_model.QueryProfileRequest): Promise<$_model.QueryProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProfileWithOptions(request, runtime);
  }

  /**
   * 查询用户画像
   * 
   * @param request - QueryUserProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserProfileResponse
   */
  async queryUserProfileWithOptions(request: $_model.QueryUserProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserProfile",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserProfileResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserProfileResponse({}));
  }

  /**
   * 查询用户画像
   * 
   * @param request - QueryUserProfileRequest
   * @returns QueryUserProfileResponse
   */
  async queryUserProfile(request: $_model.QueryUserProfileRequest): Promise<$_model.QueryUserProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserProfileWithOptions(request, runtime);
  }

  /**
   * 指令更新
   * 
   * @param tmpReq - UpdateCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCommandResponse
   */
  async updateCommandWithOptions(tmpReq: $_model.UpdateCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCommandResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.toolExamples)) {
      request.toolExamplesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolExamples, "ToolExamples", "json");
    }

    if (!$dara.isNull(tmpReq.toolParams)) {
      request.toolParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolParams, "ToolParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.toolDescription)) {
      query["ToolDescription"] = request.toolDescription;
    }

    if (!$dara.isNull(request.toolExamplesShrink)) {
      query["ToolExamples"] = request.toolExamplesShrink;
    }

    if (!$dara.isNull(request.toolId)) {
      query["ToolId"] = request.toolId;
    }

    if (!$dara.isNull(request.toolName)) {
      query["ToolName"] = request.toolName;
    }

    if (!$dara.isNull(request.toolParamsShrink)) {
      query["ToolParams"] = request.toolParamsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCommand",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCommandResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCommandResponse({}));
  }

  /**
   * 指令更新
   * 
   * @param request - UpdateCommandRequest
   * @returns UpdateCommandResponse
   */
  async updateCommand(request: $_model.UpdateCommandRequest): Promise<$_model.UpdateCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCommandWithOptions(request, runtime);
  }

  /**
   * 更新用户记忆
   * 
   * @param tmpReq - UpdateMemoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(tmpReq: $_model.UpdateMemoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMemoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metaData)) {
      request.metaDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metaData, "MetaData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.memoryNodeId)) {
      query["MemoryNodeId"] = request.memoryNodeId;
    }

    if (!$dara.isNull(request.metaDataShrink)) {
      query["MetaData"] = request.metaDataShrink;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemory",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
  }

  /**
   * 更新用户记忆
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMemoryWithOptions(request, runtime);
  }

  /**
   * 多模态应用更新
   * 
   * @param tmpReq - UpdateMmAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMmAppResponse
   */
  async updateMmAppWithOptions(tmpReq: $_model.UpdateMmAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMmAppResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMmAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bindingConfig)) {
      request.bindingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bindingConfig, "BindingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.conversationConfig)) {
      request.conversationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conversationConfig, "ConversationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.modelConfig)) {
      request.modelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelConfig, "ModelConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bindingConfigShrink)) {
      query["BindingConfig"] = request.bindingConfigShrink;
    }

    if (!$dara.isNull(request.conversationConfigShrink)) {
      query["ConversationConfig"] = request.conversationConfigShrink;
    }

    if (!$dara.isNull(request.modelConfigShrink)) {
      query["ModelConfig"] = request.modelConfigShrink;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMmApp",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMmAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMmAppResponse({}));
  }

  /**
   * 多模态应用更新
   * 
   * @param request - UpdateMmAppRequest
   * @returns UpdateMmAppResponse
   */
  async updateMmApp(request: $_model.UpdateMmAppRequest): Promise<$_model.UpdateMmAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMmAppWithOptions(request, runtime);
  }

  /**
   * 变更用户画像配置
   * 
   * @param tmpReq - UpdateProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProfileResponse
   */
  async updateProfileWithOptions(tmpReq: $_model.UpdateProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProfileResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributesOperations)) {
      request.attributesOperationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributesOperations, "AttributesOperations", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.attributesOperationsShrink)) {
      query["AttributesOperations"] = request.attributesOperationsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.userDefinedId)) {
      query["UserDefinedId"] = request.userDefinedId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProfile",
      version: "2025-09-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProfileResponse({}));
  }

  /**
   * 变更用户画像配置
   * 
   * @param request - UpdateProfileRequest
   * @returns UpdateProfileResponse
   */
  async updateProfile(request: $_model.UpdateProfileRequest): Promise<$_model.UpdateProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProfileWithOptions(request, runtime);
  }

}
