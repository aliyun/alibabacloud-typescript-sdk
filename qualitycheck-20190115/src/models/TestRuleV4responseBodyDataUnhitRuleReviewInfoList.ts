// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";


export class TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList extends $dara.Model {
  conditionInfoList?: ConditionBasicInfo[];
  /**
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @example
   * 2
   */
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      conditionInfoList: 'ConditionInfoList',
      matched: 'Matched',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      matched: 'boolean',
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionInfoList)) {
      $dara.Model.validateArray(this.conditionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

