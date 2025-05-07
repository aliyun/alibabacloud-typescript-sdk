// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneGlobalReplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

