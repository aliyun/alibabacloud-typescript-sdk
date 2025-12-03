// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBranchResponseBodyResult extends $dara.Model {
  /**
   * @example
   * deleteBranch
   */
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'branchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchResponseBody extends $dara.Model {
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
   * 6177543A-8D54-5736-A93B-E0195A1512CB
   */
  requestId?: string;
  result?: DeleteBranchResponseBodyResult;
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
      result: DeleteBranchResponseBodyResult,
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

