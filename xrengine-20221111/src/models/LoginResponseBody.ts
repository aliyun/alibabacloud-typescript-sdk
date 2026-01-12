// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginResponseBodyData extends $dara.Model {
  jwtToken?: string;
  nickname?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      nickname: 'Nickname',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      nickname: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginResponseBody extends $dara.Model {
  code?: string;
  data?: LoginResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: LoginResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

