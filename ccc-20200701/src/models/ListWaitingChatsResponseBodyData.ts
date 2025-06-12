// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWaitingChatsResponseBodyDataMessages } from "./ListWaitingChatsResponseBodyDataMessages";
import { ListWaitingChatsResponseBodyDataUserList } from "./ListWaitingChatsResponseBodyDataUserList";


export class ListWaitingChatsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 843073c2-*****-49fb-a616-738ddddfebdc
   */
  accessChannelId?: string;
  /**
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @example
   * false
   */
  beingAssigned?: boolean;
  /**
   * @example
   * $23086709$EAUNIT
   */
  chatConversationId?: string;
  /**
   * @example
   * 1718868572094
   */
  enqueueTime?: number;
  /**
   * @example
   * chat-434537064047960064
   */
  jobId?: string;
  messages?: ListWaitingChatsResponseBodyDataMessages[];
  skillGroupId?: string;
  userList?: ListWaitingChatsResponseBodyDataUserList[];
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      beingAssigned: 'BeingAssigned',
      chatConversationId: 'ChatConversationId',
      enqueueTime: 'EnqueueTime',
      jobId: 'JobId',
      messages: 'Messages',
      skillGroupId: 'SkillGroupId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      beingAssigned: 'boolean',
      chatConversationId: 'string',
      enqueueTime: 'number',
      jobId: 'string',
      messages: { 'type': 'array', 'itemType': ListWaitingChatsResponseBodyDataMessages },
      skillGroupId: 'string',
      userList: { 'type': 'array', 'itemType': ListWaitingChatsResponseBodyDataUserList },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

