// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserQueryResponseBodyModule extends $dara.Model {
  birthday?: string;
  corpId?: string;
  email?: string;
  externalUserId?: string;
  phone?: string;
  realName?: string;
  realNameEn?: string;
  userId?: string;
  userNick?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      corpId: 'corp_id',
      email: 'email',
      externalUserId: 'external_user_id',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      userId: 'user_id',
      userNick: 'user_nick',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      corpId: 'string',
      email: 'string',
      externalUserId: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
      userId: 'string',
      userNick: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExternalUserQueryResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  module?: ExternalUserQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      module: ExternalUserQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

