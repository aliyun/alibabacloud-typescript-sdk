// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the transit router.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block.
   * 
   * @example
   * CIDRdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the CIDR block.
   * 
   * @example
   * CIDRname
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the system is allowed to automatically add a route to the route table of the transit router. Valid values:
   * 
   * - **true**: yes
   * 
   *   A value of **true** indicates that after you create a private VPN connection and create a route learning correlation for the private VPC connection, the system automatically adds the following route to the route table of the transit router that is in route learning correlation with the private VPN connection: A blackhole route whose destination CIDR block is the CIDR block of the transit router. The CIDR block of the transit router refers to the CIDR block from which gateway IP addresses are allocated to IPsec-VPN connections. 
   *          
   *   The blackhole route is advertised only to the route tables of virtual border routers (VBRs) that are connected to the transit router. 
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The ID of the CIDR block.
   * 
   * @example
   * cidr-46p5ceg21e8152****
   */
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
      transitRouterCidrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

