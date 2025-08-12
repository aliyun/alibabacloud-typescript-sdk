// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleRequestEventPattern extends $dara.Model {
  /**
   * @remarks
   * The keyword that is used to filter events. If the content of an event contains the specified keyword, an alert is automatically triggered.
   * 
   * @example
   * Stopping
   */
  customFilters?: string;
  /**
   * @example
   * Exception
   */
  eventTypeList?: string[];
  /**
   * @example
   * CRITICAL
   */
  levelList?: string[];
  /**
   * @example
   * Agent_Status_Stopped
   */
  nameList?: string[];
  /**
   * @remarks
   * The type of the cloud service. Valid values of N: 1 to 50.
   * 
   * >  You can call the DescribeSystemEventMetaList operation to query the cloud services that support event-triggered alerts. For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @remarks
   * The SQL condition that is used to filter events. If the content of an event meets the specified SQL condition, an alert is automatically triggered.
   * 
   * >  The syntax of SQL event filtering is consistent with the query syntax of Log Service.
   * 
   * @example
   * 192.168.XX.XX and Executed
   */
  SQLFilter?: string;
  /**
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
   * The description of the event-triggered alert rule.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventPattern?: PutEventRuleRequestEventPattern[];
  /**
   * @remarks
   * The type of the event-triggered alert rule. Valid values:
   * 
   * *   SYSTEM: system event-triggered alert rule
   * *   CUSTOM: custom event-triggered alert rule
   * 
   * @example
   * SYSTEM
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the application group to which the event-triggered alert rule belongs.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the event-triggered alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * myRuleName
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The status of the event-triggered alert rule. Valid values:
   * 
   * *   ENABLED: enabled
   * *   DISABLED: disabled
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

