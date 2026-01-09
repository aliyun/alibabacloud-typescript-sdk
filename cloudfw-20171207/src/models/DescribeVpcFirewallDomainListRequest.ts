// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * www.example.com
   */
  domain?: string;
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
   * true
   */
  isAITraffic?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * SessionCount
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * desc
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
      domain: 'Domain',
      endTime: 'EndTime',
      isAITraffic: 'IsAITraffic',
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
      domain: 'string',
      endTime: 'string',
      isAITraffic: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

