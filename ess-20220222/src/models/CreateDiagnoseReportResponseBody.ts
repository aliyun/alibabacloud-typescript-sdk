// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnoseReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic report ID, which is the unique identifier of the resource diagnostic report.
   * 
   * @example
   * dr-uf6enpbnri1xhcy9qc7s
   */
  reportId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0189C6CB-07BA-5AFE-B533-D93892324774
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

