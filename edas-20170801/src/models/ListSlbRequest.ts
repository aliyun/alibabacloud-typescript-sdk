// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values:
   * - Internet: public address.
   * - Intranet: private network address.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * The SLB type. Valid values:
   * - clb: classic load balancing.
   * - alb: application load balancing.
   * 
   * @example
   * clb
   */
  slbType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1f90rfybszjogyw****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      slbType: 'SlbType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      slbType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

