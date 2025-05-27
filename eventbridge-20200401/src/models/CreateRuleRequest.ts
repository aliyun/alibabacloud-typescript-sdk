// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestEventTargets } from "./CreateRuleRequestEventTargets";


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
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
   * The event targets.
   */
  eventTargets?: CreateRuleRequestEventTargets[];
  /**
   * @remarks
   * The event pattern, in JSON format. Valid values: stringEqual and stringExpression. You can specify up to five expressions in the map data structure in each field.
   * 
   * You can specify up to five expressions in the map data structure in each field.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"source\\": [{\\"prefix\\": \\"acs.\\"}],\\"type\\": [{\\"prefix\\":\\"oss:ObjectReplication\\"}],\\"subject\\":[{\\"prefix\\":\\"acs:oss:cn-hangzhou:123456789098****:my-movie-bucket/\\", \\"suffix\\":\\".txt\\"}]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * MNSRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values: ENABLE: enables the event rule. It is the default status of the event rule. DISABLE: disables the event rule.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTargets: 'EventTargets',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventTargets: { 'type': 'array', 'itemType': CreateRuleRequestEventTargets },
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTargets)) {
      $dara.Model.validateArray(this.eventTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

