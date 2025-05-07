// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange } from "./GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange";
import { GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators } from "./GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators";


export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfo extends $dara.Model {
  checkRange?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange;
  /**
   * @example
   * 7
   */
  conditionInfoCid?: string;
  /**
   * @example
   * 7
   */
  operLambda?: string;
  operators?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'CheckRange',
      conditionInfoCid: 'ConditionInfoCid',
      operLambda: 'OperLambda',
      operators: 'Operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange,
      conditionInfoCid: 'string',
      operLambda: 'string',
      operators: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators,
    };
  }

  validate() {
    if(this.checkRange && typeof (this.checkRange as any).validate === 'function') {
      (this.checkRange as any).validate();
    }
    if(this.operators && typeof (this.operators as any).validate === 'function') {
      (this.operators as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

