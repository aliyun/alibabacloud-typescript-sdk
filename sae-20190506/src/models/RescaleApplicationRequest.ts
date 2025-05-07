// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationRequest extends $dara.Model {
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
   * Specifies whether to automatically enable an auto scaling policy for the application. Take note of the following rules:
   * 
   * *   **true**: turns on Logon-free Sharing
   * *   **false**: turns off Logon-free Sharing
   * 
   * @example
   * true
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The percentage of the minimum number of available instances. Take note of the following rules:
   * 
   * *   If you set the value to **-1**, the minimum number of available instances is not determined based on this parameter. Default value: -1.
   * *   If you set the value to a number **from 0 to 100**, the minimum number of available instances is calculated by using the following formula: Current number of instances × (Value of MinReadyInstanceRatio × 100%). The value is the nearest integer rounded up from the calculated result. For example, if the percentage is set to **50**% and five instances are available, the minimum number of available instances is 3.
   * 
   * > When **MinReadyInstance** and **MinReadyInstanceRatio** are specified and **MinReadyInstanceRatio** is set to a number from 0 to 100, the value of MinReadyInstanceRatio** takes precedence.**** For example, if **MinReadyInstances** is set to **5, and **MinReadyInstanceRatio** is set to **50**, the minimum number of available instances is set to the nearest integer rounded up from the calculated result of the following formula: Current number of instances × **50%**.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Special values:
   * 
   * *   If you set the value to **0**, business interruptions occur when the application is updated.
   * *   If you set the value to \\*\\*-1\\*\\*, the minimum number of available instances is automatically set to a system-recommended value. The value is the nearest integer to which the calculated result of the following formula is rounded up: Current number of instances × 25%. For example, if five instances are available, the minimum number of available instances is calculated by using the following formula: 5 × 25% = 1.25. In this case, the minimum number of available instances is 2.
   * 
   * > Make sure that at least one instance is available during application deployment and rollback to prevent business interruptions.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * The expected number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

