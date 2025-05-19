// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventRulesResponseBodyDatapointsEventRuleEventPattern } from "./ListEventRulesResponseBodyDatapointsEventRuleEventPattern";


export class ListEventRulesResponseBodyDatapointsEventRule extends $dara.Model {
  description?: string;
  eventPattern?: ListEventRulesResponseBodyDatapointsEventRuleEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: ListEventRulesResponseBodyDatapointsEventRuleEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.eventPattern && typeof (this.eventPattern as any).validate === 'function') {
      (this.eventPattern as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

