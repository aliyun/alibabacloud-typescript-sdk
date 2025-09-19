// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code of the report. Valid value:
   * 
   * *   **customize_report**
   * 
   * This parameter is required.
   * 
   * @example
   * customize_report
   */
  projectCode?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * >  You can call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to query the ID.
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

