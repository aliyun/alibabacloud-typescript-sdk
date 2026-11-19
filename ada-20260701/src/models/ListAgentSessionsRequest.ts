// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionsRequestParams extends $dara.Model {
  /**
   * @remarks
   * Optional. Filters sessions by agent name. The maximum length is 64 characters.
   * 
   * @example
   * review-agent-demo
   */
  agentName?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 50. Keep the page size and filter conditions consistent for subsequent pages.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken returned from the previous page. Do not pass this parameter on the first page. In the first phase, the default uses a native opaque cursor. Keep the same filter conditions and pass the token back as is.
   * 
   * @example
   * next-token-example
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The correlation identifier for this call. This identifier is echoed in the response and does not provide idempotency guarantees.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Set this parameter to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameter object. The public fields are only AgentName, MaxResults, and NextToken.
   * 
   * This parameter is required.
   * 
   * @example
   * {"AgentName":"review-agent-demo","MaxResults":20}
   */
  params?: ListAgentSessionsRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: ListAgentSessionsRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

