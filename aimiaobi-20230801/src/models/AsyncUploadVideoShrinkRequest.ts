// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoShrinkRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  adaptiveThreshold?: number;
  /**
   * @example
   * 重点理解视频中的风景信息
   */
  anlysisPrompt?: string;
  /**
   * @example
   * 0.7
   */
  faceIdentitySimilarityMinScore?: number;
  referenceVideoShrink?: string;
  removeSubtitle?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceVideosShrink?: string;
  /**
   * @example
   * 默认1
   */
  splitInterval?: number;
  /**
   * @example
   * task001
   */
  taskName?: string;
  /**
   * @example
   * type001
   */
  taskType?: string;
  videoRolesShrink?: string;
  /**
   * @example
   * 2
   */
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptiveThreshold: 'AdaptiveThreshold',
      anlysisPrompt: 'AnlysisPrompt',
      faceIdentitySimilarityMinScore: 'FaceIdentitySimilarityMinScore',
      referenceVideoShrink: 'ReferenceVideo',
      removeSubtitle: 'RemoveSubtitle',
      sourceVideosShrink: 'SourceVideos',
      splitInterval: 'SplitInterval',
      taskName: 'TaskName',
      taskType: 'TaskType',
      videoRolesShrink: 'VideoRoles',
      videoShotFaceIdentityCount: 'VideoShotFaceIdentityCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveThreshold: 'number',
      anlysisPrompt: 'string',
      faceIdentitySimilarityMinScore: 'number',
      referenceVideoShrink: 'string',
      removeSubtitle: 'boolean',
      sourceVideosShrink: 'string',
      splitInterval: 'number',
      taskName: 'string',
      taskType: 'string',
      videoRolesShrink: 'string',
      videoShotFaceIdentityCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

