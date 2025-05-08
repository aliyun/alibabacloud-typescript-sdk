// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The timestamp when the monitoring ends.
   * 
   * This parameter is required.
   * 
   * @example
   * 1666678376
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric type. The following metric types are supported:
   * 
   * [Basic system metrics]
   * 
   * *   cpuUsage
   * *   memoryUsage
   * *   diskUsage
   * *   gcCount
   * *   gcTime
   * 
   * [Nacos registry]
   * 
   * *   serviceCount
   * *   writeCostTime
   * *   readCostTime
   * *   TPS regCenterTps
   * *   QPS regCenterQps
   * 
   * [Nacos configuration center]
   * 
   * *   publish
   * *   getConfig
   * 
   * [zookeeper]
   * 
   * *   TPS zk_TpsCount
   * *   QPS zk_QpsCount
   * *   zookeeper_AvgRequestLatency
   * 
   * This parameter is required.
   * 
   * @example
   * regCenterQps
   */
  monitorType?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The timestamp when the monitoring starts.
   * 
   * This parameter is required.
   * 
   * @example
   * 1666678376
   */
  startTime?: number;
  /**
   * @remarks
   * The interval between data points. Unit: seconds.
   * 
   * @example
   * 7
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      monitorType: 'MonitorType',
      requestPars: 'RequestPars',
      startTime: 'StartTime',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTime: 'number',
      instanceId: 'string',
      monitorType: 'string',
      requestPars: 'string',
      startTime: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

