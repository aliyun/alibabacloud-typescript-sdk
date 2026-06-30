// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatMessagesRequestInputs extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  customAgentId?: string;
  enableThinking?: string;
  /**
   * @remarks
   * The language of the conversation.
   * 
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  thinkEffort?: string;
  /**
   * @remarks
   * The time zone. Default value: **Asia/Shanghai**.
   * 
   * @example
   * UTC
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      enableThinking: 'EnableThinking',
      language: 'Language',
      regionId: 'RegionId',
      thinkEffort: 'ThinkEffort',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      enableThinking: 'string',
      language: 'string',
      regionId: 'string',
      thinkEffort: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  eventMode?: string;
  /**
   * @remarks
   * The inputs for the task.
   */
  inputs?: ChatMessagesRequestInputs;
  /**
   * @remarks
   * The ID of the parent message.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The content of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 实例rm-bp14as9914vd3**** 磁盘使用率，是否需要进行扩容
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      eventMode: 'EventMode',
      inputs: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      eventMode: 'string',
      inputs: ChatMessagesRequestInputs,
      parentMessageId: 'string',
      query: 'string',
    };
  }

  validate() {
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

