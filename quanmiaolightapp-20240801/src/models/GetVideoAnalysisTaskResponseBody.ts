// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Deduct task already success,Please do not resubmit.token \\"369e8f2c-d283-424a-96c4-c83efe08c89e\\"
   */
  errorMessage?: string;
  /**
   * @example
   * TIMEOUT_CLOSE_ORDER
   */
  event?: string;
  /**
   * @example
   * xxx
   */
  eventInfo?: string;
  /**
   * @example
   * d5c38cf6-a4bf-4a57-a697-9f449926f0c9
   */
  sessionId?: string;
  /**
   * @example
   * 6e223291-729b-4e84-9271-c13ada1a776b
   */
  taskId?: string;
  /**
   * @example
   * 215045f817272303448235204efdef
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
  /**
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @example
   * 2024-10-05 06:22:00
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
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
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoShotAnalysisResults)) {
      $dara.Model.validateArray(this.videoShotAnalysisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions extends $dara.Model {
  /**
   * @example
   * 1736129678000
   */
  endTime?: number;
  /**
   * @example
   * 00:01
   */
  endTimeFormat?: string;
  /**
   * @example
   * 张三
   */
  speaker?: string;
  /**
   * @example
   * 00:01
   */
  startTime?: number;
  /**
   * @example
   * 2025-01-07 11:52:06
   */
  startTimeFormat?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      speaker: 'speaker',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      speaker: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions },
    };
  }

  validate() {
    if(Array.isArray(this.videoCaptions)) {
      $dara.Model.validateArray(this.videoCaptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      modelReduce: 'boolean',
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults extends $dara.Model {
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  reasonText?: string;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $dara.Model {
  childNodes?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
  childNodes?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
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
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoMindMappings)) {
      $dara.Model.validateArray(this.videoMindMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage;
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
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutput extends $dara.Model {
  resultJsonFileUrl?: string;
  videoAnalysisResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult;
  videoGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult;
  videoGenerateResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult;
  videoTitleGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult,
      videoCaptionResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult,
      videoGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult,
      videoTitleGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult,
    };
  }

  validate() {
    if(this.videoAnalysisResult && typeof (this.videoAnalysisResult as any).validate === 'function') {
      (this.videoAnalysisResult as any).validate();
    }
    if(this.videoCaptionResult && typeof (this.videoCaptionResult as any).validate === 'function') {
      (this.videoCaptionResult as any).validate();
    }
    if(this.videoGenerateResult && typeof (this.videoGenerateResult as any).validate === 'function') {
      (this.videoGenerateResult as any).validate();
    }
    if(Array.isArray(this.videoGenerateResults)) {
      $dara.Model.validateArray(this.videoGenerateResults);
    }
    if(this.videoMindMappingGenerateResult && typeof (this.videoMindMappingGenerateResult as any).validate === 'function') {
      (this.videoMindMappingGenerateResult as any).validate();
    }
    if(this.videoTitleGenerateResult && typeof (this.videoTitleGenerateResult as any).validate === 'function') {
      (this.videoTitleGenerateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayload extends $dara.Model {
  output?: GetVideoAnalysisTaskResponseBodyDataPayloadOutput;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetVideoAnalysisTaskResponseBodyDataPayloadOutput,
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataTaskRunInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  concurrentChargeEnable?: boolean;
  /**
   * @example
   * 1
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentChargeEnable: 'concurrentChargeEnable',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentChargeEnable: 'boolean',
      responseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/mjp-test-default.
   */
  errorMessage?: string;
  header?: GetVideoAnalysisTaskResponseBodyDataHeader;
  payload?: GetVideoAnalysisTaskResponseBodyDataPayload;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  taskRunInfo?: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      header: 'header',
      payload: 'payload',
      taskId: 'taskId',
      taskRunInfo: 'taskRunInfo',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      header: GetVideoAnalysisTaskResponseBodyDataHeader,
      payload: GetVideoAnalysisTaskResponseBodyDataPayload,
      taskId: 'string',
      taskRunInfo: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo,
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.taskRunInfo && typeof (this.taskRunInfo as any).validate === 'function') {
      (this.taskRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetVideoAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVideoAnalysisTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

