// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficAssetListRequest extends $dara.Model {
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
   * The domain name.
   * 
   * @example
   * www.****.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time. The value is a Unix timestamp that is accurate to the second.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 47.92.x.x
   */
  IP?: string;
  /**
   * @remarks
   * Specifies whether to count only the traffic that is used to access AI services.
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The field to sort by.
   * 
   * Default value: TotalBytes.
   * 
   * Valid values:
   * 
   * TotalBytes: Sorts by total traffic.
   * 
   * SessionCount: Sorts by the number of sessions.
   * 
   * @example
   * SessionCount
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
   * The sort order. Valid values: \\`asc\\`, \\`desc\\`.
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * The start time. The value is a Unix timestamp that is accurate to the second.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The VPC where the asset resides.
   * 
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

