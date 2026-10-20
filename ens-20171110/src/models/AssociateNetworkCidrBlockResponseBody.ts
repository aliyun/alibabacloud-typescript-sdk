// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateNetworkCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The allocated secondary CIDR block.
   * 
   * @example
   * 2408:XXXX:0:a600::/110
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The IP address type of the secondary CIDR block. Valid values:
   * - IPV4: IPv4 address.
   * - IPV6: IPv6 address.
   * 
   * @example
   * IPV6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

