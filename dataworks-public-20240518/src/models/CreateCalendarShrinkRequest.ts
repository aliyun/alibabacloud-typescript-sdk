// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCalendarShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the calendar applies to all workspaces. Default value: false.
   * 
   * - true: all workspaces.
   * - false: the workspaces specified by ProjectIds.
   * 
   * @example
   * true
   */
  allProjects?: boolean;
  /**
   * @remarks
   * The description of the scheduling calendar. The description must be 5 to 2,048 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Weekday scheduling calendar
   */
  description?: string;
  /**
   * @remarks
   * The end date of the calendar validity period. Format: `yyyy-mm-dd`. This parameter is required when Type is set to StrongConstraint. The end date cannot be earlier than the start date, and the interval between the start date and the end date must be less than 5 years.
   * 
   * @example
   * 2026-10-09
   */
  endDate?: string;
  /**
   * @remarks
   * The expiration reminder. This parameter is required when Type is set to StrongConstraint.
   * 
   * - OneMonthBefore: one month in advance.
   * - OneWeekBefore: one week in advance.
   * - ThreeDaysBefore: three days in advance.
   * 
   * @example
   * OneMonthBefore
   */
  expirationReminder?: string;
  /**
   * @remarks
   * The default scheduling policy for dates that are not configured. This parameter is required when Type is set to WeakConstraint.
   * 
   * - Normal: normal scheduling.
   * - Pause: pause scheduling.
   * - Skip: dry run.
   * 
   * @example
   * Normal
   */
  fallbackPolicy?: string;
  /**
   * @remarks
   * The name of the scheduling calendar. The name must be unique within the current tenant and can be up to 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * work_calendar
   */
  name?: string;
  /**
   * @remarks
   * The scheduling policy after the calendar expires. This parameter is required when Type is set to StrongConstraint.
   * 
   * - Normal: normal scheduling.
   * - Pause: pause scheduling.
   * - Skip: dry run.
   * 
   * @example
   * Skip
   */
  overduePolicy?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The list of applicable workspace IDs.
   * 
   * - If AllProjects is set to false or left empty: This parameter is required and cannot be empty.
   * - If AllProjects is set to true: Leave this parameter empty or pass an empty array.
   */
  projectIdsShrink?: string;
  /**
   * @remarks
   * The date scheduling policy. For a strong constraint calendar, the normal scheduling dates and non-scheduling dates must cover every day within the validity period and cannot overlap.
   * 
   * This parameter is required.
   */
  schedulePolicyShrink?: string;
  /**
   * @remarks
   * The start date of the calendar validity period. Format: `yyyy-mm-dd`. This parameter is required when Type is set to StrongConstraint.
   * 
   * @example
   * 2026-10-08
   */
  startDate?: string;
  /**
   * @remarks
   * The type of the calendar.
   * 
   * - StrongConstraint: strong constraint calendar.
   * - WeakConstraint: weak constraint calendar.
   * 
   * This parameter is required.
   * 
   * @example
   * StrongConstraint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allProjects: 'AllProjects',
      description: 'Description',
      endDate: 'EndDate',
      expirationReminder: 'ExpirationReminder',
      fallbackPolicy: 'FallbackPolicy',
      name: 'Name',
      overduePolicy: 'OverduePolicy',
      owner: 'Owner',
      projectIdsShrink: 'ProjectIds',
      schedulePolicyShrink: 'SchedulePolicy',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProjects: 'boolean',
      description: 'string',
      endDate: 'string',
      expirationReminder: 'string',
      fallbackPolicy: 'string',
      name: 'string',
      overduePolicy: 'string',
      owner: 'string',
      projectIdsShrink: 'string',
      schedulePolicyShrink: 'string',
      startDate: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

