// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeAgentRequestInstances } from "./UpgradeAgentRequestInstances";


export class UpgradeAgentRequest extends $dara.Model {
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
  instances?: UpgradeAgentRequestInstances[];
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
      instances: { 'type': 'array', 'itemType': UpgradeAgentRequestInstances },
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

