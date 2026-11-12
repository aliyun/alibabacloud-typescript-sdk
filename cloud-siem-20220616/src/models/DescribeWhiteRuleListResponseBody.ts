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
   * Specifies whether the left value is a variable. Valid values:
   * 
   * - true: Variable.
   * - false: Constant.
   * 
   * @example
   * true
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair for the remark.
   * 
   * @example
   * {"key":"{\\"tage\\":\\"description\\"}"}
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether the left value is a constant. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  type?: string;
  /**
   * @remarks
   * The variable name of the left value.
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
   * Specifies whether the right value is a constant or a runtime variable that obtains its value from the runtime context. Valid values:
   * 
   * - true: Runtime variable.
   * - false: Constant.
   * 
   * @example
   * false
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair for the remark.
   * 
   * @example
   * {"key":"{\\"tage\\":\\"description\\"}"}
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
   * The right value.
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
   * Specifies whether to negate the result. Valid values:
   * 
   * - true: Negated.
   * - false: Not negated.
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
   * The left value of the condition.
   */
  left?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft;
  /**
   * @remarks
   * The aggregation method for dispatch rule conditions. Valid values:
   * 
   * - `=`: Equal to.
   * - `<>`: Not equal to.
   * - `in`: Included in.
   * - `not in`: Not included in.
   * - `REGEXP`: Matches the regular expression.
   * - `NOT REGEXP`: Does not match the regular expression.
   * 
   * @example
   * REGEXP
   */
  operator?: string;
  /**
   * @remarks
   * The right value object.
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
   * The array of rule expressions.
   */
  conditions?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions[];
  /**
   * @remarks
   * The logical relationship of the conditions.
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
   * The identifier of the alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameId?: string;
  /**
   * @remarks
   * The alerting type.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The alerting type identifier.
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
   * The Alibaba Cloud account ID that activated Cloud Threat Detection and Response (CTDR).
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The rule set in JSON array format.
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
   * The time when the rule was updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the allowlist rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The globally unique UUID of the incident.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The enabled status of the rule. Valid values:
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID that created the rule.
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
   * The data returned in the response.
   * 
   * @example
   * 123456
   */
  data?: DescribeWhiteRuleListResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
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
   * Indicates whether the request is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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

