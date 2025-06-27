// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddGtmMonitorRequestIspCityNode } from "./AddGtmMonitorRequestIspCityNode";


export class AddGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The number of consecutive failures.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The health check interval. Unit: seconds. Set the value to 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The nodes for monitoring.
   * 
   * This parameter is required.
   */
  ispCityNode?: AddGtmMonitorRequestIspCityNode[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The extended information. The required parameters vary based on the health check protocol.
   * 
   * HTTP or HTTPS
   * 
   * *   port: the port that you want to check
   * *   failureRate: the failure rate
   * *   code: the return code. The health check result is deemed abnormal if the returned value is greater than the specified value. Valid values: 400 and 500.
   * *   host: the host settings
   * *   path: the URL path
   * 
   * PING
   * 
   * *   packetNum: the number of ping packets
   * *   packetLossRate: the packet loss rate
   * *   failureRate: the failure rate
   * 
   * TCP
   * 
   * *   port: the port that you want to check
   * *   failureRate: the failure rate
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"/index.htm\\",\\"host\\":\\"aliyun.com\\"}
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
   * HTTP
   */
  protocolType?: string;
  /**
   * @remarks
   * The health check timeout period. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
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
      ispCityNode: { 'type': 'array', 'itemType': AddGtmMonitorRequestIspCityNode },
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

