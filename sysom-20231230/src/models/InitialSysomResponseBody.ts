// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitialSysomResponseBodyData extends $dara.Model {
  roleExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      roleExist: 'role_exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleExist: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitialSysomResponseBody extends $dara.Model {
  requestId?: string;
  code?: string;
  data?: InitialSysomResponseBodyData;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: InitialSysomResponseBodyData,
      message: 'string',
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

