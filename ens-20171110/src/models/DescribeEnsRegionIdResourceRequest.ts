// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionIdResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-06-16T06:33:15
   */
  endTime?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * *   cmcc: China Mobile
   * *   telecom: China Telecom
   * *   unicom: China Unicom
   * *   multiCarrier: multi-line ISP
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The order in which the resources to return are sorted. Valid values:
   * 
   * *   InstanceCount: desc
   * *   Area: asc
   * *   InternetBandwidth: asc
   * 
   * @example
   * InstanceCount: desc
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-06-16T06:33:15Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isp: 'Isp',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      isp: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
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

