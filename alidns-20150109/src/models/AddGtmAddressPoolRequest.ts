// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The weight of the address pool.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode of the address pool. Valid values:
   * 
   * *   **SMART**: smart return
   * *   **ONLINE**: always online
   * *   **OFFLINE**: always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The address in the address pool.
   * 
   * @example
   * 1.1.1.1
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
   * The code of the city where the monitored node is deployed. For more information about specific values, see the response parameters of DescribeGtmMonitorAvailableConfig.
   * 
   * @example
   * 546
   */
  cityCode?: string;
  /**
   * @remarks
   * *   The code of the Internet service provider (ISP) to which the monitored node belongs. For more information about specific values, see the response parameters of DescribeGtmMonitorAvailableConfig.
   * *   If the value of the GroupType parameter is BGP or OVERSEAS, IspCode is optional. The default value is 465.
   * *   If the value of the GroupType parameter is not BGP or OVERSEAS, IspCode is required and is used together with CityCode.
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
   * The address pools.
   * 
   * This parameter is required.
   */
  addr?: AddGtmAddressPoolRequestAddr[];
  /**
   * @remarks
   * The number of consecutive failures.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The ID of the GTM instance for which you want to create an address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds. Set the value to 60.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The monitored nodes.
   */
  ispCityNode?: AddGtmAddressPoolRequestIspCityNode[];
  /**
   * @remarks
   * The language of the values of specific response parameters.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The minimum number of available addresses in the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  minAvailableAddrNum?: number;
  /**
   * @remarks
   * The extended information. The required parameters vary based on the value of ProtocolType.
   * 
   * When ProtocolType is set to HTTP or HTTPS:
   * 
   * *   port: the port that you want to check
   * *   failureRate: the failure rate
   * *   code: the return code. The health check result is deemed abnormal if the returned value is greater than the specified value. Valid values: 400 and 500.
   * *   host: the host settings
   * *   path: the URL path
   * 
   * When ProtocolType is set to PING:
   * 
   * *   packetNum: the number of ping packets
   * *   packetLossRate: the packet loss rate
   * *   failureRate: the failure rate
   * 
   * When ProtocolType is set to TCP:
   * 
   * *   port: the port that you want to check
   * *   failureRate: the failure rate
   * 
   * @example
   * {"host":"aliyun.com","port":80}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check. Valid values:
   * 
   * *   **OPEN**: enables the health check.
   * *   **CLOSE**: disables the health check. This is the default value.
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
   * Alibaba Cloud cluster
   */
  name?: string;
  /**
   * @remarks
   * The health check protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * *   Ping
   * *   TCP
   * 
   * @example
   * HTTPS
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * *   **IP**: IPv4 address
   * *   **DOMAIN**: domain name
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

