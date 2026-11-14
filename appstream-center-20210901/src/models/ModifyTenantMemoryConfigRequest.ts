// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The business platform to which the agent belongs. Specify the platform that corresponds to the tenant memory configuration, such as `ENTERPRISE` for the enterprise platform.
   * 
   * This parameter is required.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider. This parameter is used together with AgentPlatform and BizType to locate the memory configuration. You must use a configured business combination.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type code. This parameter is used together with the provider and business platform. Common values include `1` (Enterprise Edition), `10` (Personal Edition), and `20` (Commercial Edition).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Specifies whether the memory feature for the business combination is enabled. A value of `true` enables the feature, and `false` disables the feature. If this parameter is omitted, the current setting is retained.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

