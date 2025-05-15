// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitVideoAnalysisTaskRequestFrameSampleMethod } from "./SubmitVideoAnalysisTaskRequestFrameSampleMethod";
import { SubmitVideoAnalysisTaskRequestTextProcessTasks } from "./SubmitVideoAnalysisTaskRequestTextProcessTasks";
import { SubmitVideoAnalysisTaskRequestVideoCaptionInfo } from "./SubmitVideoAnalysisTaskRequestVideoCaptionInfo";
import { SubmitVideoAnalysisTaskRequestVideoRoles } from "./SubmitVideoAnalysisTaskRequestVideoRoles";


export class SubmitVideoAnalysisTaskRequest extends $dara.Model {
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

