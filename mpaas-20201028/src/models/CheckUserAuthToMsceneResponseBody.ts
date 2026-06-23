// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserAuthToMsceneResponseBodyMpaasUserAuthCheckResponse extends $dara.Model {
  matched?: boolean;
  static names(): { [key: string]: string } {
    return {
      matched: 'Matched',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matched: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserAuthToMsceneResponseBody extends $dara.Model {
  mpaasUserAuthCheckResponse?: CheckUserAuthToMsceneResponseBodyMpaasUserAuthCheckResponse;
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasUserAuthCheckResponse: 'MpaasUserAuthCheckResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasUserAuthCheckResponse: CheckUserAuthToMsceneResponseBodyMpaasUserAuthCheckResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasUserAuthCheckResponse && typeof (this.mpaasUserAuthCheckResponse as any).validate === 'function') {
      (this.mpaasUserAuthCheckResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

