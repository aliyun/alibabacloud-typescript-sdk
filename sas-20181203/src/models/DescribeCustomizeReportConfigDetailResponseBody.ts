// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportConfigDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The report chart configuration IDs, separated by commas.
   * 
   * @example
   * BIZ_STAT_QUERY_KEY_ATTACK,CUSTOM_VUL_CVE_LIST,CUSTOM_VUL_SYS_LIST,CUSTOM_VUL_WEBCMS_LIST,CUSTOM_AUTO_BREAKING_PIE,CUSTOM_AK_LEAK_LIST,KEY_HP_TAMPERPROOF,KEY_HP_DEFENCE
   */
  chartIds?: string;
  /**
   * @remarks
   * The group type. Valid values:
   * - **ALIYUN_RG**: ALIYUN_RG.
   * - **SAS_GROUP**: SAS_GROUP.
   * 
   * @example
   * SAS_GROUP
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the report is a default report. Valid values:
   * - **0**: Not a default report.
   * - **1**: A default report.
   * 
   * @example
   * 1
   */
  isDefault?: number;
  /**
   * @remarks
   * Specifies whether newly added accounts are included by default. Valid values:
   * 
   * - **true**: Included.
   * - **false**: Not included.
   * > Only version 2.0.0 supports this parameter.
   * 
   * @example
   * true
   */
  memberAccountSyncFlag?: boolean;
  /**
   * @remarks
   * The pinned time.
   * 
   * @example
   * 1717430400000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The recipient email addresses, separated by commas.
   * 
   * @example
   * PengZheng@eaton.com,ZhongJi@Eaton.com
   */
  recipients?: string;
  /**
   * @remarks
   * The number of recent days covered by the report statistics.
   * 
   * @example
   * 30
   */
  reportDays?: number;
  /**
   * @remarks
   * The end date for report delivery.
   * 
   * @example
   * 1720022399999
   */
  reportEndDate?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * 663434
   */
  reportId?: number;
  /**
   * @remarks
   * The language type. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  reportLang?: string;
  /**
   * @remarks
   * The report delivery time range. Valid values:
   * - **1**: 0:00 to 6:00.
   * - **2**: 6:00 to 12:00.
   * - **3**: 12:00 to 18:00.
   * - **4**: 18:00 to 24:00.
   * 
   * @example
   * 2
   */
  reportSendType?: string;
  /**
   * @remarks
   * The start date for report delivery.
   * 
   * @example
   * 1717430400000
   */
  reportStartDate?: string;
  /**
   * @remarks
   * The report status. Valid values:
   *  - **0**: Disabled.
   *  - **1**: Enabled.
   * 
   * @example
   * 1
   */
  reportStatus?: string;
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
   * The delivery end time, in the format of HH:mm:ss.
   * 
   * @example
   * 10:00:00
   */
  sendEndTime?: string;
  /**
   * @remarks
   * The specific execution dates within the delivery period.
   * 
   * @example
   * 12
   */
  sendPeriodDays?: number;
  /**
   * @remarks
   * The delivery period type. Valid values:
   * - **DAY**: day.
   * - **WEEK**: week.
   * - **MONTH**: month.
   * 
   * @example
   * MONTH
   */
  sendPeriodType?: string;
  /**
   * @remarks
   * The delivery start time, in the format of HH:mm:ss.
   * 
   * @example
   * 09:00:00
   */
  sendStartTime?: string;
  /**
   * @remarks
   * The delivery time, in the format of HH:mm:ss.
   * 
   * @example
   * 09:00:00
   */
  sendTime?: string;
  /**
   * @remarks
   * The targets within the group.
   * 
   * @example
   * 12125884,12140191
   */
  targetGroups?: string;
  /**
   * @remarks
   * The list of target UIDs, separated by commas.
   * 
   * @example
   * 1457515594445744,1600011353839072,1766185894104675,1674080148055995,1627510829033157
   */
  targetUids?: string;
  /**
   * @remarks
   * The title.
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

