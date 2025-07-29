// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisResponseBodyHeader extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-vl-max
   */
  modelId?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions extends $dara.Model {
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
   * 张三
   */
  speaker?: string;
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage;
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
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage,
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults extends $dara.Model {
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  reasonText?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage;
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
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage,
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * true
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRolesTimeIntervals extends $dara.Model {
  endTime?: number;
  startTime?: number;
  timestamp?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      timestamp: 'timestamp',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      timestamp: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRoles extends $dara.Model {
  isAutoRecognition?: boolean;
  ratio?: number;
  roleInfo?: string;
  roleName?: string;
  timeIntervals?: RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRolesTimeIntervals[];
  static names(): { [key: string]: string } {
    return {
      isAutoRecognition: 'isAutoRecognition',
      ratio: 'ratio',
      roleInfo: 'roleInfo',
      roleName: 'roleName',
      timeIntervals: 'timeIntervals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAutoRecognition: 'boolean',
      ratio: 'number',
      roleInfo: 'string',
      roleName: 'string',
      timeIntervals: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRolesTimeIntervals },
    };
  }

  validate() {
    if(Array.isArray(this.timeIntervals)) {
      $dara.Model.validateArray(this.timeIntervals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResult extends $dara.Model {
  videoRoles?: RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRoles[];
  static names(): { [key: string]: string } {
    return {
      videoRoles: 'videoRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoRoles: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResultVideoRoles },
    };
  }

  validate() {
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots extends $dara.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots extends $dara.Model {
  endTime?: number;
  endTimeFormat?: string;
  startTime?: number;
  startTimeFormat?: string;
  videoSnapshots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      videoSnapshots: 'videoSnapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      videoSnapshots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots },
    };
  }

  validate() {
    if(Array.isArray(this.videoSnapshots)) {
      $dara.Model.validateArray(this.videoSnapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult extends $dara.Model {
  videoShots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots[];
  static names(): { [key: string]: string } {
    return {
      videoShots: 'videoShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoShots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots },
    };
  }

  validate() {
    if(Array.isArray(this.videoShots)) {
      $dara.Model.validateArray(this.videoShots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage,
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

export class RunVideoAnalysisResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * http://
   */
  resultJsonFileUrl?: string;
  videoAnalysisResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult;
  videoGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult;
  videoGenerateResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult;
  videoRoleRecognitionResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResult;
  videoShotSnapshotResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult;
  videoTitleGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoRoleRecognitionResult: 'videoRoleRecognitionResult',
      videoShotSnapshotResult: 'videoShotSnapshotResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult,
      videoCaptionResult: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult,
      videoGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult,
      videoRoleRecognitionResult: RunVideoAnalysisResponseBodyPayloadOutputVideoRoleRecognitionResult,
      videoShotSnapshotResult: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult,
      videoTitleGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult,
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
    if(this.videoRoleRecognitionResult && typeof (this.videoRoleRecognitionResult as any).validate === 'function') {
      (this.videoRoleRecognitionResult as any).validate();
    }
    if(this.videoShotSnapshotResult && typeof (this.videoShotSnapshotResult as any).validate === 'function') {
      (this.videoShotSnapshotResult as any).validate();
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

export class RunVideoAnalysisResponseBodyPayloadUsage extends $dara.Model {
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

export class RunVideoAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunVideoAnalysisResponseBodyPayloadOutput;
  usage?: RunVideoAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoAnalysisResponseBodyPayloadOutput,
      usage: RunVideoAnalysisResponseBodyPayloadUsage,
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

export class RunVideoAnalysisResponseBody extends $dara.Model {
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

