// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubAccountInfoResultSubAccountInfos extends $dara.Model {
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountInfoResult extends $dara.Model {
  subAccountInfos?: ListSubAccountInfoResultSubAccountInfos[];
  static names(): { [key: string]: string } {
    return {
      subAccountInfos: 'subAccountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subAccountInfos: { 'type': 'array', 'itemType': ListSubAccountInfoResultSubAccountInfos },
    };
  }

  validate() {
    if(Array.isArray(this.subAccountInfos)) {
      $dara.Model.validateArray(this.subAccountInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

