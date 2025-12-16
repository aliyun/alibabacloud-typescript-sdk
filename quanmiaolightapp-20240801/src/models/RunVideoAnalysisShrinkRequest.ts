// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisShrinkRequest extends $dara.Model {
  addDocumentParamShrink?: string;
  autoRoleRecognitionVideoUrl?: string;
  excludeGenerateOptionsShrink?: string;
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethodShrink?: string;
  generateOptionsShrink?: string;
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
   * fixDuration
   */
  splitType?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  textProcessTasksShrink?: string;
  videoCaptionInfoShrink?: string;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  videoRolesShrink?: string;
  videoShotFaceIdentityCount?: number;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      addDocumentParamShrink: 'addDocumentParam',
      autoRoleRecognitionVideoUrl: 'autoRoleRecognitionVideoUrl',
      excludeGenerateOptionsShrink: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethodShrink: 'frameSampleMethod',
      generateOptionsShrink: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      splitType: 'splitType',
      taskId: 'taskId',
      textProcessTasksShrink: 'textProcessTasks',
      videoCaptionInfoShrink: 'videoCaptionInfo',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRolesShrink: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentParamShrink: 'string',
      autoRoleRecognitionVideoUrl: 'string',
      excludeGenerateOptionsShrink: 'string',
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethodShrink: 'string',
      generateOptionsShrink: 'string',
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      splitType: 'string',
      taskId: 'string',
      textProcessTasksShrink: 'string',
      videoCaptionInfoShrink: 'string',
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRolesShrink: 'string',
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

