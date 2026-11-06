// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRuntimeStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform, which is used to filter the statistical scope, such as ENTERPRISE_AGENTIC_COMPUTER. If this parameter is not specified, all agent platforms are included in the statistics. If an unsupported value is specified, a parameter error is returned.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider, which is used to filter the statistical scope, such as AgenticComputer. If this parameter is not specified, all agent providers are included in the statistics. If an unsupported value is specified, a parameter error is returned.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type, which is used to filter runtimes of a specified business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The runtime environment type of the runtime resource.
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

