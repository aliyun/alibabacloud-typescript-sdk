// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems } from "./QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems";


export class QuerySwimmingLaneByIdResponseBodyDataEntryRules extends $dara.Model {
  condition?: string;
  path?: string;
  paths?: string[];
  restItems?: QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      path: 'path',
      paths: 'paths',
      restItems: 'restItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      restItems: { 'type': 'array', 'itemType': QuerySwimmingLaneByIdResponseBodyDataEntryRulesRestItems },
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

