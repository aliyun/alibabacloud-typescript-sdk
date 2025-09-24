// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSavingPlanUserDeductRuleShrinkRequest extends $dara.Model {
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  spnInstanceCode?: string;
  userDeductRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      spnInstanceCode: 'SpnInstanceCode',
      userDeductRulesShrink: 'UserDeductRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      spnInstanceCode: 'string',
      userDeductRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

