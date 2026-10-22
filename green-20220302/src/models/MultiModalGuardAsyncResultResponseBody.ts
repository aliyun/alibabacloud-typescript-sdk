// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetailResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, which ranges from 0 to 100 and is accurate to two decimal places.
   * 
   * @example
   * 90
   */
  confidence?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * Drugs
   */
  description?: string;
  /**
   * @remarks
   * The extended information of the detection result.
   * 
   * @example
   * {}
   */
  ext?: any;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * drug
   */
  label?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - high: High risk. If a custom dictionary is hit, the risk level defaults to high.
   * - medium: Medium risk.
   * - low: Low risk.
   * - none: No risk detected.
   * 
   * @example
   * high
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      ext: 'Ext',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      ext: 'any',
      label: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetail extends $dara.Model {
  /**
   * @remarks
   * The risk level. Valid values:
   * - high: High risk. If a custom dictionary is hit, the risk level defaults to high.
   * - medium: Medium risk.
   * - low: Low risk.
   * - none: No risk detected.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The list of detection results.
   */
  result?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetailResult[];
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The detection type. Valid values:
   * - contentModeration: Content compliance detection.
   * - promptAttack: Prompt attack detection.
   * - sensitiveData: Sensitive content detection.
   * - modelHallucination: Model hallucination detection.
   * - maliciousFile: Malicious file detection.
   * 
   * @example
   * contentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      result: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetailResult },
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetails extends $dara.Model {
  /**
   * @remarks
   * The detection details.
   */
  detail?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetail[];
  /**
   * @remarks
   * The end time of the segment, in seconds.
   * 
   * @example
   * 20
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the segment, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The transcribed text of the audio segment.
   * 
   * @example
   * The weather is really nice today
   */
  text?: string;
  /**
   * @remarks
   * The temporary URL of the audio segment file.
   * 
   * @example
   * http://xxxx.abc.wav
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      endTime: 'EndTime',
      startTime: 'StartTime',
      suggestion: 'Suggestion',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetail },
      endTime: 'number',
      startTime: 'number',
      suggestion: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * The segment details.
   */
  sliceDetails?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetails[];
  /**
   * @remarks
   * The number of segments.
   * 
   * @example
   * 2
   */
  sliceNum?: number;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      sliceDetails: 'SliceDetails',
      sliceNum: 'SliceNum',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sliceDetails: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetails },
      sliceNum: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sliceDetails)) {
      $dara.Model.validateArray(this.sliceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetailResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, which ranges from 0 to 100 and is accurate to two decimal places.
   * 
   * @example
   * 80
   */
  confidence?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * Advertisement
   */
  description?: string;
  /**
   * @remarks
   * The extended information of the detection result.
   * 
   * @example
   * {}
   */
  ext?: any;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - high: High risk. If a custom dictionary is hit, the risk level defaults to high.
   * - medium: Medium risk.
   * - low: Low risk.
   * - none: No risk detected.
   * 
   * @example
   * loose
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      ext: 'Ext',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      ext: 'any',
      label: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetail extends $dara.Model {
  /**
   * @remarks
   * The risk level. Valid values:
   * - high: High risk. If a custom dictionary is hit, the risk level defaults to high.
   * - medium: Medium risk.
   * - low: Low risk.
   * - none: No risk detected.
   * 
   * @example
   * low
   */
  level?: string;
  /**
   * @remarks
   * The detection result.
   */
  result?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetailResult[];
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * watch
   */
  suggestion?: string;
  /**
   * @remarks
   * The detection type. Valid values:
   * - contentModeration: Content compliance detection.
   * - promptAttack: Prompt attack detection.
   * - sensitiveData: Sensitive content detection.
   * - modelHallucination: Model hallucination detection.
   * - maliciousFile: Malicious file detection.
   * 
   * @example
   * contentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      result: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetailResult },
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataFrameResultFrames extends $dara.Model {
  /**
   * @remarks
   * The list of detection results.
   */
  detail?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetail[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 401
   */
  errorCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * parameter invalid
   */
  errorMsg?: string;
  /**
   * @remarks
   * The offset of the captured frame.
   * 
   * @example
   * 1.5
   */
  offset?: number;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The absolute timestamp, in milliseconds.
   * 
   * @example
   * 1684559739000
   */
  timestamp?: number;
  /**
   * @remarks
   * The temporary URL of the segment.
   * 
   * @example
   * https://xxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      offset: 'Offset',
      suggestion: 'Suggestion',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetail },
      errorCode: 'number',
      errorMsg: 'string',
      offset: 'number',
      suggestion: 'string',
      timestamp: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataFrameResult extends $dara.Model {
  /**
   * @remarks
   * The frame detection results.
   */
  frames?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFrames[];
  /**
   * @remarks
   * The number of segments.
   * 
   * @example
   * 2
   */
  sliceNum?: number;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      sliceNum: 'SliceNum',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataFrameResultFrames },
      sliceNum: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyDataRedactResult extends $dara.Model {
  /**
   * @remarks
   * The processing type.
   * 
   * @example
   * faceBlur
   */
  processType?: string;
  /**
   * @remarks
   * The name of the OSS bucket that stores the masked object.
   * 
   * @example
   * test_bucket
   */
  resultOssBucketName?: string;
  /**
   * @remarks
   * The name of the masked OSS object.
   * 
   * @example
   * video.mp4
   */
  resultOssObjectName?: string;
  /**
   * @remarks
   * The region of the masked OSS object.
   * 
   * @example
   * cn-shanghai
   */
  resultOssRegionId?: string;
  /**
   * @remarks
   * The temporary URL of the masked object.
   * 
   * @example
   * https://XX
   */
  resultUrl?: string;
  /**
   * @remarks
   * The original URL.
   * 
   * @example
   * https://XX
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      processType: 'ProcessType',
      resultOssBucketName: 'ResultOssBucketName',
      resultOssObjectName: 'ResultOssObjectName',
      resultOssRegionId: 'ResultOssRegionId',
      resultUrl: 'ResultUrl',
      sourceUrl: 'SourceUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processType: 'string',
      resultOssBucketName: 'string',
      resultOssObjectName: 'string',
      resultOssRegionId: 'string',
      resultUrl: 'string',
      sourceUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The segmented results of audio moderation.
   */
  audioResult?: MultiModalGuardAsyncResultResponseBodyDataAudioResult;
  /**
   * @remarks
   * The value of dataId passed in the API request. If dataId is not passed in the request, this field is not returned.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The list of video frame capture results.
   */
  frameResult?: MultiModalGuardAsyncResultResponseBodyDataFrameResult;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @remarks
   * The data masking result.
   */
  redactResult?: MultiModalGuardAsyncResultResponseBodyDataRedactResult;
  /**
   * @remarks
   * The suggestion. Valid values:
   * 
   * - block: Block the content.
   * - pass: Allow the content.
   * - watch: Review the content.
   * - mask: Mask the content.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * vi_f_xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      dataId: 'DataId',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
      redactResult: 'RedactResult',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: MultiModalGuardAsyncResultResponseBodyDataAudioResult,
      dataId: 'string',
      frameResult: MultiModalGuardAsyncResultResponseBodyDataFrameResult,
      liveId: 'string',
      redactResult: MultiModalGuardAsyncResultResponseBodyDataRedactResult,
      suggestion: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.audioResult && typeof (this.audioResult as any).validate === 'function') {
      (this.audioResult as any).validate();
    }
    if(this.frameResult && typeof (this.frameResult as any).validate === 'function') {
      (this.frameResult as any).validate();
    }
    if(this.redactResult && typeof (this.redactResult as any).validate === 'function') {
      (this.redactResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: MultiModalGuardAsyncResultResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: MultiModalGuardAsyncResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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

