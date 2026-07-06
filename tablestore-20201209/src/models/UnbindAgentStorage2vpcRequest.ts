// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAgentStorage2VpcRequest extends $dara.Model {
  /**
   * @remarks
   * The agent storage name.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * This parameter is required.
   * 
   * @example
   * remua
   */
  agentStorageVpcName?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      agentStorageVpcName: 'AgentStorageVpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      agentStorageVpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

