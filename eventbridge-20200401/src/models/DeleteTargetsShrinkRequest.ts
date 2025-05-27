// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTargetsShrinkRequest extends $dara.Model {
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
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ramrolechange-mns
   */
  ruleName?: string;
  /**
   * @remarks
   * The IDs of the event targets that you want to delete.
   */
  targetIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetIdsShrink: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

