// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomizeReportRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the export. Valid values:
   * 
   * - **HTML**
   * - **PDF**
   * 
   * > Default value: HTML. PDF is supported only for security reports of version 2.0.0.
   * 
   * @example
   * HTML
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the security report.
   * > You can call [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource directory.
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      reportId: 'ReportId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      reportId: 'number',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

