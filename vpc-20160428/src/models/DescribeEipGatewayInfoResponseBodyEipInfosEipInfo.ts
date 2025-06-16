// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipGatewayInfoResponseBodyEipInfosEipInfo extends $dara.Model {
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 47.XX.XX.236
   */
  ip?: string;
  /**
   * @remarks
   * The IP address of the gateway that is associated with the EIP.
   * 
   * @example
   * 47.XX.XX.1
   */
  ipGw?: string;
  /**
   * @remarks
   * The subnet mask of the EIP.
   * 
   * @example
   * 255.255.255.0
   */
  ipMask?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      ipGw: 'IpGw',
      ipMask: 'IpMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      ipGw: 'string',
      ipMask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

