// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleActionRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * - **deny**: Blocks the request.
   * 
   * - **js**: Performs a JavaScript challenge.
   * 
   * - **observe**: Monitors the request.
   * 
   * This parameter is required.
   * 
   * @example
   * js
   */
  ruleAction?: string;
  /**
   * @remarks
   * The IDs of the rules to be managed. Separate multiple IDs with commas (,).
   * > You can call the [DescribeHttpDDoSAttackRules](~~DescribeHttpDDoSAttackRules~~) operation to query the IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  ruleIds?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the ID.
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

