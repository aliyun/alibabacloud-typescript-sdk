// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID. Default value: `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the monitoring configuration. Valid values for a Prometheus instance for Container Service: ServiceMonitor, PodMonitor, CustomJob, and Probe. Valid values for a Prometheus instance for ECS: CustomJob and Probe.
   * 
   * @example
   * serviceMonitor
   * 
   * **if can be null:**
   * true
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

