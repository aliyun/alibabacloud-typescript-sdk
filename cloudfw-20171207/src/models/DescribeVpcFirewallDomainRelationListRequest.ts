// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainRelationListRequest extends $dara.Model {
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
   * The list of domain names.
   */
  domainList?: string[];
  /**
   * @remarks
   * The destination IP address to query.
   * 
   * @example
   * 34.136.111.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order in which to sort the queried entries. Valid values:
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The field by which to sort the queried entries. Valid values:
   * 
   * Default value: TotalBytes.
   * 
   * Valid values:
   * 
   * TotalBytes: Order by total traffic.
   * 
   * SessionCount: Order by session count.
   * 
   * @example
   * TotalBytes
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address to query.
   * 
   * @example
   * 47.92.x.x
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainList: 'DomainList',
      dstIP: 'DstIP',
      dstVpcId: 'DstVpcId',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      sort: 'Sort',
      srcIP: 'SrcIP',
      srcVpcId: 'SrcVpcId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
      dstIP: 'string',
      dstVpcId: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      sort: 'string',
      srcIP: 'string',
      srcVpcId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

