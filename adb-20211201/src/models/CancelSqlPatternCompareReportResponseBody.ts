// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSqlPatternCompareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the report was first canceled. The time is in UTC in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2026-09-08T01:06Z
   */
  cancelTime?: string;
  /**
   * @remarks
   * Indicates whether the report is canceled. The value true is returned when the report is successfully canceled or canceled again.
   * 
   * @example
   * true
   */
  canceled?: boolean;
  /**
   * @remarks
   * The SQL Pattern comparison report ID.
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

