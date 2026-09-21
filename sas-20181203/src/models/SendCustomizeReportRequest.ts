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
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

