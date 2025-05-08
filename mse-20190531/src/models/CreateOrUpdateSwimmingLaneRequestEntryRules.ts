// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems } from "./CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems";


export class CreateOrUpdateSwimmingLaneRequestEntryRules extends $dara.Model {
  /**
   * @example
   * AND
   */
  condition?: string;
  paths?: string[];
  priority?: number;
  restItems?: CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      paths: 'Paths',
      priority: 'Priority',
      restItems: 'RestItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

