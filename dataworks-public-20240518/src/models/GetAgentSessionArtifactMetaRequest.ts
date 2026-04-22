// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionArtifactMetaRequestParams extends $dara.Model {
  /**
   * @example
   * mock/mock_report.md
   */
  artifactPath?: string;
  /**
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
   * @example
   * 900335678024
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

