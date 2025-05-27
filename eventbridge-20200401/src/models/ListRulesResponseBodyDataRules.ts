// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyDataRulesTargets } from "./ListRulesResponseBodyDataRulesTargets";


export class ListRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1607071602000
   */
  createdTimestamp?: number;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The details of the event rule.
   */
  detailMap?: { [key: string]: any };
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * demo
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event pattern, in JSON format. Valid values: stringEqual pattern stringExpression pattern Each field can have a maximum of five expressions in the map data structure.
   * 
   * Each field can have a maximum of five expressions in the map data structure.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the rule.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/myRule3
   */
  ruleARN?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * tf-testacc-rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values: ENABLE: The event rule is enabled. It is the default state of the event rule. DISABLE: The event rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: ListRulesResponseBodyDataRulesTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
      detailMap: 'DetailMap',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleARN: 'RuleARN',
      ruleName: 'RuleName',
      status: 'Status',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimestamp: 'number',
      description: 'string',
      detailMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRulesTargets },
    };
  }

  validate() {
    if(this.detailMap) {
      $dara.Model.validateMap(this.detailMap);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

