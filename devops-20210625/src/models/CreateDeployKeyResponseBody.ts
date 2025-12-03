// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeployKeyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * xx:xx:xx:xx
   */
  fingerprint?: string;
  /**
   * @example
   * 502385
   */
  id?: number;
  /**
   * @example
   * ""
   */
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      fingerprint: 'fingerprint',
      id: 'id',
      key: 'key',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      fingerprint: 'string',
      id: 'number',
      key: 'string',
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

export class CreateDeployKeyResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: CreateDeployKeyResponseBodyResult;
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
      result: CreateDeployKeyResponseBodyResult,
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

