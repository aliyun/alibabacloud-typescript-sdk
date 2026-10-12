// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionRequestParamsOutcome extends $dara.Model {
  /**
   * @remarks
   * Required and cannot be empty when Outcome is selected. It takes the optionId of the actual option in the options of the current event (when submitting an answer, the option with kind=allow_once is usually selected). Omit this parameter when Outcome is cancelled.
   * 
   * @example
   * option-from-event
   */
  optionId?: string;
  /**
   * @remarks
   * The processing type. selected indicates that an option is selected, and cancelled indicates that the user explicitly cancels the interaction.
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
   * The answers to ask_user_question. The key is a 0-based string index of the question, and the value is the answer text. Fill in each question one by one for multiple questions. Omit this parameter for general tool authorization or cancellation.
   * 
   * @example
   * {"0":"lakehouse_uat"}
   */
  answers?: { [key: string]: string };
  /**
   * @remarks
   * The processing result of the user for the current interaction.
   * 
   * This parameter is required.
   */
  outcome?: ReplyAgentSessionRequestParamsOutcome;
  /**
   * @remarks
   * The identifier of the current permission_request. It is obtained from _qwen/notify.params.data.requestId of the original SSE, and is not ToolCallId, HTTP RequestId, or the current JSON-RPC Id. It cannot be . or ..
   * 
   * This parameter is required.
   * 
   * @example
   * permission-001
   */
  permissionRequestId?: string;
  /**
   * @remarks
   * The LSP session ID. Use the SessionId returned when creating the session, not the internal session ID of the daemon.
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
   * The JSON-RPC correlation ID for the current reply request. It is returned as-is in the response and is different from PermissionRequestId.
   * 
   * This parameter is required.
   * 
   * @example
   * reply-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Fixed to 2.0.
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

