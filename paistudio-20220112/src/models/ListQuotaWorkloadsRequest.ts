// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRangeFilter } from "./TimeRangeFilter";


export class ListQuotaWorkloadsRequest extends $dara.Model {
  /**
   * @example
   * dsw65443322
   */
  beforeWorkloadId?: string;
  gmtDequeuedTimeRange?: TimeRangeFilter;
  gmtEnqueuedTimeRange?: TimeRangeFilter;
  gmtPositionModifiedTimeRange?: TimeRangeFilter;
  /**
   * @example
   * lrn48278127617
   */
  nodeName?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @example
   * quota12344666,quota64432233
   */
  subQuotaIds?: string;
  /**
   * @example
   * 29043893812,23829093093
   */
  userIds?: string;
  withHistoricalData?: boolean;
  workloadCreatedTimeRange?: TimeRangeFilter;
  /**
   * @example
   * dlc12344556
   */
  workloadIds?: string;
  /**
   * @example
   * Pending
   */
  workloadStatuses?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @example
   * 186692
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      beforeWorkloadId: 'BeforeWorkloadId',
      gmtDequeuedTimeRange: 'GmtDequeuedTimeRange',
      gmtEnqueuedTimeRange: 'GmtEnqueuedTimeRange',
      gmtPositionModifiedTimeRange: 'GmtPositionModifiedTimeRange',
      nodeName: 'NodeName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      status: 'Status',
      subQuotaIds: 'SubQuotaIds',
      userIds: 'UserIds',
      withHistoricalData: 'WithHistoricalData',
      workloadCreatedTimeRange: 'WorkloadCreatedTimeRange',
      workloadIds: 'WorkloadIds',
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
      nodeName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      showOwn: 'boolean',
      sortBy: 'string',
      status: 'string',
      subQuotaIds: 'string',
      userIds: 'string',
      withHistoricalData: 'boolean',
      workloadCreatedTimeRange: TimeRangeFilter,
      workloadIds: 'string',
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

