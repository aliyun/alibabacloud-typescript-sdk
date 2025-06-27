// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDnsGtmMonitorRequestIspCityNode } from "./UpdateDnsGtmMonitorRequestIspCityNode";


export class UpdateDnsGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of consecutive exceptions detected. If the number of consecutive exceptions detected reaches the maximum number, the application service is deemed abnormal.
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
   * The monitored nodes.
   * 
   * This parameter is required.
   */
  ispCityNode?: UpdateDnsGtmMonitorRequestIspCityNode[];
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
   * The ID of the health check configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * MonitorConfigId1
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The extended information. The required parameters vary based on the health check protocol.
   * 
   * *   HTTP or HTTPS
   * 
   *     *   port: the port that you want to check
   * 
   *     *   host: the host settings
   * 
   *     *   path: the URL path
   * 
   *     *   code: the return code. If the return value of code is greater than the specified value, the health check result is deemed abnormal. For example, if code is set to 400 and the code 404 is returned, the health check result is deemed abnormal.
   * 
   *     *   failureRate: the failure rate
   * 
   *     *   sni: specifies whether to enable server name indication (SNI). This parameter is available only when ProtocolType is set to HTTPS. Valid values:
   * 
   *         *   true: enables SNI.
   *         *   false: disables SNI.
   * 
   *     *   nodeType: the type of the monitoring node when the address pool type is domain name. Valid values:
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
   *     *   nodeType: the type of the monitoring node when the address pool type is domain name. Valid values:
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
   *     *   nodeType: the type of the monitoring node when the address pool type is domain name. Valid values:
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
   * The protocol used for the health check. Valid values:
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

