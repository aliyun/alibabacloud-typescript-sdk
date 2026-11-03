// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSessionTitleRequestParams extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent session that belongs to the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  sessionId?: string;
  /**
   * @remarks
   * The new title. The length must be 1 to 512 characters after leading and trailing whitespaces are removed.
   * 
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
   * @remarks
   * The JSON-RPC correlation ID for the current request. It is specified by the caller and used to correlate the request and response.
   * 
   * @example
   * updateagentsessiontitle-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Set the value to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The request parameters for modifying the session title, including the target session ID and the new title.
   */
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

