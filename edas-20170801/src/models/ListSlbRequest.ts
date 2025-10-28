// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IP addresses. Valid values:
   * 
   * *   Internet: Users can connect to the SLB instance over the Internet.
   * *   Intranet: Users can connect to the SLB instance over the internal network.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * *   clb: Classic Load Balancer (CLB)
   * *   alb: Application Load Balancer (ALB)
   * 
   * @example
   * clb
   */
  slbType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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

