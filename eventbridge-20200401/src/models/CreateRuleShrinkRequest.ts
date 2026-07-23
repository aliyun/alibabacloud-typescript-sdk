// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event rule.
   * 
   * @example
   * SMQ filter rule
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  /**
   * @remarks
   * A list of event targets.
   */
  eventTargetsShrink?: string;
  /**
   * @remarks
   * The event pattern, in JSON format. Supported pattern types are `stringEqual` and `stringExpression`. Each field can contain a maximum of five expressions in a map structure.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "source": [
   *     {
   *       "prefix": "acs."
   *     }
   *   ],
   *   "type": [
   *     {
   *       "prefix": "oss:ObjectReplication"
   *     }
   *   ],
   *   "subject": [
   *     {
   *       "prefix": "acs:oss:cn-hangzhou:123456789098****:my-movie-bucket/",
   *       "suffix": ".txt"
   *     }
   *   ]
   * }
   */
  filterPattern?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * SMQRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values: `ENABLE`: The rule is enabled. This is the default value. `DISABLE`: The rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTargetsShrink: 'EventTargets',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventTargetsShrink: 'string',
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

