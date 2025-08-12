// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventCountRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552220485596
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 123
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * BABEL_BUY
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * The keywords that are used to search for the event.
   * 
   * *   If you need to query the custom event whose content contains a and b, set the value to a and b.
   * *   If you need to query the custom event whose content contains a or b, set the value to a or b.
   * 
   * @example
   * cms
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552209685596
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

