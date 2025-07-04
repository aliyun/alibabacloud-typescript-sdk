// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * 10166270
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8DA8956A-53DA-423E-9540-387428ED37FF-5711
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
      reportId: 'string',
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

