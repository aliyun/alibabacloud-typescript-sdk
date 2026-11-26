// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  agentId?: number;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

