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
    this._endpoint = this.getEndpoint("openapiexplorer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 验证 Terraform HCL 语法
   * 
   * @param request - ApiMcpServerValidateHclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApiMcpServerValidateHclResponse
   */
  async apiMcpServerValidateHclWithOptions(request: $_model.ApiMcpServerValidateHclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApiMcpServerValidateHclResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApiMcpServerValidateHcl",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/terraform/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApiMcpServerValidateHclResponse>(await this.callApi(params, req, runtime), new $_model.ApiMcpServerValidateHclResponse({}));
  }

  /**
   * 验证 Terraform HCL 语法
   * 
   * @param request - ApiMcpServerValidateHclRequest
   * @returns ApiMcpServerValidateHclResponse
   */
  async apiMcpServerValidateHcl(request: $_model.ApiMcpServerValidateHclRequest): Promise<$_model.ApiMcpServerValidateHclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.apiMcpServerValidateHclWithOptions(request, headers, runtime);
  }

  /**
   * 创建ApiMcpServer
   * 
   * @param request - CreateApiMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiMcpServerResponse
   */
  async createApiMcpServerWithOptions(request: $_model.CreateApiMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiMcpServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalApiDescriptions)) {
      body["additionalApiDescriptions"] = request.additionalApiDescriptions;
    }

    if (!$dara.isNull(request.apis)) {
      body["apis"] = request.apis;
    }

    if (!$dara.isNull(request.assumeRoleExtraPolicy)) {
      body["assumeRoleExtraPolicy"] = request.assumeRoleExtraPolicy;
    }

    if (!$dara.isNull(request.assumeRoleName)) {
      body["assumeRoleName"] = request.assumeRoleName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAssumeRole)) {
      body["enableAssumeRole"] = request.enableAssumeRole;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.oauthClientId)) {
      body["oauthClientId"] = request.oauthClientId;
    }

    if (!$dara.isNull(request.prompts)) {
      body["prompts"] = request.prompts;
    }

    if (!$dara.isNull(request.systemTools)) {
      body["systemTools"] = request.systemTools;
    }

    if (!$dara.isNull(request.terraformTools)) {
      body["terraformTools"] = request.terraformTools;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiMcpServer",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/apimcpserver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiMcpServerResponse({}));
  }

  /**
   * 创建ApiMcpServer
   * 
   * @param request - CreateApiMcpServerRequest
   * @returns CreateApiMcpServerResponse
   */
  async createApiMcpServer(request: $_model.CreateApiMcpServerRequest): Promise<$_model.CreateApiMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApiMcpServerWithOptions(request, headers, runtime);
  }

  /**
   * 删除ApiMcpServer
   * 
   * @param request - DeleteApiMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiMcpServerResponse
   */
  async deleteApiMcpServerWithOptions(request: $_model.DeleteApiMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiMcpServerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiMcpServer",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/apimcpserver`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiMcpServerResponse({}));
  }

  /**
   * 删除ApiMcpServer
   * 
   * @param request - DeleteApiMcpServerRequest
   * @returns DeleteApiMcpServerResponse
   */
  async deleteApiMcpServer(request: $_model.DeleteApiMcpServerRequest): Promise<$_model.DeleteApiMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiMcpServerWithOptions(request, headers, runtime);
  }

  /**
   * 动态生成Aliyun CLI命令
   * 
   * @param tmpReq - GenerateCLICommandRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCLICommandResponse
   */
  async generateCLICommandWithOptions(tmpReq: $_model.GenerateCLICommandRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCLICommandResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateCLICommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiParams)) {
      request.apiParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiParams, "apiParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.api)) {
      body["api"] = request.api;
    }

    if (!$dara.isNull(request.apiParamsShrink)) {
      body["apiParams"] = request.apiParamsShrink;
    }

    if (!$dara.isNull(request.apiVersion)) {
      body["apiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.product)) {
      body["product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCLICommand",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/api/cli/makeCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCLICommandResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCLICommandResponse({}));
  }

  /**
   * 动态生成Aliyun CLI命令
   * 
   * @param request - GenerateCLICommandRequest
   * @returns GenerateCLICommandResponse
   */
  async generateCLICommand(request: $_model.GenerateCLICommandRequest): Promise<$_model.GenerateCLICommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCLICommandWithOptions(request, headers, runtime);
  }

  /**
   * 获取产品相关接口的开放元数据
   * 
   * @param request - GetApiDefinitionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiDefinitionResponse
   */
  async getApiDefinitionWithOptions(request: $_model.GetApiDefinitionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiDefinitionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.api)) {
      query["api"] = request.api;
    }

    if (!$dara.isNull(request.apiVersion)) {
      query["apiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiDefinition",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/api/definition`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.GetApiDefinitionResponse({}));
  }

  /**
   * 获取产品相关接口的开放元数据
   * 
   * @param request - GetApiDefinitionRequest
   * @returns GetApiDefinitionResponse
   */
  async getApiDefinition(request: $_model.GetApiDefinitionRequest): Promise<$_model.GetApiDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiDefinitionWithOptions(request, headers, runtime);
  }

  /**
   * 查询 ApiMcpServer
   * 
   * @param request - GetApiMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiMcpServerResponse
   */
  async getApiMcpServerWithOptions(request: $_model.GetApiMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiMcpServerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiMcpServer",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/apimcpserver`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.GetApiMcpServerResponse({}));
  }

  /**
   * 查询 ApiMcpServer
   * 
   * @param request - GetApiMcpServerRequest
   * @returns GetApiMcpServerResponse
   */
  async getApiMcpServer(request: $_model.GetApiMcpServerRequest): Promise<$_model.GetApiMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiMcpServerWithOptions(request, headers, runtime);
  }

  /**
   * Queries an error solution by error code.
   * 
   * @remarks
   * You can call this API operation to query public information instead of special information, such as the account ownership. Permissions on this API operation cannot be granted to other members.
   * 
   * @param request - GetErrorCodeSolutionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorCodeSolutionsResponse
   */
  async getErrorCodeSolutionsWithOptions(request: $_model.GetErrorCodeSolutionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetErrorCodeSolutionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["errorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.errorMessage)) {
      query["errorMessage"] = request.errorMessage;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErrorCodeSolutions",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getErrorCodeSolutions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErrorCodeSolutionsResponse>(await this.callApi(params, req, runtime), new $_model.GetErrorCodeSolutionsResponse({}));
  }

  /**
   * Queries an error solution by error code.
   * 
   * @remarks
   * You can call this API operation to query public information instead of special information, such as the account ownership. Permissions on this API operation cannot be granted to other members.
   * 
   * @param request - GetErrorCodeSolutionsRequest
   * @returns GetErrorCodeSolutionsResponse
   */
  async getErrorCodeSolutions(request: $_model.GetErrorCodeSolutionsRequest): Promise<$_model.GetErrorCodeSolutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getErrorCodeSolutionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the log of an API call performed by using the current account based on the returned request ID of the API to troubleshoot issues.
   * 
   * @remarks
   * Permissions on this API cannot be granted to other members.
   * 
   * @param request - GetOwnRequestLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOwnRequestLogResponse
   */
  async getOwnRequestLogWithOptions(request: $_model.GetOwnRequestLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOwnRequestLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logRequestId)) {
      query["logRequestId"] = request.logRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOwnRequestLog",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getOwnRequestLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOwnRequestLogResponse>(await this.callApi(params, req, runtime), new $_model.GetOwnRequestLogResponse({}));
  }

  /**
   * Queries the log of an API call performed by using the current account based on the returned request ID of the API to troubleshoot issues.
   * 
   * @remarks
   * Permissions on this API cannot be granted to other members.
   * 
   * @param request - GetOwnRequestLogRequest
   * @returns GetOwnRequestLogResponse
   */
  async getOwnRequestLog(request: $_model.GetOwnRequestLogRequest): Promise<$_model.GetOwnRequestLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOwnRequestLogWithOptions(request, headers, runtime);
  }

  /**
   * 获取产品的接入点信息
   * 
   * @param request - GetProductEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductEndpointsResponse
   */
  async getProductEndpointsWithOptions(request: $_model.GetProductEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductEndpoints",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/product/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.GetProductEndpointsResponse({}));
  }

  /**
   * 获取产品的接入点信息
   * 
   * @param request - GetProductEndpointsRequest
   * @returns GetProductEndpointsResponse
   */
  async getProductEndpoints(request: $_model.GetProductEndpointsRequest): Promise<$_model.GetProductEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductEndpointsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the log of an API call based on the returned request ID of the API to troubleshoot issues.
   * 
   * @remarks
   * You can grant permissions to a Resource Access Management (RAM) user or assume a role to query the log of an API call across RAM users or Alibaba Cloud accounts. For more information, see [Grant permissions to troubleshoot API errors across accounts](https://help.aliyun.com/document_detail/2868101.html).
   * 
   * @param request - GetRequestLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRequestLogResponse
   */
  async getRequestLogWithOptions(request: $_model.GetRequestLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRequestLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logRequestId)) {
      query["logRequestId"] = request.logRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRequestLog",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/getRequestLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRequestLogResponse>(await this.callApi(params, req, runtime), new $_model.GetRequestLogResponse({}));
  }

  /**
   * Queries the log of an API call based on the returned request ID of the API to troubleshoot issues.
   * 
   * @remarks
   * You can grant permissions to a Resource Access Management (RAM) user or assume a role to query the log of an API call across RAM users or Alibaba Cloud accounts. For more information, see [Grant permissions to troubleshoot API errors across accounts](https://help.aliyun.com/document_detail/2868101.html).
   * 
   * @param request - GetRequestLogRequest
   * @returns GetRequestLogResponse
   */
  async getRequestLog(request: $_model.GetRequestLogRequest): Promise<$_model.GetRequestLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRequestLogWithOptions(request, headers, runtime);
  }

  /**
   * 获取产品的开放元数据
   * 
   * @param request - ListApiDefinitionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiDefinitionsResponse
   */
  async listApiDefinitionsWithOptions(request: $_model.ListApiDefinitionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiDefinitionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiVersion)) {
      query["apiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiDefinitions",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/api/definitions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiDefinitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListApiDefinitionsResponse({}));
  }

  /**
   * 获取产品的开放元数据
   * 
   * @param request - ListApiDefinitionsRequest
   * @returns ListApiDefinitionsResponse
   */
  async listApiDefinitions(request: $_model.ListApiDefinitionsRequest): Promise<$_model.ListApiDefinitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiDefinitionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询系统工具列表
   * 
   * @param request - ListApiMcpServerSystemToolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiMcpServerSystemToolsResponse
   */
  async listApiMcpServerSystemToolsWithOptions(request: $_model.ListApiMcpServerSystemToolsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiMcpServerSystemToolsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiMcpServerSystemTools",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/mcpSystemTools`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiMcpServerSystemToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListApiMcpServerSystemToolsResponse({}));
  }

  /**
   * 查询系统工具列表
   * 
   * @param request - ListApiMcpServerSystemToolsRequest
   * @returns ListApiMcpServerSystemToolsResponse
   */
  async listApiMcpServerSystemTools(request: $_model.ListApiMcpServerSystemToolsRequest): Promise<$_model.ListApiMcpServerSystemToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiMcpServerSystemToolsWithOptions(request, headers, runtime);
  }

  /**
   * 列出资源ApiMcpServer
   * 
   * @param request - ListApiMcpServersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiMcpServersResponse
   */
  async listApiMcpServersWithOptions(request: $_model.ListApiMcpServersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiMcpServersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createTime)) {
      query["createTime"] = request.createTime;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["skip"] = request.skip;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.updateTime)) {
      query["updateTime"] = request.updateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiMcpServers",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/apimcpservers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiMcpServersResponse>(await this.callApi(params, req, runtime), new $_model.ListApiMcpServersResponse({}));
  }

  /**
   * 列出资源ApiMcpServer
   * 
   * @param request - ListApiMcpServersRequest
   * @returns ListApiMcpServersResponse
   */
  async listApiMcpServers(request: $_model.ListApiMcpServersRequest): Promise<$_model.ListApiMcpServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiMcpServersWithOptions(request, headers, runtime);
  }

  /**
   * 更新UpdateApiMcpServer
   * 
   * @param request - UpdateApiMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiMcpServerResponse
   */
  async updateApiMcpServerWithOptions(request: $_model.UpdateApiMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiMcpServerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalApiDescriptions)) {
      body["additionalApiDescriptions"] = request.additionalApiDescriptions;
    }

    if (!$dara.isNull(request.apis)) {
      body["apis"] = request.apis;
    }

    if (!$dara.isNull(request.assumeRoleExtraPolicy)) {
      body["assumeRoleExtraPolicy"] = request.assumeRoleExtraPolicy;
    }

    if (!$dara.isNull(request.assumeRoleName)) {
      body["assumeRoleName"] = request.assumeRoleName;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAssumeRole)) {
      body["enableAssumeRole"] = request.enableAssumeRole;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.oauthClientId)) {
      body["oauthClientId"] = request.oauthClientId;
    }

    if (!$dara.isNull(request.prompts)) {
      body["prompts"] = request.prompts;
    }

    if (!$dara.isNull(request.systemTools)) {
      body["systemTools"] = request.systemTools;
    }

    if (!$dara.isNull(request.terraformTools)) {
      body["terraformTools"] = request.terraformTools;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiMcpServer",
      version: "2024-11-30",
      protocol: "HTTPS",
      pathname: `/apimcpserver`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiMcpServerResponse({}));
  }

  /**
   * 更新UpdateApiMcpServer
   * 
   * @param request - UpdateApiMcpServerRequest
   * @returns UpdateApiMcpServerResponse
   */
  async updateApiMcpServer(request: $_model.UpdateApiMcpServerRequest): Promise<$_model.UpdateApiMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApiMcpServerWithOptions(request, headers, runtime);
  }

}
