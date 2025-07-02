// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoRenewInstance extends $dara.Model {
  /**
   * @remarks
   * 自动续费。
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * 自动续费时长。
   * 
   * @example
   * 12
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * 自动付费时长单位。
   * 
   * @example
   * Month
   */
  autoRenewDurationUnit?: string;
  /**
   * @remarks
   * emr实例自动续费时长。
   * 
   * @example
   * 12
   */
  emrAutoRenewDuration?: number;
  /**
   * @remarks
   * emr实例自动续费时长单位。
   * 
   * @example
   * Month
   */
  emrAutoRenewDurationUnit?: string;
  /**
   * @remarks
   * 节点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      emrAutoRenewDuration: 'EmrAutoRenewDuration',
      emrAutoRenewDurationUnit: 'EmrAutoRenewDurationUnit',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      emrAutoRenewDuration: 'number',
      emrAutoRenewDurationUnit: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

