// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue extends $dara.Model {
  /**
   * @remarks
   * The business date. If the monitored data is offline, the business date is typically the day before the check is performed.
   * 
   * @example
   * 2020-12-03
   */
  bizDate?: string;
  /**
   * @remarks
   * The value of the sample field when a `group by` clause is used. For example, if you group by the gender field, the values for `DiscreteProperty` can be male, female, or null.
   * 
   * @example
   * 0
   */
  discreteProperty?: string;
  /**
   * @remarks
   * The result of a single check.
   * 
   * @example
   * 0
   */
  singleCheckResult?: number;
  /**
   * @remarks
   * The threshold that was applied to this historical data point.
   * 
   * @example
   * 0.5
   */
  threshold?: number;
  /**
   * @remarks
   * The historical check value.
   * 
   * @example
   * 19
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

export class ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue extends $dara.Model {
  /**
   * @remarks
   * The business date. If the monitored data is offline, the business date is typically the day before the check is performed.
   * 
   * @example
   * 2020-12-03
   */
  bizDate?: string;
  /**
   * @remarks
   * The value of the sample field when a `group by` clause is used. For example, if you group by the gender field, the values for `DiscreteProperty` can be male, female, or null.
   * 
   * @example
   * 0
   */
  discreteProperty?: string;
  /**
   * @remarks
   * The current sample value.
   * 
   * @example
   * 19
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

export class ListQualityResultsByEntityResponseBodyDataRuleChecks extends $dara.Model {
  /**
   * @remarks
   * The expression that specifies the data partition that was checked.
   * 
   * @example
   * ds=20200912
   */
  actualExpression?: string;
  /**
   * @remarks
   * The start time of the check. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1600704000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The business date. If the monitored data is offline, the business date is typically the day before the check is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: number;
  /**
   * @remarks
   * The strength of the monitoring rule. Valid values:
   * 
   * - 1: Strong Rule. If a Strong Rule check generates a critical alert, the associated Scheduling Task is blocked.
   * 
   * - 0: Weak Rule.
   * 
   * @example
   * 0
   */
  blockType?: number;
  /**
   * @remarks
   * The check result. This parameter usually has the same value as `CheckResultStatus`. Valid values:
   * 
   * - 0: Normal
   * 
   * - 1: Warning
   * 
   * - 2: Critical
   * 
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @remarks
   * The status of the check result. This parameter corresponds to the status displayed in the UI. Valid values:
   * 
   * - 0: Normal
   * 
   * - 1: Warning
   * 
   * - 2: Critical
   * 
   * @example
   * 0
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
   * The type of the checker. Valid values:
   * 
   * - 0: Fixed Value
   * 
   * - 1: Fluctuation
   * 
   * - 2: Dynamic Threshold
   * 
   * @example
   * 1
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
   * The acceptable deviation from the expected value that triggers a critical alert. This threshold is customizable. If a critical alert is triggered for a Strong Rule, the associated Scheduling Task is blocked.
   * 
   * @example
   * 0.5
   */
  criticalThreshold?: number;
  /**
   * @remarks
   * The scheduling cycle. A common value is YMD, which represents year, month, and day.
   * 
   * @example
   * YMD
   */
  dateType?: string;
  /**
   * @remarks
   * Specifies whether the check is a discrete check. Valid values:
   * 
   * - true: The check is a discrete check.
   * 
   * - false: The check is not a discrete check.
   * 
   * @example
   * true
   */
  discreteCheck?: boolean;
  /**
   * @remarks
   * The end time of the check. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * 15432322
   */
  entityId?: number;
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 200
   */
  expectValue?: number;
  /**
   * @remarks
   * The Node ID of the Scheduling Task.
   * 
   * @example
   * 1112323123
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
   * Specifies whether the check is based on a fixed value. Valid values:
   * 
   * - true: The check is based on a fixed value.
   * 
   * - false: The check is not based on a fixed value.
   * 
   * @example
   * false
   */
  fixedCheck?: boolean;
  /**
   * @remarks
   * The unique ID of the check result.
   * 
   * @example
   * 121212121
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether the result is a predicted value. Valid values:
   * 
   * - true: The result is a predicted value.
   * 
   * - false: The result is not a predicted value.
   * 
   * @example
   * true
   */
  isPrediction?: boolean;
  /**
   * @remarks
   * The predicted lower limit. This value is automatically generated after you set a threshold.
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
   * The method for collecting sample data. Valid values include `avg`, `count`, `sum`, `min`, `max`, `count_distinct`, `user_defined`, `table_count`, `table_size`, `table_dt_load_count`, `table_dt_refuseload_count`, `null_value`, `null_value/table_count`, `(table_count-count_distinct)/table_count`, and `table_count-count_distinct`.
   * 
   * @example
   * count_distinct
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
   * The name of the monitored compute engine or Data Source.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the monitored column in the Data Source table.
   * 
   * @example
   * type
   */
  property?: string;
  /**
   * @remarks
   * The historical sample values.
   */
  referenceValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue[];
  /**
   * @remarks
   * The check result, returned as a string.
   * 
   * @example
   * test
   */
  resultString?: string;
  /**
   * @remarks
   * The monitoring rule ID.
   * 
   * @example
   * 123123232
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * @example
   * The name of the rule.
   */
  ruleName?: string;
  /**
   * @remarks
   * The current sample values.
   */
  sampleValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue[];
  /**
   * @remarks
   * The name of the table that is monitored.
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
   * The time taken to run the check, in seconds.
   * 
   * @example
   * 202
   */
  timeCost?: string;
  /**
   * @remarks
   * The trend of the check result.
   * 
   * @example
   * abs
   */
  trend?: string;
  /**
   * @remarks
   * The predicted upper limit. This value is automatically generated after you set a threshold.
   * 
   * @example
   * 25555
   */
  upperValue?: number;
  /**
   * @remarks
   * The warning threshold. This value indicates the acceptable deviation from the expected value. You can customize this threshold based on your business requirements.
   * 
   * @example
   * 0.1
   */
  warningThreshold?: number;
  /**
   * @remarks
   * The filter condition of the monitoring rule.
   * 
   * @example
   * id>0
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
      projectName: 'string',
      property: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue },
      resultString: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue },
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

export class ListQualityResultsByEntityResponseBodyData extends $dara.Model {
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
   * The monitoring rule check results.
   */
  ruleChecks?: ListQualityResultsByEntityResponseBodyDataRuleChecks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 50
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
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecks },
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

export class ListQualityResultsByEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object that contains the quality check results.
   */
  data?: ListQualityResultsByEntityResponseBodyData;
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
   * The ID of the request.
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
      data: ListQualityResultsByEntityResponseBodyData,
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

