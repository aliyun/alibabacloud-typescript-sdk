// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue extends $dara.Model {
  /**
   * @remarks
   * The business date. For an offline table, this is typically the day before the check is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: string;
  /**
   * @remarks
   * The value of the sample column after being grouped by the `GROUP BY` clause. For example, if you group by a gender column, the values of this parameter can be \\"male\\", \\"female\\", or \\"null\\".
   * 
   * @example
   * type1
   */
  discreteProperty?: string;
  /**
   * @remarks
   * The result of a single check.
   * 
   * @example
   * 2
   */
  singleCheckResult?: number;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 0.2
   */
  threshold?: number;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 20
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      singleCheckResult: 'SingleCheckResult',
      threshold: 'Threshold',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      singleCheckResult: 'number',
      threshold: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue extends $dara.Model {
  /**
   * @remarks
   * The business date. For an offline table, this is typically the day before the check is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: string;
  /**
   * @remarks
   * The value of the sample column after being grouped by the `GROUP BY` clause. For example, if you group by a gender column, the values of this parameter can be \\"male\\", \\"female\\", or \\"null\\".
   * 
   * @example
   * type2
   */
  discreteProperty?: string;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 23
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecks extends $dara.Model {
  /**
   * @remarks
   * The actual data partition that was checked.
   * 
   * @example
   * ds=20200925
   */
  actualExpression?: string;
  /**
   * @remarks
   * The start time of the check.
   * 
   * @example
   * 1600704000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The business date. For an offline table, this is typically the day before the check is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: number;
  /**
   * @remarks
   * The strength of the monitoring rule. A strong rule can block a downstream scheduling task if a critical alert is triggered. Valid values:
   * 
   * - `1`: Strong rule.
   * 
   * - `0`: Weak rule.
   * 
   * @example
   * 1
   */
  blockType?: number;
  /**
   * @remarks
   * The check result.
   * 
   * @example
   * 2
   */
  checkResult?: number;
  /**
   * @remarks
   * The status of the check result.
   * 
   * @example
   * 2
   */
  checkResultStatus?: number;
  /**
   * @remarks
   * The ID of the checker.
   * 
   * @example
   * 7
   */
  checkerId?: number;
  /**
   * @remarks
   * The name of the checker.
   * 
   * @example
   * fulx
   */
  checkerName?: string;
  /**
   * @remarks
   * The type of the checker.
   * 
   * @example
   * 0
   */
  checkerType?: number;
  /**
   * @remarks
   * The description of the monitoring rule.
   * 
   * @example
   * The description of the rule.
   */
  comment?: string;
  /**
   * @remarks
   * The threshold for a critical alert. For a strong rule, exceeding this threshold blocks the downstream scheduling task.
   * 
   * @example
   * 0.6
   */
  criticalThreshold?: number;
  /**
   * @remarks
   * The scheduling cycle. For example, `YMD` can represent yearly, monthly, and daily tasks.
   * 
   * @example
   * YMD
   */
  dateType?: string;
  /**
   * @remarks
   * Indicates whether a discrete value check is used. Valid values:
   * 
   * - `true`: A discrete value check is used.
   * 
   * - `false`: A discrete value check is not used.
   * 
   * @example
   * true
   */
  discreteCheck?: boolean;
  /**
   * @remarks
   * The end time of the check.
   * 
   * @example
   * 1600704000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * @example
   * 14534343
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 90
   */
  expectValue?: number;
  /**
   * @remarks
   * The node ID of the scheduling task.
   * 
   * @example
   * 123112232
   */
  externalId?: string;
  /**
   * @remarks
   * The type of the scheduling system. Currently, only CWF is supported.
   * 
   * @example
   * CWF2
   */
  externalType?: string;
  /**
   * @remarks
   * Indicates whether a fixed-value check is used. Valid values:
   * 
   * - `true`: A fixed-value check is used.
   * 
   * - `false`: A fixed-value check is not used.
   * 
   * @example
   * false
   */
  fixedCheck?: boolean;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 2231123
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the result is a prediction. Valid values:
   * 
   * - `true`: The result is a prediction.
   * 
   * - `false`: The result is not a prediction.
   * 
   * @example
   * false
   */
  isPrediction?: boolean;
  /**
   * @remarks
   * The predicted lower limit, which is automatically generated based on the configured threshold.
   * 
   * @example
   * 2344
   */
  lowerValue?: number;
  /**
   * @remarks
   * The partition filter expression.
   * 
   * @example
   * ds=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The method used to collect sample data. Examples: `avg`, `count`, `sum`, `min`, `max`, `count_distinct`, `user_defined`, `table_count`, `table_size`, `table_dt_load_count`, `table_dt_refuseload_count`, `null_value`, `null_value/table_count`, `(table_count-count_distinct)/table_count`, and `table_count-count_distinct`.
   * 
   * @example
   * max
   */
  methodName?: string;
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * >
   */
  op?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The name of the engine or data source used for the quality check.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The column in the source data table that the rule checks.
   * 
   * @example
   * type
   */
  property?: string;
  /**
   * @remarks
   * The historical sample values.
   */
  referenceValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue[];
  /**
   * @remarks
   * The string representation of the check result.
   * 
   * @example
   * ResultString
   */
  resultString?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123421
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * The name of the rule.
   */
  ruleName?: string;
  /**
   * @remarks
   * The current sample values.
   */
  sampleValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue[];
  /**
   * @remarks
   * The name of the table being checked.
   * 
   * @example
   * dual
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the check task.
   * 
   * @example
   * 16008552981681a0d6****
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the rule template.
   * 
   * @example
   * 5
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the rule template.
   * 
   * @example
   * Expected value verification
   */
  templateName?: string;
  /**
   * @remarks
   * The duration of the check.
   * 
   * @example
   * 10
   */
  timeCost?: string;
  /**
   * @remarks
   * The trend of the check result.
   * 
   * @example
   * up
   */
  trend?: string;
  /**
   * @remarks
   * The predicted upper limit, which is automatically generated based on the configured threshold.
   * 
   * @example
   * 22200
   */
  upperValue?: number;
  /**
   * @remarks
   * The custom threshold for a warning alert. An alert is triggered if the deviation from the expected value exceeds this threshold.
   * 
   * @example
   * 0.1
   */
  warningThreshold?: number;
  /**
   * @remarks
   * The filter condition for the check.
   * 
   * @example
   * type!=\\"type2\\"
   */
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      actualExpression: 'ActualExpression',
      beginTime: 'BeginTime',
      bizDate: 'BizDate',
      blockType: 'BlockType',
      checkResult: 'CheckResult',
      checkResultStatus: 'CheckResultStatus',
      checkerId: 'CheckerId',
      checkerName: 'CheckerName',
      checkerType: 'CheckerType',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      dateType: 'DateType',
      discreteCheck: 'DiscreteCheck',
      endTime: 'EndTime',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      externalId: 'ExternalId',
      externalType: 'ExternalType',
      fixedCheck: 'FixedCheck',
      id: 'Id',
      isPrediction: 'IsPrediction',
      lowerValue: 'LowerValue',
      matchExpression: 'MatchExpression',
      methodName: 'MethodName',
      op: 'Op',
      open: 'Open',
      projectName: 'ProjectName',
      property: 'Property',
      referenceValue: 'ReferenceValue',
      resultString: 'ResultString',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sampleValue: 'SampleValue',
      tableName: 'TableName',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeCost: 'TimeCost',
      trend: 'Trend',
      upperValue: 'UpperValue',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualExpression: 'string',
      beginTime: 'number',
      bizDate: 'number',
      blockType: 'number',
      checkResult: 'number',
      checkResultStatus: 'number',
      checkerId: 'number',
      checkerName: 'string',
      checkerType: 'number',
      comment: 'string',
      criticalThreshold: 'number',
      dateType: 'string',
      discreteCheck: 'boolean',
      endTime: 'number',
      entityId: 'number',
      expectValue: 'number',
      externalId: 'string',
      externalType: 'string',
      fixedCheck: 'boolean',
      id: 'number',
      isPrediction: 'boolean',
      lowerValue: 'number',
      matchExpression: 'string',
      methodName: 'string',
      op: 'string',
      open: 'boolean',
      projectName: 'string',
      property: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue },
      resultString: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue },
      tableName: 'string',
      taskId: 'string',
      templateId: 'number',
      templateName: 'string',
      timeCost: 'string',
      trend: 'string',
      upperValue: 'number',
      warningThreshold: 'number',
      whereCondition: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.referenceValue)) {
      $dara.Model.validateArray(this.referenceValue);
    }
    if(Array.isArray(this.sampleValue)) {
      $dara.Model.validateArray(this.sampleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of check results.
   */
  ruleChecks?: ListQualityResultsByRuleResponseBodyDataRuleChecks[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleChecks: 'RuleChecks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleChecks)) {
      $dara.Model.validateArray(this.ruleChecks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The top-level object of the check result.
   */
  data?: ListQualityResultsByRuleResponseBodyData;
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
   * CBA58543-00D4-41****
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
      data: ListQualityResultsByRuleResponseBodyData,
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

