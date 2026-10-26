// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSessionTitleResponseBodyJsonRpcResponseError extends $dara.Model {
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
   * 会话不存在或当前账号无权访问，请返回会话列表重新选择
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
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  sessionId?: string;
  /**
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
  error?: UpdateAgentSessionTitleResponseBodyJsonRpcResponseError;
  /**
   * @example
   * updateagentsessiontitle-rpc-001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  result?: UpdateAgentSessionTitleResponseBodyJsonRpcResponseResult;
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
  jsonRpcResponse?: UpdateAgentSessionTitleResponseBodyJsonRpcResponse;
  /**
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

