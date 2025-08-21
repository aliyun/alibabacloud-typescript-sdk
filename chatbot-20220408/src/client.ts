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
    this._endpoint = this.getEndpoint("chatbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 申请流式网关AccessToken
   * 
   * @param request - ApplyForStreamAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyForStreamAccessTokenResponse
   */
  async applyForStreamAccessTokenWithOptions(request: $_model.ApplyForStreamAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyForStreamAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyForStreamAccessToken",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyForStreamAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.ApplyForStreamAccessTokenResponse({}));
  }

  /**
   * 申请流式网关AccessToken
   * 
   * @param request - ApplyForStreamAccessTokenRequest
   * @returns ApplyForStreamAccessTokenResponse
   */
  async applyForStreamAccessToken(request: $_model.ApplyForStreamAccessTokenRequest): Promise<$_model.ApplyForStreamAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyForStreamAccessTokenWithOptions(request, runtime);
  }

  /**
   * 会话-联想API
   * 
   * @param tmpReq - AssociateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResponse
   */
  async associateWithOptions(tmpReq: $_model.AssociateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateResponse> {
    tmpReq.validate();
    let request = new $_model.AssociateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.perspectiveShrink)) {
      query["Perspective"] = request.perspectiveShrink;
    }

    if (!$dara.isNull(request.recommendNum)) {
      query["RecommendNum"] = request.recommendNum;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Associate",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateResponse>(await this.callApi(params, req, runtime), new $_model.AssociateResponse({}));
  }

  /**
   * 会话-联想API
   * 
   * @param request - AssociateRequest
   * @returns AssociateResponse
   */
  async associate(request: $_model.AssociateRequest): Promise<$_model.AssociateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateWithOptions(request, runtime);
  }

  /**
   * 获取欢迎语
   * 
   * @param request - BeginSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginSessionResponse
   */
  async beginSessionWithOptions(request: $_model.BeginSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeginSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginSession",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeginSessionResponse>(await this.callApi(params, req, runtime), new $_model.BeginSessionResponse({}));
  }

  /**
   * 获取欢迎语
   * 
   * @param request - BeginSessionRequest
   * @returns BeginSessionResponse
   */
  async beginSession(request: $_model.BeginSessionRequest): Promise<$_model.BeginSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginSessionWithOptions(request, runtime);
  }

  /**
   * 取消机器人发布
   * 
   * @param request - CancelInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelInstancePublishTaskResponse
   */
  async cancelInstancePublishTaskWithOptions(request: $_model.CancelInstancePublishTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelInstancePublishTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelInstancePublishTaskResponse({}));
  }

  /**
   * 取消机器人发布
   * 
   * @param request - CancelInstancePublishTaskRequest
   * @returns CancelInstancePublishTaskResponse
   */
  async cancelInstancePublishTask(request: $_model.CancelInstancePublishTaskRequest): Promise<$_model.CancelInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 取消发布任务
   * 
   * @param request - CancelPublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPublishTaskResponse
   */
  async cancelPublishTaskWithOptions(request: $_model.CancelPublishTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPublishTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPublishTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelPublishTaskResponse({}));
  }

  /**
   * 取消发布任务
   * 
   * @param request - CancelPublishTaskRequest
   * @returns CancelPublishTaskResponse
   */
  async cancelPublishTask(request: $_model.CancelPublishTaskRequest): Promise<$_model.CancelPublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPublishTaskWithOptions(request, runtime);
  }

  /**
   * 会话API
   * 
   * @param tmpReq - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(tmpReq: $_model.ChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    tmpReq.validate();
    let request = new $_model.ChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.perspectiveShrink)) {
      query["Perspective"] = request.perspectiveShrink;
    }

    if (!$dara.isNull(request.sandBox)) {
      query["SandBox"] = request.sandBox;
    }

    if (!$dara.isNull(request.senderId)) {
      query["SenderId"] = request.senderId;
    }

    if (!$dara.isNull(request.senderNick)) {
      query["SenderNick"] = request.senderNick;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    if (!$dara.isNull(request.vendorParam)) {
      query["VendorParam"] = request.vendorParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatResponse>(await this.callApi(params, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * 会话API
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * 继续机器人发布
   * 
   * @param request - ContinueInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueInstancePublishTaskResponse
   */
  async continueInstancePublishTaskWithOptions(request: $_model.ContinueInstancePublishTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueInstancePublishTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinueInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new $_model.ContinueInstancePublishTaskResponse({}));
  }

  /**
   * 继续机器人发布
   * 
   * @param request - ContinueInstancePublishTaskRequest
   * @returns ContinueInstancePublishTaskResponse
   */
  async continueInstancePublishTask(request: $_model.ContinueInstancePublishTaskRequest): Promise<$_model.ContinueInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 新增类目
   * 
   * @param request - CreateCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCategoryResponse
   */
  async createCategoryWithOptions(request: $_model.CreateCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.knowledgeType)) {
      body["KnowledgeType"] = request.knowledgeType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateCategoryResponse({}));
  }

  /**
   * 新增类目
   * 
   * @param request - CreateCategoryRequest
   * @returns CreateCategoryResponse
   */
  async createCategory(request: $_model.CreateCategoryRequest): Promise<$_model.CreateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCategoryWithOptions(request, runtime);
  }

  /**
   * 新建FAQ关联问
   * 
   * @param request - CreateConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConnQuestionResponse
   */
  async createConnQuestionWithOptions(request: $_model.CreateConnQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConnQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connQuestionId)) {
      body["ConnQuestionId"] = request.connQuestionId;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConnQuestionResponse>(await this.callApi(params, req, runtime), new $_model.CreateConnQuestionResponse({}));
  }

  /**
   * 新建FAQ关联问
   * 
   * @param request - CreateConnQuestionRequest
   * @returns CreateConnQuestionResponse
   */
  async createConnQuestion(request: $_model.CreateConnQuestionRequest): Promise<$_model.CreateConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-创建
   * 
   * @param request - CreateDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDSEntityResponse
   */
  async createDSEntityWithOptions(request: $_model.CreateDSEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDSEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDSEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateDSEntityResponse({}));
  }

  /**
   * 实体-创建
   * 
   * @param request - CreateDSEntityRequest
   * @returns CreateDSEntityResponse
   */
  async createDSEntity(request: $_model.CreateDSEntityRequest): Promise<$_model.CreateDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-创建
   * 
   * @param tmpReq - CreateDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDSEntityValueResponse
   */
  async createDSEntityValueWithOptions(tmpReq: $_model.CreateDSEntityValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDSEntityValueResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDSEntityValueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.synonyms)) {
      request.synonymsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synonyms, "Synonyms", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synonymsShrink)) {
      body["Synonyms"] = request.synonymsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDSEntityValueResponse>(await this.callApi(params, req, runtime), new $_model.CreateDSEntityValueResponse({}));
  }

  /**
   * 实体成员-创建
   * 
   * @param request - CreateDSEntityValueRequest
   * @returns CreateDSEntityValueResponse
   */
  async createDSEntityValue(request: $_model.CreateDSEntityValueRequest): Promise<$_model.CreateDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 创建文档
   * 
   * @param tmpReq - CreateDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocResponse
   */
  async createDocWithOptions(tmpReq: $_model.CreateDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docMetadata)) {
      request.docMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docMetadata, "DocMetadata", "json");
    }

    if (!$dara.isNull(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.docMetadataShrink)) {
      query["DocMetadata"] = request.docMetadataShrink;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.meta)) {
      query["Meta"] = request.meta;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocResponse({}));
  }

  /**
   * 创建文档
   * 
   * @param request - CreateDocRequest
   * @returns CreateDocResponse
   */
  async createDoc(request: $_model.CreateDocRequest): Promise<$_model.CreateDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocWithOptions(request, runtime);
  }

  /**
   * 新建FAQ
   * 
   * @param request - CreateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFaqResponse
   */
  async createFaqWithOptions(request: $_model.CreateFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFaqResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.solutionContent)) {
      body["SolutionContent"] = request.solutionContent;
    }

    if (!$dara.isNull(request.solutionType)) {
      body["SolutionType"] = request.solutionType;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFaqResponse>(await this.callApi(params, req, runtime), new $_model.CreateFaqResponse({}));
  }

  /**
   * 新建FAQ
   * 
   * @param request - CreateFaqRequest
   * @returns CreateFaqResponse
   */
  async createFaq(request: $_model.CreateFaqRequest): Promise<$_model.CreateFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-创建
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.introduction)) {
      query["Introduction"] = request.introduction;
    }

    if (!$dara.isNull(request.languageCode)) {
      query["LanguageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.robotType)) {
      query["RobotType"] = request.robotType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * 机器人-创建
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建机器人发布任务
   * 
   * @param request - CreateInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstancePublishTaskResponse
   */
  async createInstancePublishTaskWithOptions(request: $_model.CreateInstancePublishTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstancePublishTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstancePublishTaskResponse({}));
  }

  /**
   * 创建机器人发布任务
   * 
   * @param request - CreateInstancePublishTaskRequest
   * @returns CreateInstancePublishTaskResponse
   */
  async createInstancePublishTask(request: $_model.CreateInstancePublishTaskRequest): Promise<$_model.CreateInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 意图-创建
   * 
   * @param tmpReq - CreateIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntentResponse
   */
  async createIntentWithOptions(tmpReq: $_model.CreateIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntentResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntentResponse({}));
  }

  /**
   * 意图-创建
   * 
   * @param request - CreateIntentRequest
   * @returns CreateIntentResponse
   */
  async createIntent(request: $_model.CreateIntentRequest): Promise<$_model.CreateIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-创建
   * 
   * @param tmpReq - CreateLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLgfResponse
   */
  async createLgfWithOptions(tmpReq: $_model.CreateLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLgfResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLgfResponse>(await this.callApi(params, req, runtime), new $_model.CreateLgfResponse({}));
  }

  /**
   * 意图-LGF-创建
   * 
   * @param request - CreateLgfRequest
   * @returns CreateLgfResponse
   */
  async createLgf(request: $_model.CreateLgfRequest): Promise<$_model.CreateLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLgfWithOptions(request, runtime);
  }

  /**
   * 视角-创建
   * 
   * @param request - CreatePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePerspectiveResponse
   */
  async createPerspectiveWithOptions(request: $_model.CreatePerspectiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePerspectiveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePerspectiveResponse>(await this.callApi(params, req, runtime), new $_model.CreatePerspectiveResponse({}));
  }

  /**
   * 视角-创建
   * 
   * @param request - CreatePerspectiveRequest
   * @returns CreatePerspectiveResponse
   */
  async createPerspective(request: $_model.CreatePerspectiveRequest): Promise<$_model.CreatePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPerspectiveWithOptions(request, runtime);
  }

  /**
   * 创建发布任务
   * 
   * @param tmpReq - CreatePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublishTaskResponse
   */
  async createPublishTaskWithOptions(tmpReq: $_model.CreatePublishTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePublishTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePublishTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataIdList)) {
      request.dataIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIdList, "DataIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dataIdListShrink)) {
      query["DataIdList"] = request.dataIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePublishTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePublishTaskResponse({}));
  }

  /**
   * 创建发布任务
   * 
   * @param request - CreatePublishTaskRequest
   * @returns CreatePublishTaskResponse
   */
  async createPublishTask(request: $_model.CreatePublishTaskRequest): Promise<$_model.CreatePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublishTaskWithOptions(request, runtime);
  }

  /**
   * 新建FAQ相似问
   * 
   * @param request - CreateSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimQuestionResponse
   */
  async createSimQuestionWithOptions(request: $_model.CreateSimQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimQuestionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSimQuestionResponse({}));
  }

  /**
   * 新建FAQ相似问
   * 
   * @param request - CreateSimQuestionRequest
   * @returns CreateSimQuestionResponse
   */
  async createSimQuestion(request: $_model.CreateSimQuestionRequest): Promise<$_model.CreateSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimQuestionWithOptions(request, runtime);
  }

  /**
   * 新建FAQ答案
   * 
   * @param request - CreateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSolutionResponse
   */
  async createSolutionWithOptions(request: $_model.CreateSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.perspectiveCodes)) {
      query["PerspectiveCodes"] = request.perspectiveCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSolutionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSolutionResponse({}));
  }

  /**
   * 新建FAQ答案
   * 
   * @param request - CreateSolutionRequest
   * @returns CreateSolutionResponse
   */
  async createSolution(request: $_model.CreateSolutionRequest): Promise<$_model.CreateSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-话术-创建
   * 
   * @param tmpReq - CreateUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserSayResponse
   */
  async createUserSayWithOptions(tmpReq: $_model.CreateUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserSayResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserSayResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserSayResponse({}));
  }

  /**
   * 意图-话术-创建
   * 
   * @param request - CreateUserSayRequest
   * @returns CreateUserSayResponse
   */
  async createUserSay(request: $_model.CreateUserSayRequest): Promise<$_model.CreateUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserSayWithOptions(request, runtime);
  }

  /**
   * 删除类目
   * 
   * @param request - DeleteCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(request: $_model.DeleteCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCategoryResponse({}));
  }

  /**
   * 删除类目
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * 删除FAQ关联问
   * 
   * @param request - DeleteConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnQuestionResponse
   */
  async deleteConnQuestionWithOptions(request: $_model.DeleteConnQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outlineId)) {
      body["OutlineId"] = request.outlineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnQuestionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnQuestionResponse({}));
  }

  /**
   * 删除FAQ关联问
   * 
   * @param request - DeleteConnQuestionRequest
   * @returns DeleteConnQuestionResponse
   */
  async deleteConnQuestion(request: $_model.DeleteConnQuestionRequest): Promise<$_model.DeleteConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-删除
   * 
   * @param request - DeleteDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDSEntityResponse
   */
  async deleteDSEntityWithOptions(request: $_model.DeleteDSEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDSEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDSEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDSEntityResponse({}));
  }

  /**
   * 实体-删除
   * 
   * @param request - DeleteDSEntityRequest
   * @returns DeleteDSEntityResponse
   */
  async deleteDSEntity(request: $_model.DeleteDSEntityRequest): Promise<$_model.DeleteDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-删除
   * 
   * @param request - DeleteDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDSEntityValueResponse
   */
  async deleteDSEntityValueWithOptions(request: $_model.DeleteDSEntityValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDSEntityValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityValueId)) {
      query["EntityValueId"] = request.entityValueId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDSEntityValueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDSEntityValueResponse({}));
  }

  /**
   * 实体成员-删除
   * 
   * @param request - DeleteDSEntityValueRequest
   * @returns DeleteDSEntityValueResponse
   */
  async deleteDSEntityValue(request: $_model.DeleteDSEntityValueRequest): Promise<$_model.DeleteDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 文档删除
   * 
   * @param request - DeleteDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocResponse
   */
  async deleteDocWithOptions(request: $_model.DeleteDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocResponse({}));
  }

  /**
   * 文档删除
   * 
   * @param request - DeleteDocRequest
   * @returns DeleteDocResponse
   */
  async deleteDoc(request: $_model.DeleteDocRequest): Promise<$_model.DeleteDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocWithOptions(request, runtime);
  }

  /**
   * 删除FAQ，如果是已发布的知识，删除之后，变成已删除未发布，需要发布才能真正删除
   * 
   * @param request - DeleteFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaqResponse
   */
  async deleteFaqWithOptions(request: $_model.DeleteFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaqResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaqResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaqResponse({}));
  }

  /**
   * 删除FAQ，如果是已发布的知识，删除之后，变成已删除未发布，需要发布才能真正删除
   * 
   * @param request - DeleteFaqRequest
   * @returns DeleteFaqResponse
   */
  async deleteFaq(request: $_model.DeleteFaqRequest): Promise<$_model.DeleteFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-删除
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * 机器人-删除
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-删除
   * 
   * @param request - DeleteIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntentResponse
   */
  async deleteIntentWithOptions(request: $_model.DeleteIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntentResponse({}));
  }

  /**
   * 意图-删除
   * 
   * @param request - DeleteIntentRequest
   * @returns DeleteIntentResponse
   */
  async deleteIntent(request: $_model.DeleteIntentRequest): Promise<$_model.DeleteIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-删除
   * 
   * @param request - DeleteLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLgfResponse
   */
  async deleteLgfWithOptions(request: $_model.DeleteLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLgfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLgfResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLgfResponse({}));
  }

  /**
   * 意图-LGF-删除
   * 
   * @param request - DeleteLgfRequest
   * @returns DeleteLgfResponse
   */
  async deleteLgf(request: $_model.DeleteLgfRequest): Promise<$_model.DeleteLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLgfWithOptions(request, runtime);
  }

  /**
   * 视角-删除
   * 
   * @param request - DeletePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePerspectiveResponse
   */
  async deletePerspectiveWithOptions(request: $_model.DeletePerspectiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePerspectiveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePerspectiveResponse>(await this.callApi(params, req, runtime), new $_model.DeletePerspectiveResponse({}));
  }

  /**
   * 视角-删除
   * 
   * @param request - DeletePerspectiveRequest
   * @returns DeletePerspectiveResponse
   */
  async deletePerspective(request: $_model.DeletePerspectiveRequest): Promise<$_model.DeletePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePerspectiveWithOptions(request, runtime);
  }

  /**
   * 删除FAQ相似问
   * 
   * @param request - DeleteSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSimQuestionResponse
   */
  async deleteSimQuestionWithOptions(request: $_model.DeleteSimQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSimQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.simQuestionId)) {
      body["SimQuestionId"] = request.simQuestionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSimQuestionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSimQuestionResponse({}));
  }

  /**
   * 删除FAQ相似问
   * 
   * @param request - DeleteSimQuestionRequest
   * @returns DeleteSimQuestionResponse
   */
  async deleteSimQuestion(request: $_model.DeleteSimQuestionRequest): Promise<$_model.DeleteSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSimQuestionWithOptions(request, runtime);
  }

  /**
   * 删除FAQ答案
   * 
   * @param request - DeleteSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSolutionResponse
   */
  async deleteSolutionWithOptions(request: $_model.DeleteSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSolutionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSolutionResponse({}));
  }

  /**
   * 删除FAQ答案
   * 
   * @param request - DeleteSolutionRequest
   * @returns DeleteSolutionResponse
   */
  async deleteSolution(request: $_model.DeleteSolutionRequest): Promise<$_model.DeleteSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-用户话术-删除
   * 
   * @param request - DeleteUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserSayResponse
   */
  async deleteUserSayWithOptions(request: $_model.DeleteUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserSayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserSayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserSayResponse({}));
  }

  /**
   * 意图-用户话术-删除
   * 
   * @param request - DeleteUserSayRequest
   * @returns DeleteUserSayResponse
   */
  async deleteUserSay(request: $_model.DeleteUserSayRequest): Promise<$_model.DeleteUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserSayWithOptions(request, runtime);
  }

  /**
   * 查看单个类目信息
   * 
   * @param request - DescribeCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryResponse
   */
  async describeCategoryWithOptions(request: $_model.DescribeCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCategoryResponse({}));
  }

  /**
   * 查看单个类目信息
   * 
   * @param request - DescribeCategoryRequest
   * @returns DescribeCategoryResponse
   */
  async describeCategory(request: $_model.DescribeCategoryRequest): Promise<$_model.DescribeCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryWithOptions(request, runtime);
  }

  /**
   * 实体-详情
   * 
   * @param request - DescribeDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDSEntityResponse
   */
  async describeDSEntityWithOptions(request: $_model.DescribeDSEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDSEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDSEntityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDSEntityResponse({}));
  }

  /**
   * 实体-详情
   * 
   * @param request - DescribeDSEntityRequest
   * @returns DescribeDSEntityResponse
   */
  async describeDSEntity(request: $_model.DescribeDSEntityRequest): Promise<$_model.DescribeDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDSEntityWithOptions(request, runtime);
  }

  /**
   * 文档详情
   * 
   * @param request - DescribeDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocResponse
   */
  async describeDocWithOptions(request: $_model.DescribeDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocResponse({}));
  }

  /**
   * 文档详情
   * 
   * @param request - DescribeDocRequest
   * @returns DescribeDocResponse
   */
  async describeDoc(request: $_model.DescribeDocRequest): Promise<$_model.DescribeDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocWithOptions(request, runtime);
  }

  /**
   * 知识详情
   * 
   * @param request - DescribeFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaqResponse
   */
  async describeFaqWithOptions(request: $_model.DescribeFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaqResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaqResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaqResponse({}));
  }

  /**
   * 知识详情
   * 
   * @param request - DescribeFaqRequest
   * @returns DescribeFaqResponse
   */
  async describeFaq(request: $_model.DescribeFaqRequest): Promise<$_model.DescribeFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-详情
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * 机器人-详情
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-详情
   * 
   * @param request - DescribeIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntentResponse
   */
  async describeIntentWithOptions(request: $_model.DescribeIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.intentId)) {
      body["IntentId"] = request.intentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntentResponse({}));
  }

  /**
   * 意图-详情
   * 
   * @param request - DescribeIntentRequest
   * @returns DescribeIntentResponse
   */
  async describeIntent(request: $_model.DescribeIntentRequest): Promise<$_model.DescribeIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  /**
   * 视角-详情
   * 
   * @param request - DescribePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerspectiveResponse
   */
  async describePerspectiveWithOptions(request: $_model.DescribePerspectiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePerspectiveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePerspectiveResponse>(await this.callApi(params, req, runtime), new $_model.DescribePerspectiveResponse({}));
  }

  /**
   * 视角-详情
   * 
   * @param request - DescribePerspectiveRequest
   * @returns DescribePerspectiveResponse
   */
  async describePerspective(request: $_model.DescribePerspectiveRequest): Promise<$_model.DescribePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePerspectiveWithOptions(request, runtime);
  }

  /**
   * 问答点赞、点踩API
   * 
   * @param request - FeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackResponse
   */
  async feedbackWithOptions(request: $_model.FeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.feedbackContent)) {
      query["FeedbackContent"] = request.feedbackContent;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Feedback",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FeedbackResponse>(await this.callApi(params, req, runtime), new $_model.FeedbackResponse({}));
  }

  /**
   * 问答点赞、点踩API
   * 
   * @param request - FeedbackRequest
   * @returns FeedbackResponse
   */
  async feedback(request: $_model.FeedbackRequest): Promise<$_model.FeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.feedbackWithOptions(request, runtime);
  }

  /**
   * 生成用户免登Token
   * 
   * @param request - GenerateUserAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUserAccessTokenResponse
   */
  async generateUserAccessTokenWithOptions(request: $_model.GenerateUserAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUserAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.foreignId)) {
      query["ForeignId"] = request.foreignId;
    }

    if (!$dara.isNull(request.nick)) {
      query["Nick"] = request.nick;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUserAccessToken",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUserAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUserAccessTokenResponse({}));
  }

  /**
   * 生成用户免登Token
   * 
   * @param request - GenerateUserAccessTokenRequest
   * @returns GenerateUserAccessTokenResponse
   */
  async generateUserAccessToken(request: $_model.GenerateUserAccessTokenRequest): Promise<$_model.GenerateUserAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUserAccessTokenWithOptions(request, runtime);
  }

  /**
   * 获取业务空间信息
   * 
   * @param request - GetAgentInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentInfoResponse
   */
  async getAgentInfoWithOptions(request: $_model.GetAgentInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentInfo",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentInfoResponse({}));
  }

  /**
   * 获取业务空间信息
   * 
   * @param request - GetAgentInfoRequest
   * @returns GetAgentInfoResponse
   */
  async getAgentInfo(request: $_model.GetAgentInfoRequest): Promise<$_model.GetAgentInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentInfoWithOptions(request, runtime);
  }

  /**
   * 获取异步函数执行结果接口
   * 
   * @param request - GetAsyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncResultResponse
   */
  async getAsyncResultWithOptions(request: $_model.GetAsyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncResult",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncResultResponse({}));
  }

  /**
   * 获取异步函数执行结果接口
   * 
   * @param request - GetAsyncResultRequest
   * @returns GetAsyncResultResponse
   */
  async getAsyncResult(request: $_model.GetAsyncResultRequest): Promise<$_model.GetAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
  }

  /**
   * 查询机器人接待人次和对话轮次
   * 
   * @param request - GetBotSessionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBotSessionDataResponse
   */
  async getBotSessionDataWithOptions(request: $_model.GetBotSessionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBotSessionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.robotInstanceId)) {
      query["RobotInstanceId"] = request.robotInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBotSessionData",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBotSessionDataResponse>(await this.callApi(params, req, runtime), new $_model.GetBotSessionDataResponse({}));
  }

  /**
   * 查询机器人接待人次和对话轮次
   * 
   * @param request - GetBotSessionDataRequest
   * @returns GetBotSessionDataResponse
   */
  async getBotSessionData(request: $_model.GetBotSessionDataRequest): Promise<$_model.GetBotSessionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBotSessionDataWithOptions(request, runtime);
  }

  /**
   * 查询机器人发布进度
   * 
   * @param request - GetInstancePublishTaskStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancePublishTaskStateResponse
   */
  async getInstancePublishTaskStateWithOptions(request: $_model.GetInstancePublishTaskStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstancePublishTaskStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstancePublishTaskState",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstancePublishTaskStateResponse>(await this.callApi(params, req, runtime), new $_model.GetInstancePublishTaskStateResponse({}));
  }

  /**
   * 查询机器人发布进度
   * 
   * @param request - GetInstancePublishTaskStateRequest
   * @returns GetInstancePublishTaskStateResponse
   */
  async getInstancePublishTaskState(request: $_model.GetInstancePublishTaskStateRequest): Promise<$_model.GetInstancePublishTaskStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstancePublishTaskStateWithOptions(request, runtime);
  }

  /**
   * 查询发布进度
   * 
   * @param request - GetPublishTaskStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublishTaskStateResponse
   */
  async getPublishTaskStateWithOptions(request: $_model.GetPublishTaskStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublishTaskStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublishTaskState",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPublishTaskStateResponse>(await this.callApi(params, req, runtime), new $_model.GetPublishTaskStateResponse({}));
  }

  /**
   * 查询发布进度
   * 
   * @param request - GetPublishTaskStateRequest
   * @returns GetPublishTaskStateResponse
   */
  async getPublishTaskState(request: $_model.GetPublishTaskStateRequest): Promise<$_model.GetPublishTaskStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublishTaskStateWithOptions(request, runtime);
  }

  /**
   * 初始化im连接信息
   * 
   * @param request - InitIMConnectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitIMConnectResponse
   */
  async initIMConnectWithOptions(request: $_model.InitIMConnectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitIMConnectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.userAccessToken)) {
      query["UserAccessToken"] = request.userAccessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitIMConnect",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitIMConnectResponse>(await this.callApi(params, req, runtime), new $_model.InitIMConnectResponse({}));
  }

  /**
   * 初始化im连接信息
   * 
   * @param request - InitIMConnectRequest
   * @returns InitIMConnectResponse
   */
  async initIMConnect(request: $_model.InitIMConnectRequest): Promise<$_model.InitIMConnectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initIMConnectWithOptions(request, runtime);
  }

  /**
   * 机器人-绑定类目
   * 
   * @param request - LinkInstanceCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkInstanceCategoryResponse
   */
  async linkInstanceCategoryWithOptions(request: $_model.LinkInstanceCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LinkInstanceCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abilityType)) {
      query["AbilityType"] = request.abilityType;
    }

    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIds)) {
      body["CategoryIds"] = request.categoryIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LinkInstanceCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LinkInstanceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.LinkInstanceCategoryResponse({}));
  }

  /**
   * 机器人-绑定类目
   * 
   * @param request - LinkInstanceCategoryRequest
   * @returns LinkInstanceCategoryResponse
   */
  async linkInstanceCategory(request: $_model.LinkInstanceCategoryRequest): Promise<$_model.LinkInstanceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.linkInstanceCategoryWithOptions(request, runtime);
  }

  /**
   * 获取业务空间列表
   * 
   * @param request - ListAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentResponse
   */
  async listAgentWithOptions(request: $_model.ListAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.goodsCodes)) {
      query["GoodsCodes"] = request.goodsCodes;
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
      action: "ListAgent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentResponse({}));
  }

  /**
   * 获取业务空间列表
   * 
   * @param request - ListAgentRequest
   * @returns ListAgentResponse
   */
  async listAgent(request: $_model.ListAgentRequest): Promise<$_model.ListAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentWithOptions(request, runtime);
  }

  /**
   * 类目列表
   * 
   * @param request - ListCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoryResponse
   */
  async listCategoryWithOptions(request: $_model.ListCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeType)) {
      body["KnowledgeType"] = request.knowledgeType;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoryResponse({}));
  }

  /**
   * 类目列表
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(request: $_model.ListCategoryRequest): Promise<$_model.ListCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCategoryWithOptions(request, runtime);
  }

  /**
   * 查询FAQ关联问列表
   * 
   * @param request - ListConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnQuestionResponse
   */
  async listConnQuestionWithOptions(request: $_model.ListConnQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnQuestionResponse>(await this.callApi(params, req, runtime), new $_model.ListConnQuestionResponse({}));
  }

  /**
   * 查询FAQ关联问列表
   * 
   * @param request - ListConnQuestionRequest
   * @returns ListConnQuestionResponse
   */
  async listConnQuestion(request: $_model.ListConnQuestionRequest): Promise<$_model.ListConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-列表
   * 
   * @param request - ListDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDSEntityResponse
   */
  async listDSEntityWithOptions(request: $_model.ListDSEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDSEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDSEntityResponse>(await this.callApi(params, req, runtime), new $_model.ListDSEntityResponse({}));
  }

  /**
   * 实体-列表
   * 
   * @param request - ListDSEntityRequest
   * @returns ListDSEntityResponse
   */
  async listDSEntity(request: $_model.ListDSEntityRequest): Promise<$_model.ListDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-列表
   * 
   * @param request - ListDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDSEntityValueResponse
   */
  async listDSEntityValueWithOptions(request: $_model.ListDSEntityValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDSEntityValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityValueId)) {
      body["EntityValueId"] = request.entityValueId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDSEntityValueResponse>(await this.callApi(params, req, runtime), new $_model.ListDSEntityValueResponse({}));
  }

  /**
   * 实体成员-列表
   * 
   * @param request - ListDSEntityValueRequest
   * @returns ListDSEntityValueResponse
   */
  async listDSEntityValue(request: $_model.ListDSEntityValueRequest): Promise<$_model.ListDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 机器人-修改
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: $_model.ListInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.robotType)) {
      query["RobotType"] = request.robotType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResponse({}));
  }

  /**
   * 机器人-修改
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-列表
   * 
   * @param request - ListIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntentResponse
   */
  async listIntentWithOptions(request: $_model.ListIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentName)) {
      query["IntentName"] = request.intentName;
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
      action: "ListIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntentResponse>(await this.callApi(params, req, runtime), new $_model.ListIntentResponse({}));
  }

  /**
   * 意图-列表
   * 
   * @param request - ListIntentRequest
   * @returns ListIntentResponse
   */
  async listIntent(request: $_model.ListIntentRequest): Promise<$_model.ListIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-列表
   * 
   * @param request - ListLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLgfResponse
   */
  async listLgfWithOptions(request: $_model.ListLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLgfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!$dara.isNull(request.lgfText)) {
      query["LgfText"] = request.lgfText;
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
      action: "ListLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLgfResponse>(await this.callApi(params, req, runtime), new $_model.ListLgfResponse({}));
  }

  /**
   * 意图-LGF-列表
   * 
   * @param request - ListLgfRequest
   * @returns ListLgfResponse
   */
  async listLgf(request: $_model.ListLgfRequest): Promise<$_model.ListLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLgfWithOptions(request, runtime);
  }

  /**
   * 获取业务空间下可集成的SaaS信息列表
   * 
   * @param request - ListSaasInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSaasInfoResponse
   */
  async listSaasInfoWithOptions(request: $_model.ListSaasInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSaasInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.saasGroupCodes)) {
      query["SaasGroupCodes"] = request.saasGroupCodes;
    }

    if (!$dara.isNull(request.saasName)) {
      query["SaasName"] = request.saasName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSaasInfo",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSaasInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListSaasInfoResponse({}));
  }

  /**
   * 获取业务空间下可集成的SaaS信息列表
   * 
   * @param request - ListSaasInfoRequest
   * @returns ListSaasInfoResponse
   */
  async listSaasInfo(request: $_model.ListSaasInfoRequest): Promise<$_model.ListSaasInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSaasInfoWithOptions(request, runtime);
  }

  /**
   * 获取业务空间下可集成的权限组信息
   * 
   * @param request - ListSaasPermissionGroupInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSaasPermissionGroupInfosResponse
   */
  async listSaasPermissionGroupInfosWithOptions(request: $_model.ListSaasPermissionGroupInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSaasPermissionGroupInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSaasPermissionGroupInfos",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSaasPermissionGroupInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListSaasPermissionGroupInfosResponse({}));
  }

  /**
   * 获取业务空间下可集成的权限组信息
   * 
   * @param request - ListSaasPermissionGroupInfosRequest
   * @returns ListSaasPermissionGroupInfosResponse
   */
  async listSaasPermissionGroupInfos(request: $_model.ListSaasPermissionGroupInfosRequest): Promise<$_model.ListSaasPermissionGroupInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSaasPermissionGroupInfosWithOptions(request, runtime);
  }

  /**
   * FAQ相似问列表
   * 
   * @param request - ListSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSimQuestionResponse
   */
  async listSimQuestionWithOptions(request: $_model.ListSimQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSimQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSimQuestionResponse>(await this.callApi(params, req, runtime), new $_model.ListSimQuestionResponse({}));
  }

  /**
   * FAQ相似问列表
   * 
   * @param request - ListSimQuestionRequest
   * @returns ListSimQuestionResponse
   */
  async listSimQuestion(request: $_model.ListSimQuestionRequest): Promise<$_model.ListSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSimQuestionWithOptions(request, runtime);
  }

  /**
   * FAQ答案列表
   * 
   * @param request - ListSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSolutionResponse
   */
  async listSolutionWithOptions(request: $_model.ListSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSolutionResponse>(await this.callApi(params, req, runtime), new $_model.ListSolutionResponse({}));
  }

  /**
   * FAQ答案列表
   * 
   * @param request - ListSolutionRequest
   * @returns ListSolutionResponse
   */
  async listSolution(request: $_model.ListSolutionRequest): Promise<$_model.ListSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSolutionWithOptions(request, runtime);
  }

  /**
   * Tongyi对话明细查询接口
   * 
   * @param request - ListTongyiChatHistorysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTongyiChatHistorysResponse
   */
  async listTongyiChatHistorysWithOptions(request: $_model.ListTongyiChatHistorysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTongyiChatHistorysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.robotInstanceId)) {
      query["RobotInstanceId"] = request.robotInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTongyiChatHistorys",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTongyiChatHistorysResponse>(await this.callApi(params, req, runtime), new $_model.ListTongyiChatHistorysResponse({}));
  }

  /**
   * Tongyi对话明细查询接口
   * 
   * @param request - ListTongyiChatHistorysRequest
   * @returns ListTongyiChatHistorysResponse
   */
  async listTongyiChatHistorys(request: $_model.ListTongyiChatHistorysRequest): Promise<$_model.ListTongyiChatHistorysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTongyiChatHistorysWithOptions(request, runtime);
  }

  /**
   * 查询通义晓蜜的单个会话对话记录
   * 
   * @param request - ListTongyiConversationLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTongyiConversationLogsResponse
   */
  async listTongyiConversationLogsWithOptions(request: $_model.ListTongyiConversationLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTongyiConversationLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.robotInstanceId)) {
      query["RobotInstanceId"] = request.robotInstanceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTongyiConversationLogs",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTongyiConversationLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListTongyiConversationLogsResponse({}));
  }

  /**
   * 查询通义晓蜜的单个会话对话记录
   * 
   * @param request - ListTongyiConversationLogsRequest
   * @returns ListTongyiConversationLogsResponse
   */
  async listTongyiConversationLogs(request: $_model.ListTongyiConversationLogsRequest): Promise<$_model.ListTongyiConversationLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTongyiConversationLogsWithOptions(request, runtime);
  }

  /**
   * 话术-列表
   * 
   * @param request - ListUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSayResponse
   */
  async listUserSayWithOptions(request: $_model.ListUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserSayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
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
      action: "ListUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserSayResponse>(await this.callApi(params, req, runtime), new $_model.ListUserSayResponse({}));
  }

  /**
   * 话术-列表
   * 
   * @param request - ListUserSayRequest
   * @returns ListUserSayResponse
   */
  async listUserSay(request: $_model.ListUserSayRequest): Promise<$_model.ListUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserSayWithOptions(request, runtime);
  }

  /**
   * 统一NLU接口
   * 
   * @param request - NluRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NluResponse
   */
  async nluWithOptions(request: $_model.NluRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NluResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Nlu",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NluResponse>(await this.callApi(params, req, runtime), new $_model.NluResponse({}));
  }

  /**
   * 统一NLU接口
   * 
   * @param request - NluRequest
   * @returns NluResponse
   */
  async nlu(request: $_model.NluRequest): Promise<$_model.NluResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nluWithOptions(request, runtime);
  }

  /**
   * 视角-列表
   * 
   * @param request - QueryPerspectivesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPerspectivesResponse
   */
  async queryPerspectivesWithOptions(request: $_model.QueryPerspectivesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPerspectivesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPerspectives",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPerspectivesResponse>(await this.callApi(params, req, runtime), new $_model.QueryPerspectivesResponse({}));
  }

  /**
   * 视角-列表
   * 
   * @param request - QueryPerspectivesRequest
   * @returns QueryPerspectivesResponse
   */
  async queryPerspectives(request: $_model.QueryPerspectivesRequest): Promise<$_model.QueryPerspectivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPerspectivesWithOptions(request, runtime);
  }

  /**
   * 文档重试
   * 
   * @param request - RetryDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryDocResponse
   */
  async retryDocWithOptions(request: $_model.RetryDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryDocResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryDocResponse>(await this.callApi(params, req, runtime), new $_model.RetryDocResponse({}));
  }

  /**
   * 文档重试
   * 
   * @param request - RetryDocRequest
   * @returns RetryDocResponse
   */
  async retryDoc(request: $_model.RetryDocRequest): Promise<$_model.RetryDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryDocWithOptions(request, runtime);
  }

  /**
   * 文档搜索
   * 
   * @param tmpReq - SearchDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDocResponse
   */
  async searchDocWithOptions(tmpReq: $_model.SearchDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDocResponse> {
    tmpReq.validate();
    let request = new $_model.SearchDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.createTimeBegin)) {
      query["CreateTimeBegin"] = request.createTimeBegin;
    }

    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createUserName)) {
      query["CreateUserName"] = request.createUserName;
    }

    if (!$dara.isNull(request.endTimeBegin)) {
      query["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.modifyTimeBegin)) {
      query["ModifyTimeBegin"] = request.modifyTimeBegin;
    }

    if (!$dara.isNull(request.modifyTimeEnd)) {
      query["ModifyTimeEnd"] = request.modifyTimeEnd;
    }

    if (!$dara.isNull(request.modifyUserName)) {
      query["ModifyUserName"] = request.modifyUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processStatus)) {
      query["ProcessStatus"] = request.processStatus;
    }

    if (!$dara.isNull(request.searchScope)) {
      query["SearchScope"] = request.searchScope;
    }

    if (!$dara.isNull(request.startTimeBegin)) {
      query["StartTimeBegin"] = request.startTimeBegin;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDocResponse>(await this.callApi(params, req, runtime), new $_model.SearchDocResponse({}));
  }

  /**
   * 文档搜索
   * 
   * @param request - SearchDocRequest
   * @returns SearchDocResponse
   */
  async searchDoc(request: $_model.SearchDocRequest): Promise<$_model.SearchDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchDocWithOptions(request, runtime);
  }

  /**
   * 知识搜索
   * 
   * @param tmpReq - SearchFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFaqResponse
   */
  async searchFaqWithOptions(tmpReq: $_model.SearchFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFaqResponse> {
    tmpReq.validate();
    let request = new $_model.SearchFaqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      body["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.createTimeBegin)) {
      body["CreateTimeBegin"] = request.createTimeBegin;
    }

    if (!$dara.isNull(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createUserName)) {
      body["CreateUserName"] = request.createUserName;
    }

    if (!$dara.isNull(request.endTimeBegin)) {
      body["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      body["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.modifyTimeBegin)) {
      body["ModifyTimeBegin"] = request.modifyTimeBegin;
    }

    if (!$dara.isNull(request.modifyTimeEnd)) {
      body["ModifyTimeEnd"] = request.modifyTimeEnd;
    }

    if (!$dara.isNull(request.modifyUserName)) {
      body["ModifyUserName"] = request.modifyUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchScope)) {
      body["SearchScope"] = request.searchScope;
    }

    if (!$dara.isNull(request.startTimeBegin)) {
      body["StartTimeBegin"] = request.startTimeBegin;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      body["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFaqResponse>(await this.callApi(params, req, runtime), new $_model.SearchFaqResponse({}));
  }

  /**
   * 知识搜索
   * 
   * @param request - SearchFaqRequest
   * @returns SearchFaqResponse
   */
  async searchFaq(request: $_model.SearchFaqRequest): Promise<$_model.SearchFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchFaqWithOptions(request, runtime);
  }

  /**
   * 大模型问答调试信息
   * 
   * @param request - TongyiChatDebugInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TongyiChatDebugInfoResponse
   */
  async tongyiChatDebugInfoWithOptions(request: $_model.TongyiChatDebugInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TongyiChatDebugInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TongyiChatDebugInfo",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TongyiChatDebugInfoResponse>(await this.callApi(params, req, runtime), new $_model.TongyiChatDebugInfoResponse({}));
  }

  /**
   * 大模型问答调试信息
   * 
   * @param request - TongyiChatDebugInfoRequest
   * @returns TongyiChatDebugInfoResponse
   */
  async tongyiChatDebugInfo(request: $_model.TongyiChatDebugInfoRequest): Promise<$_model.TongyiChatDebugInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tongyiChatDebugInfoWithOptions(request, runtime);
  }

  /**
   * 编辑类目
   * 
   * @param request - UpdateCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCategoryResponse
   */
  async updateCategoryWithOptions(request: $_model.UpdateCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCategoryResponse({}));
  }

  /**
   * 编辑类目
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: $_model.UpdateCategoryRequest): Promise<$_model.UpdateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * 更新FAQ关联问
   * 
   * @param request - UpdateConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnQuestionResponse
   */
  async updateConnQuestionWithOptions(request: $_model.UpdateConnQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connQuestionId)) {
      body["ConnQuestionId"] = request.connQuestionId;
    }

    if (!$dara.isNull(request.outlineId)) {
      body["OutlineId"] = request.outlineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnQuestionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnQuestionResponse({}));
  }

  /**
   * 更新FAQ关联问
   * 
   * @param request - UpdateConnQuestionRequest
   * @returns UpdateConnQuestionResponse
   */
  async updateConnQuestion(request: $_model.UpdateConnQuestionRequest): Promise<$_model.UpdateConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-更新
   * 
   * @param request - UpdateDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDSEntityResponse
   */
  async updateDSEntityWithOptions(request: $_model.UpdateDSEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDSEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDSEntityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDSEntityResponse({}));
  }

  /**
   * 实体-更新
   * 
   * @param request - UpdateDSEntityRequest
   * @returns UpdateDSEntityResponse
   */
  async updateDSEntity(request: $_model.UpdateDSEntityRequest): Promise<$_model.UpdateDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-更新
   * 
   * @param tmpReq - UpdateDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDSEntityValueResponse
   */
  async updateDSEntityValueWithOptions(tmpReq: $_model.UpdateDSEntityValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDSEntityValueResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDSEntityValueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.synonyms)) {
      request.synonymsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synonyms, "Synonyms", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityValueId)) {
      query["EntityValueId"] = request.entityValueId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synonymsShrink)) {
      body["Synonyms"] = request.synonymsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDSEntityValueResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDSEntityValueResponse({}));
  }

  /**
   * 实体成员-更新
   * 
   * @param request - UpdateDSEntityValueRequest
   * @returns UpdateDSEntityValueResponse
   */
  async updateDSEntityValue(request: $_model.UpdateDSEntityValueRequest): Promise<$_model.UpdateDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 文档变更
   * 
   * @param tmpReq - UpdateDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocResponse
   */
  async updateDocWithOptions(tmpReq: $_model.UpdateDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDocResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docMetadata)) {
      request.docMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docMetadata, "DocMetadata", "json");
    }

    if (!$dara.isNull(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.docMetadataShrink)) {
      query["DocMetadata"] = request.docMetadataShrink;
    }

    if (!$dara.isNull(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.meta)) {
      query["Meta"] = request.meta;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDocResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDocResponse({}));
  }

  /**
   * 文档变更
   * 
   * @param request - UpdateDocRequest
   * @returns UpdateDocResponse
   */
  async updateDoc(request: $_model.UpdateDocRequest): Promise<$_model.UpdateDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDocWithOptions(request, runtime);
  }

  /**
   * 更新FAQ
   * 
   * @param request - UpdateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaqResponse
   */
  async updateFaqWithOptions(request: $_model.UpdateFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFaqResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFaqResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFaqResponse({}));
  }

  /**
   * 更新FAQ
   * 
   * @param request - UpdateFaqRequest
   * @returns UpdateFaqResponse
   */
  async updateFaq(request: $_model.UpdateFaqRequest): Promise<$_model.UpdateFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-修改
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.introduction)) {
      query["Introduction"] = request.introduction;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 机器人-修改
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-更新
   * 
   * @param tmpReq - UpdateIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntentResponse
   */
  async updateIntentWithOptions(tmpReq: $_model.UpdateIntentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    if (!$dara.isNull(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntentResponse({}));
  }

  /**
   * 意图-更新
   * 
   * @param request - UpdateIntentRequest
   * @returns UpdateIntentResponse
   */
  async updateIntent(request: $_model.UpdateIntentRequest): Promise<$_model.UpdateIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-更新
   * 
   * @param tmpReq - UpdateLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLgfResponse
   */
  async updateLgfWithOptions(tmpReq: $_model.UpdateLgfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLgfResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    if (!$dara.isNull(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLgfResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLgfResponse({}));
  }

  /**
   * 意图-LGF-更新
   * 
   * @param request - UpdateLgfRequest
   * @returns UpdateLgfResponse
   */
  async updateLgf(request: $_model.UpdateLgfRequest): Promise<$_model.UpdateLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLgfWithOptions(request, runtime);
  }

  /**
   * 视角-修改
   * 
   * @param request - UpdatePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePerspectiveResponse
   */
  async updatePerspectiveWithOptions(request: $_model.UpdatePerspectiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePerspectiveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePerspectiveResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePerspectiveResponse({}));
  }

  /**
   * 视角-修改
   * 
   * @param request - UpdatePerspectiveRequest
   * @returns UpdatePerspectiveResponse
   */
  async updatePerspective(request: $_model.UpdatePerspectiveRequest): Promise<$_model.UpdatePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePerspectiveWithOptions(request, runtime);
  }

  /**
   * 更新FAQ相似问
   * 
   * @param request - UpdateSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSimQuestionResponse
   */
  async updateSimQuestionWithOptions(request: $_model.UpdateSimQuestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSimQuestionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.simQuestionId)) {
      body["SimQuestionId"] = request.simQuestionId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSimQuestionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSimQuestionResponse({}));
  }

  /**
   * 更新FAQ相似问
   * 
   * @param request - UpdateSimQuestionRequest
   * @returns UpdateSimQuestionResponse
   */
  async updateSimQuestion(request: $_model.UpdateSimQuestionRequest): Promise<$_model.UpdateSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSimQuestionWithOptions(request, runtime);
  }

  /**
   * 更新FAQ答案
   * 
   * @param request - UpdateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionResponse
   */
  async updateSolutionWithOptions(request: $_model.UpdateSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.perspectiveCodes)) {
      body["PerspectiveCodes"] = request.perspectiveCodes;
    }

    if (!$dara.isNull(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSolutionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSolutionResponse({}));
  }

  /**
   * 更新FAQ答案
   * 
   * @param request - UpdateSolutionRequest
   * @returns UpdateSolutionResponse
   */
  async updateSolution(request: $_model.UpdateSolutionRequest): Promise<$_model.UpdateSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-话术-更新
   * 
   * @param tmpReq - UpdateUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserSayResponse
   */
  async updateUserSayWithOptions(tmpReq: $_model.UpdateUserSayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserSayResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    if (!$dara.isNull(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserSayResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserSayResponse({}));
  }

  /**
   * 意图-话术-更新
   * 
   * @param request - UpdateUserSayRequest
   * @returns UpdateUserSayResponse
   */
  async updateUserSay(request: $_model.UpdateUserSayRequest): Promise<$_model.UpdateUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserSayWithOptions(request, runtime);
  }

}
