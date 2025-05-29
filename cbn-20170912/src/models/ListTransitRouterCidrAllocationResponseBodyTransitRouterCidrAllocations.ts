// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks that have IP addresses allocated to network instances.
   * 
   * @example
   * 192.168.10.0/28
   */
  allocatedCidrBlock?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-2nalp6yksc805w****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * nametest
   */
  attachmentName?: string;
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
   * The ID of the CIDR block.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedCidrBlock: 'AllocatedCidrBlock',
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cidr: 'Cidr',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedCidrBlock: 'string',
      attachmentId: 'string',
      attachmentName: 'string',
      cidr: 'string',
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

