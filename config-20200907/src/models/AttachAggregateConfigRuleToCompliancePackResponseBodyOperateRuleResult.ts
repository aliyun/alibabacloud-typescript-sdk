// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList } from "./AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList";


export class AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the operation to add the rule.
   */
  operateRuleItemList?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
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

