// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanShareAccountsResponseBodyDataShareTimeList } from "./GetSavingPlanShareAccountsResponseBodyDataShareTimeList";


export class GetSavingPlanShareAccountsResponseBodyData extends $dara.Model {
  accountId?: string;
  aliUid?: number;
  shareTimeList?: GetSavingPlanShareAccountsResponseBodyDataShareTimeList[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aliUid: 'AliUid',
      shareTimeList: 'ShareTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      aliUid: 'number',
      shareTimeList: { 'type': 'array', 'itemType': GetSavingPlanShareAccountsResponseBodyDataShareTimeList },
    };
  }

  validate() {
    if(Array.isArray(this.shareTimeList)) {
      $dara.Model.validateArray(this.shareTimeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

