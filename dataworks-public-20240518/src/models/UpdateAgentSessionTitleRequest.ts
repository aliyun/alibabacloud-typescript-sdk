// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSessionTitleRequestParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * New title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentSessionTitleRequest extends $dara.Model {
  /**
   * @example
   * updateagentsessiontitle-rpc-001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  params?: UpdateAgentSessionTitleRequestParams;
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
      params: UpdateAgentSessionTitleRequestParams,
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

