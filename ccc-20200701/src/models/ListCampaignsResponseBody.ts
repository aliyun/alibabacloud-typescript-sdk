// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1634008800000
   */
  actualEndTime?: number;
  /**
   * @example
   * 1634000460000
   */
  actualStartTime?: number;
  /**
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @example
   * 0
   */
  casesAborted?: number;
  /**
   * @example
   * 40
   */
  casesConnected?: number;
  /**
   * @example
   * 0
   */
  casesUncompleted?: number;
  completionRate?: number;
  contactFlowId?: string;
  /**
   * @example
   * 1
   */
  maxAttemptCount?: number;
  /**
   * @example
   * 1
   */
  minAttemptInterval?: number;
  /**
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @example
   * 1634054400000
   */
  planedEndTime?: number;
  /**
   * @example
   * 1633968000000
   */
  planedStartTime?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  queueName?: string;
  /**
   * @example
   * false
   */
  simulation?: boolean;
  /**
   * @example
   * Completed
   */
  state?: string;
  /**
   * @example
   * {"ratio":1}
   */
  strategyParameters?: string;
  /**
   * @example
   * PACING
   */
  strategyType?: string;
  /**
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
  list?: ListCampaignsResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCampaignsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0
   */
  requestId?: string;
  /**
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

