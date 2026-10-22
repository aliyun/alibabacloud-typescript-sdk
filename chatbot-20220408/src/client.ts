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
   * Retrieves the connection information for streaming calls.
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
   * Retrieves the connection information for streaming calls.
   * 
   * @param request - ApplyForStreamAccessTokenRequest
   * @returns ApplyForStreamAccessTokenResponse
   */
  async applyForStreamAccessToken(request: $_model.ApplyForStreamAccessTokenRequest): Promise<$_model.ApplyForStreamAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyForStreamAccessTokenWithOptions(request, runtime);
  }

  /**
   * Suggests FAQs from the knowledge base based on a user query.
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
   * Suggests FAQs from the knowledge base based on a user query.
   * 
   * @param request - AssociateRequest
   * @returns AssociateResponse
   */
  async associate(request: $_model.AssociateRequest): Promise<$_model.AssociateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateWithOptions(request, runtime);
  }

  /**
   * Retrieves the welcome message.
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sandBox)) {
      body["SandBox"] = request.sandBox;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.vendorParam)) {
      body["VendorParam"] = request.vendorParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Retrieves the welcome message.
   * 
   * @param request - BeginSessionRequest
   * @returns BeginSessionResponse
   */
  async beginSession(request: $_model.BeginSessionRequest): Promise<$_model.BeginSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginSessionWithOptions(request, runtime);
  }

  /**
   * Cancels or interrupts a specified conversation.
   * 
   * @remarks
   * Only new version chatbots are supported. Only data within the last 90 days can be queried.
   * 
   * @param request - CancelChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelChatResponse
   */
  async cancelChatWithOptions(request: $_model.CancelChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentKey)) {
      body["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.answer)) {
      body["Answer"] = request.answer;
    }

    if (!$dara.isNull(request.chatId)) {
      body["ChatId"] = request.chatId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelChat",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelChatResponse>(await this.callApi(params, req, runtime), new $_model.CancelChatResponse({}));
  }

  /**
   * Cancels or interrupts a specified conversation.
   * 
   * @remarks
   * Only new version chatbots are supported. Only data within the last 90 days can be queried.
   * 
   * @param request - CancelChatRequest
   * @returns CancelChatResponse
   */
  async cancelChat(request: $_model.CancelChatRequest): Promise<$_model.CancelChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChatWithOptions(request, runtime);
  }

  /**
   * Cancels a chatbot publish task during the publishing process.
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
   * Cancels a chatbot publish task during the publishing process.
   * 
   * @param request - CancelInstancePublishTaskRequest
   * @returns CancelInstancePublishTaskResponse
   */
  async cancelInstancePublishTask(request: $_model.CancelInstancePublishTaskRequest): Promise<$_model.CancelInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * Cancels a publish task that is in progress.
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
   * Cancels a publish task that is in progress.
   * 
   * @param request - CancelPublishTaskRequest
   * @returns CancelPublishTaskResponse
   */
  async cancelPublishTask(request: $_model.CancelPublishTaskRequest): Promise<$_model.CancelPublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPublishTaskWithOptions(request, runtime);
  }

  /**
   * Initiates a conversation with a chatbot by using the unique chatbot identifier (chatbot ID). This operation is applicable only to Chatbot (legacy).
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
   * Initiates a conversation with a chatbot by using the unique chatbot identifier (chatbot ID). This operation is applicable only to Chatbot (legacy).
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * Ignores alerts and continues publishing when the chatbot triggers a publish alert.
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
   * Ignores alerts and continues publishing when the chatbot triggers a publish alert.
   * 
   * @param request - ContinueInstancePublishTaskRequest
   * @returns ContinueInstancePublishTaskResponse
   */
  async continueInstancePublishTask(request: $_model.ContinueInstancePublishTaskRequest): Promise<$_model.ContinueInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * Creates a category.
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
   * Creates a category.
   * 
   * @param request - CreateCategoryRequest
   * @returns CreateCategoryResponse
   */
  async createCategory(request: $_model.CreateCategoryRequest): Promise<$_model.CreateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCategoryWithOptions(request, runtime);
  }

  /**
   * Adds associated knowledge to a knowledge entry.
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
   * Adds associated knowledge to a knowledge entry.
   * 
   * @param request - CreateConnQuestionRequest
   * @returns CreateConnQuestionResponse
   */
  async createConnQuestion(request: $_model.CreateConnQuestionRequest): Promise<$_model.CreateConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConnQuestionWithOptions(request, runtime);
  }

  /**
   * Creates an entity, specifically the meta information of the entity, such as the entity name and entity type.
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
   * Creates an entity, specifically the meta information of the entity, such as the entity name and entity type.
   * 
   * @param request - CreateDSEntityRequest
   * @returns CreateDSEntityResponse
   */
  async createDSEntity(request: $_model.CreateDSEntityRequest): Promise<$_model.CreateDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDSEntityWithOptions(request, runtime);
  }

  /**
   * Adds entity member information for a specified entity, including the entity value and the corresponding synonym list. Entity values and synonyms must be unique within the same entity.
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
   * Adds entity member information for a specified entity, including the entity value and the corresponding synonym list. Entity values and synonyms must be unique within the same entity.
   * 
   * @param request - CreateDSEntityValueRequest
   * @returns CreateDSEntityValueResponse
   */
  async createDSEntityValue(request: $_model.CreateDSEntityValueRequest): Promise<$_model.CreateDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDSEntityValueWithOptions(request, runtime);
  }

  /**
   * Creates a document.
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
   * Creates a document.
   * 
   * @param request - CreateDocRequest
   * @returns CreateDocResponse
   */
  async createDoc(request: $_model.CreateDocRequest): Promise<$_model.CreateDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocWithOptions(request, runtime);
  }

  /**
   * Creates a knowledge entry.
   * 
   * @param tmpReq - CreateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFaqResponse
   */
  async createFaqWithOptions(tmpReq: $_model.CreateFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFaqResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFaqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagIdList)) {
      request.tagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIdList, "TagIdList", "json");
    }

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

    if (!$dara.isNull(request.tagIdListShrink)) {
      body["TagIdList"] = request.tagIdListShrink;
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
   * Creates a knowledge entry.
   * 
   * @param request - CreateFaqRequest
   * @returns CreateFaqResponse
   */
  async createFaq(request: $_model.CreateFaqRequest): Promise<$_model.CreateFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFaqWithOptions(request, runtime);
  }

  /**
   * Creates a chatbot in a sandbox environment.
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
   * Creates a chatbot in a sandbox environment.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Publishes a sandbox chatbot to the production environment.
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
   * Publishes a sandbox chatbot to the production environment.
   * 
   * @param request - CreateInstancePublishTaskRequest
   * @returns CreateInstancePublishTaskResponse
   */
  async createInstancePublishTask(request: $_model.CreateInstancePublishTaskRequest): Promise<$_model.CreateInstancePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * Creates an intent. The intent includes meta information such as the intent name, intent alias, and associated slot information, but does not include intent utterances or LGF.
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
   * Creates an intent. The intent includes meta information such as the intent name, intent alias, and associated slot information, but does not include intent utterances or LGF.
   * 
   * @param request - CreateIntentRequest
   * @returns CreateIntentResponse
   */
  async createIntent(request: $_model.CreateIntentRequest): Promise<$_model.CreateIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  /**
   * Creates an advanced semantic configuration (LGF) for a specified intent.
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
   * Creates an advanced semantic configuration (LGF) for a specified intent.
   * 
   * @param request - CreateLgfRequest
   * @returns CreateLgfResponse
   */
  async createLgf(request: $_model.CreateLgfRequest): Promise<$_model.CreateLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLgfWithOptions(request, runtime);
  }

  /**
   * Creates a perspective.
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
   * Creates a perspective.
   * 
   * @param request - CreatePerspectiveRequest
   * @returns CreatePerspectiveResponse
   */
  async createPerspective(request: $_model.CreatePerspectiveRequest): Promise<$_model.CreatePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPerspectiveWithOptions(request, runtime);
  }

  /**
   * Creates a publish task in the publish center.
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
   * Creates a publish task in the publish center.
   * 
   * @param request - CreatePublishTaskRequest
   * @returns CreatePublishTaskResponse
   */
  async createPublishTask(request: $_model.CreatePublishTaskRequest): Promise<$_model.CreatePublishTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublishTaskWithOptions(request, runtime);
  }

  /**
   * Creates a similar question.
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
   * Creates a similar question.
   * 
   * @param request - CreateSimQuestionRequest
   * @returns CreateSimQuestionResponse
   */
  async createSimQuestion(request: $_model.CreateSimQuestionRequest): Promise<$_model.CreateSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimQuestionWithOptions(request, runtime);
  }

  /**
   * Creates a knowledge answer.
   * 
   * @param tmpReq - CreateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSolutionResponse
   */
  async createSolutionWithOptions(tmpReq: $_model.CreateSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSolutionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSolutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagIdList)) {
      request.tagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIdList, "TagIdList", "json");
    }

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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagIdListShrink)) {
      body["TagIdList"] = request.tagIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Creates a knowledge answer.
   * 
   * @param request - CreateSolutionRequest
   * @returns CreateSolutionResponse
   */
  async createSolution(request: $_model.CreateSolutionRequest): Promise<$_model.CreateSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSolutionWithOptions(request, runtime);
  }

  /**
   * Creates a label.
   * 
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.tagName)) {
      body["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * Creates a label.
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * Creates a tag group.
   * 
   * @param request - CreateTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagGroupResponse
   */
  async createTagGroupWithOptions(request: $_model.CreateTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTagGroup",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagGroupResponse({}));
  }

  /**
   * Creates a tag group.
   * 
   * @param request - CreateTagGroupRequest
   * @returns CreateTagGroupResponse
   */
  async createTagGroup(request: $_model.CreateTagGroupRequest): Promise<$_model.CreateTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagGroupWithOptions(request, runtime);
  }

  /**
   * Adds utterance information to a specified intent.
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
   * Adds utterance information to a specified intent.
   * 
   * @param request - CreateUserSayRequest
   * @returns CreateUserSayResponse
   */
  async createUserSay(request: $_model.CreateUserSayRequest): Promise<$_model.CreateUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserSayWithOptions(request, runtime);
  }

  /**
   * Deletes a category. A published category changes to the deleted and unpublished state, while an unpublished category is deleted directly.
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
   * Deletes a category. A published category changes to the deleted and unpublished state, while an unpublished category is deleted directly.
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes the associated knowledge of a knowledge item.
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
   * Deletes the associated knowledge of a knowledge item.
   * 
   * @param request - DeleteConnQuestionRequest
   * @returns DeleteConnQuestionResponse
   */
  async deleteConnQuestion(request: $_model.DeleteConnQuestionRequest): Promise<$_model.DeleteConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConnQuestionWithOptions(request, runtime);
  }

  /**
   * Deletes an entity. This operation cascade deletes all entity members, synonyms, and regular expressions under the entity.
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
   * Deletes an entity. This operation cascade deletes all entity members, synonyms, and regular expressions under the entity.
   * 
   * @param request - DeleteDSEntityRequest
   * @returns DeleteDSEntityResponse
   */
  async deleteDSEntity(request: $_model.DeleteDSEntityRequest): Promise<$_model.DeleteDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDSEntityWithOptions(request, runtime);
  }

  /**
   * Deletes a member of a specified entity. If the entity is a standard entity, the synonyms of the member are also deleted, if any.
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
   * Deletes a member of a specified entity. If the entity is a standard entity, the synonyms of the member are also deleted, if any.
   * 
   * @param request - DeleteDSEntityValueRequest
   * @returns DeleteDSEntityValueResponse
   */
  async deleteDSEntityValue(request: $_model.DeleteDSEntityValueRequest): Promise<$_model.DeleteDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDSEntityValueWithOptions(request, runtime);
  }

  /**
   * Deletes a document.
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
   * Deletes a document.
   * 
   * @param request - DeleteDocRequest
   * @returns DeleteDocResponse
   */
  async deleteDoc(request: $_model.DeleteDocRequest): Promise<$_model.DeleteDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocWithOptions(request, runtime);
  }

  /**
   * Deletes a knowledge entry.
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
   * Deletes a knowledge entry.
   * 
   * @param request - DeleteFaqRequest
   * @returns DeleteFaqResponse
   */
  async deleteFaq(request: $_model.DeleteFaqRequest): Promise<$_model.DeleteFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaqWithOptions(request, runtime);
  }

  /**
   * Deletes a chatbot from both the sandbox and production environments.
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
   * Deletes a chatbot from both the sandbox and production environments.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes an intent and cascade deletes all intent utterances and advanced semantic configurations (LGF) under the intent.
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
   * Deletes an intent and cascade deletes all intent utterances and advanced semantic configurations (LGF) under the intent.
   * 
   * @param request - DeleteIntentRequest
   * @returns DeleteIntentResponse
   */
  async deleteIntent(request: $_model.DeleteIntentRequest): Promise<$_model.DeleteIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  /**
   * Deletes a specified advanced semantic configuration.
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
   * Deletes a specified advanced semantic configuration.
   * 
   * @param request - DeleteLgfRequest
   * @returns DeleteLgfResponse
   */
  async deleteLgf(request: $_model.DeleteLgfRequest): Promise<$_model.DeleteLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLgfWithOptions(request, runtime);
  }

  /**
   * Deletes a perspective.
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
   * Deletes a perspective.
   * 
   * @param request - DeletePerspectiveRequest
   * @returns DeletePerspectiveResponse
   */
  async deletePerspective(request: $_model.DeletePerspectiveRequest): Promise<$_model.DeletePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePerspectiveWithOptions(request, runtime);
  }

  /**
   * Deletes a similar question.
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
   * Deletes a similar question.
   * 
   * @param request - DeleteSimQuestionRequest
   * @returns DeleteSimQuestionResponse
   */
  async deleteSimQuestion(request: $_model.DeleteSimQuestionRequest): Promise<$_model.DeleteSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSimQuestionWithOptions(request, runtime);
  }

  /**
   * Deletes an answer.
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
   * Deletes an answer.
   * 
   * @param request - DeleteSolutionRequest
   * @returns DeleteSolutionResponse
   */
  async deleteSolution(request: $_model.DeleteSolutionRequest): Promise<$_model.DeleteSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSolutionWithOptions(request, runtime);
  }

  /**
   * Deletes a tag.
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * Deletes a tag.
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * Deletes a tag group.
   * 
   * @param request - DeleteTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagGroupResponse
   */
  async deleteTagGroupWithOptions(request: $_model.DeleteTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTagGroup",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagGroupResponse({}));
  }

  /**
   * Deletes a tag group.
   * 
   * @param request - DeleteTagGroupRequest
   * @returns DeleteTagGroupResponse
   */
  async deleteTagGroup(request: $_model.DeleteTagGroupRequest): Promise<$_model.DeleteTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the utterance information of an intent.
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
   * Modifies the utterance information of an intent.
   * 
   * @param request - DeleteUserSayRequest
   * @returns DeleteUserSayResponse
   */
  async deleteUserSay(request: $_model.DeleteUserSayRequest): Promise<$_model.DeleteUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserSayWithOptions(request, runtime);
  }

  /**
   * Queries the information of a single category.
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
   * Queries the information of a single category.
   * 
   * @param request - DescribeCategoryRequest
   * @returns DescribeCategoryResponse
   */
  async describeCategory(request: $_model.DescribeCategoryRequest): Promise<$_model.DescribeCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a specified entity under a specified chatbot, such as entity type, entity name, creation time, and modification time.
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
   * Queries the metadata of a specified entity under a specified chatbot, such as entity type, entity name, creation time, and modification time.
   * 
   * @param request - DescribeDSEntityRequest
   * @returns DescribeDSEntityResponse
   */
  async describeDSEntity(request: $_model.DescribeDSEntityRequest): Promise<$_model.DescribeDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDSEntityWithOptions(request, runtime);
  }

  /**
   * Queries the details of a document.
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
   * Queries the details of a document.
   * 
   * @param request - DescribeDocRequest
   * @returns DescribeDocResponse
   */
  async describeDoc(request: $_model.DescribeDocRequest): Promise<$_model.DescribeDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocWithOptions(request, runtime);
  }

  /**
   * Queries the details of a knowledge entry.
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
   * Queries the details of a knowledge entry.
   * 
   * @param request - DescribeFaqRequest
   * @returns DescribeFaqResponse
   */
  async describeFaq(request: $_model.DescribeFaqRequest): Promise<$_model.DescribeFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaqWithOptions(request, runtime);
  }

  /**
   * Queries the details of a chatbot.
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
   * Queries the details of a chatbot.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * Returns the metadata of a specified intent, such as the intent type, intent name, creation time, and modification time.
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
   * Returns the metadata of a specified intent, such as the intent type, intent name, creation time, and modification time.
   * 
   * @param request - DescribeIntentRequest
   * @returns DescribeIntentResponse
   */
  async describeIntent(request: $_model.DescribeIntentRequest): Promise<$_model.DescribeIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  /**
   * Queries the details of a perspective.
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
   * Queries the details of a perspective.
   * 
   * @param request - DescribePerspectiveRequest
   * @returns DescribePerspectiveResponse
   */
  async describePerspective(request: $_model.DescribePerspectiveRequest): Promise<$_model.DescribePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePerspectiveWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a tag.
   * 
   * @param request - DescribeTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagResponse
   */
  async describeTagWithOptions(request: $_model.DescribeTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTag",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagResponse({}));
  }

  /**
   * Retrieves the details of a tag.
   * 
   * @param request - DescribeTagRequest
   * @returns DescribeTagResponse
   */
  async describeTag(request: $_model.DescribeTagRequest): Promise<$_model.DescribeTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a tag group.
   * 
   * @param request - DescribeTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagGroupResponse
   */
  async describeTagGroupWithOptions(request: $_model.DescribeTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagGroup",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagGroupResponse({}));
  }

  /**
   * Retrieves the details of a tag group.
   * 
   * @param request - DescribeTagGroupRequest
   * @returns DescribeTagGroupResponse
   */
  async describeTagGroup(request: $_model.DescribeTagGroupRequest): Promise<$_model.DescribeTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagGroupWithOptions(request, runtime);
  }

  /**
   * Saves user feedback on Q&A results.
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
   * Saves user feedback on Q&A results.
   * 
   * @param request - FeedbackRequest
   * @returns FeedbackResponse
   */
  async feedback(request: $_model.FeedbackRequest): Promise<$_model.FeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.feedbackWithOptions(request, runtime);
  }

  /**
   * Retrieves a token for passwordless logon in the chat window, which carries the enterprise identity of the user.
   * 
   * @remarks
   * For security reasons, the generated token is valid only for the first use within the expiration period. If the same user logs on from multiple browsers, call this operation multiple times.
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      body["Email"] = request.email;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.foreignId)) {
      body["ForeignId"] = request.foreignId;
    }

    if (!$dara.isNull(request.nick)) {
      body["Nick"] = request.nick;
    }

    if (!$dara.isNull(request.telephone)) {
      body["Telephone"] = request.telephone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Retrieves a token for passwordless logon in the chat window, which carries the enterprise identity of the user.
   * 
   * @remarks
   * For security reasons, the generated token is valid only for the first use within the expiration period. If the same user logs on from multiple browsers, call this operation multiple times.
   * 
   * @param request - GenerateUserAccessTokenRequest
   * @returns GenerateUserAccessTokenResponse
   */
  async generateUserAccessToken(request: $_model.GenerateUserAccessTokenRequest): Promise<$_model.GenerateUserAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUserAccessTokenWithOptions(request, runtime);
  }

  /**
   * Retrieves the business space ID.
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
   * Retrieves the business space ID.
   * 
   * @param request - GetAgentInfoRequest
   * @returns GetAgentInfoResponse
   */
  async getAgentInfo(request: $_model.GetAgentInfoRequest): Promise<$_model.GetAgentInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the result of an asynchronous service execution. This operation is used together with the Chat operation.
   * 
   * @remarks
   * Retrieves the result of an asynchronous service execution.
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
   * Retrieves the result of an asynchronous service execution. This operation is used together with the Chat operation.
   * 
   * @remarks
   * Retrieves the result of an asynchronous service execution.
   * 
   * @param request - GetAsyncResultRequest
   * @returns GetAsyncResultResponse
   */
  async getAsyncResult(request: $_model.GetAsyncResultRequest): Promise<$_model.GetAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
  }

  /**
   * Queries the overview metrics of chatbot Q&A.
   * 
   * @remarks
   * Only data from T-1 (excluding the current day) can be queried.
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
   * Queries the overview metrics of chatbot Q&A.
   * 
   * @remarks
   * Only data from T-1 (excluding the current day) can be queried.
   * 
   * @param request - GetBotSessionDataRequest
   * @returns GetBotSessionDataResponse
   */
  async getBotSessionData(request: $_model.GetBotSessionDataRequest): Promise<$_model.GetBotSessionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBotSessionDataWithOptions(request, runtime);
  }

  /**
   * Queries the publish progress of a chatbot.
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
   * Queries the publish progress of a chatbot.
   * 
   * @param request - GetInstancePublishTaskStateRequest
   * @returns GetInstancePublishTaskStateResponse
   */
  async getInstancePublishTaskState(request: $_model.GetInstancePublishTaskStateRequest): Promise<$_model.GetInstancePublishTaskStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstancePublishTaskStateWithOptions(request, runtime);
  }

  /**
   * Queries the publish progress.
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
   * Queries the publish progress.
   * 
   * @param request - GetPublishTaskStateRequest
   * @returns GetPublishTaskStateResponse
   */
  async getPublishTaskState(request: $_model.GetPublishTaskStateRequest): Promise<$_model.GetPublishTaskStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublishTaskStateWithOptions(request, runtime);
  }

  /**
   * Initializes an IM connection with custom settings by using the from value generated from the channel backend configuration. Supports passing a user authentication token during initialization.
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.userAccessToken)) {
      body["UserAccessToken"] = request.userAccessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Initializes an IM connection with custom settings by using the from value generated from the channel backend configuration. Supports passing a user authentication token during initialization.
   * 
   * @param request - InitIMConnectRequest
   * @returns InitIMConnectResponse
   */
  async initIMConnect(request: $_model.InitIMConnectRequest): Promise<$_model.InitIMConnectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initIMConnectWithOptions(request, runtime);
  }

  /**
   * Associates knowledge categories with a chatbot.
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
   * Associates knowledge categories with a chatbot.
   * 
   * @param request - LinkInstanceCategoryRequest
   * @returns LinkInstanceCategoryResponse
   */
  async linkInstanceCategory(request: $_model.LinkInstanceCategoryRequest): Promise<$_model.LinkInstanceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.linkInstanceCategoryWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of business spaces for the current Alibaba Cloud account.
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
   * Retrieves the list of business spaces for the current Alibaba Cloud account.
   * 
   * @param request - ListAgentRequest
   * @returns ListAgentResponse
   */
  async listAgent(request: $_model.ListAgentRequest): Promise<$_model.ListAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of categories.
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
   * Retrieves the list of categories.
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(request: $_model.ListCategoryRequest): Promise<$_model.ListCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCategoryWithOptions(request, runtime);
  }

  /**
   * Queries the list of associated questions for a knowledge item.
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
   * Queries the list of associated questions for a knowledge item.
   * 
   * @param request - ListConnQuestionRequest
   * @returns ListConnQuestionResponse
   */
  async listConnQuestion(request: $_model.ListConnQuestionRequest): Promise<$_model.ListConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnQuestionWithOptions(request, runtime);
  }

  /**
   * Queries the list of entities under a specified chatbot. Only the metadata of each entity is returned, such as entity type, entity name, creation time, and modification time.
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
   * Queries the list of entities under a specified chatbot. Only the metadata of each entity is returned, such as entity type, entity name, creation time, and modification time.
   * 
   * @param request - ListDSEntityRequest
   * @returns ListDSEntityResponse
   */
  async listDSEntity(request: $_model.ListDSEntityRequest): Promise<$_model.ListDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDSEntityWithOptions(request, runtime);
  }

  /**
   * Queries the list and details of entity members for a specified entity. Keyword filtering (contains) is supported. The filtering scope includes entity values and synonyms.
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
   * Queries the list and details of entity members for a specified entity. Keyword filtering (contains) is supported. The filtering scope includes entity values and synonyms.
   * 
   * @param request - ListDSEntityValueRequest
   * @returns ListDSEntityValueResponse
   */
  async listDSEntityValue(request: $_model.ListDSEntityValueRequest): Promise<$_model.ListDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDSEntityValueWithOptions(request, runtime);
  }

  /**
   * Queries the list of chatbots.
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

    if (!$dara.isNull(request.sandbox)) {
      query["Sandbox"] = request.sandbox;
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
   * Queries the list of chatbots.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the list of intents under a specified chatbot. Only the metadata of each intent is returned, such as the intent type, intent name, creation time, and modification time.
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
   * Queries the list of intents under a specified chatbot. Only the metadata of each intent is returned, such as the intent type, intent name, creation time, and modification time.
   * 
   * @param request - ListIntentRequest
   * @returns ListIntentResponse
   */
  async listIntent(request: $_model.ListIntentRequest): Promise<$_model.ListIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntentWithOptions(request, runtime);
  }

  /**
   * Queries the advanced semantic configuration (LGF) of a specified intent.
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
   * Queries the advanced semantic configuration (LGF) of a specified intent.
   * 
   * @param request - ListLgfRequest
   * @returns ListLgfResponse
   */
  async listLgf(request: $_model.ListLgfRequest): Promise<$_model.ListLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLgfWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of SaaS integration information.
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
   * Retrieves the list of SaaS integration information.
   * 
   * @param request - ListSaasInfoRequest
   * @returns ListSaasInfoResponse
   */
  async listSaasInfo(request: $_model.ListSaasInfoRequest): Promise<$_model.ListSaasInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSaasInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of permission integration information. You can use the permission groups returned in this list to grant permissions to users.
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
   * Retrieves the list of permission integration information. You can use the permission groups returned in this list to grant permissions to users.
   * 
   * @param request - ListSaasPermissionGroupInfosRequest
   * @returns ListSaasPermissionGroupInfosResponse
   */
  async listSaasPermissionGroupInfos(request: $_model.ListSaasPermissionGroupInfosRequest): Promise<$_model.ListSaasPermissionGroupInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSaasPermissionGroupInfosWithOptions(request, runtime);
  }

  /**
   * Queries the list of similar questions for a knowledge entry.
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
   * Queries the list of similar questions for a knowledge entry.
   * 
   * @param request - ListSimQuestionRequest
   * @returns ListSimQuestionResponse
   */
  async listSimQuestion(request: $_model.ListSimQuestionRequest): Promise<$_model.ListSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSimQuestionWithOptions(request, runtime);
  }

  /**
   * Queries the list of answers for a knowledge item.
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
   * Queries the list of answers for a knowledge item.
   * 
   * @param request - ListSolutionRequest
   * @returns ListSolutionResponse
   */
  async listSolution(request: $_model.ListSolutionRequest): Promise<$_model.ListSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSolutionWithOptions(request, runtime);
  }

  /**
   * Queries tags.
   * 
   * @param request - ListTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResponse
   */
  async listTagWithOptions(request: $_model.ListTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagName)) {
      body["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTag",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResponse({}));
  }

  /**
   * Queries tags.
   * 
   * @param request - ListTagRequest
   * @returns ListTagResponse
   */
  async listTag(request: $_model.ListTagRequest): Promise<$_model.ListTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagWithOptions(request, runtime);
  }

  /**
   * Queries tag groups.
   * 
   * @param request - ListTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagGroupResponse
   */
  async listTagGroupWithOptions(request: $_model.ListTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagGroup",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListTagGroupResponse({}));
  }

  /**
   * Queries tag groups.
   * 
   * @param request - ListTagGroupRequest
   * @returns ListTagGroupResponse
   */
  async listTagGroup(request: $_model.ListTagGroupRequest): Promise<$_model.ListTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves the session history details.
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
   * Retrieves the session history details.
   * 
   * @param request - ListTongyiChatHistorysRequest
   * @returns ListTongyiChatHistorysResponse
   */
  async listTongyiChatHistorys(request: $_model.ListTongyiChatHistorysRequest): Promise<$_model.ListTongyiChatHistorysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTongyiChatHistorysWithOptions(request, runtime);
  }

  /**
   * Queries the conversation records of a single session for Chatbot Tongyi Edition.
   * 
   * @remarks
   * Only conversation records from the last 2 hours can be queried.
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
   * Queries the conversation records of a single session for Chatbot Tongyi Edition.
   * 
   * @remarks
   * Only conversation records from the last 2 hours can be queried.
   * 
   * @param request - ListTongyiConversationLogsRequest
   * @returns ListTongyiConversationLogsResponse
   */
  async listTongyiConversationLogs(request: $_model.ListTongyiConversationLogsRequest): Promise<$_model.ListTongyiConversationLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTongyiConversationLogsWithOptions(request, runtime);
  }

  /**
   * Queries the utterance content and associated slot information of a specified intent. Supports filtering utterances by keyword (contains).
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
   * Queries the utterance content and associated slot information of a specified intent. Supports filtering utterances by keyword (contains).
   * 
   * @param request - ListUserSayRequest
   * @returns ListUserSayResponse
   */
  async listUserSay(request: $_model.ListUserSayRequest): Promise<$_model.ListUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserSayWithOptions(request, runtime);
  }

  /**
   * Returns the natural language understanding (NLU) result of a chatbot for a user query. Currently, only NLU information from dialog flow and the central controller is supported. Other engines will be supported as needed.
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
   * Returns the natural language understanding (NLU) result of a chatbot for a user query. Currently, only NLU information from dialog flow and the central controller is supported. Other engines will be supported as needed.
   * 
   * @param request - NluRequest
   * @returns NluResponse
   */
  async nlu(request: $_model.NluRequest): Promise<$_model.NluResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nluWithOptions(request, runtime);
  }

  /**
   * Queries the list of perspectives.
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
   * Queries the list of perspectives.
   * 
   * @param request - QueryPerspectivesRequest
   * @returns QueryPerspectivesResponse
   */
  async queryPerspectives(request: $_model.QueryPerspectivesRequest): Promise<$_model.QueryPerspectivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPerspectivesWithOptions(request, runtime);
  }

  /**
   * Retries document processing.
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
   * Retries document processing.
   * 
   * @param request - RetryDocRequest
   * @returns RetryDocResponse
   */
  async retryDoc(request: $_model.RetryDocRequest): Promise<$_model.RetryDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryDocWithOptions(request, runtime);
  }

  /**
   * Searches for documents.
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
   * Searches for documents.
   * 
   * @param request - SearchDocRequest
   * @returns SearchDocResponse
   */
  async searchDoc(request: $_model.SearchDocRequest): Promise<$_model.SearchDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchDocWithOptions(request, runtime);
  }

  /**
   * Searches for knowledge.
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
   * Searches for knowledge.
   * 
   * @param request - SearchFaqRequest
   * @returns SearchFaqResponse
   */
  async searchFaq(request: $_model.SearchFaqRequest): Promise<$_model.SearchFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchFaqWithOptions(request, runtime);
  }

  /**
   * Retrieves the debugging information for large language model Q&A.
   * 
   * @remarks
   * Supports only new-version chatbots. You can query only data generated within the last 90 days.
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
   * Retrieves the debugging information for large language model Q&A.
   * 
   * @remarks
   * Supports only new-version chatbots. You can query only data generated within the last 90 days.
   * 
   * @param request - TongyiChatDebugInfoRequest
   * @returns TongyiChatDebugInfoResponse
   */
  async tongyiChatDebugInfo(request: $_model.TongyiChatDebugInfoRequest): Promise<$_model.TongyiChatDebugInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tongyiChatDebugInfoWithOptions(request, runtime);
  }

  /**
   * Updates a category.
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
   * Updates a category.
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: $_model.UpdateCategoryRequest): Promise<$_model.UpdateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * Updates an association.
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
   * Updates an association.
   * 
   * @param request - UpdateConnQuestionRequest
   * @returns UpdateConnQuestionResponse
   */
  async updateConnQuestion(request: $_model.UpdateConnQuestionRequest): Promise<$_model.UpdateConnQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConnQuestionWithOptions(request, runtime);
  }

  /**
   * Modifies the meta information of an entity. Only the entity name can be modified. The entity type cannot be modified.
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
   * Modifies the meta information of an entity. Only the entity name can be modified. The entity type cannot be modified.
   * 
   * @param request - UpdateDSEntityRequest
   * @returns UpdateDSEntityResponse
   */
  async updateDSEntity(request: $_model.UpdateDSEntityRequest): Promise<$_model.UpdateDSEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDSEntityWithOptions(request, runtime);
  }

  /**
   * Modifies a member of a specified entity. Two types of data can be modified: entity values with synonyms, and regular expressions. Note: Adding a regular expression to a standard entity is not allowed, and vice versa.
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
   * Modifies a member of a specified entity. Two types of data can be modified: entity values with synonyms, and regular expressions. Note: Adding a regular expression to a standard entity is not allowed, and vice versa.
   * 
   * @param request - UpdateDSEntityValueRequest
   * @returns UpdateDSEntityValueResponse
   */
  async updateDSEntityValue(request: $_model.UpdateDSEntityValueRequest): Promise<$_model.UpdateDSEntityValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDSEntityValueWithOptions(request, runtime);
  }

  /**
   * Updates a document.
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
   * Updates a document.
   * 
   * @param request - UpdateDocRequest
   * @returns UpdateDocResponse
   */
  async updateDoc(request: $_model.UpdateDocRequest): Promise<$_model.UpdateDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDocWithOptions(request, runtime);
  }

  /**
   * Edits a knowledge entry.
   * 
   * @param tmpReq - UpdateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaqResponse
   */
  async updateFaqWithOptions(tmpReq: $_model.UpdateFaqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFaqResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFaqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagIdList)) {
      request.tagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIdList, "TagIdList", "json");
    }

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

    if (!$dara.isNull(request.tagIdListShrink)) {
      body["TagIdList"] = request.tagIdListShrink;
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
   * Edits a knowledge entry.
   * 
   * @param request - UpdateFaqRequest
   * @returns UpdateFaqResponse
   */
  async updateFaq(request: $_model.UpdateFaqRequest): Promise<$_model.UpdateFaqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFaqWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of a chatbot.
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
   * Updates the name and description of a chatbot.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies an intent, including the meta information of the intent, such as the intent name, intent alias, and slot information associated with the intent. This operation does not include intent utterances or LGF.
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
   * Modifies an intent, including the meta information of the intent, such as the intent name, intent alias, and slot information associated with the intent. This operation does not include intent utterances or LGF.
   * 
   * @param request - UpdateIntentRequest
   * @returns UpdateIntentResponse
   */
  async updateIntent(request: $_model.UpdateIntentRequest): Promise<$_model.UpdateIntentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntentWithOptions(request, runtime);
  }

  /**
   * Creates an advanced semantic configuration (LGF) for a specified intent.
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
   * Creates an advanced semantic configuration (LGF) for a specified intent.
   * 
   * @param request - UpdateLgfRequest
   * @returns UpdateLgfResponse
   */
  async updateLgf(request: $_model.UpdateLgfRequest): Promise<$_model.UpdateLgfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLgfWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of a perspective.
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
   * Updates the name and description of a perspective.
   * 
   * @param request - UpdatePerspectiveRequest
   * @returns UpdatePerspectiveResponse
   */
  async updatePerspective(request: $_model.UpdatePerspectiveRequest): Promise<$_model.UpdatePerspectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePerspectiveWithOptions(request, runtime);
  }

  /**
   * Updates a similar question.
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
   * Updates a similar question.
   * 
   * @param request - UpdateSimQuestionRequest
   * @returns UpdateSimQuestionResponse
   */
  async updateSimQuestion(request: $_model.UpdateSimQuestionRequest): Promise<$_model.UpdateSimQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSimQuestionWithOptions(request, runtime);
  }

  /**
   * Updates an answer.
   * 
   * @param tmpReq - UpdateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionResponse
   */
  async updateSolutionWithOptions(tmpReq: $_model.UpdateSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSolutionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSolutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagIdList)) {
      request.tagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIdList, "TagIdList", "json");
    }

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

    if (!$dara.isNull(request.tagIdListShrink)) {
      body["TagIdList"] = request.tagIdListShrink;
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
   * Updates an answer.
   * 
   * @param request - UpdateSolutionRequest
   * @returns UpdateSolutionResponse
   */
  async updateSolution(request: $_model.UpdateSolutionRequest): Promise<$_model.UpdateSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSolutionWithOptions(request, runtime);
  }

  /**
   * Updates a tag.
   * 
   * @param request - UpdateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTagResponse
   */
  async updateTagWithOptions(request: $_model.UpdateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.tagName)) {
      body["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTag",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTagResponse({}));
  }

  /**
   * Updates a tag.
   * 
   * @param request - UpdateTagRequest
   * @returns UpdateTagResponse
   */
  async updateTag(request: $_model.UpdateTagRequest): Promise<$_model.UpdateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTagWithOptions(request, runtime);
  }

  /**
   * Updates a label group.
   * 
   * @param request - UpdateTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTagGroupResponse
   */
  async updateTagGroupWithOptions(request: $_model.UpdateTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTagGroup",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTagGroupResponse({}));
  }

  /**
   * Updates a label group.
   * 
   * @param request - UpdateTagGroupRequest
   * @returns UpdateTagGroupResponse
   */
  async updateTagGroup(request: $_model.UpdateTagGroupRequest): Promise<$_model.UpdateTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTagGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the utterance information of an intent.
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
   * Modifies the utterance information of an intent.
   * 
   * @param request - UpdateUserSayRequest
   * @returns UpdateUserSayResponse
   */
  async updateUserSay(request: $_model.UpdateUserSayRequest): Promise<$_model.UpdateUserSayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserSayWithOptions(request, runtime);
  }

}
