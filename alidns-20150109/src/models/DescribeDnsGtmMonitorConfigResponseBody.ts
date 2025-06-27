// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes } from "./DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes";


export class DescribeDnsGtmMonitorConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the health check configuration was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the health check configuration was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * 1
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
  /**
   * @remarks
   * The health check nodes.
   */
  ispCityNodes?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * MonitorConfigId1
   */
  monitorConfigId?: string;
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
   *     *   nodeType: the type of the node for monitoring when the address pool type is domain name. Valid values:
   * 
   *         *   IPV4
   *         *   IPV6
   * 
   * *   PING:
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   packetNum: the number of ping packets
   * 
   *     *   packetLossRate: the loss rate of ping packets
   * 
   *     *   nodeType: the type of the node for monitoring when the address pool type is domain name. Valid values:
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
   *     *   nodeType: the type of the node for monitoring when the address pool type is domain name. Valid values:
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
   * The request ID.
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
   * The time when the health check configuration was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the health check configuration was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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

