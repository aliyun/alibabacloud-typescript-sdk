// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 572
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

export class UpdateGtmMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of consecutive exceptions detected. If the number of consecutive exceptions detected reaches the maximum number, the application service is deemed abnormal.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
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
   * 
   * This parameter is required.
   */
  ispCityNode?: UpdateGtmMonitorRequestIspCityNode[];
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
   * The extended information, that is, the parameters required for the protocol. Different protocols require different parameters:
   * 
   * HTTP or HTTPS:
   * 
   * *   port: the port to check.
   * *   failureRate: the failure rate.
   * *   code: the status code threshold. If the returned status code is greater than the specified threshold, the application service is deemed abnormal. Valid values: 400 and 500.
   * *   host: the host configuration.
   * *   path: the health check URL.
   * 
   * PING:
   * 
   * *   packetNum: the number of ping packets.
   * *   packetLossRate: the loss rate of ping packets.
   * *   failureRate: the failure rate.
   * 
   * TCP:
   * 
   * *   port: the port to check.
   * *   failureRate: the failure rate.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The protocol used for the health check.
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

