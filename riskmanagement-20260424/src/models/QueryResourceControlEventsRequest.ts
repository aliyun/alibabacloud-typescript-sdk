// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceControlEventsRequest extends $dara.Model {
  /**
   * @example
   * shutdown
   */
  actionCode?: string;
  /**
   * @example
   * shutdown
   */
  actionCodes?: string[];
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
  caseCodesPrefix?: string[];
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
  eventCodes?: string[];
  /**
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @example
   * [\\"7ac74fbfe06b2b85bb470083b7a05fb7\\",\\"1180c5bbff0a385b00d2cf73e3371d11\\"]
   */
  eventIdList?: string[];
  /**
   * @example
   * [\\"shutdown\\"]
   */
  excludeActionCodes?: string[];
  /**
   * @example
   * [\\"TEST_CASE\\"]
   */
  excludeEventCodes?: string[];
  /**
   * @example
   * [\\"挖矿告警\\",\\"挖矿管控事件\\",\\"挖矿\\"]
   */
  excludeReasons?: string[];
  /**
   * @example
   * [\\"挖矿告警\\",\\"挖矿管控事件\\",\\"挖矿\\"]
   */
  includeReasons?: string[];
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
  sourceCodes?: string[];
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * [\\"Executing\\"]
   */
  statusList?: string[];
  /**
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
      eventIdList: 'EventIdList',
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
      eventIdList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
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

