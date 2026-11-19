// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * The effective page size for the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The credential for querying the next page. Pass this value as is to Params.NextToken. Pagination ends when this value is not returned or is empty.
   * 
   * @example
   * next-token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The array of session summaries for the current page. If no matching records are found, an empty array [] is returned. The type is any. The fields of array elements retain the original backend names. For the structure, see the supplementary description of response parameters.
   * 
   * @example
   * [{"sessionId":"0123456789abcdef0123456789abcdef","title":"Code review","agentName":"review-agent-demo","createdAt":1793232000000,"updatedAt":1793232060000}]
   */
  sessionList?: any;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sessionList: 'SessionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sessionList: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The Id from the request, echoed as is.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The fixed value 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The paginated result.
   * 
   * @example
   * {"MaxResults":20,"NextToken":"next-token-example","SessionList":[{"sessionId":"0123456789abcdef0123456789abcdef"}]}
   */
  result?: ListAgentSessionsResponseBodyJsonRpcResponseResult;
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
      result: ListAgentSessionsResponseBodyJsonRpcResponseResult,
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

export class ListAgentSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response object. The business result is located in Result.
   * 
   * @example
   * {"Jsonrpc":"2.0","Id":"request-001","Result":{"MaxResults":20,"NextToken":"next-token-example","SessionList":[{"sessionId":"0123456789abcdef0123456789abcdef","title":"Code review","agentName":"review-agent-demo","createdAt":1793232000000,"updatedAt":1793232060000}]}}
   */
  jsonRpcResponse?: ListAgentSessionsResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The server-side request ID used to troubleshoot this call.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
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
      jsonRpcResponse: ListAgentSessionsResponseBodyJsonRpcResponse,
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

