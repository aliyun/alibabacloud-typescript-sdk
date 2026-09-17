// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlPatternCompareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created report. This value only indicates that the request has been accepted.
   * 
   * @example
   * 1001
   */
  reportId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1B2C3D-4E5F-6789-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

