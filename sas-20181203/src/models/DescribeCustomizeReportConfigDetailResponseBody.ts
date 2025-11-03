// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportConfigDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the chart that is included in the report. Multiple IDs are separated by commas (,).
   * 
   * @example
   * BIZ_STAT_QUERY_KEY_ATTACK,CUSTOM_VUL_CVE_LIST,CUSTOM_VUL_SYS_LIST,CUSTOM_VUL_WEBCMS_LIST,CUSTOM_AUTO_BREAKING_PIE,CUSTOM_AK_LEAK_LIST,KEY_HP_TAMPERPROOF,KEY_HP_DEFENCE
   */
  chartIds?: string;
  /**
   * @remarks
   * The grouping type. Valid values:
   * 
   * *   **ALIYUN_RG**
   * *   **SAS_GROUP**
   * 
   * @example
   * SAS_GROUP
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the report is the default report. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  isDefault?: number;
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
   * The time when the report is pinned.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The email address of the recipient. Multiple email addresses are separated by commas (,).
   * 
   * @example
   * PengZheng@eaton.com,ZhongJi@Eaton.com
   */
  recipients?: string;
  /**
   * @remarks
   * The most recent days for report statistics.
   * 
   * @example
   * 30
   */
  reportDays?: number;
  /**
   * @remarks
   * The end date on which the report is sent.
   * 
   * @example
   * 1720022399999
   */
  reportEndDate?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 663434
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
  reportSendType?: string;
  /**
   * @remarks
   * The start date on which the report is sent.
   * 
   * @example
   * 1717430400000
   */
  reportStartDate?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 1
   */
  reportStatus?: string;
  /**
   * @remarks
   * The type of the report. Valid values:
   * 
   * *   **0**: daily report.
   * *   **1**: weekly report.
   * *   **2**: monthly report.
   * *   **3**: report whose statistics are collected in a custom time range.
   * 
   * @example
   * 3
   */
  reportType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 379a9b8f-107b-4630-9e95-2299a1ea****
   */
  requestId?: string;
  /**
   * @remarks
   * The end time at which the report is sent. The value is in the HH:mm:ss format.
   * 
   * @example
   * 10:00:00
   */
  sendEndTime?: string;
  /**
   * @remarks
   * The exact day within the sending period.
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
   * @example
   * MONTH
   */
  sendPeriodType?: string;
  /**
   * @remarks
   * The start time at which the report is sent. The value is in the HH:mm:ss format.
   * 
   * @example
   * 09:00:00
   */
  sendStartTime?: string;
  /**
   * @remarks
   * The time at which the report is sent. The value is in the HH:mm:ss format.
   * 
   * @example
   * 09:00:00
   */
  sendTime?: string;
  /**
   * @remarks
   * The groups.
   * 
   * @example
   * 12125884,12140191
   */
  targetGroups?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 1457515594445744,1600011353839072,1766185894104675,1674080148055995,1627510829033157
   */
  targetUids?: string;
  /**
   * @remarks
   * The title of the report.
   * 
   * @example
   * marketing report
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chartIds: 'ChartIds',
      groupType: 'GroupType',
      isDefault: 'IsDefault',
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
      requestId: 'RequestId',
      sendEndTime: 'SendEndTime',
      sendPeriodDays: 'SendPeriodDays',
      sendPeriodType: 'SendPeriodType',
      sendStartTime: 'SendStartTime',
      sendTime: 'SendTime',
      targetGroups: 'TargetGroups',
      targetUids: 'TargetUids',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartIds: 'string',
      groupType: 'string',
      isDefault: 'number',
      memberAccountSyncFlag: 'boolean',
      pinnedTime: 'number',
      recipients: 'string',
      reportDays: 'number',
      reportEndDate: 'string',
      reportId: 'number',
      reportLang: 'string',
      reportSendType: 'string',
      reportStartDate: 'string',
      reportStatus: 'string',
      reportType: 'string',
      requestId: 'string',
      sendEndTime: 'string',
      sendPeriodDays: 'number',
      sendPeriodType: 'string',
      sendStartTime: 'string',
      sendTime: 'string',
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

