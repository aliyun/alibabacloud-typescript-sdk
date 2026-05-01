// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jvs-xxxx
   */
  runtimeId?: string;
  /**
   * @remarks
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

