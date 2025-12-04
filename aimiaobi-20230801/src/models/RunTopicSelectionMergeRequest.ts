// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TopicSelection } from "./TopicSelection";


export class RunTopicSelectionMergeRequest extends $dara.Model {
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  topics?: TopicSelection[];
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

