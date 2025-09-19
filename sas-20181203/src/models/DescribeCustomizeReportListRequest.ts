// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * Specifies whether to pin the report. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  pinned?: boolean;
  /**
   * @remarks
   * The state of the report. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The type of the report. Valid values:
   * 
   * *   **0**: daily report
   * *   **1**: weekly report
   * *   **2**: monthly report
   * *   **3**: report whose statistics are collected in a custom time range
   * 
   * @example
   * 0
   */
  reportType?: number;
  /**
   * @remarks
   * The report version. Valid values:
   * 
   * *   **1.0.0**
   * *   **2.0.0**
   * 
   * @example
   * 2.0.0
   */
  reportVersion?: string;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pinned: 'Pinned',
      reportStatus: 'ReportStatus',
      reportType: 'ReportType',
      reportVersion: 'ReportVersion',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pinned: 'boolean',
      reportStatus: 'number',
      reportType: 'number',
      reportVersion: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

