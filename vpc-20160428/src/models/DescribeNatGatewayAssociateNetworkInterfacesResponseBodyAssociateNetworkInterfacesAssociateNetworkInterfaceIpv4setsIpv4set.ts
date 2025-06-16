// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set extends $dara.Model {
  /**
   * @example
   * ``172.17.**.**``
   */
  IPv4Address?: string;
  /**
   * @example
   * true
   */
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      IPv4Address: 'IPv4Address',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Address: 'string',
      primary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

