// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the new inspection configuration.
   */
  description?: string;
  /**
   * @remarks
   * The new inspection frequency. Separate multiple values with commas (,). Default value: DAILY. Valid values:
   * 
   * *   DAILY
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * ### [](#daily--dailymonday--daily-)Note: DAILY takes precedence over other values. For example, if you enter DAILY,Monday, the backend will use DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  /**
   * @remarks
   * The new list of related instances. Separate multiple instances with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the new inspection configuration.
   */
  name?: string;
  reportLanguage?: string;
  /**
   * @remarks
   * The ID of the scheduled inspection configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The new execution time of the inspection task. Specify the time in the ISO 8601 standard in the HH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The inspection time range. The default value is the latest 24 hours. Valid values: 1 to 168. The maximum value is 7 days.
   * 
   * @example
   * 24
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      frequency: 'Frequency',
      instanceIds: 'InstanceIds',
      name: 'Name',
      reportLanguage: 'ReportLanguage',
      scheduledId: 'ScheduledId',
      startTime: 'StartTime',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      frequency: 'string',
      instanceIds: 'string',
      name: 'string',
      reportLanguage: 'string',
      scheduledId: 'string',
      startTime: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

