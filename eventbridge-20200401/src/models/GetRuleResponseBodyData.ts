// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyDataTargets } from "./GetRuleResponseBodyDataTargets";


export class GetRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the event rule was created.
   * 
   * @example
   * 1607071602000
   */
  createdTimestamp?: number;
  /**
   * @remarks
   * The description of the event rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * Housekeeping-Bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event pattern, in JSON format. Valid values: stringEqual and stringExpression. You can specify up to five expressions in the map data structure in each field.
   * 
   * You can specify up to five expressions in the map data structure in each field.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event rule.
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
   * ramrolechange-fc
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values: ENABLE (default): The event rule is enabled. DISABLE: The event rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: GetRuleResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
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
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': GetRuleResponseBodyDataTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

