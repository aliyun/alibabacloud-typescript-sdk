// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiagnosticRequest extends $dara.Model {
  /**
   * @remarks
   * The report ID. You can troubleshoot issues based on the report.
   * 
   * @example
   * dr-56a0e30bf9854b00****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

