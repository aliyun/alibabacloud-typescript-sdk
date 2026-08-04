// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * Department.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Device type.
   * 
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @remarks
   * Destination endpoint.
   * 
   * @example
   * www.bing.com:443
   */
  dstAddr?: string;
  /**
   * @remarks
   * Inbound traffic, in bytes.
   * 
   * @example
   * 12299
   */
  inBytes?: string;
  /**
   * @remarks
   * Outbound traffic, in bytes.
   * 
   * @example
   * 2603
   */
  outBytes?: string;
  /**
   * @remarks
   * Enterprise acceleration policy name.
   * 
   * @example
   * 白名单加速
   */
  policyName?: string;
  /**
   * @remarks
   * Enterprise acceleration instance address.
   * 
   * @example
   * 8.222.179.xxx:10015
   */
  proxyAddr?: string;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 1748422797
   */
  unixTime?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * 张三
   */
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

export class ListEnterpriseAccelerateLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of logs.
   */
  logs?: ListEnterpriseAccelerateLogsResponseBodyLogs[];
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 43F07A6A-294D-56FB-85EB-6AD00C5B60FF
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of logs.
   * 
   * @example
   * 120
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListEnterpriseAccelerateLogsResponseBodyLogs },
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

