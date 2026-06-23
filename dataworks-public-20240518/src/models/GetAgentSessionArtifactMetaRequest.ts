// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionArtifactMetaRequestParams extends $dara.Model {
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
   * The ID of the session.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactPath: 'ArtifactPath',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactPath: 'string',
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

export class GetAgentSessionArtifactMetaRequest extends $dara.Model {
  /**
   * @remarks
   * A client-provided ID that is echoed in the response.
   * 
   * @example
   * 900335678024
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
   * The container for business parameters.
   */
  params?: GetAgentSessionArtifactMetaRequestParams;
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
      params: GetAgentSessionArtifactMetaRequestParams,
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

