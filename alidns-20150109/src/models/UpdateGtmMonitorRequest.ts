// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 572
   */
  cityCode?: string;
  /**
   * @remarks
   * - For more information about the valid values, see the response of the DescribeGtmMonitorAvailableConfig operation.
   * 
   * - If GroupType is set to Border Gateway Protocol (BGP) or Overseas, IspCityNode.N.IspCode is optional. The default value is 465.
   * 
   * - If GroupType is not set to BGP or Overseas, IspCityNode.N.IspCode is required. You must specify a value that matches the value of IspCityNode.N.CityCode.
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

export class UpdateGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive health checks.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The interval between health checks. Unit: seconds. The value must be 60.
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
  ispCityNode?: UpdateGtmMonitorRequestIspCityNode[];
  /**
   * @remarks
   * The language of the response.
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
   * 1234abc
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The extended information. The parameters vary based on the protocol.
   * 
   * HTTP and HTTPS:
   * 
   * - port: The health check port.
   * 
   * - failureRate: The failure rate.
   * 
   * - code: The return code. A response with a status code greater than the specified value is considered abnormal. Valid values: 400 and 500.
   * 
   * - host: The host settings.
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
   * This parameter is required.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The health check protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocolType?: string;
  /**
   * @remarks
   * The timeout period for a health check. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
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
      ispCityNode: { 'type': 'array', 'itemType': UpdateGtmMonitorRequestIspCityNode },
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

