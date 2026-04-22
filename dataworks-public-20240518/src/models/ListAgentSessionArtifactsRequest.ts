// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionArtifactsRequestParams extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESExFsbyH...
   */
  nextToken?: string;
  /**
   * @example
   * req_20260421_001
   */
  requestId?: string;
  /**
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
   * @example
   * 10001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

