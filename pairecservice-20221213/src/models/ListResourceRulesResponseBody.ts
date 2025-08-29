// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRulesResponseBodyResourceRulesRuleItems extends $dara.Model {
  description?: string;
  maxValue?: string;
  minValue?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'string',
      minValue: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBodyResourceRules extends $dara.Model {
  description?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  resourceRuleId?: string;
  ruleComputingDefinition?: string;
  ruleItems?: ListResourceRulesResponseBodyResourceRulesRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      resourceRuleId: 'ResourceRuleId',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      resourceRuleId: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': ListResourceRulesResponseBodyResourceRulesRuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.ruleItems)) {
      $dara.Model.validateArray(this.ruleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBody extends $dara.Model {
  requestId?: string;
  resourceRules?: ListResourceRulesResponseBodyResourceRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRules: 'ResourceRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRules: { 'type': 'array', 'itemType': ListResourceRulesResponseBodyResourceRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceRules)) {
      $dara.Model.validateArray(this.resourceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

