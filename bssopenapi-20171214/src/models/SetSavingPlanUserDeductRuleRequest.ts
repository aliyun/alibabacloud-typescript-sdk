// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSavingPlanUserDeductRuleRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleRequestUserDeductRules extends $dara.Model {
  commodityCode?: string;
  moduleCode?: string;
  skipDeduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      moduleCode: 'ModuleCode',
      skipDeduct: 'SkipDeduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      moduleCode: 'string',
      skipDeduct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

