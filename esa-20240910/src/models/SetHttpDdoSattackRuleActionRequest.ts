// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleActionRequest extends $dara.Model {
  /**
   * @remarks
   * Rule action, with values:
   * 
   * - **deny**: Block.
   * 
   * - **js**: JS Verification.
   * 
   * - **observe**: Observe.
   * 
   * This parameter is required.
   * 
   * @example
   * js
   */
  ruleAction?: string;
  /**
   * @remarks
   * List of rule IDs to be operated on, separated by English commas (,).
   * > You can call the [DescribeHttpDDoSAttackRules](~~DescribeHttpDDoSAttackRules~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  ruleIds?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleAction: 'RuleAction',
      ruleIds: 'RuleIds',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleAction: 'string',
      ruleIds: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

