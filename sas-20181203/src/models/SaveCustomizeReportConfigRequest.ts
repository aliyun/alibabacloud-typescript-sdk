// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCustomizeReportConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The grouping type. Valid values:
   * 
   * *   **ALIYUN_RG**
   * *   **SAS_GROUP**
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * SAS_GROUP
   */
  groupType?: string;
  /**
   * @remarks
   * Whether the new account is connected by default. Values: 
   * - **true**: Yes. 
   * - **false**: No. 
   * > Only supported in version 2.0.0.
   * 
   * @example
   * true
   */
  memberAccountSyncFlag?: boolean;
  /**
   * @remarks
   * The time when the report is pinned. Unit: milliseconds.
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The email address of the recipient. Separate multiple email addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@163.com
   */
  recipients?: string;
  /**
   * @remarks
   * The most recent days for report statistics.
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 7
   */
  reportDays?: number;
  /**
   * @remarks
   * The end date on which the report is sent. The value is in the yyyy-MM-dd format.
   * 
   * >  This parameter is required if the ReportType parameter is set to 3.
   * 
   * @example
   * 2024-01-15
   */
  reportEndDate?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * >  You can call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to query the ID.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The language of the report. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  reportLang?: string;
  /**
   * @remarks
   * The time range in which the report is sent. Valid values:
   * 
   * *   **1**: 00:00 to 06:00.
   * *   **2**: 06:00 to 12:00.
   * *   **3**: 12:00 to 18:00.
   * *   **4**: 18:00 to 24:00.
   * 
   * @example
   * 2
   */
  reportSendType?: number;
  /**
   * @remarks
   * The start date on which the report is sent. The value is in the yyyy-MM-dd format.
   * 
   * >  This parameter is required if the ReportType parameter is set to 3.
   * 
   * @example
   * 2024-01-01
   */
  reportStartDate?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The type of the report. Valid values:
   * 
   * *   **0**: daily report.
   * *   **1**: weekly report.
   * *   **2**: monthly report.
   * *   **3**: report whose statistics are collected within a custom time range.
   * *   **4**: report of the most recent time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  reportType?: number;
  /**
   * @remarks
   * The version of the report. Valid values:
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
   * The end time at which the report is sent. The value is in the HH:mm:ss format.
   * 
   * >  This parameter is required if the ReportType parameter is set to 0, 1, 2, or 4.
   * 
   * @example
   * 10:00:00
   */
  sendEndTime?: string;
  /**
   * @remarks
   * The exact day within the sending period.
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12
   */
  sendPeriodDays?: number;
  /**
   * @remarks
   * The interval at which the report is sent. Valid values:
   * 
   * *   **DAY**
   * *   **WEEK**
   * *   **MONTH**
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * MONTH
   */
  sendPeriodType?: string;
  /**
   * @remarks
   * The start time at which the report is sent. The value is in the HH:mm:ss format.
   * 
   * >  This parameter is required if the ReportType parameter is set to 0, 1, 2, or 4.
   * 
   * @example
   * 09:00:00
   */
  sendStartTime?: string;
  /**
   * @remarks
   * The groups.
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12,123
   */
  targetGroups?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. Separate multiple IDs with commas (,).
   * 
   * >  This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12,123
   */
  targetUids?: string;
  /**
   * @remarks
   * The title of the report.
   * 
   * This parameter is required.
   * 
   * @example
   * Daily Report
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      groupType: 'GroupType',
      memberAccountSyncFlag: 'MemberAccountSyncFlag',
      pinnedTime: 'PinnedTime',
      recipients: 'Recipients',
      reportDays: 'ReportDays',
      reportEndDate: 'ReportEndDate',
      reportId: 'ReportId',
      reportLang: 'ReportLang',
      reportSendType: 'ReportSendType',
      reportStartDate: 'ReportStartDate',
      reportStatus: 'ReportStatus',
      reportType: 'ReportType',
      reportVersion: 'ReportVersion',
      sendEndTime: 'SendEndTime',
      sendPeriodDays: 'SendPeriodDays',
      sendPeriodType: 'SendPeriodType',
      sendStartTime: 'SendStartTime',
      targetGroups: 'TargetGroups',
      targetUids: 'TargetUids',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupType: 'string',
      memberAccountSyncFlag: 'boolean',
      pinnedTime: 'number',
      recipients: 'string',
      reportDays: 'number',
      reportEndDate: 'string',
      reportId: 'number',
      reportLang: 'string',
      reportSendType: 'number',
      reportStartDate: 'string',
      reportStatus: 'number',
      reportType: 'number',
      reportVersion: 'string',
      sendEndTime: 'string',
      sendPeriodDays: 'number',
      sendPeriodType: 'string',
      sendStartTime: 'string',
      targetGroups: 'string',
      targetUids: 'string',
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

