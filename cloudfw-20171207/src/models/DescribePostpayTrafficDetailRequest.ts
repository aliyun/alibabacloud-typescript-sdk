// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. Specify the value in the YYYYMMDD format.
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
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * 
   * - **resourceId**: resource ID.
   * - **trafficDay**: date.
   * 
   * @example
   * resourceId
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 10. Maximum value: 50.
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
   * The start time of the query. Specify the value in the YYYYMMDD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240101
   */
  startTime?: string;
  /**
   * @remarks
   * The type of traffic boundary for statistics. This parameter is required. Valid values:
   *           
   * - **EIP_TRAFFIC**: Internet border traffic.
   *   
   * - **NatGateway_TRAFFIC**: NAT border traffic.
   * - **VPC_TRAFFIC**: VPC border traffic.
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

