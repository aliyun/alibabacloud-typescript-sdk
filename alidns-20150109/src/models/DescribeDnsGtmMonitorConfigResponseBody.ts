// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      ispCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode },
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

export class DescribeDnsGtmMonitorConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the configuration was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of consecutive failures.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 1
   */
  interval?: number;
  ispCityNodes?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * Monit*********
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The extended information. The parameters vary by protocol.
   * 
   * - For HTTP and HTTPS:
   * 
   *   - port: The health check port.
   * 
   *   - host: The Host header.
   * 
   *   - path: The URL path.
   * 
   *   - code: The expected HTTP status code.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - sni: Specifies whether to enable Server Name Indication (SNI). This parameter is valid only when the protocol is set to HTTPS.
   * 
   *     - true: enables SNI.
   * 
   *     - false: disables SNI.
   * 
   *   - nodeType: The type of the monitoring node for the health check when the address pool type is DOMAIN.
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - For PING:
   * 
   *   - failureRate: The failure rate.
   * 
   *   - packetNum: The number of ping packets.
   * 
   *   - packetLossRate: The packet loss rate.
   * 
   *   - nodeType: The type of the monitoring node for the health check when the address pool type is DOMAIN.
   * 
   *     - IPV4
   * 
   *     - IPV6
   * 
   * - For TCP:
   * 
   *   - port: The health check port.
   * 
   *   - failureRate: The failure rate.
   * 
   *   - nodeType: The type of the monitoring node for the health check when the address pool type is DOMAIN.
   * 
   *     - IPV4
   * 
   *     - IPV6
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
   * @example
   * TCP
   */
  protocolType?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the configuration was last updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNodes: 'IspCityNodes',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      requestId: 'RequestId',
      timeout: 'Timeout',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNodes: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes,
      monitorConfigId: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      requestId: 'string',
      timeout: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.ispCityNodes && typeof (this.ispCityNodes as any).validate === 'function') {
      (this.ispCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

