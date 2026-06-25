// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationVerticallyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The CPU specifications, in millicores.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  cpu?: string;
  deploy?: boolean;
  /**
   * @remarks
   * The disk size for each node, in GB.
   * 
   * @example
   * 20
   */
  diskSize?: string;
  /**
   * @remarks
   * The memory size, in MB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: string;
  resourceType?: string;
  vSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to automatically enable the auto scaling rule.
   * 
   * @example
   * true
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The minimum percentage of ready instances.
   * 
   * @example
   * 50
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cpu: 'Cpu',
      deploy: 'Deploy',
      diskSize: 'DiskSize',
      memory: 'Memory',
      resourceType: 'ResourceType',
      vSwitchId: 'VSwitchId',
      autoEnableApplicationScalingRule: 'autoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'minReadyInstanceRatio',
      minReadyInstances: 'minReadyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cpu: 'string',
      deploy: 'boolean',
      diskSize: 'string',
      memory: 'string',
      resourceType: 'string',
      vSwitchId: 'string',
      autoEnableApplicationScalingRule: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

