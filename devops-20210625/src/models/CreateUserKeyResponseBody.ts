// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserKeyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  createdAt?: string;
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  expireTime?: string;
  /**
   * @example
   * xxx
   */
  fingerPrint?: string;
  /**
   * @example
   * 11072
   */
  id?: number;
  /**
   * @example
   * ALL
   */
  keyScope?: string;
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  lastUsedTime?: string;
  /**
   * @example
   * xxx
   */
  publicKey?: string;
  /**
   * @example
   * My Title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      expireTime: 'expireTime',
      fingerPrint: 'fingerPrint',
      id: 'id',
      keyScope: 'keyScope',
      lastUsedTime: 'lastUsedTime',
      publicKey: 'publicKey',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      expireTime: 'string',
      fingerPrint: 'string',
      id: 'number',
      keyScope: 'string',
      lastUsedTime: 'string',
      publicKey: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserKeyResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: CreateUserKeyResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
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
      result: CreateUserKeyResponseBodyResult,
      success: 'boolean',
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

