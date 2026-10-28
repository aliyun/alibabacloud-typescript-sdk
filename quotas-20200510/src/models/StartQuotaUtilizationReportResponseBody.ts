// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartQuotaUtilizationReportResponseBody extends $dara.Model {
  /**
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @example
   * Quota utilization report generation has started
   */
  message?: string;
  /**
   * @example
   * 2026-10-26T08:00:00Z
   */
  nextRefreshTime?: string;
  /**
   * @example
   * true
   */
  refreshSuccess?: boolean;
  /**
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      nextRefreshTime: 'NextRefreshTime',
      refreshSuccess: 'RefreshSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      nextRefreshTime: 'string',
      refreshSuccess: 'boolean',
      requestId: 'string',
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

