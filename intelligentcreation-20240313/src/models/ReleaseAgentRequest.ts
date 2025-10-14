// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseAgentRequest extends $dara.Model {
  /**
   * @example
   * 1
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

