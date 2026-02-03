// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadataKeyValues extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadata extends $dara.Model {
  keyValues?: SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadataKeyValues[];
  static names(): { [key: string]: string } {
    return {
      keyValues: 'keyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyValues: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadataKeyValues },
    };
  }

  validate() {
    if(Array.isArray(this.keyValues)) {
      $dara.Model.validateArray(this.keyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestAddDocumentParamDocument extends $dara.Model {
  categoryUuid?: string;
  docId?: string;
  extend1?: string;
  extend2?: string;
  extend3?: string;
  metadata?: SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadata;
  tags?: string[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'categoryUuid',
      docId: 'docId',
      extend1: 'extend1',
      extend2: 'extend2',
      extend3: 'extend3',
      metadata: 'metadata',
      tags: 'tags',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      metadata: SubmitVideoAnalysisTaskRequestAddDocumentParamDocumentMetadata,
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestAddDocumentParam extends $dara.Model {
  datasetId?: number;
  datasetName?: string;
  document?: SubmitVideoAnalysisTaskRequestAddDocumentParamDocument;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      datasetName: 'datasetName',
      document: 'document',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      document: SubmitVideoAnalysisTaskRequestAddDocumentParamDocument,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  addDocumentParam?: SubmitVideoAnalysisTaskRequestAddDocumentParam;
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
  /**
   * @example
   * fixDuration
   */
  splitType?: string;
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
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  videoUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      addDocumentParam: 'addDocumentParam',
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
      splitType: 'splitType',
      textProcessTasks: 'textProcessTasks',
      videoCaptionInfo: 'videoCaptionInfo',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRoles: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
      videoUrls: 'videoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentParam: SubmitVideoAnalysisTaskRequestAddDocumentParam,
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
      splitType: 'string',
      textProcessTasks: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestTextProcessTasks },
      videoCaptionInfo: SubmitVideoAnalysisTaskRequestVideoCaptionInfo,
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRoles: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoRoles },
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.addDocumentParam && typeof (this.addDocumentParam as any).validate === 'function') {
      (this.addDocumentParam as any).validate();
    }
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
    if(Array.isArray(this.videoUrls)) {
      $dara.Model.validateArray(this.videoUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

