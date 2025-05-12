// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBenchmarkTaskReportRequest extends $dara.Model {
  /**
   * @remarks
   * The report type of the stress testing task. Valid values: RAW and Report.
   * 
   * @example
   * report
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

