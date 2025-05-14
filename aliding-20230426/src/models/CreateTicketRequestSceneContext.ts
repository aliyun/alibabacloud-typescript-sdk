// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTicketRequestSceneContextGroupMsgs } from "./CreateTicketRequestSceneContextGroupMsgs";


export class CreateTicketRequestSceneContext extends $dara.Model {
  groupMsgs?: CreateTicketRequestSceneContextGroupMsgs[];
  /**
   * @example
   * cidDKVAOW8yVWPEN+WZfwSSAQ==
   */
  openConversationId?: string;
  relevantorUserIds?: string[];
  /**
   * @example
   * 42674892
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      groupMsgs: 'GroupMsgs',
      openConversationId: 'OpenConversationId',
      relevantorUserIds: 'RelevantorUserIds',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMsgs: { 'type': 'array', 'itemType': CreateTicketRequestSceneContextGroupMsgs },
      openConversationId: 'string',
      relevantorUserIds: { 'type': 'array', 'itemType': 'string' },
      topicId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupMsgs)) {
      $dara.Model.validateArray(this.groupMsgs);
    }
    if(Array.isArray(this.relevantorUserIds)) {
      $dara.Model.validateArray(this.relevantorUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

