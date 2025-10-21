// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryEventRequestEvents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33.63.112.139_29914368_MTEE3_1754878127662_117007
   */
  eventId?: string;
  message?: { [key: string]: string }[];
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fd0bbf26-3c0c-4d91-a392-42d59501e12b
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * uid1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      message: 'message',
      metadata: 'metadata',
      sessionId: 'sessionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      message: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sessionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryEventRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  events?: CreateMemoryEventRequestEvents[];
  static names(): { [key: string]: string } {
    return {
      events: 'events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': CreateMemoryEventRequestEvents },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

