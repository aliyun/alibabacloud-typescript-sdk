// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Type of service report.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

