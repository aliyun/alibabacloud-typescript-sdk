// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRemediationExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-edd3626622af00b3****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-2792626622af0c21****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The status of the remediation. Valid values:
   * 
   * *   Success
   * *   Failed
   * 
   * @example
   * Success
   */
  executionStatus?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 10 to 100.
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
   * aVCjqFaSy0Ps6zSMGw09****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the member account in the account group. When left unfilled, this rule queries the remediation result for the account that created the rule. If the account is not in the account group, the result will be empty.
   * 
   * @example
   * 126672004088****
   */
  resourceAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      executionStatus: 'ExecutionStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceAccountId: 'ResourceAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

