// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TBAccountInfoQueryResponseBodyModule extends $dara.Model {
  tbAccount?: string;
  tbBond?: boolean;
  static names(): { [key: string]: string } {
    return {
      tbAccount: 'tb_account',
      tbBond: 'tb_bond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbAccount: 'string',
      tbBond: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TBAccountInfoQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TBAccountInfoQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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
      message: 'string',
      module: TBAccountInfoQueryResponseBodyModule,
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

