// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRangeFilter } from "./TimeRangeFilter";


export class ListQuotaWorkloadsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workload before which to query the queue information of instances in the queue.
   * 
   * @example
   * dsw654433**
   */
  beforeWorkloadId?: string;
  /**
   * @remarks
   * The time range used for a range search on the time when the workloads were dequeued.
   */
  gmtDequeuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The time range used for a range search on the time when the workloads entered the queue.
   */
  gmtEnqueuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The time range used for a range search on the time when the queue positions of the workloads changed.
   */
  gmtPositionModifiedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * train129f212o89d-master-0
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the node on which to search for workloads.
   * 
   * @example
   * lrn482781276**
   */
  nodeName?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The position in the queue.
   * 
   * @example
   * 10
   */
  position?: number;
  /**
   * @remarks
   * The priority of the workload.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether to display only the workloads corresponding to this resource quota.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field by which to sort the returned results.
   * 
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the workload in the queue.
   * 
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @remarks
   * The list of sub-resource quota IDs.
   * 
   * @example
   * quota123446**,quota644322**
   */
  subQuotaIds?: string;
  /**
   * @remarks
   * Specifies whether the workload uses oversold resources.
   */
  useOversoldResource?: boolean;
  /**
   * @remarks
   * The IDs of the users.
   * 
   * @example
   * 290438938**,238290930**
   */
  userIds?: string;
  /**
   * @remarks
   * Specifies whether to include historical data.
   */
  withHistoricalData?: boolean;
  /**
   * @remarks
   * The time range used for a range search on the workload creation time.
   */
  workloadCreatedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The IDs of the workloads to query for queue information.
   * 
   * @example
   * dlc123445**
   */
  workloadIds?: string;
  /**
   * @remarks
   * The names of the workloads.
   * 
   * @example
   * dlcxxxx
   */
  workloadNames?: string;
  /**
   * @remarks
   * The workload statuses used to filter the results.
   * 
   * @example
   * Pending
   */
  workloadStatuses?: string;
  /**
   * @remarks
   * The workload type used to query the queue information of instances for the specified sub-product.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @remarks
   * The IDs of the workspaces for which to query the workload queue information.
   * 
   * @example
   * 1866**
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      beforeWorkloadId: 'BeforeWorkloadId',
      gmtDequeuedTimeRange: 'GmtDequeuedTimeRange',
      gmtEnqueuedTimeRange: 'GmtEnqueuedTimeRange',
      gmtPositionModifiedTimeRange: 'GmtPositionModifiedTimeRange',
      instanceId: 'InstanceId',
      nodeName: 'NodeName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      position: 'Position',
      priority: 'Priority',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      status: 'Status',
      subQuotaIds: 'SubQuotaIds',
      useOversoldResource: 'UseOversoldResource',
      userIds: 'UserIds',
      withHistoricalData: 'WithHistoricalData',
      workloadCreatedTimeRange: 'WorkloadCreatedTimeRange',
      workloadIds: 'WorkloadIds',
      workloadNames: 'WorkloadNames',
      workloadStatuses: 'WorkloadStatuses',
      workloadType: 'WorkloadType',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeWorkloadId: 'string',
      gmtDequeuedTimeRange: TimeRangeFilter,
      gmtEnqueuedTimeRange: TimeRangeFilter,
      gmtPositionModifiedTimeRange: TimeRangeFilter,
      instanceId: 'string',
      nodeName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      position: 'number',
      priority: 'number',
      showOwn: 'boolean',
      sortBy: 'string',
      status: 'string',
      subQuotaIds: 'string',
      useOversoldResource: 'boolean',
      userIds: 'string',
      withHistoricalData: 'boolean',
      workloadCreatedTimeRange: TimeRangeFilter,
      workloadIds: 'string',
      workloadNames: 'string',
      workloadStatuses: 'string',
      workloadType: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    if(this.gmtDequeuedTimeRange && typeof (this.gmtDequeuedTimeRange as any).validate === 'function') {
      (this.gmtDequeuedTimeRange as any).validate();
    }
    if(this.gmtEnqueuedTimeRange && typeof (this.gmtEnqueuedTimeRange as any).validate === 'function') {
      (this.gmtEnqueuedTimeRange as any).validate();
    }
    if(this.gmtPositionModifiedTimeRange && typeof (this.gmtPositionModifiedTimeRange as any).validate === 'function') {
      (this.gmtPositionModifiedTimeRange as any).validate();
    }
    if(this.workloadCreatedTimeRange && typeof (this.workloadCreatedTimeRange as any).validate === 'function') {
      (this.workloadCreatedTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

