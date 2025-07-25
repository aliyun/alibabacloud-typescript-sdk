// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The address in the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  addr?: string;
  /**
   * @remarks
   * The information about the source region of the address. The value of this parameter is a JSON string. Valid values:
   * 
   * *   lineCode: the line code of the source region for the address
   * 
   * *   lineCodeRectifyType: the rectification type of the line code. Default value: AUTO. Valid values:
   * 
   *     *   NO_NEED: no need for rectification
   *     *   RECTIFIED: rectified
   *     *   AUTO: automatic rectification
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The weight of the address.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The return mode of the addresses: Valid values:
   * 
   * *   SMART: smart return
   * *   ONLINE: always online
   * *   OFFLINE: always offline
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  mode?: string;
  /**
   * @remarks
   * The description of the address pool.
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
   * The city code.
   * 
   * Specify the parameter according to the value of CityCode returned by the DescribeGtmMonitorAvailableConfig operation.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * *   The Internet service provider (ISP) node. Specify the parameter according to the value of IspCode returned by the DescribeGtmMonitorAvailableConfig operation.
   * *   If the returned value of GroupType for the DescribeGtmMonitorAvailableConfig operation is BGP or Overseas, IspCode is not required and is set to 465 by default.
   * *   If the returned value of GroupType for the DescribeGtmMonitorAvailableConfig operation is not BGP or Overseas, IspCode is required. When IspCode is specified, CityCode is required.
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
   * The address pools.
   * 
   * This parameter is required.
   */
  addr?: AddDnsGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The number of consecutive failures.
   * 
   * @example
   * 1
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The nodes for monitoring.
   */
  ispCityNode?: AddDnsGtmAddressPoolRequestIspCityNode[];
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The load balancing policy of the address pool. Valid values:
   * 
   * *   ALL_RR: returns all addresses.
   * *   RATIO: returns addresses by weight.
   * 
   * This parameter is required.
   * 
   * @example
   * all_rr
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The extended information. The required parameters vary based on the health check protocol.
   * 
   * *   HTTP or HTTPS:
   * 
   *     *   port: the port that you want to check
   * 
   *     *   host: the host settings
   * 
   *     *   path: the URL
   * 
   *     *   code: the return code. The health check result is deemed abnormal if the returned value is greater than the specified value. Valid values: 400 and 500.
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   sni: specifies whether to enable Server Name Indication (SNI). This parameter is available only when ProtocolType is set to HTTPS. Valid values:
   * 
   *         *   true: enables SNI.
   *         *   other: disables SNI.
   * 
   *     *   nodeType: the type of the node for monitoring when Type is set to DOMAIN. Valid values:
   * 
   *         *   IPV4
   *         *   IPV6
   * 
   * *   ping:
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   packetNum: the number of ping packets
   * 
   *     *   packetLossRate: the loss rate of ping packets
   * 
   *     *   nodeType: the type of the node for monitoring when Type is set to DOMAIN. Valid values:
   * 
   *         *   IPV4
   *         *   IPV6
   * 
   * *   TCP:
   * 
   *     *   port: the port that you want to check
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   nodeType: the type of the node for monitoring when Type is set to DOMAIN. Valid values:
   * 
   *         *   IPV4
   *         *   IPV6
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. If you set this parameter to OPEN, the system verifies the health check configurations. If you set this parameter to CLOSE, the system discards the health check configurations. Default value: CLOSE. Valid values:
   * 
   * *   OPEN: enables the health check feature.
   * *   CLOSE: disables the health check feature.
   * 
   * @example
   * open
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
   * *   HTTP
   * *   HTTPS
   * *   PING
   * *   TCP
   * 
   * @example
   * http
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   IPV4: IPv4 address
   * *   IPV6: IPv6 address
   * *   DOMAIN: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * ipv4
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

