// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatMessagesRequestFiles extends $dara.Model {
  transferMethod?: string;
  type?: string;
  uploadFileId?: string;
  static names(): { [key: string]: string } {
    return {
      transferMethod: 'TransferMethod',
      type: 'Type',
      uploadFileId: 'UploadFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferMethod: 'string',
      type: 'string',
      uploadFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatMessagesRequestInputs extends $dara.Model {
  /**
   * @remarks
   * The user-specific agent ID.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  customAgentId?: string;
  enableThinking?: string;
  /**
   * @remarks
   * The conversation language.
   * 
   * @example
   * zh-cn
   */
  language?: string;
  modelId?: string;
  /**
   * @remarks
   * The region ID.
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
      modelId: 'ModelId',
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
      modelId: 'string',
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
   * The conversation ID.
   * 
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  /**
   * @remarks
   * The event output type. Valid values: inline and separate. Default value: inline. When set to inline, tool invocation events, sub-node events, and document events are included in the answer field of event = message. When set to separate, tool invocation events, sub-node events, and document events each have their own event.
   */
  eventMode?: string;
  files?: ChatMessagesRequestFiles[];
  /**
   * @remarks
   * The task input.
   */
  inputs?: ChatMessagesRequestInputs;
  /**
   * @remarks
   * The parent message ID.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The query content.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance rm-bp14as9914vd3**** disk usage, whether expansion is needed
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      eventMode: 'EventMode',
      files: 'Files',
      inputs: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      eventMode: 'string',
      files: { 'type': 'array', 'itemType': ChatMessagesRequestFiles },
      inputs: ChatMessagesRequestInputs,
      parentMessageId: 'string',
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

