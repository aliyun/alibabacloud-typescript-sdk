// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileResponseBodyResult extends $dara.Model {
  /**
   * @example
   * master
   */
  branchName?: string;
  /**
   * @example
   * src/main/delete.java
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

export class DeleteFileResponseBody extends $dara.Model {
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
   * 7EFAD5FB-2296-5D52-BC60-FCC992A40767
   */
  requestId?: string;
  result?: DeleteFileResponseBodyResult;
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
      result: DeleteFileResponseBodyResult,
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

