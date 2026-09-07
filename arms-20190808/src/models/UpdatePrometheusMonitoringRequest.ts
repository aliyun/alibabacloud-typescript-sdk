// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusMonitoringRequest extends $dara.Model {
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
   * The monitoring configuration. The value is a YAML string.
   * 
   * This parameter is required.
   * 
   * @example
   * 参见请求参数补充说明。
   */
  configYaml?: string;
  /**
   * @remarks
   * The name of the monitoring configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * podMonitor1
   */
  monitoringName?: string;
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
   * The type of the monitoring configuration.
   * Valid values for a Prometheus instance for Container Service: serviceMonitor, podMonitor, customJob, and probe.
   * Valid values for a Prometheus instance for ECS: customJob and probe.
   * 
   * This parameter is required.
   * 
   * @example
   * podMonitor
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configYaml: 'ConfigYaml',
      monitoringName: 'MonitoringName',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      configYaml: 'string',
      monitoringName: 'string',
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

