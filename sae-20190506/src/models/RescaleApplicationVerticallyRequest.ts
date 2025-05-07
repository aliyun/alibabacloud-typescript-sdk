// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationVerticallyRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The destination CPU specification. Unit: millicore.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  cpu?: string;
  diskSize?: string;
  /**
   * @remarks
   * The destination memory size. Unit: MB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: string;
  autoEnableApplicationScalingRule?: boolean;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
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

