// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. This parameter takes effect only when ReportType is set to present.
   * 
   * @example
   * App1
   */
  appName?: string;
  /**
   * @remarks
   * The region ID. This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * When ReportType is set to history, this parameter is required. The system queries the historical report based on the specified ReportId.
   * 
   * @example
   * report-74fbea80e802xxxx
   */
  reportId?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * - history
   * - present
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

