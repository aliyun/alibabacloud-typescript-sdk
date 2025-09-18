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

}
