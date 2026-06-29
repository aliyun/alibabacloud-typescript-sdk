// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentStorageRequest extends $dara.Model {
  /**
   * @remarks
   * agent storage name
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

