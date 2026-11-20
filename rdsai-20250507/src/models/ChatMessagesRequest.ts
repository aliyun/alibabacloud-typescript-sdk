// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file transfer method. Set this parameter to local_file when referencing an uploaded file, and provide the UploadFileId at the same time.
   * 
   * @example
   * local_file
   */
  transferMethod?: string;
  /**
   * @remarks
   * The attachment type. A value of image indicates an image. The actual supported types are determined by the file upload configuration of the application.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The identifier of the uploaded file. The ContextDB management agent can use the UploadFileId returned by the current workspace knowledge base.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  uploadFileId?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * https://other-general-huadong1.oss-cn-hangzhou.aliyuncs.com/uploadWidget/BirthCertification_0.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      transferMethod: 'TransferMethod',
      type: 'Type',
      uploadFileId: 'UploadFileId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferMethod: 'string',
      type: 'string',
      uploadFileId: 'string',
      url: 'string',
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
   * Specifies whether to enable the deep thinking mode.
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
   * The tool approval call ID for resuming execution. Pass this parameter after the console completes all decisions for the current approval round to continue the interrupted ChatMessage loop. Do not pass this parameter for regular conversations.
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
   * The tool approval mode for the current conversation. Valid values: read_only (read-only, rejects write tools), manual (write tools require manual approval), and auto (automatically determined by the approval sub-agent; escalated to manual approval when needs_human is returned). Passing this parameter updates the approval mode for the current conversation.
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
   * The event output type. Valid values: inline and separate. Default value: inline. When set to inline, tool calling invoke events, child node events, and document events are unified into the answer field of the event = message. When set to separate, tool calling invoke events, child node events, and document events have their own respective events.
   * 
   * @example
   * inline
   */
  eventMode?: string;
  /**
   * @remarks
   * The list of attachments included in the current conversation round. References uploaded files by using UploadFileId.
   */
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
   * @example
   * Instance rm-bp14as9914vd3**** disk usage, and whether capacity expansion is required
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

