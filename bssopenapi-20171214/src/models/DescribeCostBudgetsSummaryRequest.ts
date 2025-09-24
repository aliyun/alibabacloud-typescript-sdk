// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostBudgetsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the budget. Fuzzy match is supported.
   * 
   * @example
   * Annual budget
   */
  budgetName?: string;
  /**
   * @remarks
   * The status of the budget. Valid values: overdue and notOverdue. A value of overdue specifies to filter expired budgets. A value of notOverdue specifies to filter budgets that do not expire. By default, if you do not specify this parameter, information about all budgets is to be returned.
   * 
   * @example
   * notOverdue
   */
  budgetStatus?: string;
  /**
   * @remarks
   * The type of the budget. Valid values: cost, byquantity, and asset. A value of cost specifies to filter expense budgets. A value of byquantity specifies to filter budgets calculated based on the resource usage. A value of asset specifies to filter usage or coverage budgets. By default, information about all budgets is returned if you do not specify this parameter.
   * 
   * @example
   * cost
   */
  budgetType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The position in which the query starts. You must set this parameter to null or the token that is obtained from the previous query. Otherwise, an error is returned. If you set the NextToken parameter to null, the query starts from the beginning. The default value is null.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

