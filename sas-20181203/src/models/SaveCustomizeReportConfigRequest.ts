// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCustomizeReportConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The group type. Valid values:
   * - **ALIYUN_RG**: Alibaba Cloud resource group.
   * - **SAS_GROUP**: Security Center group.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * SAS_GROUP
   */
  groupType?: string;
  /**
   * @remarks
   * Specifies whether newly added accounts are included by default. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * true
   */
  memberAccountSyncFlag?: boolean;
  /**
   * @remarks
   * The pinned time. Unit: milliseconds.
   * 
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The email addresses of contacts. Separate multiple email addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@163.com
   */
  recipients?: string;
  /**
   * @remarks
   * The number of recent days for report statistics.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 7
   */
  reportDays?: number;
  /**
   * @remarks
   * The end date for report statistics. Format: yyyy-MM-dd.
   * > This parameter is required when ReportType is set to 3.
   * 
   * @example
   * 2024-01-15
   */
  reportEndDate?: string;
  /**
   * @remarks
   * The report ID.
   * >Call [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) to obtain this parameter.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The language of the report. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  reportLang?: string;
  /**
   * @remarks
   * The report sending type. Valid values:
   * - **1**: 0:00 to 6:00.
   * - **2**: 6:00 to 12:00.
   * - **3**: 12:00 to 18:00.
   * - **4**: 18:00 to 24:00.
   * 
   * @example
   * 2
   */
  reportSendType?: number;
  /**
   * @remarks
   * The start date for report statistics. Format: yyyy-MM-dd.
   * > This parameter is required when ReportType is set to 3.
   * 
   * @example
   * 2024-01-01
   */
  reportStartDate?: string;
  /**
   * @remarks
   * The report status. Valid values:
   *  - **0**: disabled.
   *  - **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The report type. Valid values:
   * 
   * - **0**: daily report.
   * - **1**: weekly report.
   * - **2**: monthly report.
   * - **3**: custom period.
   * - **4**: latest period.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
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
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The send end time. Format: HH:mm:ss.
   * > This parameter is required when ReportType is set to 0, 1, 2, or 4.
   * 
   * @example
   * 10:00:00
   */
  sendEndTime?: string;
  /**
   * @remarks
   * The specific execution dates within the send period.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12
   */
  sendPeriodDays?: number;
  /**
   * @remarks
   * The send period type. Valid values:
   * - **DAY**: day.
   * - **WEEK**: week.
   * - **MONTH**: month.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * MONTH
   */
  sendPeriodType?: string;
  /**
   * @remarks
   * The send start time. Format: HH:mm:ss.
   * > This parameter is required when ReportType is set to 0, 1, 2, or 4.
   * 
   * @example
   * 09:00:00
   */
  sendStartTime?: string;
  /**
   * @remarks
   * The targets within the group.
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12,123
   */
  targetGroups?: string;
  /**
   * @remarks
   * The list of target users. Separate multiple values with commas (,).
   * > This parameter is supported only in version 2.0.0.
   * 
   * @example
   * 12,123
   */
  targetUids?: string;
  /**
   * @remarks
   * The report name.
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

