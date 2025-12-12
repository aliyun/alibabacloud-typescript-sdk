// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoShrinkRequest extends $dara.Model {
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
  splitInterval?: number;
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
      anlysisPrompt: 'AnlysisPrompt',
      faceIdentitySimilarityMinScore: 'FaceIdentitySimilarityMinScore',
      referenceVideoShrink: 'ReferenceVideo',
      removeSubtitle: 'RemoveSubtitle',
      sourceVideosShrink: 'SourceVideos',
      splitInterval: 'SplitInterval',
      videoRolesShrink: 'VideoRoles',
      videoShotFaceIdentityCount: 'VideoShotFaceIdentityCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anlysisPrompt: 'string',
      faceIdentitySimilarityMinScore: 'number',
      referenceVideoShrink: 'string',
      removeSubtitle: 'boolean',
      sourceVideosShrink: 'string',
      splitInterval: 'number',
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

