// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress extends $dara.Model {
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 119.147.xx.xx
   */
  gateWay?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 119.147.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * @example
   * unicom
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      gateWay: 'GateWay',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateWay: 'string',
      ip: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

