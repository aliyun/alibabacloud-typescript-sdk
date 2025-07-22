// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanShareAccountsRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
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

export class GetSavingPlanShareAccountsRequest extends $dara.Model {
  currentPage?: number;
  ecIdAccountIds?: GetSavingPlanShareAccountsRequestEcIdAccountIds[];
  nbid?: string;
  pageSize?: number;
  spnInstanceCode?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      spnInstanceCode: 'SpnInstanceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': GetSavingPlanShareAccountsRequestEcIdAccountIds },
      nbid: 'string',
      pageSize: 'number',
      spnInstanceCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

