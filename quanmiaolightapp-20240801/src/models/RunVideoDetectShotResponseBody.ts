// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoDetectShotResponseBodyHeader extends $dara.Model {
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
   * task-finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 14d15c78c4c34d428212f4d923d4ede1
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * 3b5287b317477940746851672dca0c
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

export class RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResultVideoRecognitionResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  asr?: string;
  /**
   * @example
   * 1755742611000
   */
  endTime?: number;
  /**
   * @example
   * xxx
   */
  ocr?: string;
  /**
   * @example
   * 1756433675000
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

export class RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResult extends $dara.Model {
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
  videoRecognitionResult?: RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResultVideoRecognitionResult[];
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
      videoRecognitionResult: { 'type': 'array', 'itemType': RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResultVideoRecognitionResult },
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

export class RunVideoDetectShotResponseBodyPayloadOutput extends $dara.Model {
  videoSplitResult?: RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResult;
  static names(): { [key: string]: string } {
    return {
      videoSplitResult: 'videoSplitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoSplitResult: RunVideoDetectShotResponseBodyPayloadOutputVideoSplitResult,
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

export class RunVideoDetectShotResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 4546
   */
  inputTokens?: number;
  /**
   * @example
   * 820
   */
  outputTokens?: number;
  /**
   * @example
   * 5366
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

export class RunVideoDetectShotResponseBodyPayload extends $dara.Model {
  output?: RunVideoDetectShotResponseBodyPayloadOutput;
  usage?: RunVideoDetectShotResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoDetectShotResponseBodyPayloadOutput,
      usage: RunVideoDetectShotResponseBodyPayloadUsage,
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

export class RunVideoDetectShotResponseBody extends $dara.Model {
  header?: RunVideoDetectShotResponseBodyHeader;
  payload?: RunVideoDetectShotResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58868FD6-53D7-5ACD-80F7-854C8EA256EF
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
      header: RunVideoDetectShotResponseBodyHeader,
      payload: RunVideoDetectShotResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

