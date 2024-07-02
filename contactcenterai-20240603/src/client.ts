// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RunCompletionRequest extends $tea.Model {
  dialogue?: RunCompletionRequestDialogue;
  fields?: RunCompletionRequestFields[];
  modelCode?: string;
  serviceInspection?: RunCompletionRequestServiceInspection;
  stream?: boolean;
  templateIds?: number[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
      fields: 'Fields',
      modelCode: 'ModelCode',
      serviceInspection: 'ServiceInspection',
      stream: 'Stream',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: RunCompletionRequestDialogue,
      fields: { 'type': 'array', 'itemType': RunCompletionRequestFields },
      modelCode: 'string',
      serviceInspection: RunCompletionRequestServiceInspection,
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionResponseBody extends $tea.Model {
  finishReason?: string;
  requestId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCompletionResponseBody;
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
      body: RunCompletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageRequest extends $tea.Model {
  messages?: RunCompletionMessageRequestMessages[];
  modelCode?: string;
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      modelCode: 'ModelCode',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunCompletionMessageRequestMessages },
      modelCode: 'string',
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageResponseBody extends $tea.Model {
  finishReason?: string;
  requestId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCompletionMessageResponseBody;
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
      body: RunCompletionMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestDialogueSentences extends $tea.Model {
  chatId?: string;
  role?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      role: 'Role',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      role: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestDialogue extends $tea.Model {
  sentences?: RunCompletionRequestDialogueSentences[];
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'Sentences',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': RunCompletionRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestFieldsEnumValues extends $tea.Model {
  desc?: string;
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      enumValue: 'EnumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestFields extends $tea.Model {
  code?: string;
  desc?: string;
  enumValues?: RunCompletionRequestFieldsEnumValues[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      enumValues: 'EnumValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': RunCompletionRequestFieldsEnumValues },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestServiceInspectionInspectionContents extends $tea.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestServiceInspection extends $tea.Model {
  inspectionContents?: RunCompletionRequestServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': RunCompletionRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageRequestMessages extends $tea.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
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
    this._endpoint = this.getEndpoint("contactcenterai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary CCAI服务面API
   *
   * @param request RunCompletionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunCompletionResponse
   */
  async runCompletionWithOptions(workspaceId: string, appId: string, request: RunCompletionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunCompletionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogue)) {
      body["Dialogue"] = request.dialogue;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!Util.isUnset(request.serviceInspection)) {
      body["ServiceInspection"] = request.serviceInspection;
    }

    if (!Util.isUnset(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!Util.isUnset(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCompletion",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/ccai/app/${OpenApiUtil.getEncodeParam(appId)}/completion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunCompletionResponse>(await this.callApi(params, req, runtime), new RunCompletionResponse({}));
  }

  /**
   * @summary CCAI服务面API
   *
   * @param request RunCompletionRequest
   * @return RunCompletionResponse
   */
  async runCompletion(workspaceId: string, appId: string, request: RunCompletionRequest): Promise<RunCompletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * @summary CCAI服务面API
   *
   * @param request RunCompletionMessageRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunCompletionMessageResponse
   */
  async runCompletionMessageWithOptions(workspaceId: string, appId: string, request: RunCompletionMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunCompletionMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!Util.isUnset(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!Util.isUnset(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCompletionMessage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/ccai/app/${OpenApiUtil.getEncodeParam(appId)}/completion_message`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunCompletionMessageResponse>(await this.callApi(params, req, runtime), new RunCompletionMessageResponse({}));
  }

  /**
   * @summary CCAI服务面API
   *
   * @param request RunCompletionMessageRequest
   * @return RunCompletionMessageResponse
   */
  async runCompletionMessage(workspaceId: string, appId: string, request: RunCompletionMessageRequest): Promise<RunCompletionMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionMessageWithOptions(workspaceId, appId, request, headers, runtime);
  }

}
