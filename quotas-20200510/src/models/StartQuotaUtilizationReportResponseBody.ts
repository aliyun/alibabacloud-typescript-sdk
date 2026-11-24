// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartQuotaUtilizationReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The description of the request processing result, such as report generation started or the allowed refresh time not reached. Use RefreshSuccess to determine the submission result instead of relying on the prompt text for programmatic evaluation.
   * 
   * @example
   * Quota utilization report generation has started
   */
  message?: string;
  /**
   * @remarks
   * The UTC time when the next refresh can be initiated, in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format, such as 2026-10-26T08:00:00Z. This parameter is returned when a task is not submitted due to refresh limits. This parameter is empty when a task is successfully submitted.
   * 
   * @example
   * 2026-10-26T08:00:00Z
   */
  nextRefreshTime?: string;
  /**
   * @remarks
   * Indicates whether the report generation task was successfully submitted. A value of true indicates that the asynchronous task was submitted, but the report is not yet generated. A value of false indicates that the refresh limit period has not ended and no new task was submitted.
   * 
   * @example
   * true
   */
  refreshSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
   * 
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

