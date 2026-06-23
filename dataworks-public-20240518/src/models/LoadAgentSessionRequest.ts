// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * In a resumable transfer scenario, this specifies the offset from which to resume fetching the SSE output.
   * 
   * @example
   * 10000
   */
  beginLogOffset?: number;
  /**
   * @remarks
   * Specifies whether to use resumable transfer. If the SSE stream is interrupted due to issues like an unstable network connection, you can set this parameter to `true` to re-fetch the stream data from the point of failure.
   * 
   * @example
   * true or false
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
   * DataWorks-specific extended parameters for ACP.
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
   * The client-generated request ID, which is returned in the response.
   * 
   * @example
   * 4as3dasf654a
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value must be `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * Business parameters.
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

