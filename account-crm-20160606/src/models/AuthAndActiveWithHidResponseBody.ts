// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthAndActiveWithHidResponseBodyDataAccountModel extends $dara.Model {
  aliyunId?: string;
  createTime?: number;
  email?: string;
  havanaId?: number;
  mobile?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      createTime: 'CreateTime',
      email: 'Email',
      havanaId: 'HavanaId',
      mobile: 'Mobile',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      createTime: 'number',
      email: 'string',
      havanaId: 'number',
      mobile: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthAndActiveWithHidResponseBodyDataSessionModel extends $dara.Model {
  aliyunPK?: string;
  loginTicket?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPK: 'AliyunPK',
      loginTicket: 'LoginTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPK: 'string',
      loginTicket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthAndActiveWithHidResponseBodyData extends $dara.Model {
  accountModel?: AuthAndActiveWithHidResponseBodyDataAccountModel;
  sessionModel?: AuthAndActiveWithHidResponseBodyDataSessionModel;
  static names(): { [key: string]: string } {
    return {
      accountModel: 'AccountModel',
      sessionModel: 'SessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountModel: AuthAndActiveWithHidResponseBodyDataAccountModel,
      sessionModel: AuthAndActiveWithHidResponseBodyDataSessionModel,
    };
  }

  validate() {
    if(this.accountModel && typeof (this.accountModel as any).validate === 'function') {
      (this.accountModel as any).validate();
    }
    if(this.sessionModel && typeof (this.sessionModel as any).validate === 'function') {
      (this.sessionModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthAndActiveWithHidResponseBody extends $dara.Model {
  code?: string;
  data?: AuthAndActiveWithHidResponseBodyData;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AuthAndActiveWithHidResponseBodyData,
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

