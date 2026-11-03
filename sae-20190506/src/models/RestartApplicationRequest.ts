// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartApplicationRequest extends $dara.Model {
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
   * Specifies whether the elastic scaling policy for the application is automatically enabled. Valid values:
   * - **true**: enables the policy.
   * - **false**: disables the policy.
   * 
   * @example
   * false
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The percentage of the minimum number of ready instances. Valid values:
   * 
   *  - **-1**: the initial value, which indicates that the percentage is not used.
   *  - **0 to 100**: the percentage, which is rounded up. For example, if you set this parameter to **50** and you have 5 instances, the minimum number of ready instances is 3.
   * 
   * > If both **MinReadyInstances** and **MinReadyInstanceRatio** are specified and the value of **MinReadyInstanceRatio** is not **-1**, the **MinReadyInstanceRatio** parameter takes precedence. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, the system uses **50** to calculate the minimum number of ready instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances. Valid values:
   * 
   * - If you set this parameter to **0**, services are interrupted during the application upgrade.
   * - If you set this parameter to **-1**, the system uses the recommended value, which is 25% of the current number of instances. For example, if you have 5 instances, 5 × 25% = 1.25. The value is rounded up to 2.
   * 
   * > For each rolling deployment, set the minimum number of ready instances to 1 or greater to ensure service continuity.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

