// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrResponseBodyCidrLists extends $dara.Model {
  /**
   * @remarks
   * The transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the transit router CIDR block.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The type of the transit router CIDR block.
   * 
   * The value is **IPv4** only, which indicates that the transit router CIDR block is of the IPv4 type.
   * 
   * @example
   * IPv4
   */
  family?: string;
  /**
   * @remarks
   * The name of the transit router CIDR block.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the system is allowed to automatically add a route for the transit router CIDR block to the transit router route table.
   * 
   * - **true**: allowed.
   *        
   *     If the value of this parameter is **true**, after you create a VPN connection of the private gateway type and create a route learning relationship for the VPN connection, the system automatically adds a route entry to the transit router route table that has a route learning relationship with the VPN connection:
   *    
   *   The route entry is a blackhole route whose destination CIDR block is the transit router CIDR block from which gateway IP addresses have been allocated to the IPsec connection.
   *         
   *   The blackhole route is propagated only to the route tables of VBR instances associated with the transit router.
   * - **false**: not allowed.
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
   * The ID of the transit router instance.
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

export class ListTransitRouterCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of transit router CIDR blocks.
   */
  cidrLists?: ListTransitRouterCidrResponseBodyCidrLists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0876E54E-3E36-5C31-89F0-9EE8A9266F9A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrLists: 'CidrLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrLists: { 'type': 'array', 'itemType': ListTransitRouterCidrResponseBodyCidrLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrLists)) {
      $dara.Model.validateArray(this.cidrLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

