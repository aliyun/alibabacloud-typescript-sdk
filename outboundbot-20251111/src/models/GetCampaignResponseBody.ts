// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCampaignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual end time.
   * 
   * @example
   * 1634054500000
   */
  actualEndTime?: number;
  /**
   * @remarks
   * The actual start time.
   * 
   * @example
   * 1634054400000
   */
  actualStartTime?: number;
  /**
   * @remarks
   * The campaign ID.
   * 
   * @example
   * 6ac878ab-115b-4170-a5d8-547481273364
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
   * 0.5
   */
  completedRate?: number;
  /**
   * @remarks
   * The time when the campaign was created.
   * 
   * @example
   * 1735660800000
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
   * Satisfaction Survey
   */
  name?: string;
  /**
   * @remarks
   * The list of caller numbers.
   */
  numbers?: string[];
  /**
   * @remarks
   * The planned end time.
   * 
   * @example
   * 1634054500000
   */
  plannedEndTime?: number;
  /**
   * @remarks
   * The planned start time.
   * 
   * @example
   * 1634054400000
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
   * The scenario ID.
   * 
   * @example
   * d13ad2d3-3fe6-4352-b38b-bd6559047de8
   */
  scriptId?: string;
  /**
   * @remarks
   * The campaign state.
   * 
   * @example
   * Completed
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
   * 1735660800000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The campaign weight.
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
      numbers: 'Numbers',
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
      numbers: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponseBody extends $dara.Model {
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
   * The details of the outbound campaign.
   */
  data?: GetCampaignResponseBodyData;
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
   * None
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
      data: GetCampaignResponseBodyData,
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

