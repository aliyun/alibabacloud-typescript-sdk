// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushResourceRuleResponseBodyRuleItems } from "./PushResourceRuleResponseBodyRuleItems";


export class PushResourceRuleResponseBody extends $dara.Model {
  description?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  requestId?: string;
  resourceRuleId?: string;
  ruleComputingDefinition?: string;
  ruleItems?: PushResourceRuleResponseBodyRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      requestId: 'RequestId',
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
      requestId: 'string',
      resourceRuleId: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': PushResourceRuleResponseBodyRuleItems },
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

