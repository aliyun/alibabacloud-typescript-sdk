// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify a value in the YYYYMMDD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230130
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The field based on which you want to sort the query results. Valid values:
   * 
   * *   **resourceId**
   * *   **trafficDay**
   * 
   * @example
   * resourceId
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID or the IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a value in the YYYYMMDD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230101
   */
  startTime?: string;
  /**
   * @remarks
   * The traffic type. This parameter is required. Valid values:
   * 
   * *   **EIP_TRAFFIC**: traffic for the Internet firewall.
   * *   **NatGateway_TRAFFIC**: traffic for NAT firewalls.
   * *   **VPC_TRAFFIC**: traffic for virtual private cloud (VPC) firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * EIP_TRAFFIC
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      searchItem: 'SearchItem',
      startTime: 'StartTime',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'number',
      regionNo: 'string',
      searchItem: 'string',
      startTime: 'string',
      trafficType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

