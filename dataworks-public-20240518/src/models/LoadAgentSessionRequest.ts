// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * The offset from which to pull subsequent SSE outputs in a resumable transmission scenario.
   * 
   * @example
   * 10000
   */
  beginLogOffset?: number;
  /**
   * @remarks
   * Specifies whether this is a resumable transmission scenario. If the SSE stream is interrupted due to network instability, you can set this flag to repull the SSE response data from the breakpoint.
   * 
   * @example
   * true
   */
  isReload?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginLogOffset: 'BeginLogOffset',
      isReload: 'IsReload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginLogOffset: 'number',
      isReload: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadAgentSessionRequestParams extends $dara.Model {
  /**
   * @remarks
   * The ACP extension parameters for DataWorks.
   */
  meta?: LoadAgentSessionRequestParamsMeta;
  /**
   * @remarks
   * The ID of the target session. If the session does not exist, an SSE error frame is returned.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: LoadAgentSessionRequestParamsMeta,
      sessionId: 'string',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID provided by the requester. This ID is echoed back as is.
   * 
   * @example
   * 4as3dasf654a
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameters.
   */
  params?: LoadAgentSessionRequestParams;
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
      params: LoadAgentSessionRequestParams,
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

