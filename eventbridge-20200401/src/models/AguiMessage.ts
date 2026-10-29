// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AguiMessageMetadataAttachments extends $dara.Model {
  /**
   * @remarks
   * The name of the extended data.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:12345:eventhouse/system-rocketmq/namespace/rmq-cn-xxx/table/order
   */
  name?: string;
  /**
   * @remarks
   * The type of the extended data.
   * 
   * @example
   * inner-resource/event-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageMetadata extends $dara.Model {
  /**
   * @remarks
   * The extended data.
   */
  attachments?: AguiMessageMetadataAttachments;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: AguiMessageMetadataAttachments,
    };
  }

  validate() {
    if(this.attachments && typeof (this.attachments as any).validate === 'function') {
      (this.attachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * The parameters of the tool invocation method.
   * 
   * @example
   * {}
   */
  arguments?: string;
  /**
   * @remarks
   * The name of the tool invocation method.
   * 
   * @example
   * discoverMetadata
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageToolCalls extends $dara.Model {
  /**
   * @remarks
   * The tool invocation method.
   */
  function?: AguiMessageToolCallsFunction;
  /**
   * @remarks
   * The tool invocation ID.
   * 
   * @example
   * call_xxx
   */
  id?: string;
  /**
   * @remarks
   * The tool invocation type.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: AguiMessageToolCallsFunction,
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessage extends $dara.Model {
  /**
   * @remarks
   * The text content of the message.
   * 
   * @example
   * Based on your question, I will query the number of events over the past 7 days..
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the message.
   * 
   * @example
   * msg_123456_a1b2c3d4
   */
  id?: string;
  /**
   * @remarks
   * The extended metadata.
   */
  metadata?: AguiMessageMetadata;
  /**
   * @remarks
   * The reasoning content.
   * 
   * @example
   * "The user asked me to execute ***"
   */
  reasoning?: string;
  /**
   * @remarks
   * The role of the message.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The associated tool invocation ID.
   * 
   * @example
   * call_xxx
   */
  toolCallId?: string;
  /**
   * @remarks
   * The tool invocation list.
   */
  toolCalls?: AguiMessageToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      metadata: 'Metadata',
      reasoning: 'Reasoning',
      role: 'Role',
      toolCallId: 'ToolCallId',
      toolCalls: 'ToolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      metadata: AguiMessageMetadata,
      reasoning: 'string',
      role: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': AguiMessageToolCalls },
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

