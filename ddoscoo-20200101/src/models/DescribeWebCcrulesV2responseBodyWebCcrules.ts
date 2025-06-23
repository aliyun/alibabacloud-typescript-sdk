// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail } from "./DescribeWebCcrulesV2responseBodyWebCcrulesRuleDetail";


export class DescribeWebCCRulesV2ResponseBodyWebCCRules extends $dara.Model {
  /**
   * @remarks
   * The validity period of the rule. Unit: seconds. If the Action parameter is set to block, the system blocks the requests that match the rule within the validity period of the rule. The value 0 indicates that the rule is permanently valid.
   * 
   * @example
   * 0
   */
  expires?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * wq
   */
  name?: string;
  /**
   * @remarks
   * The method used to create the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **clover**: automatically created.
   * 
   * @example
   * manual
   */
  owner?: string;
  /**
   * @remarks
   * The details of the rule.
   */
  ruleDetail?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail;
  static names(): { [key: string]: string } {
    return {
      expires: 'Expires',
      name: 'Name',
      owner: 'Owner',
      ruleDetail: 'RuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expires: 'number',
      name: 'string',
      owner: 'string',
      ruleDetail: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail,
    };
  }

  validate() {
    if(this.ruleDetail && typeof (this.ruleDetail as any).validate === 'function') {
      (this.ruleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

