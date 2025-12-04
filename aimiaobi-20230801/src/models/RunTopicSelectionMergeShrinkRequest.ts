// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTopicSelectionMergeShrinkRequest extends $dara.Model {
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  topicsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      topicsShrink: 'string',
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

