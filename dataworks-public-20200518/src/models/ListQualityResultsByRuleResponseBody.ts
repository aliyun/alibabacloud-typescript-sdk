// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue extends $dara.Model {
  /**
   * @remarks
   * The data timestamp. If the monitored business entity is offline data, the value is usually one day before the monitoring is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: string;
  /**
   * @remarks
   * The values of the sample field that are grouped by using the GROUP BY clause. For example, the values of the Gender field are grouped by using the GROUP BY clause. In this case, the values of DiscreteProperty are Male, Female, and null.
   * 
   * @example
   * type1
   */
  discreteProperty?: string;
  /**
   * @remarks
   * The string of the monitoring result.
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
   * The data timestamp. If the monitored business entity is offline data, the value is usually one day before the monitoring is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: string;
  /**
   * @remarks
   * The values of the sample field that are grouped by using the GROUP BY clause. For example, the values of the Gender field are grouped by using the GROUP BY clause. In this case, the values of DiscreteProperty are Male, Female, and null.
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
   * The partition in the monitored data source table.
   * 
   * @example
   * ds=20200925
   */
  actualExpression?: string;
  /**
   * @remarks
   * The time when the monitoring started.
   * 
   * @example
   * 1600704000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The data timestamp. If the monitored business entity is offline data, the value is usually one day before the monitoring is performed.
   * 
   * @example
   * 1600704000000
   */
  bizDate?: number;
  /**
   * @remarks
   * The strength of the monitoring rule. The strength of a monitoring rule indicates the importance of the rule. Valid values:
   * 
   * *   1: indicates that the monitoring rule is a strong rule.
   * *   0: indicates that the monitoring rule is a weak rule. You can specify the strength of a monitoring rule based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 1
   */
  blockType?: number;
  /**
   * @remarks
   * The monitoring result.
   * 
   * @example
   * 2
   */
  checkResult?: number;
  /**
   * @remarks
   * The status of the monitoring result.
   * 
   * @example
   * 2
   */
  checkResultStatus?: number;
  /**
   * @remarks
   * The checker ID.
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
   * The threshold for a critical alert. The threshold indicates the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements. If a monitoring rule is a strong rule and the critical threshold is exceeded, a critical alert is reported and tasks that are associated with the rule are blocked from running.
   * 
   * @example
   * 0.6
   */
  criticalThreshold?: number;
  /**
   * @remarks
   * The scheduling frequency. In most cases, the value of this parameter is YMD. This value indicates year, month, and day.
   * 
   * @example
   * YMD
   */
  dateType?: string;
  /**
   * @remarks
   * Indicates whether the monitoring is discrete monitoring. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  discreteCheck?: boolean;
  /**
   * @remarks
   * The time when the monitoring ended.
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
   * The node ID.
   * 
   * @example
   * 123112232
   */
  externalId?: string;
  /**
   * @remarks
   * The type of the scheduling system. Only CWF scheduling systems are supported.
   * 
   * @example
   * CWF2
   */
  externalType?: string;
  /**
   * @remarks
   * Indicates whether the monitoring is performed based on a fixed value. Valid values:
   * 
   * *   true
   * *   false
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
   * Indicates whether the monitoring result is the same as the predicted result. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPrediction?: boolean;
  /**
   * @remarks
   * The lower limit of the predicted result. The value of this parameter is automatically generated based on the threshold that you specify.
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
   * The method used to collect sample data, such as such as avg, count, sum, min, max, count_distinct, user_defined, table_count, table_size, table_dt_load_count, table_dt_refuseload_count, null_value, null_value/table_count, (table_count-count_distinct)/table_count, or table_count-count_distinct.
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
   * Indicates whether the monitoring rule is enabled.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The name of the compute engine or data source for which data quality is monitored.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The field whose data quality is checked based on the monitoring rule. This field is a column in the data source table that is monitored.
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
   * The string of the monitoring result.
   * 
   * @example
   * ResultString
   */
  resultString?: string;
  /**
   * @remarks
   * The ID of the monitoring rule.
   * 
   * @example
   * 123421
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
  sampleValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue[];
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
   * The monitoring task ID.
   * 
   * @example
   * 16008552981681a0d6****
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the monitoring template.
   * 
   * @example
   * 5
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the monitoring template.
   * 
   * @example
   * Expected value verification
   */
  templateName?: string;
  /**
   * @remarks
   * The time that was taken to run the monitoring task.
   * 
   * @example
   * 10
   */
  timeCost?: string;
  /**
   * @remarks
   * The trend of the monitoring result.
   * 
   * @example
   * up
   */
  trend?: string;
  /**
   * @remarks
   * The upper limit of the predicted result. The value of this parameter is automatically generated based on the threshold that you specify.
   * 
   * @example
   * 22200
   */
  upperValue?: number;
  /**
   * @remarks
   * The threshold for a warning alert. The threshold specifies the deviation of the monitoring result from the expected value. You can specify a custom value for the threshold based on your business requirements.
   * 
   * @example
   * 0.1
   */
  warningThreshold?: number;
  /**
   * @remarks
   * The filter condition of the monitoring task.
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
   * The returned monitoring results.
   */
  ruleChecks?: ListQualityResultsByRuleResponseBodyDataRuleChecks[];
  /**
   * @remarks
   * The total number of entries returned.
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
   * The data structure of the monitoring results returned.
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

