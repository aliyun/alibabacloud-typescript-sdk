// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCustomizeReportRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

