// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent platform. This parameter is not processed and is only passed through for redundancy, such as ENTERPRISE.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The name of the agent provider, such as HermesAgent or OpenClaw. If this parameter is specified, the providerName of the returned endpoint is the alias from the perspective of the specified agent provider.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The name of the model provider, such as bailian, moonshot, or siliconflow. If you do not specify this parameter, the endpoint configurations of all managed providers are returned.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

