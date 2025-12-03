// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileResponseBodyResult extends $dara.Model {
  /**
   * @example
   * master
   */
  branchName?: string;
  /**
   * @example
   * src/main/update.txt
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

export class UpdateFileResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * C2F153F6-BB43-50C4-9F4F-40593203E19A
   */
  requestId?: string;
  result?: UpdateFileResponseBodyResult;
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
      result: UpdateFileResponseBodyResult,
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

