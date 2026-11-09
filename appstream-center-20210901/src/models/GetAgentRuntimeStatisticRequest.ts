// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRuntimeStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform used to filter the statistics scope, such as ENTERPRISE_AGENTIC_COMPUTER. If you do not specify this parameter, statistics for all agent platforms are returned. If you specify an unsupported value, a parameter error is returned.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider used to filter the statistics scope, such as AgenticComputer. If you do not specify this parameter, statistics for all agent providers are returned. If you specify an unsupported value, a parameter error is returned.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type used to filter runtimes of a specific business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The runtime environment type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      runtimeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

