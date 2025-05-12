// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstallAgentRequestInstances } from "./InstallAgentRequestInstances";


export class InstallAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agentVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * InstallAndUpgrade
   */
  installType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: InstallAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      installType: 'install_type',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      installType: 'string',
      instances: { 'type': 'array', 'itemType': InstallAgentRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

