// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the diagnostic report.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
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

