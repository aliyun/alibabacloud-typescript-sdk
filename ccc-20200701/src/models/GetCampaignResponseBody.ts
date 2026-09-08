// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCampaignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual end time of the predictive outbound campaign. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1634008800000
   */
  actualEndTime?: number;
  /**
   * @remarks
   * The actual start time of the predictive outbound campaign. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1634000460000
   */
  actualStartTime?: number;
  /**
   * @remarks
   * The ID of the predictive outbound campaign.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * The number of aborted contacts.
   * 
   * @example
   * 0
   */
  casesAborted?: number;
  /**
   * @remarks
   * The number of connected contacts.
   * 
   * @example
   * 40
   */
  casesConnected?: number;
  /**
   * @remarks
   * The number of uncompleted contacts.
   * 
   * @example
   * 0
   */
  casesUncompleted?: number;
  casesUncompletedAfterAttempt?: string;
  /**
   * @remarks
   * The number of attempted but unconnected contacts that are still eligible for redial.
   * 
   * @example
   * 1
   */
  casesUncompletedAfterAttempted?: number;
  /**
   * @remarks
   * The ratio of connected contacts to the total number of contacts.
   */
  completionRate?: number;
  /**
   * @remarks
   * The ID of the associated Contact Flow.
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The maximum number of call attempts for each contact. If an attempt fails, the contact is redialed until this limit is reached.
   * 
   * @example
   * 1
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * The minimum interval, in seconds, to wait before redialing a failed call.
   * 
   * @example
   * 1
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The name of the predictive outbound campaign.
   * 
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * The planned end time of the predictive outbound campaign. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1634054400000
   */
  planedEndTime?: number;
  /**
   * @remarks
   * The planned start time of the predictive outbound campaign. This is a Unix timestamp in milliseconds.
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
   * The name of the associated skill group.
   * 
   * @example
   * 测试技能组
   */
  queueName?: string;
  /**
   * @remarks
   * Indicates whether the campaign is a test simulation. This parameter is not intended for production use.
   * 
   * @example
   * false
   */
  simulation?: boolean;
  /**
   * @remarks
   * The parameters for a test simulation. This parameter is not intended for production use.
   * 
   * @example
   * 无
   */
  simulationParameters?: string;
  /**
   * @remarks
   * The state of the predictive outbound campaign.
   * 
   * @example
   * Completed
   */
  state?: string;
  /**
   * @remarks
   * The strategy parameters for the predictive outbound campaign, in JSON format. For a `PID` strategy, the format is `{"abandonRate":"5","historicalConnectedRate":"35"}`. For a `PACING` strategy, the format is `{"ratio":1}`. `abandonRate` specifies the target abandon rate, `historicalConnectedRate` specifies the historical connection rate for reference, and `ratio` specifies the fixed dialing ratio.
   * 
   * @example
   * {"ratio":1}
   */
  strategyParameters?: string;
  /**
   * @remarks
   * The dialing strategy for the predictive outbound campaign.
   * 
   * @example
   * PACING
   */
  strategyType?: string;
  /**
   * @remarks
   * The total number of contacts.
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
      casesUncompletedAfterAttempt: 'CasesUncompletedAfterAttempt',
      casesUncompletedAfterAttempted: 'CasesUncompletedAfterAttempted',
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
      simulationParameters: 'SimulationParameters',
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
      casesUncompletedAfterAttempt: 'string',
      casesUncompletedAfterAttempted: 'number',
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
      simulationParameters: 'string',
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

export class GetCampaignResponseBody extends $dara.Model {
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
   * The data returned.
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
   * The request ID.
   * 
   * @example
   * 6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCampaignResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
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

