// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResultDataResponseBodyDataMetricsInfos } from "./GetExperimentResultDataResponseBodyDataMetricsInfos";


export class GetExperimentResultDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 8
   */
  gpuNum?: string;
  /**
   * @remarks
   * Host IP
   * 
   * @example
   * p-jt-waf-app1
   */
  hostname?: string;
  /**
   * @remarks
   * List of Metrics Information
   */
  metricsInfos?: GetExperimentResultDataResponseBodyDataMetricsInfos[];
  /**
   * @remarks
   * Pod Name
   * 
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      metricsInfos: 'MetricsInfos',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuNum: 'string',
      hostname: 'string',
      metricsInfos: { 'type': 'array', 'itemType': GetExperimentResultDataResponseBodyDataMetricsInfos },
      podName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricsInfos)) {
      $dara.Model.validateArray(this.metricsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

