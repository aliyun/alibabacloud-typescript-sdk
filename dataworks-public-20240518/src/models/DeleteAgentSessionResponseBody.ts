// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentSessionResponseBodyJsonRpcResponseError extends $dara.Model {
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
   * The session does not exist or the current account does not have access permissions. Return to the session list and select another session
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

export class DeleteAgentSessionResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC fault message. This field is not returned upon success.
   */
  error?: DeleteAgentSessionResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The JSON-RPC correlation identifier for the current request. It is passed by the caller and returned as-is.
   * 
   * @example
   * delete-rpc-001
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
   * An empty object is returned upon successful deletion. If the deletion fails, check the sibling Error field.
   * 
   * @example
   * {}
   */
  result?: any;
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
      error: DeleteAgentSessionResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: 'any',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response. It returns Result upon success and Error upon protocol errors.
   */
  jsonRpcResponse?: DeleteAgentSessionResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The OpenAPI request ID, which can be used to troubleshoot call failures.
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
      jsonRpcResponse: DeleteAgentSessionResponseBodyJsonRpcResponse,
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

