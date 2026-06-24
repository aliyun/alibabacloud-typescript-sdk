// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent provider.
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
   * The Agent runtime ID. The ID mappings are as follows:
   * 
   * JVS Computer: JVS Computer ID, in the format of jvs-xxxx.
   * 
   * OpenClaw: Cloud computer ID, in the format of ecd-xxxx.
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
   * The Agent runtime type.
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

