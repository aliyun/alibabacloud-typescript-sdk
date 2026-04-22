// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAgentSessionResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @example
   * session-d5d549fe4c2c4180a9814fb74190f502
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

export class CancelAgentSessionResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @example
   * 7675839888324361477
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  result?: CancelAgentSessionResponseBodyJsonRpcResponseResult;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      result: CancelAgentSessionResponseBodyJsonRpcResponseResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAgentSessionResponseBody extends $dara.Model {
  jsonRpcResponse?: CancelAgentSessionResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7CD3D216-5876-5DB1-A34A-396806F4A413
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
      jsonRpcResponse: CancelAgentSessionResponseBodyJsonRpcResponse,
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

