// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTopicSelectionMergeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Custom merge prompt
   * 
   * @example
   * 请从xxxx的角度，分析xxxx事件
   */
  prompt?: string;
  /**
   * @remarks
   * List of topic perspectives to merge
   * 
   * This parameter is required.
   */
  topicsShrink?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

