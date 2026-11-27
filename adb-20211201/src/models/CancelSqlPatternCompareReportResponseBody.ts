// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSqlPatternCompareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time of the first cancellation. The time is displayed in UTC in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2026-09-08T01:06Z
   */
  cancelTime?: string;
  /**
   * @remarks
   * Indicates whether the report is canceled. true is returned if the cancellation is successful or if the report is repeatedly canceled.
   * 
   * @example
   * true
   */
  canceled?: boolean;
  /**
   * @remarks
   * The ID of the SQL pattern comparison report.
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
      cancelTime: 'CancelTime',
      canceled: 'Canceled',
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      canceled: 'boolean',
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

