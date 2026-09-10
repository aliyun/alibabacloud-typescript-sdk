// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadResourceControlEventsRequest extends $dara.Model {
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
  actionCodes?: string[];
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
  caseCodesPrefix?: string[];
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
  eventCodes?: string[];
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
  excludeActionCodes?: string[];
  /**
   * @remarks
   * The collection of excluded event name codes.
   * 
   * > Example: [\\\\\\"TEST_CASE\\\\\\"]
   */
  excludeEventCodes?: string[];
  /**
   * @remarks
   * The collection of excluded event reasons.
   * 
   * > Example: [\\\\\\"Mining alert\\\\\\"]
   */
  excludeReasons?: string[];
  /**
   * @remarks
   * The collection of included event reasons.
   * 
   * > Example: [\\\\\\"Mining alert\\\\\\"]
   */
  includeReasons?: string[];
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
  sourceCodes?: string[];
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
  statusList?: string[];
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
      actionCodes: 'ActionCodes',
      aliyunLang: 'AliyunLang',
      businessCode: 'BusinessCode',
      caseCodesPrefix: 'CaseCodesPrefix',
      current: 'Current',
      domain: 'Domain',
      eventCode: 'EventCode',
      eventCodes: 'EventCodes',
      eventId: 'EventId',
      excludeActionCodes: 'ExcludeActionCodes',
      excludeEventCodes: 'ExcludeEventCodes',
      excludeReasons: 'ExcludeReasons',
      includeReasons: 'IncludeReasons',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageSize: 'PageSize',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      reason: 'Reason',
      sourceCodes: 'SourceCodes',
      status: 'Status',
      statusList: 'StatusList',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      aliyunLang: 'string',
      businessCode: 'string',
      caseCodesPrefix: { 'type': 'array', 'itemType': 'string' },
      current: 'number',
      domain: 'string',
      eventCode: 'string',
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      eventId: 'string',
      excludeActionCodes: { 'type': 'array', 'itemType': 'string' },
      excludeEventCodes: { 'type': 'array', 'itemType': 'string' },
      excludeReasons: { 'type': 'array', 'itemType': 'string' },
      includeReasons: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ip: 'string',
      pageSize: 'number',
      punishEndTime: 'string',
      punishStartTime: 'string',
      reason: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionCodes)) {
      $dara.Model.validateArray(this.actionCodes);
    }
    if(Array.isArray(this.caseCodesPrefix)) {
      $dara.Model.validateArray(this.caseCodesPrefix);
    }
    if(Array.isArray(this.eventCodes)) {
      $dara.Model.validateArray(this.eventCodes);
    }
    if(Array.isArray(this.excludeActionCodes)) {
      $dara.Model.validateArray(this.excludeActionCodes);
    }
    if(Array.isArray(this.excludeEventCodes)) {
      $dara.Model.validateArray(this.excludeEventCodes);
    }
    if(Array.isArray(this.excludeReasons)) {
      $dara.Model.validateArray(this.excludeReasons);
    }
    if(Array.isArray(this.includeReasons)) {
      $dara.Model.validateArray(this.includeReasons);
    }
    if(Array.isArray(this.sourceCodes)) {
      $dara.Model.validateArray(this.sourceCodes);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

