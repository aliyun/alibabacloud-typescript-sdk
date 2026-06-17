// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTimeTopRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The end of the query time range, specified as a Unix timestamp in seconds.
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
   * The time interval in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return. The value must be between 1 and 50. Default value: 50.
   * 
   * @example
   * 5
   */
  limit?: string;
  /**
   * @remarks
   * The NAT public IP address. If omitted, traffic data for all assets is returned.
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
   * The metric by which to sort the results.
   * 
   * @example
   * in_bps
   */
  sort?: string;
  /**
   * @remarks
   * The identifier for the trace source.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address.
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
   * The start of the query time range, specified as a Unix timestamp in seconds.
   * 
   * @example
   * 1749434787
   */
  startTime?: string;
  /**
   * @remarks
   * The traffic timestamp to query, specified as a Unix timestamp in seconds.
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

