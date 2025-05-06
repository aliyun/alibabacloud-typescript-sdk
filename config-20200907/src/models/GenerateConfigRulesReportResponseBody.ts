// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateConfigRulesReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance evaluation report.
   * 
   * @example
   * crp-88176457e0d900c9****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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

