// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The version to which the component is updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The list of instances for which you want to update the component.
   * 
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

