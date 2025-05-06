// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList } from "./DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList";


export class DeleteAggregateConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The details of the result.
   */
  operateRuleItemList?: DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

