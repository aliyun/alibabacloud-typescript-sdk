// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the internet traffic.
   * 
   * Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1674958929
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Valid values:
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
   * The source code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 101.80.171.196
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The private IP address of the source.
   * 
   * @example
   * 10.100.134.60
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The public IP address of the source.
   * 
   * @example
   * 47.112.210.136
   */
  srcPublicIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1670307484
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the traffic that is captured. Valid values:
   * 
   * *   **max** (default): peak traffic
   * *   **avg**: average traffic
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

