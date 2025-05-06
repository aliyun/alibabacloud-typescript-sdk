// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList } from "./DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList";


export class DeleteConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the delete operation.
   */
  operateRuleItemList?: DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

