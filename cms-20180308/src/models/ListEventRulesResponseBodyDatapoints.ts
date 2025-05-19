// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventRulesResponseBodyDatapointsEventRule } from "./ListEventRulesResponseBodyDatapointsEventRule";


export class ListEventRulesResponseBodyDatapoints extends $dara.Model {
  eventRule?: ListEventRulesResponseBodyDatapointsEventRule[];
  static names(): { [key: string]: string } {
    return {
      eventRule: 'EventRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRule: { 'type': 'array', 'itemType': ListEventRulesResponseBodyDatapointsEventRule },
    };
  }

  validate() {
    if(Array.isArray(this.eventRule)) {
      $dara.Model.validateArray(this.eventRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

