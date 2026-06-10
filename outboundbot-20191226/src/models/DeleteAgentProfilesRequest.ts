// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentProfilesRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of agent profile IDs
   */
  agentProfileIds?: string[];
  /**
   * @remarks
   * app_ip (system field, optional)
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileIds: 'AgentProfileIds',
      appIp: 'AppIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileIds: { 'type': 'array', 'itemType': 'string' },
      appIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentProfileIds)) {
      $dara.Model.validateArray(this.agentProfileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

