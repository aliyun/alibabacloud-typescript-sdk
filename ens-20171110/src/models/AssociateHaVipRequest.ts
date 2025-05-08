// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-5p14t****
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-50c4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to be associated with the HAVIP. Valid values:
   * 
   * *   EnsInstance (default): ENS instance
   * *   NetworkInterface: elastic network interface (ENI)
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

