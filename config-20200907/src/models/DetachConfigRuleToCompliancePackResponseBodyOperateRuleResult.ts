// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList } from "./DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList";


export class DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the operation to remove the rule.
   */
  operateRuleItemList?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
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

