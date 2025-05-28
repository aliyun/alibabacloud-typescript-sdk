// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetSavingPlanUserDeductRuleRequestEcIdAccountIds } from "./SetSavingPlanUserDeductRuleRequestEcIdAccountIds";
import { SetSavingPlanUserDeductRuleRequestUserDeductRules } from "./SetSavingPlanUserDeductRuleRequestUserDeductRules";


export class SetSavingPlanUserDeductRuleRequest extends $dara.Model {
  ecIdAccountIds?: SetSavingPlanUserDeductRuleRequestEcIdAccountIds[];
  nbid?: string;
  spnInstanceCode?: string;
  userDeductRules?: SetSavingPlanUserDeductRuleRequestUserDeductRules[];
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      spnInstanceCode: 'SpnInstanceCode',
      userDeductRules: 'UserDeductRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': SetSavingPlanUserDeductRuleRequestEcIdAccountIds },
      nbid: 'string',
      spnInstanceCode: 'string',
      userDeductRules: { 'type': 'array', 'itemType': SetSavingPlanUserDeductRuleRequestUserDeductRules },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.userDeductRules)) {
      $dara.Model.validateArray(this.userDeductRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

