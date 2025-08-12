// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMetricRulesRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The IDs of the alert rules.
   * 
   * Valid values of N: 1 to 100.
   * 
   * For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ab05733c97b7ce239fb1b53393dc1697c123****
   */
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleId)) {
      $dara.Model.validateArray(this.ruleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

