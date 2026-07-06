// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentStoragePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent storage.
   * 
   * This parameter is required.
   * 
   * @example
   * first-agent
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The version of the access control policy for agent storage.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  policyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      policyVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

