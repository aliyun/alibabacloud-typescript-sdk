// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionArtifactsRequestParams extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The OSS continuation token for the next page. Do not specify this parameter for the first page.
   * 
   * @example
   * CAESExFsbyH...
   */
  nextToken?: string;
  /**
   * @remarks
   * The request code used to filter results. Only artifacts produced by the specified request are returned.
   * 
   * @example
   * req_20260421_001
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID. If this parameter is not specified, the error `sessionCode` is required is returned.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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

export class ListAgentSessionArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID passed in by the requester. The value is returned as-is.
   * 
   * @example
   * 10001
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
   * The business parameters.
   */
  params?: ListAgentSessionArtifactsRequestParams;
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
      params: ListAgentSessionArtifactsRequestParams,
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

