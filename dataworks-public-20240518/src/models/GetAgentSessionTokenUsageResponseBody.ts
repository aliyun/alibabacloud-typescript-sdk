// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionTokenUsageResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @example
   * 4000
   */
  cachedTokens?: number;
  /**
   * @example
   * 2000
   */
  completionTokens?: number;
  /**
   * @example
   * 1000
   */
  promptTokens?: number;
  /**
   * @example
   * 3000
   */
  thoughtsTokens?: number;
  /**
   * @example
   * 2000
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      cachedTokens: 'CachedTokens',
      completionTokens: 'CompletionTokens',
      promptTokens: 'PromptTokens',
      thoughtsTokens: 'ThoughtsTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedTokens: 'number',
      completionTokens: 'number',
      promptTokens: 'number',
      thoughtsTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSessionTokenUsageResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @example
   * 8212598228302533855
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  result?: GetAgentSessionTokenUsageResponseBodyJsonRpcResponseResult;
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
      result: GetAgentSessionTokenUsageResponseBodyJsonRpcResponseResult,
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

export class GetAgentSessionTokenUsageResponseBody extends $dara.Model {
  jsonRpcResponse?: GetAgentSessionTokenUsageResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B313938A-4475-599B-98EB-A0875019FD5B
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
      jsonRpcResponse: GetAgentSessionTokenUsageResponseBodyJsonRpcResponse,
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

