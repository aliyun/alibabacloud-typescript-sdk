// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent configuration.
   * 
   * > The agent configuration ID for a created scenario is available in the ChatbotId parameter returned by the DescribeScript operation.
   * 
   * This parameter is required.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The IP address of the application. This is a system field and is optional.
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ec0c897-b92c-40e4-9ad7-e6e4f5ce13bb
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      appIp: 'AppIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      appIp: 'string',
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

