// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The severity of the quality rule. Valid values:
   * 
   * - `1`: Strong Rule. If a Strong Rule triggers a critical Alert, the associated Scheduling Task is blocked.
   * 
   * - `0`: Weak Rule.
   * 
   * @example
   * 1
   */
  blockType?: number;
  /**
   * @remarks
   * The checker ID, which is derived from a primary key and used for front-end identification.
   * 
   * @example
   * 9
   */
  checker?: number;
  /**
   * @remarks
   * The name of the checker.
   * 
   * @example
   * compared with a fixed value
   */
  checkerName?: string;
  /**
   * @remarks
   * The comment for the rule.
   * 
   * @example
   * Verify that the primary key is unique
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical Alert, which defines the maximum acceptable deviation from the Expected Value. If this threshold is met for a Strong Rule, the associated Scheduling Task is blocked.
   * 
   * @example
   * 20
   */
  criticalThreshold?: string;
  /**
   * @remarks
   * The ID of the partition expression.
   * 
   * @example
   * 165523
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 30
   */
  expectValue?: string;
  /**
   * @remarks
   * Indicates whether to validate against a fixed value.
   * 
   * @example
   * true
   */
  fixCheck?: boolean;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123232
   */
  id?: number;
  /**
   * @remarks
   * The ID of the method used to collect sample data.
   * 
   * @example
   * 8
   */
  methodId?: number;
  /**
   * @remarks
   * The name of the method used to collect sample data. Valid values include `avg`, `count`, `sum`, `min`, `max`, `count_distinct`, `user_defined`, `table_count`, `table_size`, `table_dt_load_count`, `table_dt_refuseload_count`, `null_value`, `null_value/table_count`, `(table_count-count_distinct)/table_count`, and `table_count-count_distinct`.
   * 
   * @example
   * table_count
   */
  methodName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that configured the rule.
   * 
   * @example
   * 1822931****
   */
  onDuty?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that configured the rule.
   * 
   * @example
   * test
   */
  onDutyAccountName?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  openSwitch?: boolean;
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * >=
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the threshold is dynamic. Valid values:
   * 
   * - `0`: The threshold is static.
   * 
   * - `1`: The threshold is dynamic.
   * 
   * @example
   * 0
   */
  predictType?: number;
  /**
   * @remarks
   * The column in the data source table to which the rule applies.
   * 
   * @example
   * id
   */
  property?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * View table fluctuations
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the quality rule. Valid values:
   * 
   * - `0`: A rule based on a system template.
   * 
   * - `1`: A rule based on a custom SQL statement.
   * 
   * - `4`: A rule based on a custom template.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The variable settings inserted before a custom rule. The format is x=a,y=b.
   * 
   * @example
   * x=a,y=b
   */
  taskSetting?: string;
  /**
   * @remarks
   * The ID of the template used.
   * 
   * @example
   * 7
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the template used.
   * 
   * @example
   * SQL task table rows, 1,7, 30 days fluctuation test
   */
  templateName?: string;
  /**
   * @remarks
   * The trend of the validation result.
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The threshold for a warning Alert. This value specifies the acceptable deviation from the Expected Value and can be customized.
   * 
   * @example
   * 10
   */
  warningThreshold?: string;
  /**
   * @remarks
   * The filter condition or custom SQL statement used for validation.
   * 
   * @example
   * id>10
   */
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      checkerName: 'CheckerName',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      fixCheck: 'FixCheck',
      id: 'Id',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      openSwitch: 'OpenSwitch',
      operator: 'Operator',
      predictType: 'PredictType',
      property: 'Property',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      taskSetting: 'TaskSetting',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      checkerName: 'string',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      fixCheck: 'boolean',
      id: 'number',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      openSwitch: 'boolean',
      operator: 'string',
      predictType: 'number',
      property: 'string',
      ruleName: 'string',
      ruleType: 'number',
      taskSetting: 'string',
      templateId: 'number',
      templateName: 'string',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quality rule details.
   */
  data?: GetQualityRuleResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 401
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 576b9457-2cf5-4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQualityRuleResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

