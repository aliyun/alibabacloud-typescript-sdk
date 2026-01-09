// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainRelationListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  domainList?: string[];
  /**
   * @example
   * 34.136.111.XXX
   */
  dstIP?: string;
  /**
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * TotalBytes
   */
  sort?: string;
  /**
   * @example
   * 47.92.x.x
   */
  srcIP?: string;
  /**
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @remarks
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

