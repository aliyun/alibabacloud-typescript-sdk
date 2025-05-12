// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UninstallAgentRequestInstances } from "./UninstallAgentRequestInstances";


export class UninstallAgentRequest extends $dara.Model {
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
   */
  instances?: UninstallAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      instances: { 'type': 'array', 'itemType': UninstallAgentRequestInstances },
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

