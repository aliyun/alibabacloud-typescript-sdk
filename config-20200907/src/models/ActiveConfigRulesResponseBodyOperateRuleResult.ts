// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList } from "./ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList";


export class ActiveConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  operateRuleItemList?: ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

