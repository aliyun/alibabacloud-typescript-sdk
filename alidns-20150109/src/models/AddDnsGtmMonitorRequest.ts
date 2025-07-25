// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 123
   */
  cityCode?: string;
  /**
   * @remarks
   * The code of the Internet service provider (ISP) to which the monitored node belongs.
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
   * The ID of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * pool1
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The maximum number of consecutive exceptions detected. If the number of consecutive exceptions detected reaches the maximum number, the application service is deemed abnormal.
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
   * The monitored nodes.
   * 
   * This parameter is required.
   */
  ispCityNode?: AddDnsGtmMonitorRequestIspCityNode[];
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
   * The extended information. The required parameters vary based on the value of ProtocolType.
   * 
   * *   HTTP or HTTPS
   * 
   *     *   port: the port that you want to check
   * 
   *     *   host: the host settings
   * 
   *     *   path: the URL path
   * 
   *     *   code: the response code. The health check result is deemed abnormal if the returned value is greater than the specified value.
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   sni: specifies whether to enable server name indication (SNI). This parameter is available only when ProtocolType is set to HTTPS. Valid values:
   * 
   *         *   true: enables SNI.
   *         *   false: disables SNI.
   * 
   *     *   nodeType: the type of the node for monitoring when Type is set to DOMAIN. Valid values:
   * 
   *         *   IPV4
   *         *   IPV6
   * 
   * *   PING
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
   * *   TCP
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
   * This parameter is required.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The health check protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * *   PING
   * *   TCP
   * 
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000
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

