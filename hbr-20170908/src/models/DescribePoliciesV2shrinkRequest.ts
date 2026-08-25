// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePoliciesV2ShrinkRequest extends $dara.Model {
  accountScope?: string;
  accountsShrink?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token required to retrieve the next page of policies.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000************2l6
   */
  policyId?: string;
  ruleScope?: string;
  static names(): { [key: string]: string } {
    return {
      accountScope: 'AccountScope',
      accountsShrink: 'Accounts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      ruleScope: 'RuleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScope: 'string',
      accountsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      ruleScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

