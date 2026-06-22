// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomizeReportStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The pinning time. Unit: milliseconds.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The report ID.
   * >Call [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The report status. Valid values:
   *  - **0**: Disabled.
   *  - **1**: Enabled.
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

