// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArchiveAgentSessionResponseBodyJsonRpcResponseError extends $dara.Model {
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

export class ArchiveAgentSessionResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * The archive status after the operation is completed. A value of true indicates that the session is archived, and a value of false indicates that the session is unarchived.
   */
  archived?: boolean;
  /**
   * @remarks
   * The ID of the session for which the archive status is set.
   * 
   * @example
   * session_example
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      archived: 'Archived',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArchiveAgentSessionResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC fault message. This field is not returned if the call is successful.
   */
  error?: ArchiveAgentSessionResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The JSON-RPC correlation identifier of the current request, which is passed by the caller and returned as-is.
   * 
   * @example
   * archive-rpc-001
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
   * The session archive status.
   */
  result?: ArchiveAgentSessionResponseBodyJsonRpcResponseResult;
  /**
   * @remarks
   * The response time, which is a UNIX timestamp in milliseconds.
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
      error: ArchiveAgentSessionResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: ArchiveAgentSessionResponseBodyJsonRpcResponseResult,
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

export class ArchiveAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response. Result is returned if the call is successful, and Error is returned if a protocol error occurs.
   */
  jsonRpcResponse?: ArchiveAgentSessionResponseBodyJsonRpcResponse;
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
      jsonRpcResponse: ArchiveAgentSessionResponseBodyJsonRpcResponse,
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

