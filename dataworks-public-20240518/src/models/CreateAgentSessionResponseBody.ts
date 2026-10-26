// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionResponseBodyJsonRpcResponseError extends $dara.Model {
  /**
   * @example
   * 500
   */
  code?: number;
  /**
   * @example
   * {}
   */
  data?: any;
  /**
   * @example
   * 0x4883300000000019
   */
  errorCode?: string;
  /**
   * @example
   * 创建 DataAgent 实例必须指定资源组，请在请求的 _meta.dataAgent.resourceGroupId 中传入资源组 ID
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
   * The ID of the created session.
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
  error?: CreateAgentSessionResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The request ID passed by the caller. The value is returned as-is.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed value: 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business data. The value is null if an error occurs.
   */
  result?: CreateAgentSessionResponseBodyJsonRpcResponseResult;
  /**
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
   * The JSON-RPC response.
   */
  jsonRpcResponse?: CreateAgentSessionResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * Id of the request
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

