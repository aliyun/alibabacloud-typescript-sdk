// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportRequest extends $dara.Model {
  /**
   * @remarks
   * Optional, AppName only takes effect when ReportType=present.
   * 
   * @example
   * App1
   */
  appName?: string;
  /**
   * @remarks
   * Region name.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * When ReportType=history, ReportId is required to query historical reports based on ReportId.
   * 
   * @example
   * report-74fbea80e802xxxx
   */
  reportId?: string;
  /**
   * @remarks
   * Optional values: history/present.
   * 
   * @example
   * history
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      regionId: 'RegionId',
      reportId: 'ReportId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      regionId: 'string',
      reportId: 'string',
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

