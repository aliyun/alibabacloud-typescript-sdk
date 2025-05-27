// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * tf-testacc-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event rule that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ramrolechange-mns
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

