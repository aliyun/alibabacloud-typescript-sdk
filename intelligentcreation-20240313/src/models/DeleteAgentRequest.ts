// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentRequest extends $dara.Model {
  /**
   * @example
   * 840016700254633984
   */
  agentId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

