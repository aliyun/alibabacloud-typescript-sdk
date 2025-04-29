// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails } from "./DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails";


export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory extends $dara.Model {
  /**
   * @remarks
   * An array consisting of ActivityDetail data.
   */
  activityDetails?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails;
  /**
   * @remarks
   * The execution time of the last instance creation performed by the single scheduling task.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  lastEventTime?: string;
  /**
   * @remarks
   * The start time of executing the single scheduling task.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status of the single scheduling task. Valid values:
   * 
   * *   prepare: The scheduling task is being executed.
   * *   success: The scheduling task is executed.
   * *   failed: The scheduling task failed to be executed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the scheduling task.
   * 
   * @example
   * apg-task-bp67acfmxazb4p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      activityDetails: 'ActivityDetails',
      lastEventTime: 'LastEventTime',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDetails: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails,
      lastEventTime: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.activityDetails && typeof (this.activityDetails as any).validate === 'function') {
      (this.activityDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

