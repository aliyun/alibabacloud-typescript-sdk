// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * hw-test
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event pattern, in JSON format. Valid values: stringEqual stringExpression Each field can have a maximum of five expressions in the map data structure.
   * 
   * Each field can have a maximum of five expressions in the map data structure.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
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

