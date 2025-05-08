// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HAVIP that you want to disassociate.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-5p14t****
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ENS instance or ENI that you want to disassociate from the HAVIP.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5ecpqvk****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
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

