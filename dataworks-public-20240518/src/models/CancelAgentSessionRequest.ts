// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAgentSessionRequestParams extends $dara.Model {
  /**
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CancelAgentSessionRequest extends $dara.Model {
  /**
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  params?: CancelAgentSessionRequestParams;
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
      params: CancelAgentSessionRequestParams,
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

