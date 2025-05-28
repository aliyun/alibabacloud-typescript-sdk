// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanShareAccountsRequestEcIdAccountIds } from "./GetSavingPlanShareAccountsRequestEcIdAccountIds";


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

