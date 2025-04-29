// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportsResponseBodyHistoryReports extends $dara.Model {
  /**
   * @remarks
   * Application name.
   * 
   * @example
   * default
   */
  appName?: string;
  /**
   * @remarks
   * Report ID.
   * 
   * @example
   * report-e19c7b597f5fXX
   */
  reportId?: string;
  /**
   * @remarks
   * Report name.
   * 
   * @example
   * default-2024-09-30~2024-10-07-Usage Report
   */
  reportName?: string;
  /**
   * @remarks
   * Report generation time.
   * 
   * @example
   * 2024-10-07T02:09:17Z
   */
  reportTime?: string;
  /**
   * @remarks
   * Report subscription period.
   * 
   * @example
   * Weekly
   */
  subscribePeriod?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportTime: 'ReportTime',
      subscribePeriod: 'SubscribePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      reportId: 'string',
      reportName: 'string',
      reportTime: 'string',
      subscribePeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

