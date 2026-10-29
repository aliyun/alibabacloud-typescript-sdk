// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HaVip instance to be associated.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-5p14t****
   */
  haVipId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-50c4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance with which you want to associate the HaVip. Valid values:
   * - EnsInstance: ENS instance. This is the default value.
   * - NetworkInterface: elastic network interface controller (NIC). If the instance with which you want to associate the HaVip is an elastic network interface controller (NIC), you must specify this parameter.
   * 
   * @example
   * EnsInstance
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
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

