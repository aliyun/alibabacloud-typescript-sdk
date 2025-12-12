// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

