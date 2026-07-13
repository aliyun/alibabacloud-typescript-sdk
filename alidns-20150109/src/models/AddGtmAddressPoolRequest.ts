// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAddressPoolRequestAddr extends $dara.Model {
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
   * The mode of the address. Valid values:
   * 
   * - **SMART**: smart return
   * 
   * - **ONLINE**: always online
   * 
   * - **OFFLINE**: always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      mode: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code of the monitoring node. For information about valid values, see the response of DescribeGtmMonitorAvailableConfig.
   * 
   * @example
   * 546
   */
  cityCode?: string;
  /**
   * @remarks
   * - For information about valid values, see the response of DescribeGtmMonitorAvailableConfig.
   * 
   * - If GroupType is set to Border Gateway Protocol (BGP) or Overseas, IspCityNode.N.IspCode is optional. The default value is 465.
   * 
   * - If GroupType is not set to BGP or Overseas, IspCityNode.N.IspCode is required and must be used with IspCityNode.N.CityCode.
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

export class AddGtmAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The list of addresses in the address pool.
   * 
   * This parameter is required.
   */
  addr?: AddGtmAddressPoolRequestAddr[];
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
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds. The value must be 60.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The list of city nodes for monitoring.
   */
  ispCityNode?: AddGtmAddressPoolRequestIspCityNode[];
  /**
   * @remarks
   * The response language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The minimum number of available addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minAvailableAddrNum?: number;
  /**
   * @remarks
   * The extended information. The parameters that you must configure vary based on the health check protocol.
   * 
   * HTTP and HTTPS:
   * 
   * - port: The health check port.
   * 
   * - failureRate: The failure rate.
   * 
   * - code: The return code. A response with a return code greater than the specified value is considered abnormal. Valid values: 400 and 500.
   * 
   * - host: The host setting.
   * 
   * - path: The URL path.
   * 
   * PING:
   * 
   * - packetNum: The number of ping packets.
   * 
   * - packetLossRate: The packet loss rate.
   * 
   * - failureRate: The failure rate.
   * 
   * TCP:
   * 
   * - port: The health check port.
   * 
   * - failureRate: The failure rate.
   * 
   * @example
   * {"host":"aliyun.com","port":80}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The status of the health check. Valid values:
   * 
   * - **OPEN**: enabled
   * 
   * - **CLOSE** (default): disabled
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
   * 测试
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
   * - Ping
   * 
   * - TCP
   * 
   * @example
   * TCP
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - **IP**: IPv4 address
   * 
   * - **DOMAIN**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * IP
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
      minAvailableAddrNum: 'MinAvailableAddrNum',
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
      addr: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestAddr },
      evaluationCount: 'number',
      instanceId: 'string',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestIspCityNode },
      lang: 'string',
      minAvailableAddrNum: 'number',
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

