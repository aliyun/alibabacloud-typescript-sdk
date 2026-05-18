// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserAuthToMsceneResponseBodyMpaasUserAuthCheckResponse extends $dara.Model {
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  /**
   * @example
   * SUCCESS
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
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

