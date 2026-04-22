// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionArtifactMetaResponseBodyJsonRpcResponseResult extends $dara.Model {
  artifactContent?: string;
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
   * @example
   * 300010555
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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
  jsonRpcResponse?: GetAgentSessionArtifactMetaResponseBodyJsonRpcResponse;
  /**
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

