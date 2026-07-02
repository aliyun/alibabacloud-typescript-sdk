// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentWithTypeRequestInstances extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
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

export class InstallAgentWithTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @example
   * f0078fbb-4213-11f0-a19b-00163e4ae208
   */
  configId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: InstallAgentWithTypeRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      configId: 'configId',
      instanceType: 'instanceType',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      configId: 'string',
      instanceType: 'string',
      instances: { 'type': 'array', 'itemType': InstallAgentWithTypeRequestInstances },
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

