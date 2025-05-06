// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList } from "./DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList";


export class DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the operation to remove the rule.
   */
  operateRuleItemList?: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  validate() {
    if(Array.isArray(this.operateRuleItemList)) {
      $dara.Model.validateArray(this.operateRuleItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

