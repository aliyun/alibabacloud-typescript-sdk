// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Set the end time for the query. Use the YYYYMMDD date format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240131
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
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
   * The field to use for sorting. Valid values:
   * 
   * - **resourceId**: resource ID.
   * 
   * - **trafficDay**: date.
   * 
   * @example
   * resourceId
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The IP address or instance ID of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * Set the start time for the query. Use the YYYYMMDD date format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240101
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the firewall border for which to query traffic. This parameter is required. Valid values:
   * 
   * - **EIP_TRAFFIC**: traffic on the Internet border.
   * 
   * - **NatGateway_TRAFFIC**: traffic on the NAT border.
   * 
   * - **VPC_TRAFFIC**: traffic on the VPC border.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC_TRAFFIC
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

