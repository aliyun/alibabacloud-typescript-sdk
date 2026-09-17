// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionRequestParamsOutcome extends $dara.Model {
  /**
   * @remarks
   * Required and cannot be empty when Outcome is set to selected. Set this parameter to the optionId of an actual option in the event options. To submit an answer, select the option with kind=allow_once. Omit this parameter when Outcome is set to cancelled.
   * 
   * @example
   * option-from-event
   */
  optionId?: string;
  /**
   * @remarks
   * The outcome type. Valid values:
   * - selected: An option is selected.
   * - cancelled: The user explicitly cancels the interaction.
   * 
   * This parameter is required.
   * 
   * @example
   * selected
   */
  outcome?: string;
  static names(): { [key: string]: string } {
    return {
      optionId: 'OptionId',
      outcome: 'Outcome',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionId: 'string',
      outcome: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyAgentSessionRequestParams extends $dara.Model {
  /**
   * @remarks
   * The answers to ask_user_question. The key is a zero-based question index string, and the value is the answer text. Specify each answer for multiple questions. Omit this parameter for regular tool authorization or cancellation.
   * 
   * @example
   * {"0":"lakehouse_uat"}
   */
  answers?: { [key: string]: string };
  /**
   * @remarks
   * The outcome of the user interaction.
   * 
   * This parameter is required.
   */
  outcome?: ReplyAgentSessionRequestParamsOutcome;
  /**
   * @remarks
   * The ID of the current permission_request. Obtain this value from _qwen/notify.params.data.requestId in the original SSE. This is not a ToolCallId, HTTP RequestId, or the JSON-RPC Id of this request. The value cannot be . or ..
   * 
   * This parameter is required.
   * 
   * @example
   * permission-001
   */
  permissionRequestId?: string;
  /**
   * @remarks
   * The LSP session ID. Use the SessionId returned by the create session operation, not the daemon internal session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsp-session-001
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      outcome: 'Outcome',
      permissionRequestId: 'PermissionRequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      outcome: ReplyAgentSessionRequestParamsOutcome,
      permissionRequestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(this.answers) {
      $dara.Model.validateMap(this.answers);
    }
    if(this.outcome && typeof (this.outcome as any).validate === 'function') {
      (this.outcome as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC correlation ID for this reply request. The response returns this value as-is. This is different from PermissionRequestId.
   * 
   * This parameter is required.
   * 
   * @example
   * reply-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Fixed value: 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The user interaction reply parameters.
   * 
   * This parameter is required.
   */
  params?: ReplyAgentSessionRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: ReplyAgentSessionRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

