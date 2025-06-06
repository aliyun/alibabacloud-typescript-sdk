// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateLogsResponseBodyLogs extends $dara.Model {
  department?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * www.bing.com:443
   */
  dstAddr?: string;
  /**
   * @example
   * 12299
   */
  inBytes?: string;
  /**
   * @example
   * 2603
   */
  outBytes?: string;
  policyName?: string;
  /**
   * @example
   * 8.222.179.xxx:10015
   */
  proxyAddr?: string;
  /**
   * @example
   * 1748422797
   */
  unixTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      deviceType: 'DeviceType',
      dstAddr: 'DstAddr',
      inBytes: 'InBytes',
      outBytes: 'OutBytes',
      policyName: 'PolicyName',
      proxyAddr: 'ProxyAddr',
      unixTime: 'UnixTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      deviceType: 'string',
      dstAddr: 'string',
      inBytes: 'string',
      outBytes: 'string',
      policyName: 'string',
      proxyAddr: 'string',
      unixTime: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

