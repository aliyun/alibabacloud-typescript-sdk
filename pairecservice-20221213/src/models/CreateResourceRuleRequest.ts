// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRuleRequestRuleItems extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
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
      maxValue: 'number',
      minValue: 'number',
      name: 'string',
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

export class CreateResourceRuleRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleComputingDefinition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleItems?: CreateResourceRuleRequestRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': CreateResourceRuleRequestRuleItems },
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

