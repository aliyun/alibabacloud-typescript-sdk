// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatAiAgentResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The original tool parameter key-value pairs.
   * 
   * @example
   * []
   */
  args?: any;
  /**
   * @remarks
   * The display name of the tool.
   * 
   * @example
   * “”
   */
  displayName?: string;
  /**
   * @remarks
   * The approval item ID, used when returning hitlDecisions.
   * 
   * @example
   * ""
   */
  hitlId?: string;
  /**
   * @remarks
   * The name of the intercepted tool.
   * 
   * @example
   * “”
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      displayName: 'displayName',
      hitlId: 'hitlId',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'any',
      displayName: 'string',
      hitlId: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatAiAgentResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 10
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 5
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 15
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatAiAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this text segment is complete (the last segment of the message it belongs to).
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The localized display name of the tool.
   * 
   * @example
   * ""
   */
  displayName?: string;
  /**
   * @remarks
   * The error message when the tool call fails (only when success is false).
   * 
   * @example
   * TIMEOUT
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error type when the tool call fails (only when success is false).
   * 
   * @example
   * TIMEOUT
   */
  errorType?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * -
   */
  event?: string;
  /**
   * @remarks
   * The tool input key-value pairs. The structure varies depending on the toolName.
   * 
   * @example
   * { "namespace": "vvp-dev-team", "jobId": "aa91ec66-...", "deploymentId": "b78aae4c-..." }
   */
  input?: any;
  /**
   * @remarks
   * The list of items pending approval.
   */
  items?: ChatAiAgentResponseBodyItems[];
  /**
   * @remarks
   * The error message (for error events).
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * The session ID for this conversation.
   * 
   * @example
   * 462E2707-590E-51B6-9940-0AB33044828B-deliverData-202603020950-WCSN4MEC8T
   */
  sessionId?: string;
  /**
   * @remarks
   * Indicates whether the tool calling invoke is successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The text output from the assistant.
   * 
   * @example
   * -
   */
  text?: string;
  /**
   * @remarks
   * The tool calling ID, used to pair the invoke call and result.
   * 
   * @example
   * "c1"
   */
  toolCallId?: string;
  /**
   * @remarks
   * The tool function name.
   * 
   * @example
   * "get_job_events"
   */
  toolName?: string;
  /**
   * @remarks
   * The token usage.
   */
  usage?: ChatAiAgentResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      completed: 'completed',
      displayName: 'displayName',
      errorMessage: 'errorMessage',
      errorType: 'errorType',
      event: 'event',
      input: 'input',
      items: 'items',
      message: 'message',
      sessionId: 'sessionId',
      success: 'success',
      text: 'text',
      toolCallId: 'toolCallId',
      toolName: 'toolName',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      displayName: 'string',
      errorMessage: 'string',
      errorType: 'string',
      event: 'string',
      input: 'any',
      items: { 'type': 'array', 'itemType': ChatAiAgentResponseBodyItems },
      message: 'string',
      sessionId: 'string',
      success: 'string',
      text: 'string',
      toolCallId: 'string',
      toolName: 'string',
      usage: ChatAiAgentResponseBodyUsage,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

