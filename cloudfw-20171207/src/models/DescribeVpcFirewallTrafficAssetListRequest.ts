// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficAssetListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * www.****.com
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
   * 47.92.x.x
   */
  IP?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @example
   * vpc-m5ewlqkuf7orclr1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domain: 'Domain',
      endTime: 'EndTime',
      IP: 'IP',
      isAITraffic: 'IsAITraffic',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      sort: 'Sort',
      startTime: 'StartTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      domain: 'string',
      endTime: 'string',
      IP: 'string',
      isAITraffic: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      sort: 'string',
      startTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

