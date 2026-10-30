// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterListAlarmRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster to query. Specify a cluster, such as "cluster1". To query multiple clusters, separate them with commas, such as "cluster1,cluster2,cluster3".
   * 
   * @example
   * "cluster1"
   */
  alarmCluster?: string;
  /**
   * @remarks
   * The instance ID or container used to filter anomalies.
   * 
   * @example
   * instance id
   */
  alarmExtInfo?: string;
  /**
   * @remarks
   * The task to query. Specify a task, such as "task1". To query multiple tasks, separate them with commas, such as "task1,task2,task3".
   * 
   * @example
   * task id
   */
  alarmTask?: string;
  /**
   * @remarks
   * The specific time or time range to query. Specify a specific time, such as "2025-08-22 18:16:25". To specify a time range, use the "start,end" format, such as "2025-08-22 18:16:25,2025-08-23 18:16:25".
   * 
   * @example
   * "2025-08-22 18:16:25,2025-08-23 18:16:25"
   */
  alarmTime?: string;
  /**
   * @remarks
   * The anomaly type used to filter results, such as GPU memory access out of bounds or task hang.
   * 
   * @example
   * cuda error
   */
  alarmType?: string;
  /**
   * @remarks
   * The current page number for pagination.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The number of entries per page for pagination.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status used to filter results. Valid values: blocking, running, exited, and restart.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCluster: 'alarmCluster',
      alarmExtInfo: 'alarmExtInfo',
      alarmTask: 'alarmTask',
      alarmTime: 'alarmTime',
      alarmType: 'alarmType',
      current: 'current',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCluster: 'string',
      alarmExtInfo: 'string',
      alarmTask: 'string',
      alarmTime: 'string',
      alarmType: 'string',
      current: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

