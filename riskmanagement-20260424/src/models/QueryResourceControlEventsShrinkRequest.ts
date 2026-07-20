// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceControlEventsShrinkRequest extends $dara.Model {
  /**
   * @example
   * shutdown
   */
  actionCode?: string;
  /**
   * @example
   * shutdown
   */
  actionCodesShrink?: string;
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @example
   * ecs
   */
  businessCode?: string;
  /**
   * @example
   * [\\"BANFF\\"]
   */
  caseCodesPrefixShrink?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * short.industry.taobao.com
   */
  domain?: string;
  /**
   * @example
   * BANFF_ECS_PE_ECS_MINING_SHUTDOWN
   */
  eventCode?: string;
  /**
   * @example
   * ["BANFF_ECS_PE_ECS_MINING_SHUTDOWN"]
   */
  eventCodesShrink?: string;
  /**
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @example
   * [\\"7ac74fbfe06b2b85bb470083b7a05fb7\\",\\"1180c5bbff0a385b00d2cf73e3371d11\\"]
   */
  eventIdListShrink?: string;
  /**
   * @example
   * [\\"shutdown\\"]
   */
  excludeActionCodesShrink?: string;
  /**
   * @example
   * [\\"TEST_CASE\\"]
   */
  excludeEventCodesShrink?: string;
  /**
   * @example
   * [\\"挖矿告警\\",\\"挖矿管控事件\\",\\"挖矿\\"]
   */
  excludeReasonsShrink?: string;
  /**
   * @example
   * [\\"挖矿告警\\",\\"挖矿管控事件\\",\\"挖矿\\"]
   */
  includeReasonsShrink?: string;
  /**
   * @example
   * rm-0iw73ro05vcwn6ntq
   */
  instanceId?: string;
  /**
   * @example
   * 12.3*.22.11
   */
  ip?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @example
   * 挖矿
   */
  reason?: string;
  /**
   * @example
   * [\\"MRM\\"]
   */
  sourceCodesShrink?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * [\\"Executing\\"]
   */
  statusListShrink?: string;
  /**
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

