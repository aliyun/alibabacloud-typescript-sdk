// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPattern } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPattern";


export class ListEventRulesResponseBodyDatapointsEventRuleEventPattern extends $dara.Model {
  eventPattern?: ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPattern[];
  static names(): { [key: string]: string } {
    return {
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPattern: { 'type': 'array', 'itemType': ListEventRulesResponseBodyDatapointsEventRuleEventPatternEventPattern },
    };
  }

  validate() {
    if(Array.isArray(this.eventPattern)) {
      $dara.Model.validateArray(this.eventPattern);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

