// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisRequestFrameSampleMethod } from "./RunVideoAnalysisRequestFrameSampleMethod";
import { RunVideoAnalysisRequestTextProcessTasks } from "./RunVideoAnalysisRequestTextProcessTasks";
import { RunVideoAnalysisRequestVideoRoles } from "./RunVideoAnalysisRequestVideoRoles";


export class RunVideoAnalysisRequest extends $dara.Model {
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
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

