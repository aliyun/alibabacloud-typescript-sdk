// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTargetsRequest extends $dara.Model {
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
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetIds)) {
      $dara.Model.validateArray(this.targetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

