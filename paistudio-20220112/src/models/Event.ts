// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Event extends $dara.Model {
  content?: string;
  eventId?: string;
  eventType?: string;
  function?: string;
  isTruncated?: boolean;
  objectId?: string;
  objectType?: string;
  triggerTenantId?: string;
  triggerTime?: string;
  triggerUserId?: string;
  triggeredBy?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventId: 'EventId',
      eventType: 'EventType',
      function: 'Function',
      isTruncated: 'IsTruncated',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      triggerTenantId: 'TriggerTenantId',
      triggerTime: 'TriggerTime',
      triggerUserId: 'TriggerUserId',
      triggeredBy: 'TriggeredBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventId: 'string',
      eventType: 'string',
      function: 'string',
      isTruncated: 'boolean',
      objectId: 'string',
      objectType: 'string',
      triggerTenantId: 'string',
      triggerTime: 'string',
      triggerUserId: 'string',
      triggeredBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

