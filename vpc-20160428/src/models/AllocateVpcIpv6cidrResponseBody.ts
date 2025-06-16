// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateVpcIpv6CidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block that is reserved.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D20C13EA-2584-53BC-8393-69DE6D98EFF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

