// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList extends $dara.Model {
  eventTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventTypeList)) {
      $dara.Model.validateArray(this.eventTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords extends $dara.Model {
  keyword?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyword)) {
      $dara.Model.validateArray(this.keyword);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj extends $dara.Model {
  /**
   * @remarks
   * The keywords that are used to match events.
   */
  keywords?: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords;
  /**
   * @remarks
   * The relationship between multiple keywords in a condition. Valid values:
   * 
   * *   OR: The relationship between keywords is OR.
   * *   NOT: The keyword is excluded. The value NOT indicates that all events that do not contain the keywords are matched.
   * 
   * @example
   * OR
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords,
      relation: 'string',
    };
  }

  validate() {
    if(this.keywords && typeof (this.keywords as any).validate === 'function') {
      (this.keywords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList extends $dara.Model {
  levelList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.levelList)) {
      $dara.Model.validateArray(this.levelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternNameList extends $dara.Model {
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList extends $dara.Model {
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPattern extends $dara.Model {
  /**
   * @remarks
   * The types of the event-triggered alert rules.
   */
  eventTypeList?: DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList;
  /**
   * @remarks
   * The keyword for filtering.
   */
  keywordFilterObj?: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj;
  levelList?: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList;
  nameList?: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * CloudMonitor
   */
  product?: string;
  /**
   * @remarks
   * Indicates that logs are filtered based on the specified SQL statement. If the specified conditions are met, an alert is triggered.
   * 
   * @example
   * ycccluster1 and (i-23ij0o82612 or Executed1) or Asimulated not 222
   */
  SQLFilter?: string;
  statusList?: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      keywordFilterObj: 'KeywordFilterObj',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList,
      keywordFilterObj: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj,
      levelList: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList,
      nameList: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList,
      product: 'string',
      SQLFilter: 'string',
      statusList: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList,
    };
  }

  validate() {
    if(this.eventTypeList && typeof (this.eventTypeList as any).validate === 'function') {
      (this.eventTypeList as any).validate();
    }
    if(this.keywordFilterObj && typeof (this.keywordFilterObj as any).validate === 'function') {
      (this.keywordFilterObj as any).validate();
    }
    if(this.levelList && typeof (this.levelList as any).validate === 'function') {
      (this.levelList as any).validate();
    }
    if(this.nameList && typeof (this.nameList as any).validate === 'function') {
      (this.nameList as any).validate();
    }
    if(this.statusList && typeof (this.statusList as any).validate === 'function') {
      (this.statusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the event-triggered alert rule.
   * 
   * @example
   * Default group event rule.
   */
  description?: string;
  /**
   * @remarks
   * The event pattern. This parameter describes the trigger conditions of an event.
   */
  eventPattern?: DescribeEventRuleAttributeResponseBodyResultEventPattern;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   SYSTEM: system event
   * *   CUSTOM: custom event
   * 
   * @example
   * SYSTEM
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the event-triggered alert rule.
   * 
   * @example
   * test_DefaultEventRule_7378****
   */
  name?: string;
  /**
   * @remarks
   * The status of the event-triggered alert rule. Valid values:
   * 
   * *   ENABLED
   * *   DISABLED
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
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleAttributeResponseBodyResultEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.eventPattern && typeof (this.eventPattern as any).validate === 'function') {
      (this.eventPattern as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The alert does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AA3F210-C03D-4C86-8DB6-21C84FF692A1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the event-triggered alert rule.
   */
  result?: DescribeEventRuleAttributeResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeEventRuleAttributeResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

