// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomizeReportRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the security report that you want to export. Valid values:
   * 
   * *   **HTML**
   * *   **PDF**
   * 
   * >  The default value is HTML. PDF is supported only for security reports in version 2.0.0.
   * 
   * @example
   * HTML
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the security report.
   * 
   * >  You can call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

