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
   * The custom agent ID for the user.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  customAgentId?: string;
  /**
   * @remarks
   * Specifies whether to enable deep thinking mode.
   * 
   * @example
   * true
   */
  enableThinking?: string;
  /**
   * @remarks
   * The conversation language.
   * 
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * qwen3.7-max
   */
  modelId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The tool approval call ID for resuming execution. Pass this parameter after all decisions in the current approval round are completed in the console to continue the interrupted ChatMessage Loop. Do not pass this parameter for regular conversations.
   * 
   * @example
   * call-example
   */
  resumeCallId?: string;
  /**
   * @remarks
   * The thinking depth.
   * 
   * @example
   * default
   */
  thinkEffort?: string;
  /**
   * @remarks
   * The time zone. Default value: **Asia/Shanghai**.
   * 
   * @example
   * UTC
   */
  timezone?: string;
  /**
   * @remarks
   * The tool approval mode for the current conversation. Valid values: read_only (read-only, write tools are rejected), manual (write tools require manual approval), and auto (the approval sub-agent automatically determines the action. If the result is needs_human, the approval is escalated to manual review). When this parameter is passed, the approval mode of the current conversation is updated.
   * 
   * @example
   * manual
   */
  toolApprovalMode?: string;
  /**
   * @remarks
   * The ContextDB workspace ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      enableThinking: 'EnableThinking',
      language: 'Language',
      modelId: 'ModelId',
      regionId: 'RegionId',
      resumeCallId: 'ResumeCallId',
      thinkEffort: 'ThinkEffort',
      timezone: 'Timezone',
      toolApprovalMode: 'ToolApprovalMode',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      enableThinking: 'string',
      language: 'string',
      modelId: 'string',
      regionId: 'string',
      resumeCallId: 'string',
      thinkEffort: 'string',
      timezone: 'string',
      toolApprovalMode: 'string',
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
   * The event output type. Valid values: inline and separate. Default value: inline. When set to inline, tool invocation events, sub-node events, and document events are included in the answer field of the event = message response. When set to separate, tool invocation events, sub-node events, and document events each have their own event.
   * 
   * @example
   * inline
   */
  eventMode?: string;
  files?: ChatMessagesRequestFiles[];
  /**
   * @remarks
   * The task inputs.
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
   * @example
   * Check the disk usage of instance rm-bp14as9914vd3**** and whether storage expansion is needed
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

