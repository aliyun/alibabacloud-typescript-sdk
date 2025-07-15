// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateVpcCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block to be added.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * *   **IPV4**: the IPv4 address.
   * *   **IPV6**: the IPv6 address.
   * 
   * @example
   * IPV4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1221A1F-2ACD-4592-8F27-474E02883159
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ipVersion: 'IpVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ipVersion: 'string',
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

