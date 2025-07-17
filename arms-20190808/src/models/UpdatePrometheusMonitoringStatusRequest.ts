// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusMonitoringStatusRequest extends $dara.Model {
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
   * The name of the monitoring configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * customJob1
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
   * The status of the monitoring configuration. Valid values: run and stop. The status of Probe cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * run
   */
  status?: string;
  /**
   * @remarks
   * The type of the monitoring configuration. 
   * Valid values for a Prometheus instance for Container Service: serviceMonitor, podMonitor, and customJob. 
   * Valid value for a Prometheus instance for ECS: customJob. 
   * The status of probe cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * customJob
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      monitoringName: 'MonitoringName',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      monitoringName: 'string',
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

