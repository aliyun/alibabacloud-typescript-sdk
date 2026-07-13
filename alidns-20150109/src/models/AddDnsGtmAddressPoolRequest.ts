// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * This parameter is required.
   * 
   * @example
   * 223.5.XX.XX
   */
  addr?: string;
  /**
   * @remarks
   * The source region of the address. This parameter is a JSON string.
   * 
   * - lineCode: The line code of the source region.
   * 
   * - lineCodeRectifyType: The rectification type for the line code. Default value: AUTO.
   * 
   *   - NO_NEED: No rectification is performed.
   * 
   *   - RECTIFIED: The line code is rectified.
   * 
   *   - AUTO: The line code is automatically rectified.
   * 
   * This parameter is required.
   * 
   * @example
   * {"lineCodeRectifyType":"AUTO", "lineCode":[]}
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode. Valid values:
   * 
   * - SMART: smart return
   * 
   * - ONLINE: always online
   * 
   * - OFFLINE: always offline
   * 
   * This parameter is required.
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: 'string',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code. If MonitorStatus is set to OPEN, CityCode is required.
   * 
   * For information about the valid values, see the response of the DescribeDnsGtmMonitorAvailableConfig operation.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * If MonitorStatus is set to OPEN, IspCode is required.
   * For information about the valid values, see the response of the DescribeDnsGtmMonitorAvailableConfig operation.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The list of addresses in the address pool.
   * 
   * This parameter is required.
   */
  addr?: AddDnsGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The number of consecutive failed health checks.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The instance ID.
   * <props="intl">Call [DescribeDnsGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstances) to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-cs02xyk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The list of health check nodes. If MonitorStatus is set to OPEN, you must specify at least one valid health check node.
   */
  ispCityNode?: AddDnsGtmAddressPoolRequestIspCityNode[];
  /**
   * @remarks
   * The language of some returned parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The load balancing policy. Valid values:
   * 
   * - ALL_RR: returns all addresses.
   * 
   * - RATIO: returns addresses by weight.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL_RR
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The extended information. This parameter is a JSON string. The required parameters vary based on the health check protocol:
   * 
   * - HTTP and HTTPS:
   * 
   *   - port: The health check port.
   * 
   *   - host: The host settings.
   * 
   *   - path: The URL path.
   * 
   *   - code: The return code. A response with a status code greater than this value is considered abnormal. Valid values: 400 and 500.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - sni: Specifies whether to enable Server Name Indication (SNI). This parameter is available only for the HTTPS protocol.
   * 
   *     - true: Enable SNI.
   * 
   *     - Other values: Disable SNI.
   * 
   *   - nodeType: The type of the health check node when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - PING:
   * 
   *   - failureRate: The failure rate.
   * 
   *   - packetNum: The number of ping packets.
   * 
   *   - packetLossRate: The packet loss rate.
   * 
   *   - nodeType: The type of the health check node when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - TCP:
   * 
   *   - port: The health check port.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - nodeType: The type of the health check node when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * @example
   * {"failureRate":50,"port":80}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The status of the health check feature. Default value: CLOSE. If you set this parameter to OPEN, the health check configuration is verified. Otherwise, the configuration is ignored.
   * 
   * - OPEN: enabled
   * 
   * - CLOSE: disabled
   * 
   * @example
   * OPEN
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The health check protocol. Valid values:
   * 
   * - HTTP
   * 
   * - HTTPS
   * 
   * - PING
   * 
   * - TCP
   * 
   * @example
   * TCP
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - IPV4: IPv4 address
   * 
   * - IPV6: IPv6 address
   * 
   * - DOMAIN: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * IPV4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      evaluationCount: 'EvaluationCount',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      monitorExtendInfo: 'MonitorExtendInfo',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestAddr },
      evaluationCount: 'number',
      instanceId: 'string',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestIspCityNode },
      lang: 'string',
      lbaStrategy: 'string',
      monitorExtendInfo: 'string',
      monitorStatus: 'string',
      name: 'string',
      protocolType: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

