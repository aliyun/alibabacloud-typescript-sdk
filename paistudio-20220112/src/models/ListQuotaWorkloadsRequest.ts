// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRangeFilter } from "./TimeRangeFilter";


export class ListQuotaWorkloadsRequest extends $dara.Model {
  /**
   * @remarks
   * Queries the queuing information for instances before a specified workload ID in the queue.
   * 
   * @example
   * dsw654433**
   */
  beforeWorkloadId?: string;
  /**
   * @remarks
   * The range search for workload dequeue time.
   */
  gmtDequeuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The range search for workload enqueue time.
   */
  gmtEnqueuedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * The range search for workload queue position change time.
   */
  gmtPositionModifiedTimeRange?: TimeRangeFilter;
  instanceId?: string;
  /**
   * @remarks
   * Searches only for nodes on the specified node.
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
   * The page number of the query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  position?: number;
  priority?: number;
  /**
   * @remarks
   * Specifies whether to display only the workloads associated with the current resource quota.
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
   * The status in the queue.
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
  useOversoldResource?: boolean;
  /**
   * @remarks
   * The list of user IDs.
   * 
   * @example
   * 290438938**,238290930**
   */
  userIds?: string;
  withHistoricalData?: boolean;
  /**
   * @remarks
   * The range search for workload creation time.
   */
  workloadCreatedTimeRange?: TimeRangeFilter;
  /**
   * @remarks
   * Queries the queuing information for specified workload IDs.
   * 
   * @example
   * dlc123445**
   */
  workloadIds?: string;
  workloadNames?: string;
  /**
   * @remarks
   * Filters by workload status.
   * 
   * @example
   * Pending
   */
  workloadStatuses?: string;
  /**
   * @remarks
   * Queries the queuing information for instances of a specified sub-product.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @remarks
   * Queries the queuing information for workloads in a specified workspace.
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

