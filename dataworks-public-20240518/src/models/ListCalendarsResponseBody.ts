// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsResponseBodyPagingInfoCalendarsSchedulePolicy extends $dara.Model {
  /**
   * @remarks
   * The list of normal scheduling dates.
   */
  normalDates?: string[];
  /**
   * @remarks
   * The list of non-scheduling dates. Tasks perform dry runs on these dates.
   */
  skipDates?: string[];
  static names(): { [key: string]: string } {
    return {
      normalDates: 'NormalDates',
      skipDates: 'SkipDates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalDates: { 'type': 'array', 'itemType': 'string' },
      skipDates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.normalDates)) {
      $dara.Model.validateArray(this.normalDates);
    }
    if(Array.isArray(this.skipDates)) {
      $dara.Model.validateArray(this.skipDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarsResponseBodyPagingInfoCalendars extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the calendar is applicable to all workspaces.
   * 
   * @example
   * true
   */
  allProjects?: boolean;
  /**
   * @remarks
   * The description of the scheduling calendar.
   * 
   * @example
   * Weekday scheduling calendar
   */
  description?: string;
  /**
   * @remarks
   * The end date of the calendar validity period. Format: `yyyy-mm-dd`. This parameter is returned only for strongly constrained calendars.
   * 
   * @example
   * 2026-10-09
   */
  endDate?: string;
  /**
   * @remarks
   * The expiration reminder. This parameter is returned only for strongly constrained calendars. Valid values:
   * 
   * - OneMonthBefore: One month in advance.
   * - OneWeekBefore: One week in advance.
   * - ThreeDaysBefore: Three days in advance.
   * 
   * @example
   * OneMonthBefore
   */
  expirationReminder?: string;
  /**
   * @remarks
   * The default scheduling policy for dates that are not configured. This parameter is returned only for weakly constrained calendars. Valid values:
   * 
   * - Normal: Normal scheduling.
   * - Pause: Pause scheduling.
   * - Skip: Dry run.
   * 
   * @example
   * Normal
   */
  fallbackPolicy?: string;
  /**
   * @remarks
   * The ID of the scheduling calendar.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The time when the calendar was modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the scheduling calendar.
   * 
   * @example
   * work_calendar
   */
  name?: string;
  /**
   * @remarks
   * The scheduling policy after the calendar expires. This parameter is returned only for strongly constrained calendars. Valid values:
   * 
   * - Normal: Normal scheduling.
   * - Pause: Pause scheduling.
   * - Skip: Dry run.
   * 
   * @example
   * Skip
   */
  overduePolicy?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The list of applicable workspace IDs. An empty array is returned if AllProjects is set to true.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The date scheduling policy.
   */
  schedulePolicy?: ListCalendarsResponseBodyPagingInfoCalendarsSchedulePolicy;
  /**
   * @remarks
   * The start date of the calendar validity period. Format: `yyyy-mm-dd`. This parameter is returned only for strongly constrained calendars.
   * 
   * @example
   * 2026-10-08
   */
  startDate?: string;
  /**
   * @remarks
   * The calendar type. Valid values:
   * 
   * - StrongConstraint: Strongly constrained calendar.
   * - WeakConstraint: Weakly constrained calendar.
   * 
   * @example
   * StrongConstraint
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      allProjects: 'AllProjects',
      description: 'Description',
      endDate: 'EndDate',
      expirationReminder: 'ExpirationReminder',
      fallbackPolicy: 'FallbackPolicy',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      overduePolicy: 'OverduePolicy',
      owner: 'Owner',
      projectIds: 'ProjectIds',
      schedulePolicy: 'SchedulePolicy',
      startDate: 'StartDate',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProjects: 'boolean',
      description: 'string',
      endDate: 'string',
      expirationReminder: 'string',
      fallbackPolicy: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      overduePolicy: 'string',
      owner: 'string',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      schedulePolicy: ListCalendarsResponseBodyPagingInfoCalendarsSchedulePolicy,
      startDate: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(this.schedulePolicy && typeof (this.schedulePolicy as any).validate === 'function') {
      (this.schedulePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of scheduling calendars.
   */
  calendars?: ListCalendarsResponseBodyPagingInfoCalendars[];
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
   * The number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calendars: 'Calendars',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendars: { 'type': 'array', 'itemType': ListCalendarsResponseBodyPagingInfoCalendars },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calendars)) {
      $dara.Model.validateArray(this.calendars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListCalendarsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListCalendarsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

