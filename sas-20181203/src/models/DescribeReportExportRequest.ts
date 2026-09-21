// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReportExportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task. Obtain this ID by following these steps:
   * 
   * 1. Call [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) to obtain the ReportId.
   * 2. Pass the ReportId to [ExportCustomizeReport](~~ExportCustomizeReport~~) to obtain the ExportId from the response.
   * 3. Pass the ExportId to this operation to query the export status.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  exportId?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
      lang: 'string',
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

