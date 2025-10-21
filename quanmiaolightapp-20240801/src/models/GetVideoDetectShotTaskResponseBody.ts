// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDetectShotTaskResponseBodyDataHeader extends $dara.Model {
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

export class GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResultVideoRecognitionResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  asr?: string;
  /**
   * @example
   * 1748483740000
   */
  endTime?: number;
  /**
   * @example
   * xxx
   */
  ocr?: string;
  /**
   * @example
   * 1758108425000
   */
  startTime?: number;
  /**
   * @example
   * xxx
   */
  vl?: string;
  static names(): { [key: string]: string } {
    return {
      asr: 'asr',
      endTime: 'endTime',
      ocr: 'ocr',
      startTime: 'startTime',
      vl: 'vl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asr: 'string',
      endTime: 'number',
      ocr: 'string',
      startTime: 'number',
      vl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  reasonText?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  videoParts?: { [key: string]: string }[];
  videoRecognitionResult?: GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResultVideoRecognitionResult[];
  static names(): { [key: string]: string } {
    return {
      reasonText: 'reasonText',
      text: 'text',
      videoParts: 'videoParts',
      videoRecognitionResult: 'videoRecognitionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonText: 'string',
      text: 'string',
      videoParts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      videoRecognitionResult: { 'type': 'array', 'itemType': GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResultVideoRecognitionResult },
    };
  }

  validate() {
    if(Array.isArray(this.videoParts)) {
      $dara.Model.validateArray(this.videoParts);
    }
    if(Array.isArray(this.videoRecognitionResult)) {
      $dara.Model.validateArray(this.videoRecognitionResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDetectShotTaskResponseBodyDataPayloadOutput extends $dara.Model {
  videoSplitResult?: GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResult;
  static names(): { [key: string]: string } {
    return {
      videoSplitResult: 'videoSplitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoSplitResult: GetVideoDetectShotTaskResponseBodyDataPayloadOutputVideoSplitResult,
    };
  }

  validate() {
    if(this.videoSplitResult && typeof (this.videoSplitResult as any).validate === 'function') {
      (this.videoSplitResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDetectShotTaskResponseBodyDataPayloadUsage extends $dara.Model {
  /**
   * @example
   * 36
   */
  inputTokens?: number;
  /**
   * @example
   * 13
   */
  outputTokens?: number;
  /**
   * @example
   * 49
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

export class GetVideoDetectShotTaskResponseBodyDataPayload extends $dara.Model {
  output?: GetVideoDetectShotTaskResponseBodyDataPayloadOutput;
  usage?: GetVideoDetectShotTaskResponseBodyDataPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetVideoDetectShotTaskResponseBodyDataPayloadOutput,
      usage: GetVideoDetectShotTaskResponseBodyDataPayloadUsage,
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

export class GetVideoDetectShotTaskResponseBodyDataTaskRunInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  concurrentChargeEnable?: boolean;
  /**
   * @example
   * 1000
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

export class GetVideoDetectShotTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn.
   */
  errorMessage?: string;
  header?: GetVideoDetectShotTaskResponseBodyDataHeader;
  payload?: GetVideoDetectShotTaskResponseBodyDataPayload;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  taskRunInfo?: GetVideoDetectShotTaskResponseBodyDataTaskRunInfo;
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
      header: GetVideoDetectShotTaskResponseBodyDataHeader,
      payload: GetVideoDetectShotTaskResponseBodyDataPayload,
      taskId: 'string',
      taskRunInfo: GetVideoDetectShotTaskResponseBodyDataTaskRunInfo,
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

export class GetVideoDetectShotTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetVideoDetectShotTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
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
      data: GetVideoDetectShotTaskResponseBodyData,
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

