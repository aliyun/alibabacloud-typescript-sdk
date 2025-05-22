// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The type of the item that is diagnosed.
   * 
   * @example
   * Stack
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-e94e39a1274d44b6****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 943B24D7-1A67-55A4-B045-818F90693D3A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      diagnosticType: 'DiagnosticType',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportId: 'ReportId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      diagnosticType: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

