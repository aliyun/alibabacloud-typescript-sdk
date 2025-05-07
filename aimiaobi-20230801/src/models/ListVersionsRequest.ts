// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
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

