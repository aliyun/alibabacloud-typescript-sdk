// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanUserDeductRuleShrinkRequest extends $dara.Model {
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  pageSize?: number;
  spnInstanceCode?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      spnInstanceCode: 'SpnInstanceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      pageSize: 'number',
      spnInstanceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

