// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSessionTitleResponseBodyJsonRpcResponseError extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC error code.
   * 
   * @example
   * 500
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
   * 0x4883300000000019
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The session does not exist or the current account is not authorized to access it. Return to the session list and select another session
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

export class UpdateAgentSessionTitleResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent session whose title is modified. It corresponds to the SessionId in the request.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  sessionId?: string;
  /**
   * @remarks
   * The saved session title after modification. Leading and trailing whitespace characters are removed.
   * 
   * @example
   * New title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentSessionTitleResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC error message. This field is not returned upon success.
   */
  error?: UpdateAgentSessionTitleResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The JSON-RPC correlation ID for the current request. It is passed by the caller and returned as is.
   * 
   * @example
   * updateagentsessiontitle-rpc-001
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
   * The operation result.
   */
  result?: UpdateAgentSessionTitleResponseBodyJsonRpcResponseResult;
  /**
   * @remarks
   * The response time. It is a UNIX timestamp in milliseconds.
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
      error: UpdateAgentSessionTitleResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: UpdateAgentSessionTitleResponseBodyJsonRpcResponseResult,
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

export class UpdateAgentSessionTitleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response. Result is returned upon success, and Error is returned upon a protocol error.
   */
  jsonRpcResponse?: UpdateAgentSessionTitleResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The unique ID of the current OpenAPI request. You can use it to troubleshoot request issues.
   * 
   * @example
   * 01A0B6E0-E005-1465-B5DE-5CD17677426F
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
      jsonRpcResponse: UpdateAgentSessionTitleResponseBodyJsonRpcResponse,
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

