// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Event extends $dara.Model {
  /**
   * @remarks
   * The event content.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * eventxxx
   */
  eventId?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * CreateQuota
   */
  eventType?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * Empty
   */
  function?: string;
  /**
   * @remarks
   * Indicates whether the content is truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * Object ID
   * 
   * @example
   * quotaxxx
   */
  objectId?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * Quota
   */
  objectType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account.
   * 
   * @example
   * 1234
   */
  triggerTenantId?: string;
  /**
   * @remarks
   * The trigger time.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  triggerTime?: string;
  /**
   * @remarks
   * The RAM user.
   * 
   * @example
   * 1234567
   */
  triggerUserId?: string;
  /**
   * @remarks
   * The trigger source.
   * 
   * @example
   * System
   */
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

