// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTimeTopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @example
   * 1733796528
   */
  endTime?: string;
  /**
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 5
   */
  limit?: string;
  /**
   * @example
   * 47.97.66.XXX
   */
  natIP?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * in_bps
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 60.179.179.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 8.153.18.XX
   */
  srcIP?: string;
  /**
   * @example
   * 1749434787
   */
  startTime?: string;
  /**
   * @example
   * 1745222880
   */
  trafficTime?: string;
  /**
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

