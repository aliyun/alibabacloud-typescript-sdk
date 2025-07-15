// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingChatsResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * c361765f-******-4e07-b81c-4b5d9183fac6
   */
  senderId?: string;
  senderType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      senderId: 'SenderId',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      senderId: 'string',
      senderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingChatsResponseBodyDataUserList extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * c361765f-******-4e07-b81c-4b5d9183fac6
   */
  userId?: string;
  userName?: string;
  /**
   * @example
   * CUSTOMER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListWaitingChatsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListWaitingChatsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListWaitingChatsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

