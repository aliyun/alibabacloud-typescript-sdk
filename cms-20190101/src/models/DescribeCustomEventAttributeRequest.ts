// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552227965971
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 123****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123****
   */
  groupId?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * test123
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
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
   * 1552224365971
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
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

