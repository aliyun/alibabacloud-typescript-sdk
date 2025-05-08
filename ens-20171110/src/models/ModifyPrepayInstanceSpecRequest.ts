// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to upgrade or downgrade.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The updated configuration.
   * 
   * @example
   * ens.sn1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

