// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The project code. Valid values:
   * 
   * - **customize_report**: custom report.
   * 
   * This parameter is required.
   * 
   * @example
   * customize_report
   */
  projectCode?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * > Call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to obtain this parameter.
   * 
   * @example
   * 720549
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      projectCode: 'ProjectCode',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      projectCode: 'string',
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

