// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ChatMessageRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessageResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessageResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConversationResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRelatedConversationResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenAnalysisResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenStepResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalConfirmResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnalysisResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStepResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aimath", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 聊天消息API
   * 
   * @param request - ChatMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessageResponse
   */
  async chatMessageWithOptions(request: ChatMessageRequest, runtime: $dara.RuntimeOptions): Promise<ChatMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChatMessageResponse>(await this.callApi(params, req, runtime), new ChatMessageResponse({}));
    } else {
      return $dara.cast<ChatMessageResponse>(await this.execute(params, req, runtime), new ChatMessageResponse({}));
    }

  }

  /**
   * 聊天消息API
   * 
   * @param request - ChatMessageRequest
   * @returns ChatMessageResponse
   */
  async chatMessage(request: ChatMessageRequest): Promise<ChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatMessageWithOptions(request, runtime);
  }

  /**
   * 创建试题相应的对话。
   * 
   * @param request - CreateConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConversationResponse
   */
  async createConversationWithOptions(request: CreateConversationRequest, runtime: $dara.RuntimeOptions): Promise<CreateConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exerciseAnalysis)) {
      body["ExerciseAnalysis"] = request.exerciseAnalysis;
    }

    if (!$dara.isNull(request.exerciseAnswer)) {
      body["ExerciseAnswer"] = request.exerciseAnswer;
    }

    if (!$dara.isNull(request.exerciseContent)) {
      body["ExerciseContent"] = request.exerciseContent;
    }

    if (!$dara.isNull(request.exerciseType)) {
      body["ExerciseType"] = request.exerciseType;
    }

    if (!$dara.isNull(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateConversationResponse>(await this.callApi(params, req, runtime), new CreateConversationResponse({}));
    } else {
      return $dara.cast<CreateConversationResponse>(await this.execute(params, req, runtime), new CreateConversationResponse({}));
    }

  }

  /**
   * 创建试题相应的对话。
   * 
   * @param request - CreateConversationRequest
   * @returns CreateConversationResponse
   */
  async createConversation(request: CreateConversationRequest): Promise<CreateConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConversationWithOptions(request, runtime);
  }

  /**
   * 创建关联的对话，输入试题code即可开启对话
   * 
   * @param request - CreateRelatedConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRelatedConversationResponse
   */
  async createRelatedConversationWithOptions(request: CreateRelatedConversationRequest, runtime: $dara.RuntimeOptions): Promise<CreateRelatedConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    if (!$dara.isNull(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRelatedConversationResponse>(await this.callApi(params, req, runtime), new CreateRelatedConversationResponse({}));
    } else {
      return $dara.cast<CreateRelatedConversationResponse>(await this.execute(params, req, runtime), new CreateRelatedConversationResponse({}));
    }

  }

  /**
   * 创建关联的对话，输入试题code即可开启对话
   * 
   * @param request - CreateRelatedConversationRequest
   * @returns CreateRelatedConversationResponse
   */
  async createRelatedConversation(request: CreateRelatedConversationRequest): Promise<CreateRelatedConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRelatedConversationWithOptions(request, runtime);
  }

  /**
   * 生成解题分析
   * 
   * @param request - GenAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenAnalysisResponse
   */
  async genAnalysisWithOptions(request: GenAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<GenAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exerciseContent)) {
      body["ExerciseContent"] = request.exerciseContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenAnalysisResponse>(await this.callApi(params, req, runtime), new GenAnalysisResponse({}));
    } else {
      return $dara.cast<GenAnalysisResponse>(await this.execute(params, req, runtime), new GenAnalysisResponse({}));
    }

  }

  /**
   * 生成解题分析
   * 
   * @param request - GenAnalysisRequest
   * @returns GenAnalysisResponse
   */
  async genAnalysis(request: GenAnalysisRequest): Promise<GenAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.genAnalysisWithOptions(request, runtime);
  }

  /**
   * 生成数学解题步骤
   * 
   * @param request - GenStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenStepResponse
   */
  async genStepWithOptions(request: GenStepRequest, runtime: $dara.RuntimeOptions): Promise<GenStepResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenStepResponse>(await this.callApi(params, req, runtime), new GenStepResponse({}));
    } else {
      return $dara.cast<GenStepResponse>(await this.execute(params, req, runtime), new GenStepResponse({}));
    }

  }

  /**
   * 生成数学解题步骤
   * 
   * @param request - GenStepRequest
   * @returns GenStepResponse
   */
  async genStep(request: GenStepRequest): Promise<GenStepResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.genStepWithOptions(request, runtime);
  }

  /**
   * 全局确认修订完成
   * 
   * @param request - GlobalConfirmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalConfirmResponse
   */
  async globalConfirmWithOptions(request: GlobalConfirmRequest, runtime: $dara.RuntimeOptions): Promise<GlobalConfirmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GlobalConfirmResponse>(await this.callApi(params, req, runtime), new GlobalConfirmResponse({}));
    } else {
      return $dara.cast<GlobalConfirmResponse>(await this.execute(params, req, runtime), new GlobalConfirmResponse({}));
    }

  }

  /**
   * 全局确认修订完成
   * 
   * @param request - GlobalConfirmRequest
   * @returns GlobalConfirmResponse
   */
  async globalConfirm(request: GlobalConfirmRequest): Promise<GlobalConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.globalConfirmWithOptions(request, runtime);
  }

  /**
   * 修订解题分析
   * 
   * @param request - UpdateAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnalysisResponse
   */
  async updateAnalysisWithOptions(request: UpdateAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentCode)) {
      body["ContentCode"] = request.contentCode;
    }

    if (!$dara.isNull(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAnalysisResponse>(await this.callApi(params, req, runtime), new UpdateAnalysisResponse({}));
    } else {
      return $dara.cast<UpdateAnalysisResponse>(await this.execute(params, req, runtime), new UpdateAnalysisResponse({}));
    }

  }

  /**
   * 修订解题分析
   * 
   * @param request - UpdateAnalysisRequest
   * @returns UpdateAnalysisResponse
   */
  async updateAnalysis(request: UpdateAnalysisRequest): Promise<UpdateAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAnalysisWithOptions(request, runtime);
  }

  /**
   * 修订解题步骤
   * 
   * @param request - UpdateStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStepResponse
   */
  async updateStepWithOptions(request: UpdateStepRequest, runtime: $dara.RuntimeOptions): Promise<UpdateStepResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentCode)) {
      body["ContentCode"] = request.contentCode;
    }

    if (!$dara.isNull(request.exerciseCode)) {
      body["ExerciseCode"] = request.exerciseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateStepResponse>(await this.callApi(params, req, runtime), new UpdateStepResponse({}));
    } else {
      return $dara.cast<UpdateStepResponse>(await this.execute(params, req, runtime), new UpdateStepResponse({}));
    }

  }

  /**
   * 修订解题步骤
   * 
   * @param request - UpdateStepRequest
   * @returns UpdateStepResponse
   */
  async updateStep(request: UpdateStepRequest): Promise<UpdateStepResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStepWithOptions(request, runtime);
  }

}
