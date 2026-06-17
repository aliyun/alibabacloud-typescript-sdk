// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDropTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1747792853
   */
  endTime?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order.
   * 
   * - **desc**: descending order. This is the default value.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sorting criterion.
   * 
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 183.237.161.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656664560
   */
  startTime?: number;
  /**
   * @remarks
   * The time point of the traffic. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1739337840
   */
  trafficTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      order: 'Order',
      sort: 'Sort',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      order: 'string',
      sort: 'string',
      sourceIp: 'string',
      startTime: 'number',
      trafficTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

