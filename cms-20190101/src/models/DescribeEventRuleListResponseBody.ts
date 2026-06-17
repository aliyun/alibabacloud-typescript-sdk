// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList extends $dara.Model {
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

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords extends $dara.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter extends $dara.Model {
  keywords?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords,
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

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList extends $dara.Model {
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

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList extends $dara.Model {
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

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern extends $dara.Model {
  customFilters?: string;
  eventTypeList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList;
  keywordFilter?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter;
  levelList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList;
  nameList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList;
  product?: string;
  SQLFilter?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      keywordFilter: 'KeywordFilter',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList,
      keywordFilter: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter,
      levelList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList,
      nameList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList,
      product: 'string',
      SQLFilter: 'string',
    };
  }

  validate() {
    if(this.eventTypeList && typeof (this.eventTypeList as any).validate === 'function') {
      (this.eventTypeList as any).validate();
    }
    if(this.keywordFilter && typeof (this.keywordFilter as any).validate === 'function') {
      (this.keywordFilter as any).validate();
    }
    if(this.levelList && typeof (this.levelList as any).validate === 'function') {
      (this.levelList as any).validate();
    }
    if(this.nameList && typeof (this.nameList as any).validate === 'function') {
      (this.nameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern extends $dara.Model {
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern[];
  static names(): { [key: string]: string } {
    return {
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPattern: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern },
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

export class DescribeEventRuleListResponseBodyEventRulesEventRule extends $dara.Model {
  description?: string;
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  silenceTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      silenceTime: 'number',
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

export class DescribeEventRuleListResponseBodyEventRules extends $dara.Model {
  eventRule?: DescribeEventRuleListResponseBodyEventRulesEventRule[];
  static names(): { [key: string]: string } {
    return {
      eventRule: 'EventRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRule: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRule },
    };
  }

  validate() {
    if(Array.isArray(this.eventRule)) {
      $dara.Model.validateArray(this.eventRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  eventRules?: DescribeEventRuleListResponseBodyEventRules;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0E6D82B-16B5-422A-8136-EE5BDC01E415
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventRules: 'EventRules',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventRules: DescribeEventRuleListResponseBodyEventRules,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.eventRules && typeof (this.eventRules as any).validate === 'function') {
      (this.eventRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

