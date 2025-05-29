// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrResponseBodyCidrLists extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the transit router.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The type of the CIDR block.
   * 
   * The value is **IPv4**, which indicates that the CIDR block is of the IPv4 type.
   * 
   * @example
   * IPv4
   */
  family?: string;
  /**
   * @remarks
   * The name of the CIDR block.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the system is allowed to automatically add a route to the route table of the transit router. Valid values:
   * 
   * *   **true**
   * 
   *     A value of **true** indicates that after you create a private VPN connection and enable route learning for the connection, the system automatically adds a blackhole route to the route table of the transit router to which the VPN connection is attached.
   * 
   *     The destination CIDR block of the blackhole route is the CIDR block of the transit router. The CIDR block of the transit router refers to the CIDR block from which gateway IP addresses are allocated to IPsec-VPN connections.
   * 
   *     The blackhole route is advertised only to the route table of the virtual border router (VBR) that is connected to the transit router.
   * 
   * *   **false**
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The ID of the transit router CIDR block.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  /**
   * @remarks
   * The transit router ID.
   * 
   * @example
   * tr-p0w3x8c9em72a40nw****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      family: 'Family',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      family: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

