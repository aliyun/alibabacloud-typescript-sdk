// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Shot segmentation threshold. A smaller value increases sensitivity. Valid range is 1 to 10. Default value is 3.
   * 
   * @example
   * 3.0
   */
  adaptiveThreshold?: number;
  /**
   * @remarks
   * The prompt for video understanding.
   * 
   * @example
   * 重点理解视频中的风景信息
   */
  anlysisPrompt?: string;
  /**
   * @remarks
   * The similarity threshold for character recognition.
   * 
   * @example
   * 0.7
   */
  faceIdentitySimilarityMinScore?: number;
  /**
   * @remarks
   * Information about the reference video.
   */
  referenceVideoShrink?: string;
  /**
   * @remarks
   * Removes captions from the material.
   */
  removeSubtitle?: boolean;
  /**
   * @remarks
   * The structure of the video editing materials.
   * 
   * This parameter is required.
   */
  sourceVideosShrink?: string;
  /**
   * @remarks
   * The time interval for video understanding shots.
   * 
   * @example
   * 默认1
   */
  splitInterval?: number;
  /**
   * @remarks
   * Job name
   * 
   * @example
   * task001
   */
  taskName?: string;
  /**
   * @remarks
   * Task Type
   * 
   * @example
   * type001
   */
  taskType?: string;
  /**
   * @remarks
   * Face information of the roles.
   */
  videoRolesShrink?: string;
  /**
   * @remarks
   * The number of frames sampled from a single shot for character matching.
   * 
   * @example
   * 2
   */
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * [The ID of the Alibaba Cloud Model Studio workspace.](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

