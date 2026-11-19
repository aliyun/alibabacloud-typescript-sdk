// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomEventRequestEventInfo extends $dara.Model {
  /**
   * @remarks
   * The event content. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * IOException
   */
  content?: string;
  /**
   * @remarks
   * The event name. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * myEvent
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the application group. Valid values of N: 0 to 50.
   * 
   * Default value: 0. A value of 0 indicates that the reported event does not belong to any application group.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the event occurred. Valid values of N: 1 to 50.
   * 
   * @example
   * 20171013T170923.456+0800
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventName: 'EventName',
      groupId: 'GroupId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventName: 'string',
      groupId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of event information.
   * 
   * This parameter is required.
   */
  eventInfo?: PutCustomEventRequestEventInfo[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': PutCustomEventRequestEventInfo },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventInfo)) {
      $dara.Model.validateArray(this.eventInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

