// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail extends $dara.Model {
  /**
   * @remarks
   * The execution details of instance creation performed by the single scheduling task.
   * 
   * @example
   * New ECS instances "i-bp67acfmxazb4p****, i-bp67acfmxazb5p****" created.
   */
  detail?: string;
  /**
   * @remarks
   * The execution status of instance creation performed by the single scheduling task. Valid values:
   * 
   * *   Successful: Instances are created.
   * *   Failed: Instances failed to be created.
   * *   InProgress: Instances are being created.
   * *   Warning: Some instances are created.
   * 
   * @example
   * Successful
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
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

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails extends $dara.Model {
  activityDetail?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail[];
  static names(): { [key: string]: string } {
    return {
      activityDetail: 'ActivityDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDetail: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail },
    };
  }

  validate() {
    if(Array.isArray(this.activityDetail)) {
      $dara.Model.validateArray(this.activityDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories extends $dara.Model {
  autoProvisioningGroupHistory?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistory: 'AutoProvisioningGroupHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistory: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroupHistory)) {
      $dara.Model.validateArray(this.autoProvisioningGroupHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of AutoProvisioningGroupHistory data.
   */
  autoProvisioningGroupHistories?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B48A12CD-1295-4A38-A8F0-0E92C937****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried scheduling tasks in the auto provisioning group.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistories: 'AutoProvisioningGroupHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistories: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroupHistories && typeof (this.autoProvisioningGroupHistories as any).validate === 'function') {
      (this.autoProvisioningGroupHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

