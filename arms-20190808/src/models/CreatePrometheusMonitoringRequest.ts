// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusMonitoringRequest extends $dara.Model {
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
   * The monitoring configuration. Specify a YAML string.
   * 
   * This parameter is required.
   * 
   * @example
   * Please refer to the supplementary explanation of the request parameters.
   */
  configYaml?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the monitoring configuration. Valid values: run and stop. Default value: run. This parameter is not available if the Type parameter is set to Probe.
   * 
   * @example
   * run
   */
  status?: string;
  /**
   * @remarks
   * The type of the monitoring configuration. 
   * Valid values for a Prometheus instance for Container Service: serviceMonitor, podMonitor, customJob, and probe. 
   * Valid values for a Prometheus instance for ECS: customJob and probe.
   * 
   * This parameter is required.
   * 
   * @example
   * serviceMonitor
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configYaml: 'ConfigYaml',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      configYaml: 'string',
      regionId: 'string',
      status: 'string',
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

