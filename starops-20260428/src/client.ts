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
    this._endpoint = this.getEndpoint("starops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async *createChatWithSSE(request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.digitalEmployeeName)) {
      body["digitalEmployeeName"] = request.digitalEmployeeName;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CreateChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateChatResponse({}));
      }

    }
  }

  /**
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async createChatWithOptions(request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.digitalEmployeeName)) {
      body["digitalEmployeeName"] = request.digitalEmployeeName;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatResponse({}));
  }

  /**
   * 创建对话
   * 
   * @param request - CreateChatRequest
   * @returns CreateChatResponse
   */
  async createChat(request: $_model.CreateChatRequest): Promise<$_model.CreateChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatWithOptions(request, headers, runtime);
  }

  /**
   * 创建DigitalEmployee
   * 
   * @param request - CreateDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalEmployeeResponse
   */
  async createDigitalEmployeeWithOptions(request: $_model.CreateDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalEmployeeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRule)) {
      body["defaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.knowledges)) {
      body["knowledges"] = request.knowledges;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalEmployee",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digital-employee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalEmployeeResponse({}));
  }

  /**
   * 创建DigitalEmployee
   * 
   * @param request - CreateDigitalEmployeeRequest
   * @returns CreateDigitalEmployeeResponse
   */
  async createDigitalEmployee(request: $_model.CreateDigitalEmployeeRequest): Promise<$_model.CreateDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDigitalEmployeeWithOptions(request, headers, runtime);
  }

  /**
   * 创建技能
   * 
   * @param request - CreateDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalEmployeeSkillResponse
   */
  async createDigitalEmployeeSkillWithOptions(name: string, request: $_model.CreateDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalEmployeeSkillResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.skillName)) {
      body["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalEmployeeSkill",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalEmployeeSkillResponse({}));
  }

  /**
   * 创建技能
   * 
   * @param request - CreateDigitalEmployeeSkillRequest
   * @returns CreateDigitalEmployeeSkillResponse
   */
  async createDigitalEmployeeSkill(name: string, request: $_model.CreateDigitalEmployeeSkillRequest): Promise<$_model.CreateDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDigitalEmployeeSkillWithOptions(name, request, headers, runtime);
  }

  /**
   * 创建会话
   * 
   * @param request - CreateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThreadResponse
   */
  async createThreadWithOptions(name: string, request: $_model.CreateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThread",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateThreadResponse>(await this.callApi(params, req, runtime), new $_model.CreateThreadResponse({}));
  }

  /**
   * 创建会话
   * 
   * @param request - CreateThreadRequest
   * @returns CreateThreadResponse
   */
  async createThread(name: string, request: $_model.CreateThreadRequest): Promise<$_model.CreateThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createThreadWithOptions(name, request, headers, runtime);
  }

  /**
   * 删除DigitalEmployee
   * 
   * @param request - DeleteDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDigitalEmployeeResponse
   */
  async deleteDigitalEmployeeWithOptions(name: string, request: $_model.DeleteDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDigitalEmployeeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDigitalEmployee",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDigitalEmployeeResponse({}));
  }

  /**
   * 删除DigitalEmployee
   * 
   * @param request - DeleteDigitalEmployeeRequest
   * @returns DeleteDigitalEmployeeResponse
   */
  async deleteDigitalEmployee(name: string, request: $_model.DeleteDigitalEmployeeRequest): Promise<$_model.DeleteDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDigitalEmployeeWithOptions(name, request, headers, runtime);
  }

  /**
   * 删除技能
   * 
   * @param request - DeleteDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDigitalEmployeeSkillResponse
   */
  async deleteDigitalEmployeeSkillWithOptions(name: string, skillName: string, request: $_model.DeleteDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDigitalEmployeeSkillResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDigitalEmployeeSkill",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDigitalEmployeeSkillResponse({}));
  }

  /**
   * 删除技能
   * 
   * @param request - DeleteDigitalEmployeeSkillRequest
   * @returns DeleteDigitalEmployeeSkillResponse
   */
  async deleteDigitalEmployeeSkill(name: string, skillName: string, request: $_model.DeleteDigitalEmployeeSkillRequest): Promise<$_model.DeleteDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDigitalEmployeeSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * 删除会话
   * 
   * @param request - DeleteThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteThreadResponse
   */
  async deleteThreadWithOptions(name: string, threadId: string, request: $_model.DeleteThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteThreadResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteThread",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteThreadResponse>(await this.callApi(params, req, runtime), new $_model.DeleteThreadResponse({}));
  }

  /**
   * 删除会话
   * 
   * @param request - DeleteThreadRequest
   * @returns DeleteThreadResponse
   */
  async deleteThread(name: string, threadId: string, request: $_model.DeleteThreadRequest): Promise<$_model.DeleteThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteThreadWithOptions(name, threadId, request, headers, runtime);
  }

  /**
   * 查询 DigitalEmployee
   * 
   * @param request - GetDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDigitalEmployeeResponse
   */
  async getDigitalEmployeeWithOptions(name: string, request: $_model.GetDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDigitalEmployeeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDigitalEmployee",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.GetDigitalEmployeeResponse({}));
  }

  /**
   * 查询 DigitalEmployee
   * 
   * @param request - GetDigitalEmployeeRequest
   * @returns GetDigitalEmployeeResponse
   */
  async getDigitalEmployee(name: string, request: $_model.GetDigitalEmployeeRequest): Promise<$_model.GetDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDigitalEmployeeWithOptions(name, request, headers, runtime);
  }

  /**
   * 获取技能详情
   * 
   * @param request - GetDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDigitalEmployeeSkillResponse
   */
  async getDigitalEmployeeSkillWithOptions(name: string, skillName: string, request: $_model.GetDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDigitalEmployeeSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDigitalEmployeeSkill",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetDigitalEmployeeSkillResponse({}));
  }

  /**
   * 获取技能详情
   * 
   * @param request - GetDigitalEmployeeSkillRequest
   * @returns GetDigitalEmployeeSkillResponse
   */
  async getDigitalEmployeeSkill(name: string, skillName: string, request: $_model.GetDigitalEmployeeSkillRequest): Promise<$_model.GetDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDigitalEmployeeSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * 获取会话
   * 
   * @param request - GetThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetThreadResponse
   */
  async getThreadWithOptions(name: string, threadId: string, request: $_model.GetThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetThreadResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetThread",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetThreadResponse>(await this.callApi(params, req, runtime), new $_model.GetThreadResponse({}));
  }

  /**
   * 获取会话
   * 
   * @param request - GetThreadRequest
   * @returns GetThreadResponse
   */
  async getThread(name: string, threadId: string, request: $_model.GetThreadRequest): Promise<$_model.GetThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getThreadWithOptions(name, threadId, request, headers, runtime);
  }

  /**
   * 获取会话数据
   * 
   * @param request - GetThreadDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetThreadDataResponse
   */
  async getThreadDataWithOptions(name: string, threadId: string, request: $_model.GetThreadDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetThreadDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetThreadData",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}/data`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetThreadDataResponse>(await this.callApi(params, req, runtime), new $_model.GetThreadDataResponse({}));
  }

  /**
   * 获取会话数据
   * 
   * @param request - GetThreadDataRequest
   * @returns GetThreadDataResponse
   */
  async getThreadData(name: string, threadId: string, request: $_model.GetThreadDataRequest): Promise<$_model.GetThreadDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getThreadDataWithOptions(name, threadId, request, headers, runtime);
  }

  /**
   * 列出技能版本
   * 
   * @param request - ListDigitalEmployeeSkillVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeeSkillVersionsResponse
   */
  async listDigitalEmployeeSkillVersionsWithOptions(name: string, skillName: string, request: $_model.ListDigitalEmployeeSkillVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeeSkillVersionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployeeSkillVersions",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeeSkillVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeeSkillVersionsResponse({}));
  }

  /**
   * 列出技能版本
   * 
   * @param request - ListDigitalEmployeeSkillVersionsRequest
   * @returns ListDigitalEmployeeSkillVersionsResponse
   */
  async listDigitalEmployeeSkillVersions(name: string, skillName: string, request: $_model.ListDigitalEmployeeSkillVersionsRequest): Promise<$_model.ListDigitalEmployeeSkillVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeeSkillVersionsWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * 列出技能
   * 
   * @param request - ListDigitalEmployeeSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeeSkillsResponse
   */
  async listDigitalEmployeeSkillsWithOptions(name: string, request: $_model.ListDigitalEmployeeSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeeSkillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skillName)) {
      query["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployeeSkills",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skills`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeeSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeeSkillsResponse({}));
  }

  /**
   * 列出技能
   * 
   * @param request - ListDigitalEmployeeSkillsRequest
   * @returns ListDigitalEmployeeSkillsResponse
   */
  async listDigitalEmployeeSkills(name: string, request: $_model.ListDigitalEmployeeSkillsRequest): Promise<$_model.ListDigitalEmployeeSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeeSkillsWithOptions(name, request, headers, runtime);
  }

  /**
   * 列出资源DigitalEmployee
   * 
   * @param tmpReq - ListDigitalEmployeesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDigitalEmployeesResponse
   */
  async listDigitalEmployeesWithOptions(tmpReq: $_model.ListDigitalEmployeesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDigitalEmployeesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDigitalEmployeesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.employeeType)) {
      query["employeeType"] = request.employeeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDigitalEmployees",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digital-employee`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDigitalEmployeesResponse>(await this.callApi(params, req, runtime), new $_model.ListDigitalEmployeesResponse({}));
  }

  /**
   * 列出资源DigitalEmployee
   * 
   * @param request - ListDigitalEmployeesRequest
   * @returns ListDigitalEmployeesResponse
   */
  async listDigitalEmployees(request: $_model.ListDigitalEmployeesRequest): Promise<$_model.ListDigitalEmployeesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDigitalEmployeesWithOptions(request, headers, runtime);
  }

  /**
   * 列出会话
   * 
   * @param tmpReq - ListThreadsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListThreadsResponse
   */
  async listThreadsWithOptions(name: string, tmpReq: $_model.ListThreadsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListThreadsResponse> {
    tmpReq.validate();
    let request = new $_model.ListThreadsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.threadId)) {
      query["threadId"] = request.threadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListThreads",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/threads`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListThreadsResponse>(await this.callApi(params, req, runtime), new $_model.ListThreadsResponse({}));
  }

  /**
   * 列出会话
   * 
   * @param request - ListThreadsRequest
   * @returns ListThreadsResponse
   */
  async listThreads(name: string, request: $_model.ListThreadsRequest): Promise<$_model.ListThreadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listThreadsWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新UpdateDigitalEmployee
   * 
   * @param request - UpdateDigitalEmployeeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDigitalEmployeeResponse
   */
  async updateDigitalEmployeeWithOptions(name: string, request: $_model.UpdateDigitalEmployeeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDigitalEmployeeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRule)) {
      body["defaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.knowledges)) {
      body["knowledges"] = request.knowledges;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDigitalEmployee",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digital-employee/${$dara.URL.percentEncode(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDigitalEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDigitalEmployeeResponse({}));
  }

  /**
   * 更新UpdateDigitalEmployee
   * 
   * @param request - UpdateDigitalEmployeeRequest
   * @returns UpdateDigitalEmployeeResponse
   */
  async updateDigitalEmployee(name: string, request: $_model.UpdateDigitalEmployeeRequest): Promise<$_model.UpdateDigitalEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDigitalEmployeeWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新技能
   * 
   * @param request - UpdateDigitalEmployeeSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDigitalEmployeeSkillResponse
   */
  async updateDigitalEmployeeSkillWithOptions(name: string, skillName: string, request: $_model.UpdateDigitalEmployeeSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDigitalEmployeeSkillResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDigitalEmployeeSkill",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/skill/${$dara.URL.percentEncode(skillName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDigitalEmployeeSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDigitalEmployeeSkillResponse({}));
  }

  /**
   * 更新技能
   * 
   * @param request - UpdateDigitalEmployeeSkillRequest
   * @returns UpdateDigitalEmployeeSkillResponse
   */
  async updateDigitalEmployeeSkill(name: string, skillName: string, request: $_model.UpdateDigitalEmployeeSkillRequest): Promise<$_model.UpdateDigitalEmployeeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDigitalEmployeeSkillWithOptions(name, skillName, request, headers, runtime);
  }

  /**
   * 更新会话
   * 
   * @param request - UpdateThreadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateThreadResponse
   */
  async updateThreadWithOptions(name: string, threadId: string, request: $_model.UpdateThreadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateThread",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: `/digitalEmployee/${$dara.URL.percentEncode(name)}/thread/${$dara.URL.percentEncode(threadId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateThreadResponse>(await this.callApi(params, req, runtime), new $_model.UpdateThreadResponse({}));
  }

  /**
   * 更新会话
   * 
   * @param request - UpdateThreadRequest
   * @returns UpdateThreadResponse
   */
  async updateThread(name: string, threadId: string, request: $_model.UpdateThreadRequest): Promise<$_model.UpdateThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateThreadWithOptions(name, threadId, request, headers, runtime);
  }

}
