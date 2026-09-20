// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineStatusesResponseBodyDataBaselineStatuses extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
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
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY.
   * 
   * @example
   * BaselineType
   */
  baselineType?: string;
  /**
   * @remarks
   * The business date timestamp.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The buffer time of the baseline instance, in seconds.
   * 
   * @example
   * 1800
   */
  buffer?: number;
  /**
   * @remarks
   * The estimated completion time of the baseline instance.
   * 
   * @example
   * 1553531400000
   */
  endCast?: number;
  /**
   * @remarks
   * The warning time of the baseline instance.
   * 
   * The format is a 13-digit number, such as `1553531400000`.
   * 
   * @example
   * 1553531400000
   */
  expTime?: number;
  /**
   * @remarks
   * The completion status of the baseline instance. Valid values: UNFINISH and FINISH.
   * 
   * @example
   * UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The completion timestamp of the baseline instance. This parameter is returned only when FinishStatus is FINISH.
   * 
   * @example
   * 1553531400000
   */
  finishTime?: number;
  /**
   * @remarks
   * The cycle number of the baseline instance. The value is 1 for daily baselines. The value ranges from 1 to 24 for hourly baselines.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the baseline owner. Separate multiple owners with commas (,).
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workspace where the baseline resides.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The actual completion time of the baseline instance.
   * 
   * The format is a 13-digit number, such as `1553531400000`.
   * 
   * @example
   * 1553531400000
   */
  slaTime?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGEROUS, and OVER.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The list of baseline instances returned.
   */
  data?: ListBaselineStatusesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

