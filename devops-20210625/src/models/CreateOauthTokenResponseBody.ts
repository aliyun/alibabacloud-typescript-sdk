// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOAuthTokenResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2aeb4cd012af879e54f0d37dfa526f51
   */
  accessToken?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 30815
   */
  id?: string;
  /**
   * @example
   * read:repo
   */
  scope?: string;
  /**
   * @example
   * code
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      id: 'id',
      scope: 'scope',
      tokenType: 'tokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      id: 'string',
      scope: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOAuthTokenResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * C2F153F6-BB43-50C4-9F4F-40593203E19A
   */
  requestId?: string;
  result?: CreateOAuthTokenResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateOAuthTokenResponseBodyResult,
      success: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

