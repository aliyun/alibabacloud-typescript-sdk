// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteRuleListResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the left operand is a variable. Valid values:
   * 
   * - true: variable
   * 
   * - false: constant
   * 
   * @example
   * true
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair for the remarks.
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether the value is a constant. Valid values:
   * 
   * - true: The value is a constant.
   * 
   * - false: The value is not a constant.
   * 
   * @example
   * false
   */
  type?: string;
  /**
   * @remarks
   * The variable of the left operand.
   * 
   * @example
   * ip
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isVar: 'IsVar',
      modifier: 'Modifier',
      modifierParam: 'ModifierParam',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVar: 'boolean',
      modifier: 'string',
      modifierParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.modifierParam) {
      $dara.Model.validateMap(this.modifierParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the right operand is a constant or a runtime variable. A runtime variable obtains a value from the runtime context. Valid values:
   * 
   * - true: runtime variable
   * 
   * - false: constant
   * 
   * @example
   * false
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair for the remarks.
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The value of the right operand.
   * 
   * @example
   * 12345
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isVar: 'IsVar',
      modifier: 'Modifier',
      modifierParam: 'ModifierParam',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVar: 'boolean',
      modifier: 'string',
      modifierParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.modifierParam) {
      $dara.Model.validateMap(this.modifierParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to negate the result. Valid values:
   * 
   * - true: The result is negated.
   * 
   * - false: The result is not negated.
   * 
   * @example
   * false
   */
  isNot?: boolean;
  /**
   * @remarks
   * The condition ID.
   * 
   * @example
   * 1
   */
  itemId?: number;
  /**
   * @remarks
   * The left operand of the condition.
   */
  left?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - `=`: equals
   * 
   * - `<>`: does not equal
   * 
   * - `in`: includes
   * 
   * - `not in`: does not include
   * 
   * - `REGEXP`: matches a regular expression
   * 
   * - `NOT REGEXP`: does not match a regular expression
   * 
   * @example
   * REGEXP
   */
  operator?: string;
  /**
   * @remarks
   * The right operand.
   */
  right?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight;
  static names(): { [key: string]: string } {
    return {
      isNot: 'IsNot',
      itemId: 'ItemId',
      left: 'Left',
      operator: 'Operator',
      right: 'Right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNot: 'boolean',
      itemId: 'number',
      left: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft,
      operator: 'string',
      right: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight,
    };
  }

  validate() {
    if(this.left && typeof (this.left as any).validate === 'function') {
      (this.left as any).validate();
    }
    if(this.right && typeof (this.right as any).validate === 'function') {
      (this.right as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpression extends $dara.Model {
  /**
   * @remarks
   * The array of rule conditions.
   */
  conditions?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions[];
  /**
   * @remarks
   * The logical relation for the conditions.
   * 
   * @example
   * (1&2)|(3&4)
   */
  logic?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions },
      logic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameId?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * scan
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase Threat Analysis.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The rule conditions, which are in the JSON array format.
   * 
   * @example
   * [{"conditions":[{"isNot":false,"itemId":0,"left":{"value":"host_uuid.host_name"},"operator":"containsString","right":{"value":"Cloud-MCH"}}]}]
   */
  expression?: DescribeWhiteRuleListResponseBodyDataResponseDataExpression;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the whitelist rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - 1: enabled
   * 
   * - 0: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the rule.
   * 
   * @example
   * 176555323***
   */
  subAliuid?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertNameId: 'AlertNameId',
      alertType: 'AlertType',
      alertTypeId: 'AlertTypeId',
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      expression: 'Expression',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      status: 'Status',
      subAliuid: 'SubAliuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertNameId: 'string',
      alertType: 'string',
      alertTypeId: 'string',
      alertUuid: 'string',
      aliuid: 'number',
      expression: DescribeWhiteRuleListResponseBodyDataResponseDataExpression,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      status: 'number',
      subAliuid: 'number',
    };
  }

  validate() {
    if(this.expression && typeof (this.expression as any).validate === 'function') {
      (this.expression as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeWhiteRuleListResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeWhiteRuleListResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeWhiteRuleListResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeWhiteRuleListResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 123456
   */
  data?: DescribeWhiteRuleListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeWhiteRuleListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

