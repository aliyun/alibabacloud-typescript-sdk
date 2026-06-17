// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList extends $dara.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList extends $dara.Model {
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList },
    };
  }

  validate() {
    if(Array.isArray(this.expressionList)) {
      $dara.Model.validateArray(this.expressionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource extends $dara.Model {
  comparisonOperator?: string;
  expression?: string;
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList;
  expressionListJoin?: string;
  expressionRaw?: string;
  level?: number;
  preCondition?: string;
  tag?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      expression: 'Expression',
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      preCondition: 'PreCondition',
      tag: 'Tag',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      expression: 'string',
      expressionList: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'number',
      preCondition: 'string',
      tag: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.expressionList && typeof (this.expressionList as any).validate === 'function') {
      (this.expressionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation extends $dara.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource extends $dara.Model {
  dimensions?: string;
  enable?: string;
  escalation?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation;
  groupId?: string;
  lastAlertTime?: string;
  lastModifyTime?: string;
  level?: number;
  metricName?: string;
  metricValues?: string;
  namespace?: string;
  productCategory?: string;
  resource?: string;
  retryTimes?: string;
  ruleId?: string;
  ruleName?: string;
  startTime?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      enable: 'Enable',
      escalation: 'Escalation',
      groupId: 'GroupId',
      lastAlertTime: 'LastAlertTime',
      lastModifyTime: 'LastModifyTime',
      level: 'Level',
      metricName: 'MetricName',
      metricValues: 'MetricValues',
      namespace: 'Namespace',
      productCategory: 'ProductCategory',
      resource: 'Resource',
      retryTimes: 'RetryTimes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      enable: 'string',
      escalation: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation,
      groupId: 'string',
      lastAlertTime: 'string',
      lastModifyTime: 'string',
      level: 'number',
      metricName: 'string',
      metricValues: 'string',
      namespace: 'string',
      productCategory: 'string',
      resource: 'string',
      retryTimes: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    if(this.escalation && typeof (this.escalation as any).validate === 'function') {
      (this.escalation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResources extends $dara.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0724011B-D9E0-4B2F-8C51-F17A894CC42C
   */
  requestId?: string;
  resources?: DescribeAlertingMetricRuleResourcesResponseBodyResources;
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
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: DescribeAlertingMetricRuleResourcesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

