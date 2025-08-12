// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTargetsRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ae06917_75a8c43178ab66****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

