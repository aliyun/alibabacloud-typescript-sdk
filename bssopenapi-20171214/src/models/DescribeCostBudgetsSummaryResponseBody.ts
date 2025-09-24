// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostBudgetsSummaryResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The information about the budget. The BudgetCycleType parameter indicates the cycle of the budget. Valid values: daily, monthly, quarterly, and yearly. The TotalBudgetAmount parameter indicates the total budget. The BudgetMemo parameter indicates the remarks of the budget.
   * 
   * @example
   * {           "budgetCycleType": "monthly",           "budgetMemo": "",           "totalBudgetAmount": 220         }
   */
  budget?: { [key: string]: any };
  /**
   * @remarks
   * The name of the budget.
   * 
   * @example
   * Annual budget
   */
  budgetName?: string;
  /**
   * @remarks
   * The status of the budget.
   * 
   * @example
   * overdue
   */
  budgetStatus?: string;
  /**
   * @remarks
   * The type of the budget.
   * 
   * @example
   * cost
   */
  budgetType?: string;
  /**
   * @remarks
   * The information about the estimate-to-actual analysis. The ActualConsumeSum parameter indicates the accumulated actual value. The ActualAddForecastedAmount parameter indicates the sum of accumulated actual value and predicted value. If the BudgetType parameter is set to cost, the sum of actual value and predicted value includes the actual cost incurred from the budget start date to the current date and the predicted cost from the current date to the budget end date. If the BudgetType parameter is set to asset, the sum of actual value and predicted value includes the actual usage or coverage from the budget start date to the budget end date. If the budget end date minus the current date is more than one year, the part that exceeds one year is not included. The ActualAndBudgetComparison parameter indicates the comparison between the actual value and the predicted value. The value of the ActualAndBudgetComparison parameter is calculated based on the following formula: Accumulated actual value/Total budget × 100%.
   * 
   * @example
   * {           "actualConsumeSum": 88.6,           "actualAddForecastedAmount": 89.6,           "actualAndBudgetComparison": "20.73%"         }
   */
  calculatedValues?: { [key: string]: any };
  /**
   * @remarks
   * The information about the billing cycle. The ConsumePeriodBegin parameter indicates the start date of the budget. The ConsumePeriodEnd parameter indicates the end date of the budget.
   * 
   * @example
   * {           "consumePeriodBegin": "2022-10",           "consumePeriodEnd": "2022-11"         }
   */
  consumePeriod?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      budget: 'Budget',
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      calculatedValues: 'CalculatedValues',
      consumePeriod: 'ConsumePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      calculatedValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consumePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.budget) {
      $dara.Model.validateMap(this.budget);
    }
    if(this.calculatedValues) {
      $dara.Model.validateMap(this.calculatedValues);
    }
    if(this.consumePeriod) {
      $dara.Model.validateMap(this.consumePeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The site of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  items?: DescribeCostBudgetsSummaryResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries that are returned.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': DescribeCostBudgetsSummaryResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeCostBudgetsSummaryResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BFC23FE-A182-4D96-A1E4-7521B30B8E43
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCostBudgetsSummaryResponseBodyData,
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

