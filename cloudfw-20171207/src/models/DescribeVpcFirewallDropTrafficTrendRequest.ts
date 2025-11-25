// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDropTrafficTrendRequest extends $dara.Model {
  /**
   * @example
   * 1747792853
   */
  endTime?: number;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @example
   * 183.237.161.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 1656664560
   */
  startTime?: number;
  /**
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

