// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricsDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app,clusterId
   */
  groupByLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app:OB,clusterId:ob***
   */
  labels?: string;
  /**
   * @example
   * 5
   */
  limit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tps
   */
  metrics?: string;
  replicaType?: string;
  /**
   * @example
   * tps
   */
  sortMetricKey?: string;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupByLabels: 'GroupByLabels',
      instanceId: 'InstanceId',
      labels: 'Labels',
      limit: 'Limit',
      metrics: 'Metrics',
      replicaType: 'ReplicaType',
      sortMetricKey: 'SortMetricKey',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupByLabels: 'string',
      instanceId: 'string',
      labels: 'string',
      limit: 'string',
      metrics: 'string',
      replicaType: 'string',
      sortMetricKey: 'string',
      sortOrder: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

