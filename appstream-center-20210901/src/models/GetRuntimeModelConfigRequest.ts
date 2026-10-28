// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * Specifies whether to include risk information.
   * 
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @remarks
   * The ID of the agent runtime. The ID mappings are as follows:
   * 
   * JVS Computer: JVS Computer ID, in the format of jvs-xxxx.
   * 
   * OpenClaw: Cloud desktop ID, in the format of ecd-xxxx.
   * 
   * Hermes Agent: Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-xxxx
   */
  runtimeId?: string;
  /**
   * @remarks
   * The type of the agent runtime.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  /**
   * @remarks
   * The smart model filter. Valid values:
   * - true: Queries the system wuying-preset provider models based on the business type of the runtime.
   * - false: Excludes wuying-preset from the effective configuration.
   * - Empty: Returns both smart and non-smart models in the effective configuration.
   * The business type is read by the server from runtime.biz_type, and the BizType input parameter is not required. Risk information is still independently controlled by IncludeRiskInfo.
   * 
   * @example
   * true
   */
  smartModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      includeRiskInfo: 'IncludeRiskInfo',
      runtimeId: 'RuntimeId',
      runtimeType: 'RuntimeType',
      smartModel: 'SmartModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      includeRiskInfo: 'boolean',
      runtimeId: 'string',
      runtimeType: 'string',
      smartModel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

