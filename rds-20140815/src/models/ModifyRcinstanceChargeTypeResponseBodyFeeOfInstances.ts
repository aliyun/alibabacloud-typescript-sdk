// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  currency?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  fee?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      fee: 'Fee',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      fee: 'string',
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

