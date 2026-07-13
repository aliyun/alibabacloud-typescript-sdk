// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code of the monitoring node.
   * 
   * @example
   * 123
   */
  cityCode?: string;
  /**
   * @remarks
   * The carrier code of the monitoring node.
   * 
   * @example
   * 123
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

export class AddDnsGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. You can call the [DescribeDnsGtmInstanceAddressPools](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspools) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * po**
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The number of consecutive health checks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The list of monitoring nodes.
   * 
   * This parameter is required.
   */
  ispCityNode?: AddDnsGtmMonitorRequestIspCityNode[];
  /**
   * @remarks
   * The language of the response. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The extended information. The parameters vary based on the protocol type.
   * 
   * - HTTP or HTTPS
   * 
   *   - port: The health check port.
   * 
   *   - host: The Host header.
   * 
   *   - path: The URL path.
   * 
   *   - code: The health check is considered abnormal if the returned HTTP status code is greater than this value.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - sni: Specifies whether to enable Server Name Indication (SNI). This parameter is used only when the health check protocol is HTTPS. Valid values:
   * 
   *     - true
   * 
   *     - false
   * 
   *   - nodeType: The type of the monitoring node. This parameter is used when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - PING
   * 
   *   - failureRate: The failure rate.
   * 
   *   - packetNum: The number of ping packets.
   * 
   *   - packetLossRate: The packet loss rate.
   * 
   *   - nodeType: The type of the monitoring node. This parameter is used when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - TCP
   * 
   *   - port: The health check port.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - nodeType: The type of the monitoring node. This parameter is used when the address pool type is DOMAIN. Valid values:
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * > This parameter must be a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"failureRate":50,"port":80}
   */
  monitorExtendInfo?: string;
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
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

