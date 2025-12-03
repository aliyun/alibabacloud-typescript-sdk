// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatMessagesRequestInputs extends $dara.Model {
  /**
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  customAgentId?: string;
  /**
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * UTC
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      language: 'Language',
      regionId: 'RegionId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      language: 'string',
      regionId: 'string',
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
   * This parameter is required.
   * 
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
  /**
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  inputs?: ChatMessagesRequestInputs;
  /**
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conversationId: 'ConversationId',
      inputs: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conversationId: 'string',
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

