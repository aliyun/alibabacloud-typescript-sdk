// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstance extends $dara.Model {
  /**
   * @remarks
   * emr实例续费时长。
   * 
   * @example
   * 12
   */
  emrRenewDuration?: number;
  /**
   * @remarks
   * emr实例续费时长单位。
   * 
   * @example
   * Month
   */
  emrRenewDurationUnit?: string;
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
  /**
   * @remarks
   * 续费时长。
   * 
   * @example
   * 12
   */
  renewDuration?: number;
  /**
   * @remarks
   * 付费时长单位。
   * 
   * @example
   * Month
   */
  renewDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      emrRenewDuration: 'EmrRenewDuration',
      emrRenewDurationUnit: 'EmrRenewDurationUnit',
      instanceId: 'InstanceId',
      renewDuration: 'RenewDuration',
      renewDurationUnit: 'RenewDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrRenewDuration: 'number',
      emrRenewDurationUnit: 'string',
      instanceId: 'string',
      renewDuration: 'number',
      renewDurationUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

