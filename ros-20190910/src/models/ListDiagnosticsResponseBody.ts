// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticsResponseBodyDiagnostics extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic report was generated.
   * 
   * @example
   * 2022-08-01T02:23:55
   */
  createTime?: string;
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 047D84D9-D3EB-5DA8-87F1-9A7DD5598A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The product that is diagnosed.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-2963bfbcac834f1a****
   */
  reportId?: string;
  /**
   * @remarks
   * The diagnosis status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      reportId: 'ReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      reportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The items that are diagnosed.
   */
  diagnostics?: ListDiagnosticsResponseBodyDiagnostics[];
  /**
   * @remarks
   * The HTTP status code returned. The value 200 indicates that the request was successful.
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f01****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1983D1C4-88EA-5D7D-90AB-467D01867A5D
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
      diagnostics: 'Diagnostics',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnostics: { 'type': 'array', 'itemType': ListDiagnosticsResponseBodyDiagnostics },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnostics)) {
      $dara.Model.validateArray(this.diagnostics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

