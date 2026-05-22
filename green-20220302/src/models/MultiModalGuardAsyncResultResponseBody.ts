// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetailResult extends $dara.Model {
  /**
   * @example
   * 90
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * {}
   */
  ext?: any;
  /**
   * @example
   * drug
   */
  label?: string;
  /**
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
   * @example
   * high
   */
  level?: string;
  result?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetailResult[];
  /**
   * @example
   * block
   */
  suggestion?: string;
  /**
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
  detail?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetailsDetail[];
  /**
   * @example
   * 30
   */
  endTime?: number;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * block
   */
  suggestion?: string;
  text?: string;
  /**
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
  sliceDetails?: MultiModalGuardAsyncResultResponseBodyDataAudioResultSliceDetails[];
  /**
   * @example
   * 2
   */
  sliceNum?: number;
  /**
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
   * @example
   * 80
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * {}
   */
  ext?: any;
  /**
   * @example
   * ad
   */
  label?: string;
  /**
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
   * @example
   * low
   */
  level?: string;
  result?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetailResult[];
  /**
   * @example
   * watch
   */
  suggestion?: string;
  /**
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
  detail?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetail[];
  /**
   * @example
   * 1.5
   */
  offset?: number;
  /**
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @example
   * 1684559739000
   */
  timestamp?: number;
  /**
   * @example
   * https://xxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      offset: 'Offset',
      suggestion: 'Suggestion',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': MultiModalGuardAsyncResultResponseBodyDataFrameResultFramesDetail },
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
  frames?: MultiModalGuardAsyncResultResponseBodyDataFrameResultFrames[];
  /**
   * @example
   * 2
   */
  sliceNum?: number;
  /**
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

export class MultiModalGuardAsyncResultResponseBodyData extends $dara.Model {
  audioResult?: MultiModalGuardAsyncResultResponseBodyDataAudioResult;
  /**
   * @example
   * data1234
   */
  dataId?: string;
  frameResult?: MultiModalGuardAsyncResultResponseBodyDataFrameResult;
  /**
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @example
   * pass
   */
  suggestion?: string;
  /**
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalGuardAsyncResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: MultiModalGuardAsyncResultResponseBodyData;
  /**
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

