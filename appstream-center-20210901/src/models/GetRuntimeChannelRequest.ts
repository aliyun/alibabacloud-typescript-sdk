// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelRequest extends $dara.Model {
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
   * - JVS Computer: Enter OpenClaw.
   * - OpenClaw: Enter OpenClaw.
   * - Hermes Agent: Enter HermesAgent.
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
   * The agent runtime ID. The ID mappings are as follows:
   * 
   * - JVS Computer: the JVS Computer ID, in the format of jvs-xxxx.
   * - OpenClaw: the cloud desktop ID, in the format of ecd-xxxx.
   * - Hermes Agent: the Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * jvs-xxxx
   */
  runtimeId?: string;
  /**
   * @remarks
   * The agent runtime type.
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
      includeRiskInfo: 'IncludeRiskInfo',
      runtimeId: 'RuntimeId',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      includeRiskInfo: 'boolean',
      runtimeId: 'string',
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

