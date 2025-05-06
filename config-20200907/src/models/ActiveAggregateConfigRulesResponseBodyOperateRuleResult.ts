// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList } from "./ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList";


export class ActiveAggregateConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result information about the operation.
   */
  operateRuleItemList?: ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

