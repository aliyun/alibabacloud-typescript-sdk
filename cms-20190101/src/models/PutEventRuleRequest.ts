// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleRequestEventPattern extends $dara.Model {
  /**
   * @remarks
   * The keyword for event filtering. When the event content contains this keyword, an alert is automatically triggered.
   * 
   * @example
   * Stopping
   */
  customFilters?: string;
  /**
   * @remarks
   * The type of the Event-triggered Alert Rule. Valid values of N: 1 to 50. Valid values:
   * 
   * - StatusNotification: fault notification.
   * 
   * - Exception: exception.
   * 
   * - Maintenance: O&M.
   * 
   * - \\*: unlimited.
   * 
   * @example
   * Exception
   */
  eventTypeList?: string[];
  /**
   * @remarks
   * The level of the Event-triggered Alert Rule. Valid values of N: 1 to 50. Valid values:
   * 
   * - CRITICAL: critical.
   * 
   * - WARN: warning.
   * 
   * - INFO: information.
   * 
   * - \\*: all levels.
   * 
   * @example
   * CRITICAL
   */
  levelList?: string[];
  /**
   * @remarks
   * The name of the Event-triggered Alert Rule. Valid values of N: 1 to 50.
   * 
   * @example
   * Agent_Status_Stopped
   */
  nameList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud service type. Valid values of N: 1 to 50.
   * 
   * >For information about the Alibaba Cloud services supported by Event-triggered Alert Rules, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @remarks
   * The SQL filter for events. When the event content meets the SQL condition, an alert is automatically triggered.
   * > The syntax of the SQL event filter is consistent with the query syntax of Simple Log Service (SLS).
   * 
   * @example
   * 192.168.XX.XX and Executed
   */
  SQLFilter?: string;
  /**
   * @remarks
   * The status of the Event-triggered Alert Rule. Valid values of N: 1 to 50.
   * 
   * @example
   * Failed
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
      levelList: { 'type': 'array', 'itemType': 'string' },
      nameList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      SQLFilter: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventTypeList)) {
      $dara.Model.validateArray(this.eventTypeList);
    }
    if(Array.isArray(this.levelList)) {
      $dara.Model.validateArray(this.levelList);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
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

export class PutEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Event-triggered Alert Rule.
   * 
   * @example
   * Event alert test
   */
  description?: string;
  /**
   * @remarks
   * The pattern of the Event-triggered Alert Rule.
   * 
   * This parameter is required.
   */
  eventPattern?: PutEventRuleRequestEventPattern[];
  /**
   * @remarks
   * The type of the Event-triggered Alert Rule. Valid values:
   * 
   * - SYSTEM: system event.
   * - CUSTOM: custom event.
   * 
   * @example
   * SYSTEM
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the application group to which the Event-triggered Alert Rule belongs.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the Event-triggered Alert Rule.
   * 
   * This parameter is required.
   * 
   * @example
   * myRuleName
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period. Unit: seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The status of the Event-triggered Alert Rule. Valid values:
   * 
   * - ENABLED: enabled.
   * - DISABLED: disabled.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: { 'type': 'array', 'itemType': PutEventRuleRequestEventPattern },
      eventType: 'string',
      groupId: 'string',
      regionId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventPattern)) {
      $dara.Model.validateArray(this.eventPattern);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

