// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether the report is pinned to the top. Valid values:
   * - **false**: No.
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  pinned?: boolean;
  /**
   * @remarks
   * The report status. Valid values:
   *  - **0**: Disabled.
   *  - **1**: Enabled.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The report type. Valid values:
   * 
   * - **0**: Daily report.
   * - **1**: Weekly report.
   * - **2**: Monthly report.
   * - **3**: Custom period.
   * 
   * @example
   * 0
   */
  reportType?: number;
  /**
   * @remarks
   * The security report version. Valid values:
   * - **1.0.0**
   * - **2.0.0**
   * 
   * @example
   * 2.0.0
   */
  reportVersion?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource directory folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The report name.
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

