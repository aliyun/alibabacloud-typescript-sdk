// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsMetricTrendsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. You can view the data of up to seven days in the previous 30 days.
   * 
   * @example
   * 1678432430967
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ea73876ukci****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric whose trend you want to query. Valid values:
   * 
   * *   **count**: the number of executions.
   * *   **avgRt**: the average execution duration.
   * *   **rtRate**: the execution duration percentage.
   * *   **rowsExamined**: the total number of scanned rows.
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is required if the database instance is an ApsaraDB RDS for MySQL Cluster Edition instance or a PolarDB for MySQL clusters.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1677461663092
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metric: 'Metric',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      metric: 'string',
      nodeId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

