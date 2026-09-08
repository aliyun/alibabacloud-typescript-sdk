// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The actual end time of the predictive dialing campaign. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634008800000
   */
  actualEndTime?: number;
  /**
   * @remarks
   * The actual start time of the predictive dialing campaign. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634000460000
   */
  actualStartTime?: number;
  /**
   * @remarks
   * The ID of the predictive dialing campaign.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * The number of aborted cases in the predictive dialing campaign. An aborted case indicates that the call to the contact was canceled.
   * 
   * @example
   * 0
   */
  casesAborted?: number;
  /**
   * @remarks
   * The number of connected cases in the predictive dialing campaign.
   * 
   * @example
   * 40
   */
  casesConnected?: number;
  /**
   * @remarks
   * The number of uncompleted cases in the predictive dialing campaign. An uncompleted case indicates that the call was not connected and the maximum number of retry attempts was not reached.
   * 
   * @example
   * 0
   */
  casesUncompleted?: number;
  /**
   * @remarks
   * The completion rate. This parameter is deprecated. You can calculate the completion rate by using the formula (TotalCases - CasesUnCompleted) / TotalCases.
   * 
   * @example
   * 无
   */
  completionRate?: number;
  /**
   * @remarks
   * The ID of the IVR contact flow associated with the phone number.
   * 
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The maximum number of attempts for the predictive dialing campaign. This value specifies the maximum number of redial attempts when a call to a number fails.
   * 
   * @example
   * 1
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * The minimum redial interval for the predictive dialing campaign. This value specifies the minimum interval between redial attempts after a failure. Unit: seconds.
   * 
   * @example
   * 1
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The name of the predictive dialing campaign.
   * 
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * The planned end time of the predictive dialing campaign. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634054400000
   */
  planedEndTime?: number;
  /**
   * @remarks
   * The planned start time of the predictive dialing campaign. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1633968000000
   */
  planedStartTime?: number;
  /**
   * @remarks
   * The ID of the associated skill group.
   * 
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * 测试技能组
   */
  queueName?: string;
  /**
   * @remarks
   * Indicates whether the campaign is a simulated campaign.
   * 
   * @example
   * false
   */
  simulation?: boolean;
  /**
   * @remarks
   * The state of the predictive dialing campaign.
   * 
   * @example
   * Completed
   */
  state?: string;
  /**
   * @remarks
   * The strategy parameters of the predictive dialing campaign. Example for the PID strategy: {"abandonRate":"5","historicalConnectedRate":"35"}. Example for the PACING strategy: {"ratio":1}. abandonRate specifies the expected call abandon rate. historicalConnectedRate specifies the historical reference connection rate. ratio specifies the fixed dialing ratio.
   * 
   * @example
   * {"ratio":1}
   */
  strategyParameters?: string;
  /**
   * @remarks
   * The strategy mode of the predictive dialing campaign.
   * 
   * @example
   * PACING
   */
  strategyType?: string;
  /**
   * @remarks
   * The total number of phone numbers.
   * 
   * @example
   * 100
   */
  totalCases?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      campaignId: 'CampaignId',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      completionRate: 'CompletionRate',
      contactFlowId: 'ContactFlowId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      planedEndTime: 'PlanedEndTime',
      planedStartTime: 'PlanedStartTime',
      queueId: 'QueueId',
      queueName: 'QueueName',
      simulation: 'Simulation',
      state: 'State',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
      totalCases: 'TotalCases',
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
      completionRate: 'number',
      contactFlowId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      planedEndTime: 'number',
      planedStartTime: 'number',
      queueId: 'string',
      queueName: 'string',
      simulation: 'boolean',
      state: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
      totalCases: 'number',
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
   * The list of predictive dialing campaigns.
   */
  list?: ListCampaignsResponseBodyDataList[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1
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
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0
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

