// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SandboxLifecycleEvent extends $dara.Model {
  /**
   * @remarks
   * The action that triggered the event.
   * 
   * @example
   * delete
   */
  action?: string;
  /**
   * @remarks
   * The template build ID. This field is not returned if there is no associated build.
   * 
   * @example
   * bld-example-001
   */
  buildID?: string;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * Sandbox deleted
   */
  description?: string;
  /**
   * @remarks
   * The event data as a JSON object. The specific fields vary depending on the event type.
   */
  eventData?: { [key: string]: any };
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * df3c6750-2c5e-50d1-8b81-7a2248f6ca3b
   */
  eventID?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * terminated
   */
  eventType?: string;
  /**
   * @remarks
   * The event category. Valid values: INFO and WARNING.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The time when the event occurred. The time is in UTC RFC3339 format and supports fractional seconds.
   * 
   * @example
   * 2026-10-08T06:18:38.123Z
   */
  occurredAt?: string;
  /**
   * @remarks
   * The reason for the event. This field is not returned if there is no reason.
   * 
   * @example
   * request
   */
  reason?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sbx-62105527-699e-48df-ad3b-7425001ae4f2
   */
  sandboxID?: string;
  /**
   * @remarks
   * The ID of the team to which the event belongs.
   * 
   * @example
   * 70d1c834-0333-58d8-97ac-5336eb9179eb
   */
  teamID?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4hrtmghh2nzrsdh6yr65
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      buildID: 'buildID',
      description: 'description',
      eventData: 'eventData',
      eventID: 'eventID',
      eventType: 'eventType',
      level: 'level',
      occurredAt: 'occurredAt',
      reason: 'reason',
      sandboxID: 'sandboxID',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      buildID: 'string',
      description: 'string',
      eventData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      eventID: 'string',
      eventType: 'string',
      level: 'string',
      occurredAt: 'string',
      reason: 'string',
      sandboxID: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    if(this.eventData) {
      $dara.Model.validateMap(this.eventData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

