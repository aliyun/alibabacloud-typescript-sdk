// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSolutionResponseBody extends $dara.Model {
  /**
   * @example
   * https://companyreg.console.aliyun.com/#/intention-notarize?Type=119&bizid=I20220114181457000001
   */
  confirmUrl?: string;
  /**
   * @example
   * NoPermission
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * 0A3CFCF5-E0C0-5C0B-A2ED-03827F16D85F
   */
  requestId?: string;
  /**
   * @example
   * S20211109140729000001
   */
  solutionBizId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      confirmUrl: 'ConfirmUrl',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      solutionBizId: 'SolutionBizId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmUrl: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      solutionBizId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

