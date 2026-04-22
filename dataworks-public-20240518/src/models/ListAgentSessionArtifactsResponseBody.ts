// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionArtifactsResponseBodyJsonRpcResponseResultArtifacts extends $dara.Model {
  /**
   * @example
   * mock_report.md
   */
  artifactName?: string;
  /**
   * @example
   * mock/mock_report.md
   */
  artifactPath?: string;
  /**
   * @example
   * md
   */
  artifactType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactName: 'ArtifactName',
      artifactPath: 'ArtifactPath',
      artifactType: 'ArtifactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactName: 'string',
      artifactPath: 'string',
      artifactType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionArtifactsResponseBodyJsonRpcResponseResult extends $dara.Model {
  artifacts?: ListAgentSessionArtifactsResponseBodyJsonRpcResponseResultArtifacts[];
  /**
   * @example
   * 29
   */
  maxResults?: number;
  /**
   * @example
   * CAESExFsbyH...
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListAgentSessionArtifactsResponseBodyJsonRpcResponseResultArtifacts },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSessionArtifactsResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @example
   * 28477817
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  result?: ListAgentSessionArtifactsResponseBodyJsonRpcResponseResult;
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
      result: ListAgentSessionArtifactsResponseBodyJsonRpcResponseResult,
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

export class ListAgentSessionArtifactsResponseBody extends $dara.Model {
  jsonRpcResponse?: ListAgentSessionArtifactsResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-E****
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
      jsonRpcResponse: ListAgentSessionArtifactsResponseBodyJsonRpcResponse,
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

