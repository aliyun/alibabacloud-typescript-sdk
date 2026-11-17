// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTenantMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is not enabled. Do not specify this parameter. The current API operation queries tenant configurations by provider, business platform, and business type. The example is used to illustrate the field status.
   * 
   * @example
   * N/A (not enabled)
   */
  agentInstanceId?: string;
  /**
   * @remarks
   * The business platform to which the agent belongs. Specify the platform corresponding to the tenant memory configuration, such as the enterprise platform `ENTERPRISE`.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider. This parameter is used together with AgentPlatform and BizType to locate the memory configuration. You must use a configured business combination.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type code. This parameter is used together with the provider and business platform. Common values include `1` (Enterprise Edition), `10` (Personal Edition), and `20` (Commercial Edition).
   * 
   * @example
   * 1
   */
  bizType?: number;
  static names(): { [key: string]: string } {
    return {
      agentInstanceId: 'AgentInstanceId',
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceId: 'string',
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

