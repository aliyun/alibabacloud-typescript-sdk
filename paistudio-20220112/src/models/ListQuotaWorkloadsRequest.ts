// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRangeFilter } from "./TimeRangeFilter";


export class ListQuotaWorkloadsRequest extends $dara.Model {
  /**
   * @remarks
   * Retrieves workloads that precede the specified workload ID in the queue.
   * 
   * @example
   * dsw654433**
   */
  beforeWorkloadId?: string;
  /**
   * @remarks
   * Filters workloads by their dequeue time range.
   */
  gmtDequeuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * Filters workloads by their enqueue time range.
   */
  gmtEnqueuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * Filters workloads by the time range of their last queue position change.
   */
  gmtPositionModifiedTimeRange?: TimeRangeFilter;
  instanceId?: string;
  /**
   * @remarks
   * Filters workloads by node name.
   * 
   * @example
   * lrn482781276**
   */
  nodeName?: string;
  /**
   * @remarks
   * The sort order for the results. Valid values are `asc` for ascending and `desc` for descending.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on a single page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  position?: number;
  priority?: number;
  /**
   * @remarks
   * Specifies whether to return only workloads that belong to the specified quota.
   * 
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @remarks
   * The field to use for sorting the results.
   * 
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Filters workloads by their status in the queue.
   * 
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @remarks
   * Filters workloads by sub-quota ID. You can specify multiple IDs, separated by commas.
   * 
   * @example
   * quota123446**,quota644322**
   */
  subQuotaIds?: string;
  useOversoldResource?: boolean;
  /**
   * @remarks
   * Filters workloads by user ID. You can specify multiple IDs, separated by commas.
   * 
   * @example
   * 290438938**,238290930**
   */
  userIds?: string;
  /**
   * @remarks
   * Specifies whether to include historical data in the query results.
   */
  withHistoricalData?: boolean;
  /**
   * @remarks
   * Filters workloads based on their creation time range.
   */
  workloadCreatedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * Filters workloads by workload ID. You can specify multiple IDs, separated by commas.
   * 
   * @example
   * dlc123445**
   */
  workloadIds?: string;
  workloadNames?: string;
  /**
   * @remarks
   * Filters workloads by status. You can specify multiple statuses, separated by commas.
   * 
   * @example
   * Pending
   */
  workloadStatuses?: string;
  /**
   * @remarks
   * Filters workloads by the sub-product type of the instance.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @remarks
   * Filters workloads by workspace ID. You can specify multiple IDs, separated by commas.
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

