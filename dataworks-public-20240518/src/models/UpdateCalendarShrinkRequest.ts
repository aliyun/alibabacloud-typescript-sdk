// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCalendarShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the calendar applies to all workspaces. Default value: false. Valid values:
   * - true: All workspaces.
   * - false: The workspaces specified by ProjectIds.
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
   * The end date of the calendar validity period, in the `yyyy-mm-dd` format. Required when Type is set to StrongConstraint. The end date cannot be earlier than the start date, and the interval between the start date and the end date must be less than 5 years.
   * 
   * @example
   * 2026-10-09
   */
  endDate?: string;
  /**
   * @remarks
   * The expiration reminder. Required when Type is set to StrongConstraint. Valid values:
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
   * The default scheduling policy for dates that are not configured. Required when Type is set to WeakConstraint. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The scheduling policy after the calendar expires. Required when Type is set to StrongConstraint. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The list of applicable workspace IDs.
   * - Required and cannot be empty when AllProjects is set to false or left unspecified.
   * - Leave empty or pass an empty array when AllProjects is set to true.
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
   * The start date of the calendar validity period, in the `yyyy-mm-dd` format. Required when Type is set to StrongConstraint.
   * 
   * @example
   * 2026-10-08
   */
  startDate?: string;
  /**
   * @remarks
   * The calendar type. Valid values:
   * - StrongConstraint: Strong constraint calendar.
   * - WeakConstraint: Weak constraint calendar.
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
      id: 'Id',
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
      id: 'number',
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

