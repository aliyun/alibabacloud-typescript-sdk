// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code of the health check node.
   * 
   * @example
   * 123
   */
  cityCode?: string;
  /**
   * @remarks
   * The carrier code of the health check node.
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

export class UpdateDnsGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive health checks.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
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
   * The list of city nodes for health checks.
   * 
   * This parameter is required.
   */
  ispCityNode?: UpdateDnsGtmMonitorRequestIspCityNode[];
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
   * The ID of the health check configuration. You can call the [DescribeDnsGtmInstanceAddressPool](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspool) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Monito******
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The extended information. The required parameters vary based on the health check protocol.
   * 
   * - HTTP(S):
   * 
   *   - port: The port for the health check.
   * 
   *   - host: The Host header.
   * 
   *   - path: The URL path.
   * 
   *   - code: The health check is considered abnormal if the returned status code is greater than the specified value. For example, if you set this parameter to 400, a returned status code of 404 is considered abnormal.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - sni: Specifies whether to enable Server Name Indication (SNI). This parameter is available only for the HTTPS protocol.
   * 
   *     - true: Enable SNI.
   * 
   *     - false: Disable SNI.
   * 
   *   - nodeType: The type of the node for health checks when the address pool type is DOMAIN.
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
   *   - nodeType: The type of the node for health checks when the address pool type is DOMAIN.
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - TCP:
   * 
   *   - port: The port for the health check.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - nodeType: The type of the node for health checks when the address pool type is DOMAIN.
   * 
   *     - IPV4
   * 
   *     - IPV6
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
   * http
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period for a health check. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': UpdateDnsGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorConfigId: 'string',
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

