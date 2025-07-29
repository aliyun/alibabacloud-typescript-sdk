// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAnalysisTaskShrinkRequest extends $dara.Model {
  autoRoleRecognitionVideoUrl?: string;
  /**
   * @example
   * 1
   */
  deduplicationId?: string;
  excludeGenerateOptionsShrink?: string;
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethodShrink?: string;
  generateOptionsShrink?: string;
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
  textProcessTasksShrink?: string;
  videoCaptionInfoShrink?: string;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max-latest
   */
  videoModelId?: string;
  videoRolesShrink?: string;
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
      excludeGenerateOptionsShrink: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethodShrink: 'frameSampleMethod',
      generateOptionsShrink: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
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
      autoRoleRecognitionVideoUrl: 'string',
      deduplicationId: 'string',
      excludeGenerateOptionsShrink: 'string',
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethodShrink: 'string',
      generateOptionsShrink: 'string',
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
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

