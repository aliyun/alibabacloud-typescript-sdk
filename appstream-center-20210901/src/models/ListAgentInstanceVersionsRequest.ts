// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform used to filter version numbers by business type. If this parameter is not specified, the default value ENTERPRISE is used.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The name of the agent provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

