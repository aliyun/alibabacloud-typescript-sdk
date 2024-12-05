// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AnalyzeConversationRequest extends $tea.Model {
  categoryTags?: AnalyzeConversationRequestCategoryTags[];
  /**
   * @remarks
   * This parameter is required.
   */
  dialogue?: AnalyzeConversationRequestDialogue;
  examples?: AnalyzeConversationRequestExamples[];
  fields?: AnalyzeConversationRequestFields[];
  /**
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resultTypes?: string[];
  sceneName?: string;
  serviceInspection?: AnalyzeConversationRequestServiceInspection;
  sourceCallerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  timeConstraintList?: string[];
  userProfiles?: AnalyzeConversationRequestUserProfiles[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      resultTypes: 'resultTypes',
      sceneName: 'sceneName',
      serviceInspection: 'serviceInspection',
      sourceCallerUid: 'sourceCallerUid',
      stream: 'stream',
      timeConstraintList: 'timeConstraintList',
      userProfiles: 'userProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': AnalyzeConversationRequestCategoryTags },
      dialogue: AnalyzeConversationRequestDialogue,
      examples: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamples },
      fields: { 'type': 'array', 'itemType': AnalyzeConversationRequestFields },
      modelCode: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      sceneName: 'string',
      serviceInspection: AnalyzeConversationRequestServiceInspection,
      sourceCallerUid: 'string',
      stream: 'boolean',
      timeConstraintList: { 'type': 'array', 'itemType': 'string' },
      userProfiles: { 'type': 'array', 'itemType': AnalyzeConversationRequestUserProfiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidUser.NotFound
   */
  errorCode?: string;
  errorInfo?: string;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  inputTokens?: string;
  outputTokens?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorInfo: 'errorInfo',
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalyzeConversationResponseBody;
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
      body: AnalyzeConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageRequest extends $tea.Model {
  imageUrls?: string[];
  resultTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageUrls: 'imageUrls',
      resultTypes: 'resultTypes',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageResponseBody extends $tea.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 1000
   */
  inputTokens?: string;
  /**
   * @example
   * 2000
   */
  outputTokens?: string;
  /**
   * @example
   * 9*****-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  /**
   * @example
   * 3000
   */
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalyzeImageResponseBody;
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
      body: AnalyzeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $tea.Model {
  dialogue?: CreateTaskRequestDialogue;
  examples?: CreateTaskRequestExamples;
  fields?: CreateTaskRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  resultTypes?: string[];
  serviceInspection?: CreateTaskRequestServiceInspection;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  taskType?: string;
  templateIds?: string[];
  transcription?: CreateTaskRequestTranscription;
  static names(): { [key: string]: string } {
    return {
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      resultTypes: 'resultTypes',
      serviceInspection: 'serviceInspection',
      taskType: 'taskType',
      templateIds: 'templateIds',
      transcription: 'transcription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: CreateTaskRequestDialogue,
      examples: CreateTaskRequestExamples,
      fields: { 'type': 'array', 'itemType': CreateTaskRequestFields },
      modelCode: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      serviceInspection: CreateTaskRequestServiceInspection,
      taskType: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      transcription: CreateTaskRequestTranscription,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  data?: CreateTaskResponseBodyData;
  /**
   * @example
   * 9F1DB065-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTaskResponseBodyData,
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
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
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultRequest extends $tea.Model {
  requiredFieldList?: string[];
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldList: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultShrinkRequest extends $tea.Model {
  requiredFieldListShrink?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldListShrink: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldListShrink: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $tea.Model {
  data?: GetTaskResultResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTaskResultResponseBodyData,
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResultResponseBody;
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
      body: GetTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogue?: RunCompletionRequestDialogue;
  fields?: RunCompletionRequestFields[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  serviceInspection?: RunCompletionRequestServiceInspection;
  /**
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      totalTokens: 'string',
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
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunCompletionMessageRequestMessages[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      totalTokens: 'string',
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

export class AnalyzeConversationRequestCategoryTags extends $tea.Model {
  tagDesc?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestDialogueSentences extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestDialogue extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: AnalyzeConversationRequestDialogueSentences[];
  /**
   * @example
   * session-01
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'sentences',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': AnalyzeConversationRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestExamplesSentences extends $tea.Model {
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      role: 'role',
      text: 'text',
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

export class AnalyzeConversationRequestExamples extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: AnalyzeConversationRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamplesSentences },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestFieldsEnumValues extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
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

export class AnalyzeConversationRequestFields extends $tea.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  enumValues?: AnalyzeConversationRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': AnalyzeConversationRequestFieldsEnumValues },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestServiceInspectionInspectionContents extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
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

export class AnalyzeConversationRequestServiceInspection extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: AnalyzeConversationRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': AnalyzeConversationRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeConversationRequestUserProfiles extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestDialogueSentences extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestDialogue extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestDialogueSentences[];
  /**
   * @example
   * session-01
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'sentences',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestExamplesSentences extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestExamples extends $tea.Model {
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestExamplesSentences },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestFieldsEnumValues extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
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

export class CreateTaskRequestFields extends $tea.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValues?: CreateTaskRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': CreateTaskRequestFieldsEnumValues },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestServiceInspectionInspectionContents extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
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

export class CreateTaskRequestServiceInspection extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: CreateTaskRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': CreateTaskRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestTranscription extends $tea.Model {
  /**
   * @example
   * 1
   */
  autoSplit?: number;
  /**
   * @example
   * 1
   */
  clientChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sss.mp3
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  serviceChannel?: number;
  serviceChannelKeywords?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://1111.com/sss.mp3
   */
  voiceFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      autoSplit: 'autoSplit',
      clientChannel: 'clientChannel',
      fileName: 'fileName',
      serviceChannel: 'serviceChannel',
      serviceChannelKeywords: 'serviceChannelKeywords',
      voiceFileUrl: 'voiceFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSplit: 'number',
      clientChannel: 'number',
      fileName: 'string',
      serviceChannel: 'number',
      serviceChannelKeywords: { 'type': 'array', 'itemType': 'string' },
      voiceFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataAsrResult extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      emotionValue: 'emotionValue',
      end: 'end',
      role: 'role',
      speechRate: 'speechRate',
      words: 'words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyData extends $tea.Model {
  asrResult?: GetTaskResultResponseBodyDataAsrResult[];
  taskErrorMessage?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  /**
   * @example
   * FINISH
   */
  taskStatus?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      asrResult: 'asrResult',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetTaskResultResponseBodyDataAsrResult },
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionRequestDialogueSentences extends $tea.Model {
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * d25zc9c7004f8dad2b454d
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  desc?: string;
  enumValues?: RunCompletionRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
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
   * user
   */
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
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversationWithOptions(workspaceId: string, appId: string, request: AnalyzeConversationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AnalyzeConversationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryTags)) {
      body["categoryTags"] = request.categoryTags;
    }

    if (!Util.isUnset(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!Util.isUnset(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!Util.isUnset(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["sceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!Util.isUnset(request.sourceCallerUid)) {
      body["sourceCallerUid"] = request.sourceCallerUid;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!Util.isUnset(request.timeConstraintList)) {
      body["timeConstraintList"] = request.timeConstraintList;
    }

    if (!Util.isUnset(request.userProfiles)) {
      body["userProfiles"] = request.userProfiles;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AnalyzeConversation",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/ccai/app/${OpenApiUtil.getEncodeParam(appId)}/analyze_conversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AnalyzeConversationResponse>(await this.callApi(params, req, runtime), new AnalyzeConversationResponse({}));
  }

  /**
   * 根据类型调用大模型
   * 
   * @param request - AnalyzeConversationRequest
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversation(workspaceId: string, appId: string, request: AnalyzeConversationRequest): Promise<AnalyzeConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeConversationWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeImageResponse
   */
  async analyzeImageWithOptions(workspaceId: string, appId: string, request: AnalyzeImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AnalyzeImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrls)) {
      body["imageUrls"] = request.imageUrls;
    }

    if (!Util.isUnset(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AnalyzeImage",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/ccai/app/${OpenApiUtil.getEncodeParam(appId)}/analyzeImage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AnalyzeImageResponse>(await this.callApi(params, req, runtime), new AnalyzeImageResponse({}));
  }

  /**
   * 图片分析
   * 
   * @param request - AnalyzeImageRequest
   * @returns AnalyzeImageResponse
   */
  async analyzeImage(workspaceId: string, appId: string, request: AnalyzeImageRequest): Promise<AnalyzeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeImageWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(workspaceId: string, appId: string, request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogue)) {
      body["dialogue"] = request.dialogue;
    }

    if (!Util.isUnset(request.examples)) {
      body["examples"] = request.examples;
    }

    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!Util.isUnset(request.resultTypes)) {
      body["resultTypes"] = request.resultTypes;
    }

    if (!Util.isUnset(request.serviceInspection)) {
      body["serviceInspection"] = request.serviceInspection;
    }

    if (!Util.isUnset(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!Util.isUnset(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    if (!Util.isUnset(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/ccai/app/${OpenApiUtil.getEncodeParam(appId)}/createTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建语音文件调用llm任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(workspaceId: string, appId: string, request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param tmpReq - GetTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResultResponse
   */
  async getTaskResultWithOptions(tmpReq: GetTaskResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResultResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTaskResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.requiredFieldList)) {
      request.requiredFieldListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requiredFieldList, "requiredFieldList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requiredFieldListShrink)) {
      query["requiredFieldList"] = request.requiredFieldListShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskResult",
      version: "2024-06-03",
      protocol: "HTTPS",
      pathname: `/ccai/app/getTaskResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
  }

  /**
   * 语音文件调用大模型获取结果
   * 
   * @param request - GetTaskResultRequest
   * @returns GetTaskResultResponse
   */
  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionResponse
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
   * CCAI服务面API
   * 
   * @param request - RunCompletionRequest
   * @returns RunCompletionResponse
   */
  async runCompletion(workspaceId: string, appId: string, request: RunCompletionRequest): Promise<RunCompletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionWithOptions(workspaceId, appId, request, headers, runtime);
  }

  /**
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
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
   * CCAI服务面API
   * 
   * @param request - RunCompletionMessageRequest
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessage(workspaceId: string, appId: string, request: RunCompletionMessageRequest): Promise<RunCompletionMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runCompletionMessageWithOptions(workspaceId, appId, request, headers, runtime);
  }

}
