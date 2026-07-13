// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * For more information about the valid values, see the response of the DescribeGtmMonitorAvailableConfig operation.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * For more information about the valid values, see the response of the DescribeGtmMonitorAvailableConfig operation.
   * 
   * - If GroupType is set to Border Gateway Protocol (BGP) or Overseas, you do not need to specify IspCityNode.N.IspCode. The default value is 465.
   * 
   * - If GroupType is not set to BGP or Overseas, you must specify IspCityNode.N.IspCode. The value of IspCityNode.N.IspCode must be consistent with the value of IspCityNode.N.CityCode.
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
   * The number of consecutive failed health checks.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The health check interval. Unit: seconds. The value must be 60.
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
   * The extended information. You must pass parameters based on the value of ProtocolType:
   * 
   * For HTTP and HTTPS:
   * 
   * - port: The health check port.
   * 
   * - failureRate: The failure rate.
   * 
   * - code: The return code. A response with a status code greater than this value is considered abnormal. Valid values: 400 and 500.
   * 
   * - host: The host settings.
   * 
   * - path: The URL path.
   * 
   * For PING:
   * 
   * - packetNum: The number of ping packets.
   * 
   * - packetLossRate: The packet loss rate.
   * 
   * - failureRate: The failure rate.
   * 
   * For TCP:
   * 
   * - port: The health check port.
   * 
   * - failureRate: The failure rate.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"/index.htm\\",\\"host\\":\\"aliyun.com\\"}
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
   * HTTP
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
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

