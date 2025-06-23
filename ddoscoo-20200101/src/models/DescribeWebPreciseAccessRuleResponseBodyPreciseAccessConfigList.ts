// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList } from "./DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList";


export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The scheduling rules.
   */
  ruleList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

