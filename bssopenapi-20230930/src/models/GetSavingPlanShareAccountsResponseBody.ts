// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanShareAccountsResponseBodyDataShareTimeList extends $dara.Model {
  shareEndTime?: string;
  shareStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      shareEndTime: 'ShareEndTime',
      shareStartTime: 'ShareStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareEndTime: 'string',
      shareStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetSavingPlanShareAccountsResponseBody extends $dara.Model {
  data?: GetSavingPlanShareAccountsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSavingPlanShareAccountsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

