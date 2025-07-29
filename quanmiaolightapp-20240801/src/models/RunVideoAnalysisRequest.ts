// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisRequestFrameSampleMethod extends $dara.Model {
  interval?: number;
  methodName?: string;
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

export class RunVideoAnalysisRequestTextProcessTasks extends $dara.Model {
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

export class RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions extends $dara.Model {
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

export class RunVideoAnalysisRequestVideoCaptionInfo extends $dara.Model {
  /**
   * @example
   * oss:// | http://
   */
  videoCaptionFileUrl?: string;
  videoCaptions?: RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      videoCaptionFileUrl: 'videoCaptionFileUrl',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCaptionFileUrl: 'string',
      videoCaptions: { 'type': 'array', 'itemType': RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions },
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

export class RunVideoAnalysisRequestVideoRolesTimeIntervals extends $dara.Model {
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

export class RunVideoAnalysisRequestVideoRoles extends $dara.Model {
  isAutoRecognition?: boolean;
  roleInfo?: string;
  roleName?: string;
  timeIntervals?: RunVideoAnalysisRequestVideoRolesTimeIntervals[];
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
      timeIntervals: { 'type': 'array', 'itemType': RunVideoAnalysisRequestVideoRolesTimeIntervals },
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

export class RunVideoAnalysisRequest extends $dara.Model {
  autoRoleRecognitionVideoUrl?: string;
  excludeGenerateOptions?: string[];
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethod?: RunVideoAnalysisRequestFrameSampleMethod;
  generateOptions?: string[];
  /**
   * @example
   * english
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
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  textProcessTasks?: RunVideoAnalysisRequestTextProcessTasks[];
  videoCaptionInfo?: RunVideoAnalysisRequestVideoCaptionInfo;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  videoRoles?: RunVideoAnalysisRequestVideoRoles[];
  videoShotFaceIdentityCount?: number;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      autoRoleRecognitionVideoUrl: 'autoRoleRecognitionVideoUrl',
      excludeGenerateOptions: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethod: 'frameSampleMethod',
      generateOptions: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      taskId: 'taskId',
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
      excludeGenerateOptions: { 'type': 'array', 'itemType': 'string' },
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethod: RunVideoAnalysisRequestFrameSampleMethod,
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      taskId: 'string',
      textProcessTasks: { 'type': 'array', 'itemType': RunVideoAnalysisRequestTextProcessTasks },
      videoCaptionInfo: RunVideoAnalysisRequestVideoCaptionInfo,
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRoles: { 'type': 'array', 'itemType': RunVideoAnalysisRequestVideoRoles },
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

