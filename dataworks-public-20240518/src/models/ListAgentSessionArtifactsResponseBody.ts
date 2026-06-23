// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionArtifactsResponseBodyJsonRpcResponseResultArtifacts extends $dara.Model {
  /**
   * @remarks
   * The name of the artifact.
   * 
   * @example
   * mock_report.md
   */
  artifactName?: string;
  /**
   * @remarks
   * The path of the artifact.
   * 
   * @example
   * mock/mock_report.md
   */
  artifactPath?: string;
  /**
   * @remarks
   * The type of the artifact, which is typically the file extension.
   * 
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
  /**
   * @remarks
   * The list of artifacts.
   */
  artifacts?: ListAgentSessionArtifactsResponseBodyJsonRpcResponseResultArtifacts[];
  /**
   * @remarks
   * The actual number of entries returned per page.
   * 
   * @example
   * 29
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. The value is null if there are no more pages.
   * 
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
   * @remarks
   * The ID passed by the caller. The value is returned as-is in the response.
   * 
   * @example
   * 28477817
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
   * The paginated information of artifacts.
   */
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
  /**
   * @remarks
   * The JSON-RPC response.
   */
  jsonRpcResponse?: ListAgentSessionArtifactsResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The request ID.
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

