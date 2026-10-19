// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAgentConfigRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
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

export class UpdateInstanceAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component whose configuration is to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the component configuration to be applied to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * f0078fbb-4213-11f0-a19b-00163e4ae208
   */
  configId?: string;
  /**
   * @remarks
   * The instance information.
   */
  instances?: UpdateInstanceAgentConfigRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      configId: 'configId',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      configId: 'string',
      instances: { 'type': 'array', 'itemType': UpdateInstanceAgentConfigRequestInstances },
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

