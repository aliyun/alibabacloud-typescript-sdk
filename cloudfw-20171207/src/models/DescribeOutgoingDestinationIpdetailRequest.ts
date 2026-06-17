// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the access control policy.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The number of the page to return.
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
   * The end of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1733710383
   */
  endTime?: string;
  /**
   * @remarks
   * Describes the outbound connections from a private network through a NAT gateway.
   * 
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
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
   * The number of the page to return.
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
   * The field to use for sorting.
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
   * The start of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749434787
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tag.
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

