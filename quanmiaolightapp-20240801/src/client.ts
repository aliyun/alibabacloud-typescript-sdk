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

export class RunScriptContinueRequest extends $tea.Model {
  /**
   * @example
   * 一队全副武装的执法人员和消防员闯入了一间明显已被遗弃多日、门窗紧闭并用胶带封死的公寓，面对着屋内令人作呕的恶臭和门厅里的混乱场面，他们似乎在寻找某种隐藏的真相或危险源，而一封日期为16号的信件成为了揭开谜团的关键线索，随着便衣探员深入探索，一系列封闭的房间暗示着这里曾发生过不为人知的秘密事件。
   */
  scriptSummary?: string;
  /**
   * @example
   * 悬疑，都市，惊悚
   */
  scriptTypeKeyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 门厅一片狼藉。朝向天井的窗户开着。公寓门突然被撞开了。\n一名便衣探员、两名穿制服的警察和几位消防员———也身着工作服———进来，四下张望。他们都戴着手套以及盖住口鼻的面罩。在他们身后，门房和他妻子也挤进门厅。他们都捂着鼻子。门房的另一只手里拿着一叠信件和促销广告单。他们身后，跟着一位女邻居。\n便衣探员（对门房和邻居）：请在外面等候。\n他向一名警察示意，警察正忙着把好奇的旁观者请出门外。\n警察（对门房，指着那一叠信件）：最近的一封是哪天的？\n门房（查对信件）：最近的一封似乎是16号的......等一下......\n便衣探员想打开左侧的门，却是徒劳。门用胶带封上了。\n便衣探员（对消防员）：你来试一下好吗？\n消防员摆弄门的时候，便衣探员进了卧室隔壁的餐厅。他迅速打开窗，转身，想经过对开门进左侧的房间。这两扇门也锁着，门缝被贴上了胶带。他右转进入起居室，也打开了窗户
   */
  userProvidedContent?: string;
  static names(): { [key: string]: string } {
    return {
      scriptSummary: 'scriptSummary',
      scriptTypeKeyword: 'scriptTypeKeyword',
      userProvidedContent: 'userProvidedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptSummary: 'string',
      scriptTypeKeyword: 'string',
      userProvidedContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunScriptContinueResponseBodyHeader;
  payload?: RunScriptContinueResponseBodyPayload;
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
      header: RunScriptContinueResponseBodyHeader,
      payload: RunScriptContinueResponseBodyPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptContinueResponseBody;
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
      body: RunScriptContinueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningRequest extends $tea.Model {
  /**
   * @example
   * 故事尽可能狗血
   */
  additionalNote?: string;
  dialogueInScene?: boolean;
  plotConflict?: boolean;
  /**
   * @example
   * 都市战神
   */
  scriptName?: string;
  /**
   * @example
   * 3
   */
  scriptShotCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 在一个宁静的小镇上，每个家庭都在同一天收到一个神秘的、没有标记的包裹。
   */
  scriptSummary?: string;
  /**
   * @example
   * 现代，都市，爱情，玄幻
   */
  scriptTypeKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      additionalNote: 'additionalNote',
      dialogueInScene: 'dialogueInScene',
      plotConflict: 'plotConflict',
      scriptName: 'scriptName',
      scriptShotCount: 'scriptShotCount',
      scriptSummary: 'scriptSummary',
      scriptTypeKeyword: 'scriptTypeKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalNote: 'string',
      dialogueInScene: 'boolean',
      plotConflict: 'boolean',
      scriptName: 'string',
      scriptShotCount: 'number',
      scriptSummary: 'string',
      scriptTypeKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunScriptPlanningResponseBodyHeader;
  payload?: RunScriptPlanningResponseBodyPayload;
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
      header: RunScriptPlanningResponseBodyHeader,
      payload: RunScriptPlanningResponseBodyPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptPlanningResponseBody;
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
      body: RunScriptPlanningResponseBody,
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

export class RunScriptContinueResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
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

export class RunScriptContinueResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
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

export class RunScriptContinueResponseBodyPayloadUsage extends $tea.Model {
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

export class RunScriptContinueResponseBodyPayload extends $tea.Model {
  output?: RunScriptContinueResponseBodyPayloadOutput;
  usage?: RunScriptContinueResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptContinueResponseBodyPayloadOutput,
      usage: RunScriptContinueResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
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

export class RunScriptPlanningResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
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

export class RunScriptPlanningResponseBodyPayloadUsage extends $tea.Model {
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

export class RunScriptPlanningResponseBodyPayload extends $tea.Model {
  output?: RunScriptPlanningResponseBodyPayloadOutput;
  usage?: RunScriptPlanningResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptPlanningResponseBodyPayloadOutput,
      usage: RunScriptPlanningResponseBodyPayloadUsage,
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
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptContinueResponse
   */
  async runScriptContinueWithOptions(workspaceId: string, request: RunScriptContinueRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunScriptContinueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!Util.isUnset(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    if (!Util.isUnset(request.userProvidedContent)) {
      body["userProvidedContent"] = request.userProvidedContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunScriptContinue",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runScriptContinue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunScriptContinueResponse>(await this.callApi(params, req, runtime), new RunScriptContinueResponse({}));
  }

  /**
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @returns RunScriptContinueResponse
   */
  async runScriptContinue(workspaceId: string, request: RunScriptContinueRequest): Promise<RunScriptContinueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptContinueWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanningWithOptions(workspaceId: string, request: RunScriptPlanningRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunScriptPlanningResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalNote)) {
      body["additionalNote"] = request.additionalNote;
    }

    if (!Util.isUnset(request.dialogueInScene)) {
      body["dialogueInScene"] = request.dialogueInScene;
    }

    if (!Util.isUnset(request.plotConflict)) {
      body["plotConflict"] = request.plotConflict;
    }

    if (!Util.isUnset(request.scriptName)) {
      body["scriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.scriptShotCount)) {
      body["scriptShotCount"] = request.scriptShotCount;
    }

    if (!Util.isUnset(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!Util.isUnset(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunScriptPlanning",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/quanmiao/lightapp/runScriptPlanning`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunScriptPlanningResponse>(await this.callApi(params, req, runtime), new RunScriptPlanningResponse({}));
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanning(workspaceId: string, request: RunScriptPlanningRequest): Promise<RunScriptPlanningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptPlanningWithOptions(workspaceId, request, headers, runtime);
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
