// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileResponseBodyResult extends $dara.Model {
  /**
   * @example
   * master
   */
  branchName?: string;
  /**
   * @example
   * /src/main/test.java
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'branchName',
      filePath: 'filePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $dara.Model {
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
   * F8053E32-9623-511F-8B46-F0E5FD206524
   */
  requestId?: string;
  result?: CreateFileResponseBodyResult;
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
      result: CreateFileResponseBodyResult,
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

