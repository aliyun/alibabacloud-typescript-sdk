// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTimeTopRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1733796528
   */
  endTime?: string;
  /**
   * @remarks
   * The network type of the IP address.
   * 
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of top entries to return. Default value: 50. Valid values: 1 to 50.
   * 
   * @example
   * 5
   */
  limit?: string;
  /**
   * @remarks
   * The public IP address of the NAT gateway. If you leave this parameter empty, all asset IP addresses are queried.
   * 
   * @example
   * 47.97.66.XXX
   */
  natIP?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * in_bps
   */
  sort?: string;
  /**
   * @remarks
   * The tracing code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 60.179.179.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 8.153.18.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1749434787
   */
  startTime?: string;
  /**
   * @remarks
   * The traffic time to query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1745222880
   */
  trafficTime?: string;
  /**
   * @remarks
   * The traffic type.
   * 
   * @example
   * EIP_TRAFFIC
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      IPType: 'IPType',
      interval: 'Interval',
      lang: 'Lang',
      limit: 'Limit',
      natIP: 'NatIP',
      order: 'Order',
      sort: 'Sort',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      startTime: 'StartTime',
      trafficTime: 'TrafficTime',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      IPType: 'string',
      interval: 'number',
      lang: 'string',
      limit: 'string',
      natIP: 'string',
      order: 'string',
      sort: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      startTime: 'string',
      trafficTime: 'string',
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

