// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChatMessageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello world！
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 723b7f0f-c28a-4123-86e7-094d3d3863f8
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c28a-4123-86e7
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      conversationId: 'ConversationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      conversationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessageResponseBody extends $tea.Model {
  content?: string;
  /**
   * @example
   * Param.Invalid
   */
  errCode?: string;
  /**
   * @example
   * The specified parameter is not valid.
   */
  errMsg?: string;
  eventType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 696acaa9-eb29-4c1f-b48a-1f901579acc5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      eventType: 'EventType',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      errMsg: 'string',
      eventType: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationRequest extends $tea.Model {
  exerciseAnalysis?: string;
  exerciseAnswer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exerciseContent?: string;
  exerciseType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2r560eHAbsknrfHXVZO4L
   */
  outerBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wx-xx-yy
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      exerciseAnalysis: 'ExerciseAnalysis',
      exerciseAnswer: 'ExerciseAnswer',
      exerciseContent: 'ExerciseContent',
      exerciseType: 'ExerciseType',
      outerBizId: 'OuterBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exerciseAnalysis: 'string',
      exerciseAnswer: 'string',
      exerciseContent: 'string',
      exerciseType: 'string',
      outerBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationResponseBody extends $tea.Model {
  /**
   * @example
   * a499fef7-fef7-453c-a6b2-6a34089613e8
   */
  conversationId?: string;
  /**
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 89C27D03-4C85-5420-9752-989130878F4D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ex_pop_1731848070815_funI
   */
  exerciseCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 725e5550-8f81-42e0-a4db-d2de1be52afc
   */
  outerBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pop_1731848070815
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      exerciseCode: 'ExerciseCode',
      outerBizId: 'OuterBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exerciseCode: 'string',
      outerBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationResponseBody extends $tea.Model {
  /**
   * @example
   * 96d36ed0-ebde-11ee-806f-f35ee6682ec5
   */
  conversationId?: string;
  /**
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1d31b11b-4b82-4db1-b3c0-001529fc78eb
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRelatedConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRelatedConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  exerciseContent?: string;
  static names(): { [key: string]: string } {
    return {
      exerciseContent: 'ExerciseContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exerciseContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisResponseBody extends $tea.Model {
  content?: string;
  /**
   * @example
   * 40020503
   */
  errCode?: string;
  /**
   * @example
   * Parameter value validation failed
   */
  errMsg?: string;
  eventType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1d31b11b-4b82-4db1-b3c0-001529fc78eb
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      eventType: 'EventType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      errMsg: 'string',
      eventType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ex_pop_1731848070815_funI
   */
  exerciseCode?: string;
  static names(): { [key: string]: string } {
    return {
      exerciseCode: 'ExerciseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exerciseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepResponseBody extends $tea.Model {
  content?: string;
  /**
   * @example
   * 40020503
   */
  errCode?: string;
  /**
   * @example
   * Parameter value validation failed
   */
  errMsg?: string;
  eventType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 696acaa9-eb29-4c1f-b48a-1f901579acc5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      eventType: 'EventType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      errMsg: 'string',
      eventType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenStepResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenStepResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ex_pop_1731848070815_funI
   */
  exerciseCode?: string;
  /**
   * @example
   * 2024-11-18
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      exerciseCode: 'ExerciseCode',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exerciseCode: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmResponseBody extends $tea.Model {
  /**
   * @example
   * 40020503
   */
  errCode?: string;
  /**
   * @example
   * Parameter value validation failed
   */
  errMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 696acaa9-eb29-4c1f-b48a-1f901579acc5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GlobalConfirmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GlobalConfirmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1549d636-b102-4fee-8a99-fcc552aa9aa9
   */
  contentCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ex_pop_1731848070815_funI
   */
  exerciseCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentCode: 'ContentCode',
      exerciseCode: 'ExerciseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentCode: 'string',
      exerciseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisResponseBody extends $tea.Model {
  /**
   * @example
   * 9901100002
   */
  errCode?: string;
  /**
   * @example
   * Parameter value validation failed
   */
  errMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 89C27D03-4C85-5420-9752-989130878F4D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1549d636-b102-4fee-8a99-fcc552aa9aa9
   */
  contentCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ex_pop_1731848070815_funI
   */
  exerciseCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentCode: 'ContentCode',
      exerciseCode: 'ExerciseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentCode: 'string',
      exerciseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepResponseBody extends $tea.Model {
  /**
   * @example
   * 9901100002
   */
  errCode?: string;
  /**
   * @example
   * Parameter value validation failed
   */
  errMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15486286-243F-51E6-8DD3-B2D2365E5136
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStepResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStepResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aimath", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 聊天消息API
   * 
   * @param request - ChatMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessageResponse
   */
  async chatMessageWithOptions(request: ChatMessageRequest, runtime: $Util.RuntimeOptions): Promise<ChatMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChatMessage",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChatMessageResponse>(await this.callApi(params, req, runtime), new ChatMessageResponse({}));
  }

  /**
   * 聊天消息API
   * 
   * @param request - ChatMessageRequest
   * @returns ChatMessageResponse
   */
  async chatMessage(request: ChatMessageRequest): Promise<ChatMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatMessageWithOptions(request, runtime);
  }

  /**
   * 创建试题相应的对话。
   * 
   * @param request - CreateConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConversationResponse
   */
  async createConversationWithOptions(request: CreateConversationRequest, runtime: $Util.RuntimeOptions): Promise<CreateConversationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exerciseAnalysis)) {
      body["ExerciseAnalysis"] = request.exerciseAnalysis;
    }

    if (!Util.isUnset(request.exerciseAnswer)) {
      body["ExerciseAnswer"] = request.exerciseAnswer;
    }

    if (!Util.isUnset(request.exerciseContent)) {
      body["ExerciseContent"] = request.exerciseContent;
    }

    if (!Util.isUnset(request.exerciseType)) {
      body["ExerciseType"] = request.exerciseType;
    }

    if (!Util.isUnset(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConversation",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConversationResponse>(await this.callApi(params, req, runtime), new CreateConversationResponse({}));
  }

  /**
   * 创建试题相应的对话。
   * 
   * @param request - CreateConversationRequest
   * @returns CreateConversationResponse
   */
  async createConversation(request: CreateConversationRequest): Promise<CreateConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConversationWithOptions(request, runtime);
  }

  /**
   * 创建关联的对话，输入试题code即可开启对话
   * 
   * @param request - CreateRelatedConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRelatedConversationResponse
   */
  async createRelatedConversationWithOptions(request: CreateRelatedConversationRequest, runtime: $Util.RuntimeOptions): Promise<CreateRelatedConversationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    if (!Util.isUnset(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRelatedConversation",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRelatedConversationResponse>(await this.callApi(params, req, runtime), new CreateRelatedConversationResponse({}));
  }

  /**
   * 创建关联的对话，输入试题code即可开启对话
   * 
   * @param request - CreateRelatedConversationRequest
   * @returns CreateRelatedConversationResponse
   */
  async createRelatedConversation(request: CreateRelatedConversationRequest): Promise<CreateRelatedConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRelatedConversationWithOptions(request, runtime);
  }

  /**
   * 生成解题分析
   * 
   * @param request - GenAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenAnalysisResponse
   */
  async genAnalysisWithOptions(request: GenAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<GenAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exerciseContent)) {
      body["ExerciseContent"] = request.exerciseContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenAnalysis",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenAnalysisResponse>(await this.callApi(params, req, runtime), new GenAnalysisResponse({}));
  }

  /**
   * 生成解题分析
   * 
   * @param request - GenAnalysisRequest
   * @returns GenAnalysisResponse
   */
  async genAnalysis(request: GenAnalysisRequest): Promise<GenAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.genAnalysisWithOptions(request, runtime);
  }

  /**
   * 生成数学解题步骤
   * 
   * @param request - GenStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenStepResponse
   */
  async genStepWithOptions(request: GenStepRequest, runtime: $Util.RuntimeOptions): Promise<GenStepResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenStep",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenStepResponse>(await this.callApi(params, req, runtime), new GenStepResponse({}));
  }

  /**
   * 生成数学解题步骤
   * 
   * @param request - GenStepRequest
   * @returns GenStepResponse
   */
  async genStep(request: GenStepRequest): Promise<GenStepResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.genStepWithOptions(request, runtime);
  }

  /**
   * 全局确认修订完成
   * 
   * @param request - GlobalConfirmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalConfirmResponse
   */
  async globalConfirmWithOptions(request: GlobalConfirmRequest, runtime: $Util.RuntimeOptions): Promise<GlobalConfirmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GlobalConfirm",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GlobalConfirmResponse>(await this.callApi(params, req, runtime), new GlobalConfirmResponse({}));
  }

  /**
   * 全局确认修订完成
   * 
   * @param request - GlobalConfirmRequest
   * @returns GlobalConfirmResponse
   */
  async globalConfirm(request: GlobalConfirmRequest): Promise<GlobalConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.globalConfirmWithOptions(request, runtime);
  }

  /**
   * 修订解题分析
   * 
   * @param request - UpdateAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnalysisResponse
   */
  async updateAnalysisWithOptions(request: UpdateAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentCode)) {
      body["ContentCode"] = request.contentCode;
    }

    if (!Util.isUnset(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAnalysis",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAnalysisResponse>(await this.callApi(params, req, runtime), new UpdateAnalysisResponse({}));
  }

  /**
   * 修订解题分析
   * 
   * @param request - UpdateAnalysisRequest
   * @returns UpdateAnalysisResponse
   */
  async updateAnalysis(request: UpdateAnalysisRequest): Promise<UpdateAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAnalysisWithOptions(request, runtime);
  }

  /**
   * 修订解题步骤
   * 
   * @param request - UpdateStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStepResponse
   */
  async updateStepWithOptions(request: UpdateStepRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStepResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentCode)) {
      body["ContentCode"] = request.contentCode;
    }

    if (!Util.isUnset(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStep",
      version: "2024-11-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStepResponse>(await this.callApi(params, req, runtime), new UpdateStepResponse({}));
  }

  /**
   * 修订解题步骤
   * 
   * @param request - UpdateStepRequest
   * @returns UpdateStepResponse
   */
  async updateStep(request: UpdateStepRequest): Promise<UpdateStepResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStepWithOptions(request, runtime);
  }

}
