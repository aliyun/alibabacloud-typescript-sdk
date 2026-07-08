// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TopicSelection } from "./TopicSelection";


export class RunTopicSelectionMergeRequest extends $dara.Model {
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
  topics?: TopicSelection[];
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
      topics: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      topics: { 'type': 'array', 'itemType': TopicSelection },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

