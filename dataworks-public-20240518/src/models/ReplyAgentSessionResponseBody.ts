// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionResponseBodyJsonRpcResponseError extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC error code.
   * 
   * @example
   * -32601
   */
  code?: number;
  /**
   * @remarks
   * The optional additional error information. The content depends on the error type.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * DAEMON_PERMISSION_UNAVAILABLE
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * DataAgent daemon permission reply is not enabled
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      errorCode: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyAgentSessionResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the daemon accepted the reply. A value of true indicates that the daemon accepted the reply. A value of false indicates that the reply was not accepted. Possible reasons include an unknown request, an already processed request, an expired request, or a nonexistent session. You cannot determine the specific reason from this value.
   * 
   * @example
   * true
   */
  accepted?: boolean;
  static names(): { [key: string]: string } {
    return {
      accepted: 'Accepted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyAgentSessionResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC fault information. For example, DAEMON_PERMISSION_UNAVAILABLE is returned when the daemon reply feature is not enabled.
   */
  error?: ReplyAgentSessionResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The JSON-RPC correlation ID for this reply request.
   * 
   * @example
   * reply-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The reply processing result. This only indicates whether the reply was accepted, not whether the original task has completed.
   */
  result?: ReplyAgentSessionResponseBodyJsonRpcResponseResult;
  /**
   * @remarks
   * The response time. This is a UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1789549200000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      result: 'Result',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: ReplyAgentSessionResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: ReplyAgentSessionResponseBodyJsonRpcResponseResult,
      timestamp: 'number',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response. Returns Result on success or Error on protocol errors.
   */
  jsonRpcResponse?: ReplyAgentSessionResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The request ID for this call, which can be used for troubleshooting.
   * 
   * @example
   * request-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: ReplyAgentSessionResponseBodyJsonRpcResponse,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jsonRpcResponse && typeof (this.jsonRpcResponse as any).validate === 'function') {
      (this.jsonRpcResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

