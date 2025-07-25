// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * The display name of the city where the monitored node is deployed.
   * 
   * @example
   * Zhangjiakou
   */
  cityName?: string;
  /**
   * @remarks
   * The code of the country where the monitored node is deployed.
   * 
   * @example
   * 001
   */
  countryCode?: string;
  /**
   * @remarks
   * The display name of the country where the monitored node is deployed.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * The code of the Internet service provider (ISP) to which the monitored node belongs.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * The display name of the ISP to which the monitored node belongs.
   * 
   * @example
   * Alibaba
   */
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

export class DescribeGtmMonitorConfigResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode },
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

export class DescribeGtmMonitorConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the health check configuration was created.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the health check configuration was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
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
   * The health check interval. Unit: seconds. The value is 60.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The monitored nodes.
   */
  ispCityNodes?: DescribeGtmMonitorConfigResponseBodyIspCityNodes;
  /**
   * @remarks
   * The ID of the health check configuration.
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
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  monitorExtendInfo?: string;
  /**
   * @remarks
   * The protocol used for the health check.
   * 
   * @example
   * HTTP
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The health check timeout period. Unit: milliseconds. Valid values: 2000, 3000, 5000, and 10000.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  /**
   * @remarks
   * The time when the health check configuration was last updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the health check configuration was last updated.
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
      ispCityNodes: DescribeGtmMonitorConfigResponseBodyIspCityNodes,
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

