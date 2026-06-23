// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionArtifactMetaResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @remarks
   * The content of the artifact.
   * 
   * @example
   * This is md content
   */
  artifactContent?: string;
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
  static names(): { [key: string]: string } {
    return {
      artifactContent: 'ArtifactContent',
      artifactName: 'ArtifactName',
      artifactPath: 'ArtifactPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactContent: 'string',
      artifactName: 'string',
      artifactPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSessionArtifactMetaResponseBodyJsonRpcResponse extends $dara.Model {
  /**
   * @remarks
   * The ID from the original request.
   * 
   * @example
   * 300010555
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value is `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * Contains the metadata and content of the artifact.
   */
  result?: GetAgentSessionArtifactMetaResponseBodyJsonRpcResponseResult;
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
      result: GetAgentSessionArtifactMetaResponseBodyJsonRpcResponseResult,
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

export class GetAgentSessionArtifactMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response object.
   */
  jsonRpcResponse?: GetAgentSessionArtifactMetaResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The ID of the request. You can use it to trace the request in logs.
   * 
   * @example
   * CE70C54F-A3BD-5C19-88EF-2A7D3451C449
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
      jsonRpcResponse: GetAgentSessionArtifactMetaResponseBodyJsonRpcResponse,
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

