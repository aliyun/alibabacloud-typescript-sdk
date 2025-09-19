// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomizeReportStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the report is pinned. Unit: milliseconds.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The ID of the report.
   * 
   * >  You can call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  static names(): { [key: string]: string } {
    return {
      pinnedTime: 'PinnedTime',
      reportId: 'ReportId',
      reportStatus: 'ReportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pinnedTime: 'number',
      reportId: 'number',
      reportStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

