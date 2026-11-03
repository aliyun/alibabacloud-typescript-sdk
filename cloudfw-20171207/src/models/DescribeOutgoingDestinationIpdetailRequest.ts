// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The policy coverage status.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 34.136.111.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1733710383
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query outbound connections from the private network of a NAT gateway.
   * 
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @remarks
   * The language type for receiving messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-2zed6z6qkd7ogc****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.210.0.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 1.202.193.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749434787
   */
  startTime?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * FirstFlow
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      IPType: 'IPType',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      order: 'Order',
      pageSize: 'PageSize',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sort: 'Sort',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      IPType: 'string',
      lang: 'string',
      natGatewayId: 'string',
      order: 'string',
      pageSize: 'string',
      privateIP: 'string',
      publicIP: 'string',
      sort: 'string',
      sourceIp: 'string',
      startTime: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

