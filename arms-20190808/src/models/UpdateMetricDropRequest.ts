// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetricDropRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * c3ca36c8e2693403d85c0d9f8bb1d7b6c
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of discarded metrics. Specify one metric name in each line.
   * 
   * @example
   * apiserver_request_duration_seconds_bucket
   * etcd_request_duration_seconds_bucket
   * apiserver_request_total
   * container_tasks_state
   */
  metricDrop?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      metricDrop: 'MetricDrop',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      metricDrop: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

