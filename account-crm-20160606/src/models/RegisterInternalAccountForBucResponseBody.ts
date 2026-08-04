// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterInternalAccountForBucResponseBodyData extends $dara.Model {
  accountStatus?: string;
  accountStructure?: string;
  extendInfo?: string;
  havanaId?: string;
  lastLoginTime?: string;
  ownerBid?: string;
  parentPk?: string;
  partnerPk?: string;
  pk?: string;
  site?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      accountStructure: 'AccountStructure',
      extendInfo: 'ExtendInfo',
      havanaId: 'HavanaId',
      lastLoginTime: 'LastLoginTime',
      ownerBid: 'OwnerBid',
      parentPk: 'ParentPk',
      partnerPk: 'PartnerPk',
      pk: 'Pk',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountStructure: 'string',
      extendInfo: 'string',
      havanaId: 'string',
      lastLoginTime: 'string',
      ownerBid: 'string',
      parentPk: 'string',
      partnerPk: 'string',
      pk: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInternalAccountForBucResponseBody extends $dara.Model {
  code?: string;
  data?: RegisterInternalAccountForBucResponseBodyData;
  localizedMessage?: string;
  message?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      localizedMessage: 'LocalizedMessage',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RegisterInternalAccountForBucResponseBodyData,
      localizedMessage: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

