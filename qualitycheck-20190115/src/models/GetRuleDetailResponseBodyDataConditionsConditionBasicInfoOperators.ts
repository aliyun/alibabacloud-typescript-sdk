// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo } from "./GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo";


export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators extends $dara.Model {
  operatorBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorBasicInfo: 'OperatorBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.operatorBasicInfo)) {
      $dara.Model.validateArray(this.operatorBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

