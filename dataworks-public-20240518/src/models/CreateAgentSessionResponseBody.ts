// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionResponseBodyJsonRpcResponseError extends $dara.Model {
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
   * To create a DataAgent instance, you must specify a resource group. Pass the resource group ID in _meta.dataAgent.resourceGroupId of the request
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

export class CreateAgentSessionResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created session.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateAgentSessionResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC error message. This field is not returned when the request is successful.
   */
  error?: CreateAgentSessionResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The ID passed by the requester. The value is returned as is.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business data. The value is null when an error occurs.
   */
  result?: CreateAgentSessionResponseBodyJsonRpcResponseResult;
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
      error: CreateAgentSessionResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: CreateAgentSessionResponseBodyJsonRpcResponseResult,
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

export class CreateAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response result.
   */
  jsonRpcResponse?: CreateAgentSessionResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The request ID for this OpenAPI call. You can use it to troubleshoot issues with the call.
   * 
   * @example
   * 8A9D5E6C-5817-5837-9715-6E3967EC6123
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
      jsonRpcResponse: CreateAgentSessionResponseBodyJsonRpcResponse,
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

