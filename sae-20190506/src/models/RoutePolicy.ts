// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PolicyItem } from "./PolicyItem";


export class RoutePolicy extends $dara.Model {
  condition?: string;
  policyItems?: PolicyItem[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      policyItems: 'policyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      policyItems: { 'type': 'array', 'itemType': PolicyItem },
    };
  }

  validate() {
    if(Array.isArray(this.policyItems)) {
      $dara.Model.validateArray(this.policyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

