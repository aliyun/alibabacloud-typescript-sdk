// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRequestTransitRouterCidrList extends $dara.Model {
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
   * The description of the transit router CIDR block.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The name of the transit router CIDR block.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
   * 
   * *   **true** (default)
   * 
   *     If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
   * 
   *     A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection.
   * 
   *     The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.
   * 
   * *   **false**
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

