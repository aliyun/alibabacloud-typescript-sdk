// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserKeyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  context?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  expireTime?: string;
  /**
   * @example
   * xxx
   */
  fingerPrint?: string;
  /**
   * @example
   * 50998
   */
  id?: number;
  /**
   * @example
   * ALL
   */
  keyScope?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastUsedTime?: string;
  /**
   * @example
   * xxx
   */
  publicKey?: string;
  /**
   * @example
   * xxx
   */
  shaContext?: string;
  title?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      createdAt: 'createdAt',
      expireTime: 'expireTime',
      fingerPrint: 'fingerPrint',
      id: 'id',
      keyScope: 'keyScope',
      lastUsedTime: 'lastUsedTime',
      publicKey: 'publicKey',
      shaContext: 'shaContext',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      createdAt: 'string',
      expireTime: 'string',
      fingerPrint: 'string',
      id: 'number',
      keyScope: 'string',
      lastUsedTime: 'string',
      publicKey: 'string',
      shaContext: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserKeyResponseBody extends $dara.Model {
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
  result?: DeleteUserKeyResponseBodyResult;
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
      result: DeleteUserKeyResponseBodyResult,
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

