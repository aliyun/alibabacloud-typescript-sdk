// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The elastic IP address that provides public network access in the DNAT entry.
   * 
   * @example
   * 36.XXX.XXX.72
   */
  externalIp?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-5tfi6f0rutmd00xrhkag7****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The name of the DNAT entry.
   * 
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The private IP address of the instance that communicates with the Internet through the DNAT entry.
   * 
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **TCP**: Forwards TCP packets.
   * 
   * - **UDP**: Forwards UDP packets.
   * 
   * - **Any**: Forwards packets of all protocols.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number of the list to query. Pages start from **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      internalIp: 'InternalIp',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      internalIp: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

