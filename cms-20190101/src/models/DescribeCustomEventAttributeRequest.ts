// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * The value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since January 1, 1970.
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
   * The application group ID.
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
   * The keywords used to search event content.
   * 
   * - If the event content contains both A and B, you can search for A and B.
   * - If the event content contains either A or B, you can search for A or B.
   * 
   * @example
   * cms
   */
  searchKeywords?: string;
  /**
   * @remarks
   * The start time.
   * 
   * The value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since January 1, 1970.
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

