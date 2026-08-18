// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceControlEventsShrinkRequest extends $dara.Model {
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
   * @example
   * shutdown
   */
  actionCodesShrink?: string;
  /**
   * @remarks
   * The internationalization language.
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
   * The list of product types.
   */
  businessCodesShrink?: string;
  /**
   * @remarks
   * The collection of event name code prefixes.
   * 
   * @example
   * [\\"BANFF\\"]
   */
  caseCodesPrefixShrink?: string;
  /**
   * @remarks
   * The current page number.
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
   * 
   * @example
   * ["BANFF_ECS_PE_ECS_MINING_SHUTDOWN"]
   */
  eventCodesShrink?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @remarks
   * The collection of event IDs.
   * 
   * @example
   * [\\"7ac74fbfe06b2b85bb470083b7a05fb7\\",\\"1180c5bbff0a385b00d2cf73e3371d11\\"]
   */
  eventIdListShrink?: string;
  /**
   * @remarks
   * The collection of excluded control action name codes.
   * 
   * @example
   * [\\"shutdown\\"]
   */
  excludeActionCodesShrink?: string;
  /**
   * @remarks
   * The collection of excluded event name codes.
   * 
   * @example
   * [\\"TEST_CASE\\"]
   */
  excludeEventCodesShrink?: string;
  /**
   * @remarks
   * The collection of excluded event reasons.
   * 
   * @example
   * [\\"Cryptomining alert\\",\\"Cryptomining control event\\",\\"Cryptomining\\"]
   */
  excludeReasonsShrink?: string;
  /**
   * @remarks
   * The collection of included event reasons.
   * 
   * @example
   * [\\"Cryptomining alert\\",\\"Cryptomining control event\\",\\"Cryptomining\\"]
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
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @remarks
   * The penalty start time.
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
   * Cryptomining
   */
  reason?: string;
  /**
   * @remarks
   * The collection of event source codes.
   * 
   * @example
   * [\\"MRM\\"]
   */
  sourceCodesShrink?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The collection of task statuses. Valid values:
   * - **Executing**: executing
   * - **Removed**: removed
   * - **Alerting**: alerting
   * - **Ended**: ended
   * - **Processed**: processed by the user and under platform review
   * 
   * @example
   * [\\"Executing\\"]
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
      businessCodesShrink: 'BusinessCodes',
      caseCodesPrefixShrink: 'CaseCodesPrefix',
      current: 'Current',
      domain: 'Domain',
      eventCode: 'EventCode',
      eventCodesShrink: 'EventCodes',
      eventId: 'EventId',
      eventIdListShrink: 'EventIdList',
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
      businessCodesShrink: 'string',
      caseCodesPrefixShrink: 'string',
      current: 'number',
      domain: 'string',
      eventCode: 'string',
      eventCodesShrink: 'string',
      eventId: 'string',
      eventIdListShrink: 'string',
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

