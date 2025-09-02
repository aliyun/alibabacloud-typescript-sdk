// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineStatusesResponseBodyDataBaselineStatuses extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline, including DAILY and HOURLY. Separate multiple types with commas (,).
   * 
   * @example
   * DAILY,HOURLY
   */
  baselineType?: string;
  /**
   * @remarks
   * The data timestamp.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The margin of the baseline instance. Unit: seconds.
   * 
   * @example
   * 1800
   */
  buffer?: number;
  /**
   * @remarks
   * The timestamp of the predicted time when the baseline instance finished running.
   * 
   * @example
   * 1553531400000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp of the alerting time of the baseline instance.
   * 
   * @example
   * 1553531400000
   */
  expTime?: number;
  /**
   * @remarks
   * The status of the baseline instance. Valid values: UNFINISH and FINISH.
   * 
   * @example
   * UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The timestamp of the actual time when the baseline instance finished running. This parameter is returned if the value of the FinishStatus parameter is FINISH.
   * 
   * @example
   * 1553531400000
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the cycle of the baseline instance. Valid values of the ID of an hour-level cycle: [1,24]. The ID of a day-level cycle is 1.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workspace to which the baseline belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The timestamp of the actual time when the baseline instance finished running.
   * 
   * @example
   * 1553531400000
   */
  slaTime?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGEROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes are run before the alert duration begins. The value DANGEROUS indicates that nodes are still running after the alert duration ends but the committed completion time does not arrive. The value OVER indicates that nodes are still running after the committed completion time.
   * 
   * @example
   * SAFE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      endCast: 'EndCast',
      expTime: 'ExpTime',
      finishStatus: 'FinishStatus',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaTime: 'SlaTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      bizdate: 'number',
      buffer: 'number',
      endCast: 'number',
      expTime: 'number',
      finishStatus: 'string',
      finishTime: 'number',
      inGroupId: 'number',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaTime: 'number',
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

export class ListBaselineStatusesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of baseline instances.
   */
  baselineStatuses?: ListBaselineStatusesResponseBodyDataBaselineStatuses[];
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
   * The total number of baseline instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      baselineStatuses: 'BaselineStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineStatuses: { 'type': 'array', 'itemType': ListBaselineStatusesResponseBodyDataBaselineStatuses },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baselineStatuses)) {
      $dara.Model.validateArray(this.baselineStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBaselineStatusesResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBaselineStatusesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

