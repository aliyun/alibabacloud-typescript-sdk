// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryAgAccountResponseBodyAgAccounts extends $dara.Model {
  loginEmail?: string;
  pk?: string;
  showNickName?: string;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      pk: 'Pk',
      showNickName: 'ShowNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      pk: 'string',
      showNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryAgAccountResponseBody extends $dara.Model {
  agAccounts?: BatchQueryAgAccountResponseBodyAgAccounts[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agAccounts: 'AgAccounts',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccounts: { 'type': 'array', 'itemType': BatchQueryAgAccountResponseBodyAgAccounts },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.agAccounts)) {
      $dara.Model.validateArray(this.agAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

