// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList } from "./AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList";


export class AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the operation to add the rule.
   */
  operateRuleItemList?: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
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

