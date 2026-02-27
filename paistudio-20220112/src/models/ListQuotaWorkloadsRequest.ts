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
  instanceId?: string;
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
  position?: number;
  priority?: number;
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
  useOversoldResource?: boolean;
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
  workloadNames?: string;
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

