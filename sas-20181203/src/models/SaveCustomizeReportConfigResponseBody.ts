// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCustomizeReportConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11472B29-1A1C-5D7F-944B-7CD84319****
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

