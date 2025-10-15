// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationVerticallyRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * Target CPU specification. Unit: millicore.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  cpu?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 20
   */
  diskSize?: string;
  /**
   * @remarks
   * Target memory specification. Unit: MB.
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
   * Enable application scale rules automatically.
   * 
   * @example
   * true
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The ratio of minimum ready instances.
   * 
   * @example
   * 50
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * Minimum ready instances.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cpu: 'Cpu',
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

