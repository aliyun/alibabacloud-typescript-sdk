// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes extends $dara.Model {
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * name
   */
  eventSourceName?: string;
  /**
   * @remarks
   * The name of the group to which the event type belongs.
   * 
   * @example
   * aliyuncvc:MeetingEvent
   */
  groupName?: string;
  /**
   * @remarks
   * The full name of the event type.
   * 
   * @example
   * aliyuncvc:MeetingEvent:MeetingStateEvent
   */
  name?: string;
  /**
   * @remarks
   * The short name of the event type.
   * 
   * @example
   * MeetingStateEvent
   */
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceName: 'EventSourceName',
      groupName: 'GroupName',
      name: 'Name',
      shortName: 'ShortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceName: 'string',
      groupName: 'string',
      name: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

