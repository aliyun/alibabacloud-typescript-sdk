// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventRuleRequestEventPattern } from "./PutEventRuleRequestEventPattern";


export class PutEventRuleRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventPattern?: PutEventRuleRequestEventPattern[];
  eventType?: string;
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: { 'type': 'array', 'itemType': PutEventRuleRequestEventPattern },
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
      state: 'string',
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

