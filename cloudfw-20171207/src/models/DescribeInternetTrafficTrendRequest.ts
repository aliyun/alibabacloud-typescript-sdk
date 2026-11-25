// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic direction of the Internet. Valid values:
   * 
   * - **in**: inbound traffic access control.
   * - **out**: outbound traffic access control.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1674958929
   */
  endTime?: string;
  /**
   * @remarks
   * The language type of the request and response messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * 101.80.171.196
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source private IP address.
   * 
   * @example
   * 10.100.134.60
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The source public IP address.
   * 
   * @example
   * 47.112.210.136
   */
  srcPublicIP?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1670307484
   */
  startTime?: string;
  /**
   * @remarks
   * The collected traffic type. Valid values:
   *           
   * - **max** (default): peak traffic.
   *   
   * - **avg**: average traffic.
   * 
   * @example
   * max
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcPrivateIP: 'SrcPrivateIP',
      srcPublicIP: 'SrcPublicIP',
      startTime: 'StartTime',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcPrivateIP: 'string',
      srcPublicIP: 'string',
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

