// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

