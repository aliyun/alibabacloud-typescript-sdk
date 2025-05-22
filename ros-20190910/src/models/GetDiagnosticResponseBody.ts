// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDiagnosticResponseBodyDiagnosticResult } from "./GetDiagnosticResponseBodyDiagnosticResult";


export class GetDiagnosticResponseBody extends $dara.Model {
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
   * The keyword in the diagnosis.
   * 
   * @example
   * 0938F60C-A2CA-5A2E-9983-03EB1E6D7AE2
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The name of the diagnostic item.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The diagnosis result.
   */
  diagnosticResult?: GetDiagnosticResponseBodyDiagnosticResult;
  /**
   * @remarks
   * The time when the diagnosis was performed.
   * 
   * @example
   * 2023-03-27T03:32:03Z
   */
  diagnosticTime?: string;
  /**
   * @remarks
   * The HTTP status code
   * 
   * @example
   * 200
   */
  httpCode?: string;
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
   * The specified parameter ReportId is invalid, Can not find diagnostic report dr-5f6135782f104b0f****.
   */
  message?: string;
  /**
   * @remarks
   * The suggestion for the diagnosis.
   * 
   * @example
   * {\\"RosActionMessages\\": {\\"Reason\\": \\"Fail to delete stack (fc966920-450a-456b-983c-deeaec8e****), as deletion protection is enabled.\\", \\"Recommend\\": \\"\\"}}
   */
  recommends?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-cc80afc48c8741e9****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96A24844-9603-5E79-BDF4-EFD412FC5D4C
   */
  requestId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values:
   * 
   * *   Running: The diagnosis is in progress.
   * *   Complete: The diagnosis is complete.
   * *   Failed: The diagnosis failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The reason for the diagnosis status.
   * 
   * @example
   * Complete
   */
  statusReason?: string;
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
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      diagnosticResult: 'DiagnosticResult',
      diagnosticTime: 'DiagnosticTime',
      httpCode: 'HttpCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      recommends: 'Recommends',
      reportId: 'ReportId',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      diagnosticResult: GetDiagnosticResponseBodyDiagnosticResult,
      diagnosticTime: 'string',
      httpCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      recommends: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reportId: 'string',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.diagnosticResult && typeof (this.diagnosticResult as any).validate === 'function') {
      (this.diagnosticResult as any).validate();
    }
    if(this.recommends) {
      $dara.Model.validateMap(this.recommends);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

