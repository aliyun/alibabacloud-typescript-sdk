// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionRequestParamsMeta extends $dara.Model {
  beginLogOffset?: number;
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
  meta?: LoadAgentSessionRequestParamsMeta;
  /**
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
   * @example
   * 4as3dasf654a
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

