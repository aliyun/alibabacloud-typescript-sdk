// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RunMarketingInformationExtractRequest extends $tea.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterials?: string[];
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterials: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterials: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractShrinkRequest extends $tea.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterialsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterialsShrink: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterialsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBody extends $tea.Model {
  /**
   * @example
   * {\\"TimeZone\\": \\"Asia/Shanghai\\", \\"DateTime\\": \\"2024-03-07T17:00:09+08:00\\"}
   */
  end?: boolean;
  header?: RunMarketingInformationExtractResponseBodyHeader;
  payload?: RunMarketingInformationExtractResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunMarketingInformationExtractResponseBodyHeader,
      payload: RunMarketingInformationExtractResponseBodyPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunMarketingInformationExtractResponseBody;
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
      body: RunMarketingInformationExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingRequest extends $tea.Model {
  customPrompt?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterial?: string;
  writingType?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      modelId: 'modelId',
      sourceMaterial: 'sourceMaterial',
      writingType: 'writingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      modelId: 'string',
      sourceMaterial: 'string',
      writingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBody extends $tea.Model {
  /**
   * @example
   * 2024-06-21T10:29:52+08:00
   */
  end?: boolean;
  header?: RunMarketingInformationWritingResponseBodyHeader;
  payload?: RunMarketingInformationWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunMarketingInformationWritingResponseBodyHeader,
      payload: RunMarketingInformationWritingResponseBodyPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunMarketingInformationWritingResponseBody;
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
      body: RunMarketingInformationWritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  learningSamples?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  referenceMaterials?: string[];
  styleFeature?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamples: 'learningSamples',
      referenceMaterials: 'referenceMaterials',
      styleFeature: 'styleFeature',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamples: { 'type': 'array', 'itemType': 'string' },
      referenceMaterials: { 'type': 'array', 'itemType': 'string' },
      styleFeature: 'string',
      writingTheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  learningSamplesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceMaterialsShrink?: string;
  styleFeature?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamplesShrink: 'learningSamples',
      referenceMaterialsShrink: 'referenceMaterials',
      styleFeature: 'styleFeature',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamplesShrink: 'string',
      referenceMaterialsShrink: 'string',
      styleFeature: 'string',
      writingTheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  /**
   * @example
   * {"event":"task-progress-start-generating","sessionId":"3cd10828-0e42-471c-8f1a-931cde20b035","taskId":"d3be9981-ca2d-4e17-bf31-1c0a628e9f99","traceId":"66bef4a7f5d61ff3c43f3b710574e175"}
   */
  header?: RunStyleWritingResponseBodyHeader;
  payload?: RunStyleWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunStyleWritingResponseBodyHeader,
      payload: RunStyleWritingResponseBodyPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunStyleWritingResponseBody;
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
      body: RunStyleWritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisRequest extends $tea.Model {
  generateOptions?: string[];
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      generateOptions: 'generateOptions',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      taskId: 'taskId',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      taskId: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisShrinkRequest extends $tea.Model {
  generateOptionsShrink?: string;
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      generateOptionsShrink: 'generateOptions',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      taskId: 'taskId',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateOptionsShrink: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      taskId: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBody extends $tea.Model {
  header?: RunVideoAnalysisResponseBodyHeader;
  payload?: RunVideoAnalysisResponseBodyPayload;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunVideoAnalysisResponseBodyHeader,
      payload: RunVideoAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunVideoAnalysisResponseBody;
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
      body: RunVideoAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F08C71C0-9399-548C-838B-1DA01DE211B0
   */
  requestId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hojazg0u9lvytjc17ebgzzj2u4zukgh122tfg7wj1e6a1vcowy1ewzinauxriai9atcr6r323mm9ddbr0bg5m61ij8hxnf8664tstlfkfol6m8luc4shs3gums7l46uauyy0xndqmhdjtdon6coyhb4x17bo762bg9e3tb2geufg2
   */
  sessionId?: string;
  /**
   * @example
   * 12826092918145
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayloadOutput extends $tea.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayload extends $tea.Model {
  output?: RunMarketingInformationExtractResponseBodyPayloadOutput;
  usage?: RunMarketingInformationExtractResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationExtractResponseBodyPayloadOutput,
      usage: RunMarketingInformationExtractResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 436BC5AE-0573-59D8-9803-6B5FDCD3BBA1
   */
  requestId?: string;
  /**
   * @example
   * uqubxgqzlnf4exfektij032lgb3yvix678p232n56387aqxdo4uutdt9wstqzovvz6j3ho7wnbgye785u79yn5q3euqmsvzmqdn3nmfq2826oscjvsi43kof8b8uxufpp1x97jjukk6jd3183hy8ni6hqpskuhuascpd
   */
  sessionId?: string;
  /**
   * @example
   * 13312125943232
   */
  taskId?: string;
  /**
   * @example
   * 213e20e517049392478441155e8b2a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayloadOutput extends $tea.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayload extends $tea.Model {
  output?: RunMarketingInformationWritingResponseBodyPayloadOutput;
  usage?: RunMarketingInformationWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationWritingResponseBodyPayloadOutput,
      usage: RunMarketingInformationWritingResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * task-progress-start-generating
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 0EB27AE3-CA53-5FAE-83C6-EE66CA4DF5DF
   */
  requestId?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayloadOutput extends $tea.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayload extends $tea.Model {
  output?: RunStyleWritingResponseBodyPayloadOutput;
  /**
   * @example
   * {
   *         "inputTokens": 1816,
   *         "outputTokens": 96,
   *         "totalTokens": 1912
   *     }
   */
  usage?: RunStyleWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleWritingResponseBodyPayloadOutput,
      usage: RunStyleWritingResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * InvalidParam
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * task-progress-start-generating
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * xxx
   */
  sessionId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $tea.Model {
  /**
   * @example
   * 10000
   */
  endTime?: number;
  /**
   * @example
   * 1000
   */
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions extends $tea.Model {
  /**
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @example
   * 00:01
   */
  endTimeFormat?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 00:01
   */
  startTimeFormat?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $tea.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $tea.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutput extends $tea.Model {
  videoAnalysisResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult;
  videoGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult;
  videoMindMappingGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult;
  videoTitleGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoAnalysisResult: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult,
      videoCaptionResult: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult,
      videoGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult,
      videoMindMappingGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult,
      videoTitleGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayload extends $tea.Model {
  output?: RunVideoAnalysisResponseBodyPayloadOutput;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoAnalysisResponseBodyPayloadOutput,
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
    this._endpoint = this.getEndpoint("quanmiaolightapp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 营销信息抽取服务
   * 
   * @param tmpReq - RunMarketingInformationExtractRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtractWithOptions(workspaceId: string, tmpReq: RunMarketingInformationExtractRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunMarketingInformationExtractResponse> {
    Util.validateModel(tmpReq);
    let request = new RunMarketingInformationExtractShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sourceMaterials)) {
      request.sourceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMaterials, "sourceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!Util.isUnset(request.extractType)) {
      body["extractType"] = request.extractType;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.sourceMaterialsShrink)) {
      body["sourceMaterials"] = request.sourceMaterialsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunMarketingInformationExtract",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runMarketingInformationExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunMarketingInformationExtractResponse>(await this.callApi(params, req, runtime), new RunMarketingInformationExtractResponse({}));
  }

  /**
   * 营销信息抽取服务
   * 
   * @param request - RunMarketingInformationExtractRequest
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtract(workspaceId: string, request: RunMarketingInformationExtractRequest): Promise<RunMarketingInformationExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationExtractWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWritingWithOptions(workspaceId: string, request: RunMarketingInformationWritingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunMarketingInformationWritingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.sourceMaterial)) {
      body["sourceMaterial"] = request.sourceMaterial;
    }

    if (!Util.isUnset(request.writingType)) {
      body["writingType"] = request.writingType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunMarketingInformationWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runMarketingInformationWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunMarketingInformationWritingResponse>(await this.callApi(params, req, runtime), new RunMarketingInformationWritingResponse({}));
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWriting(workspaceId: string, request: RunMarketingInformationWritingRequest): Promise<RunMarketingInformationWritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param tmpReq - RunStyleWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStyleWritingResponse
   */
  async runStyleWritingWithOptions(workspaceId: string, tmpReq: RunStyleWritingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunStyleWritingResponse> {
    Util.validateModel(tmpReq);
    let request = new RunStyleWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.learningSamples)) {
      request.learningSamplesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.learningSamples, "learningSamples", "json");
    }

    if (!Util.isUnset(tmpReq.referenceMaterials)) {
      request.referenceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceMaterials, "referenceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.learningSamplesShrink)) {
      body["learningSamples"] = request.learningSamplesShrink;
    }

    if (!Util.isUnset(request.referenceMaterialsShrink)) {
      body["referenceMaterials"] = request.referenceMaterialsShrink;
    }

    if (!Util.isUnset(request.styleFeature)) {
      body["styleFeature"] = request.styleFeature;
    }

    if (!Util.isUnset(request.writingTheme)) {
      body["writingTheme"] = request.writingTheme;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunStyleWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runStyleWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunStyleWritingResponse>(await this.callApi(params, req, runtime), new RunStyleWritingResponse({}));
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param request - RunStyleWritingRequest
   * @returns RunStyleWritingResponse
   */
  async runStyleWriting(workspaceId: string, request: RunStyleWritingRequest): Promise<RunStyleWritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runStyleWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-视频理解
   * 
   * @param tmpReq - RunVideoAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysisWithOptions(workspaceId: string, tmpReq: RunVideoAnalysisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunVideoAnalysisResponse> {
    Util.validateModel(tmpReq);
    let request = new RunVideoAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!Util.isUnset(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!Util.isUnset(request.modelCustomPromptTemplateId)) {
      body["modelCustomPromptTemplateId"] = request.modelCustomPromptTemplateId;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.originalSessionId)) {
      body["originalSessionId"] = request.originalSessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!Util.isUnset(request.videoModelCustomPromptTemplate)) {
      body["videoModelCustomPromptTemplate"] = request.videoModelCustomPromptTemplate;
    }

    if (!Util.isUnset(request.videoModelId)) {
      body["videoModelId"] = request.videoModelId;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["videoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunVideoAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runVideoAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunVideoAnalysisResponse>(await this.callApi(params, req, runtime), new RunVideoAnalysisResponse({}));
  }

  /**
   * 轻应用-视频理解
   * 
   * @param request - RunVideoAnalysisRequest
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysis(workspaceId: string, request: RunVideoAnalysisRequest): Promise<RunVideoAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runVideoAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

}
