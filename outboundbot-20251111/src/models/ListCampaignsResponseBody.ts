// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The actual end time.
   * 
   * @example
   * 1634008800000
   */
  actualEndTime?: number;
  /**
   * @remarks
   * The actual start time.
   * 
   * @example
   * 1634008800000
   */
  actualStartTime?: number;
  /**
   * @remarks
   * The campaign ID.
   * 
   * @example
   * 7607dae1-91ad-47ea-ad76-3d81ac34f729
   */
  campaignId?: string;
  /**
   * @remarks
   * The number of aborted cases.
   * 
   * @example
   * 0
   */
  casesAborted?: number;
  /**
   * @remarks
   * The number of connected cases.
   * 
   * @example
   * 50
   */
  casesConnected?: number;
  /**
   * @remarks
   * The number of uncompleted cases.
   * 
   * @example
   * 0
   */
  casesUncompleted?: number;
  /**
   * @remarks
   * The number of cases that were attempted but not completed.
   * 
   * @example
   * 0
   */
  casesUncompletedAfterAttempted?: number;
  /**
   * @remarks
   * The completion rate.
   * 
   * @example
   * 100
   */
  completedRate?: number;
  /**
   * @remarks
   * The time when the campaign was created.
   * 
   * @example
   * 2025-07-27T11:25:15+08:00
   */
  createdTime?: number;
  /**
   * @remarks
   * The fixed number of concurrent calls.
   * 
   * @example
   * 0
   */
  fixedQuota?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 2
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * The minimum retry interval.
   * 
   * @example
   * 5
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The campaign name.
   * 
   * @example
   * Kiaconnect本月到期续费外呼话术-OPIO_20260727_102718
   */
  name?: string;
  /**
   * @remarks
   * The planned end time.
   * 
   * @example
   * 1634008800000
   */
  plannedEndTime?: number;
  /**
   * @remarks
   * The planned start time.
   * 
   * @example
   * 1634008800000
   */
  plannedStartTime?: number;
  /**
   * @remarks
   * Indicates whether the campaign continues to run until the planned end time after all contacts have been called.
   * 
   * @example
   * false
   */
  runUntilEndTime?: boolean;
  /**
   * @remarks
   * The IVR flow ID.
   * 
   * @example
   * 8a988bd4-6c6e-45c6-b3a5-3def5ca3bc6f
   */
  scriptId?: string;
  /**
   * @remarks
   * The campaign status.
   * 
   * @example
   * Executing
   */
  state?: string;
  /**
   * @remarks
   * The total number of cases.
   * 
   * @example
   * 100
   */
  totalCases?: number;
  /**
   * @remarks
   * The time when the campaign was last updated.
   * 
   * @example
   * 1760272478
   */
  updatedTime?: number;
  /**
   * @remarks
   * The weight of the campaign.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      campaignId: 'CampaignId',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      casesUncompletedAfterAttempted: 'CasesUncompletedAfterAttempted',
      completedRate: 'CompletedRate',
      createdTime: 'CreatedTime',
      fixedQuota: 'FixedQuota',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      runUntilEndTime: 'RunUntilEndTime',
      scriptId: 'ScriptId',
      state: 'State',
      totalCases: 'TotalCases',
      updatedTime: 'UpdatedTime',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'number',
      actualStartTime: 'number',
      campaignId: 'string',
      casesAborted: 'number',
      casesConnected: 'number',
      casesUncompleted: 'number',
      casesUncompletedAfterAttempted: 'number',
      completedRate: 'number',
      createdTime: 'number',
      fixedQuota: 'number',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      plannedEndTime: 'number',
      plannedStartTime: 'number',
      runUntilEndTime: 'boolean',
      scriptId: 'string',
      state: 'string',
      totalCases: 'number',
      updatedTime: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of outbound campaigns.
   */
  list?: ListCampaignsResponseBodyDataList[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCampaignsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paged query result.
   */
  data?: ListCampaignsResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The list of error message parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCampaignsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

