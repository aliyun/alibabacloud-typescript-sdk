// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAnalysisTaskRequestFrameSampleMethod extends $dara.Model {
  /**
   * @example
   * 2
   */
  interval?: number;
  /**
   * @example
   * standard
   */
  methodName?: string;
  /**
   * @example
   * 768
   */
  pixel?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      methodName: 'methodName',
      pixel: 'pixel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      methodName: 'string',
      pixel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestTextProcessTasks extends $dara.Model {
  modelCustomPromptTemplate?: string;
  modelCustomPromptTemplateId?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions extends $dara.Model {
  /**
   * @example
   * 10000
   */
  endTime?: number;
  /**
   * @example
   * 张三
   */
  speaker?: string;
  /**
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @example
   * 你好
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      speaker: 'speaker',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      speaker: 'string',
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

export class SubmitVideoAnalysisTaskRequestVideoCaptionInfo extends $dara.Model {
  /**
   * @example
   * oss:// | http://
   */
  videoCaptionFileUrl?: string;
  videoCaptions?: SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      videoCaptionFileUrl: 'videoCaptionFileUrl',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCaptionFileUrl: 'string',
      videoCaptions: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions },
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

export class SubmitVideoAnalysisTaskRequestVideoRolesTimeIntervals extends $dara.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestVideoRoles extends $dara.Model {
  isAutoRecognition?: boolean;
  roleInfo?: string;
  roleName?: string;
  timeIntervals?: SubmitVideoAnalysisTaskRequestVideoRolesTimeIntervals[];
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      isAutoRecognition: 'isAutoRecognition',
      roleInfo: 'roleInfo',
      roleName: 'roleName',
      timeIntervals: 'timeIntervals',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAutoRecognition: 'boolean',
      roleInfo: 'string',
      roleName: 'string',
      timeIntervals: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoRolesTimeIntervals },
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.timeIntervals)) {
      $dara.Model.validateArray(this.timeIntervals);
    }
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequest extends $dara.Model {
  autoRoleRecognitionVideoUrl?: string;
  /**
   * @example
   * 1
   */
  deduplicationId?: string;
  excludeGenerateOptions?: string[];
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethod?: SubmitVideoAnalysisTaskRequestFrameSampleMethod;
  generateOptions?: string[];
  /**
   * @example
   * chinese
   */
  language?: string;
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
   * 2
   */
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  textProcessTasks?: SubmitVideoAnalysisTaskRequestTextProcessTasks[];
  videoCaptionInfo?: SubmitVideoAnalysisTaskRequestVideoCaptionInfo;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max-latest
   */
  videoModelId?: string;
  videoRoles?: SubmitVideoAnalysisTaskRequestVideoRoles[];
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      autoRoleRecognitionVideoUrl: 'autoRoleRecognitionVideoUrl',
      deduplicationId: 'deduplicationId',
      excludeGenerateOptions: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethod: 'frameSampleMethod',
      generateOptions: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      textProcessTasks: 'textProcessTasks',
      videoCaptionInfo: 'videoCaptionInfo',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRoles: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRoleRecognitionVideoUrl: 'string',
      deduplicationId: 'string',
      excludeGenerateOptions: { 'type': 'array', 'itemType': 'string' },
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethod: SubmitVideoAnalysisTaskRequestFrameSampleMethod,
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      textProcessTasks: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestTextProcessTasks },
      videoCaptionInfo: SubmitVideoAnalysisTaskRequestVideoCaptionInfo,
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRoles: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoRoles },
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeGenerateOptions)) {
      $dara.Model.validateArray(this.excludeGenerateOptions);
    }
    if(this.frameSampleMethod && typeof (this.frameSampleMethod as any).validate === 'function') {
      (this.frameSampleMethod as any).validate();
    }
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.textProcessTasks)) {
      $dara.Model.validateArray(this.textProcessTasks);
    }
    if(this.videoCaptionInfo && typeof (this.videoCaptionInfo as any).validate === 'function') {
      (this.videoCaptionInfo as any).validate();
    }
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

