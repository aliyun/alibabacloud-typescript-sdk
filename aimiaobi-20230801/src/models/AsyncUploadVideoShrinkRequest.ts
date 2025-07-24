// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoShrinkRequest extends $dara.Model {
  anlysisPrompt?: string;
  referenceVideoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceVideosShrink?: string;
  splitInterval?: number;
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
      referenceVideoShrink: 'ReferenceVideo',
      sourceVideosShrink: 'SourceVideos',
      splitInterval: 'SplitInterval',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anlysisPrompt: 'string',
      referenceVideoShrink: 'string',
      sourceVideosShrink: 'string',
      splitInterval: 'number',
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

