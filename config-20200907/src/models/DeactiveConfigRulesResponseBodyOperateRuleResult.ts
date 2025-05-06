// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList } from "./DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList";


export class DeactiveConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The operations that are performed to disable the rule.
   */
  operateRuleItemList?: DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

