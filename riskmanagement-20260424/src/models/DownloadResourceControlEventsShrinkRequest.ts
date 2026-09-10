// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadResourceControlEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The action name code.
   * 
   * @example
   * shutdown
   */
  actionCode?: string;
  /**
   * @remarks
   * The collection of control action name codes.
   * 
   * > Example: [\\\\\\"shutdown\\\\\\"]
   */
  actionCodesShrink?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - **zh**: Chinese (default).
   * - **en**: English.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The product.
   * 
   * @example
   * ecs
   */
  businessCode?: string;
  /**
   * @remarks
   * The collection of event name code prefixes.
   * 
   * > Example: [\\\\\\"BANFF\\\\\\"]
   */
  caseCodesPrefixShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * > Must be greater than 0.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * short.industry.taobao.com
   */
  domain?: string;
  /**
   * @remarks
   * The event name code.
   * 
   * @example
   * BANFF_ECS_PE_ECS_MINING_SHUTDOWN
   */
  eventCode?: string;
  /**
   * @remarks
   * The collection of event name codes.
   * 
   * > Example: [\\\\\\"BANFF_ECS_PE_ECS_MINING_SHUTDOWN\\\\\\"]
   */
  eventCodesShrink?: string;
  /**
   * @remarks
   * The alert event ID.
   * 
   * @example
   * 09C-2PpwIzkpx2zG2fuFrAH55CpJaTK
   */
  eventId?: string;
  /**
   * @remarks
   * The collection of excluded control action name codes.
   * 
   * > Example: [\\\\\\"shutdown\\\\\\"]
   */
  excludeActionCodesShrink?: string;
  /**
   * @remarks
   * The collection of excluded event name codes.
   * 
   * > Example: [\\\\\\"TEST_CASE\\\\\\"]
   */
  excludeEventCodesShrink?: string;
  /**
   * @remarks
   * The collection of excluded event reasons.
   * 
   * > Example: [\\\\\\"Mining alert\\\\\\"]
   */
  excludeReasonsShrink?: string;
  /**
   * @remarks
   * The collection of included event reasons.
   * 
   * > Example: [\\\\\\"Mining alert\\\\\\"]
   */
  includeReasonsShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-0iw73ro05vcwn6ntq
   */
  instanceId?: string;
  /**
   * @remarks
   * IP
   * 
   * @example
   * 12.3*.22.11
   */
  ip?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The penalty end time.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @remarks
   * The penalty start time.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @remarks
   * The event reason.
   * 
   * @example
   * Mining
   */
  reason?: string;
  /**
   * @remarks
   * The collection of event source codes.
   * 
   * > Example: [\\\\\\"MRM\\\\\\"]
   */
  sourceCodesShrink?: string;
  /**
   * @remarks
   * The task status.
   * 
   * - **Executing**: In progress.
   * - **Removed**: Removed.
   * - **Alerting**: Alerting.
   * - **Ended**: Ended.
   * - **Processed**: Processed by the user and pending platform review.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The collection of task statuses.
   * - **Executing**: In progress.
   * - **Removed**: Removed.
   * - **Alerting**: Alerting.
   * - **Ended**: Ended.
   * - **Processed**: Processed by the user and pending platform review.
   */
  statusListShrink?: string;
  /**
   * @remarks
   * The control URL.
   * 
   * @example
   * https://qimg.xiaohongshu.com/circe/1040g1v831qggp28ln0705oft1i6k1jil889lhso?imageView2/2/w/1080/format/jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      actionCodesShrink: 'ActionCodes',
      aliyunLang: 'AliyunLang',
      businessCode: 'BusinessCode',
      caseCodesPrefixShrink: 'CaseCodesPrefix',
      current: 'Current',
      domain: 'Domain',
      eventCode: 'EventCode',
      eventCodesShrink: 'EventCodes',
      eventId: 'EventId',
      excludeActionCodesShrink: 'ExcludeActionCodes',
      excludeEventCodesShrink: 'ExcludeEventCodes',
      excludeReasonsShrink: 'ExcludeReasons',
      includeReasonsShrink: 'IncludeReasons',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageSize: 'PageSize',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      reason: 'Reason',
      sourceCodesShrink: 'SourceCodes',
      status: 'Status',
      statusListShrink: 'StatusList',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      actionCodesShrink: 'string',
      aliyunLang: 'string',
      businessCode: 'string',
      caseCodesPrefixShrink: 'string',
      current: 'number',
      domain: 'string',
      eventCode: 'string',
      eventCodesShrink: 'string',
      eventId: 'string',
      excludeActionCodesShrink: 'string',
      excludeEventCodesShrink: 'string',
      excludeReasonsShrink: 'string',
      includeReasonsShrink: 'string',
      instanceId: 'string',
      ip: 'string',
      pageSize: 'number',
      punishEndTime: 'string',
      punishStartTime: 'string',
      reason: 'string',
      sourceCodesShrink: 'string',
      status: 'string',
      statusListShrink: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

