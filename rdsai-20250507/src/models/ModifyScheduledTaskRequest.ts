// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the inspection configuration.
   * 
   * @example
   * Scheduled RDS instance inspection task
   */
  description?: string;
  /**
   * @remarks
   * The new inspection frequency. Separate multiple values with commas (,). Default value: DAILY. Valid values:
   * * DAILY: every day
   * * Monday: Monday
   * * Tuesday: Tuesday
   * * Wednesday: Wednesday
   * * Thursday: Thursday
   * * Friday: Friday
   * * Saturday: Saturday
   * * Sunday: Sunday
   * ### Note: DAILY overrides weekly values. For example, if you specify DAILY,Monday, the backend uses DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The new list of associated instance IDs. Separate multiple values with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The new name of the inspection configuration.
   * 
   * @example
   * RDS inspection task
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
   * The new time to execute the inspection task. Format: HH:mm:ssZ (UTC).
   * 
   * @example
   * 02:00:00Z
   */
  startTime?: string;
  templateId?: string;
  /**
   * @remarks
   * The inspection time range. Default value: the last 24 hours. Valid values: 1 to 168 (up to 7 days).
   * 
   * @example
   * 24
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      frequency: 'Frequency',
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      name: 'Name',
      reportLanguage: 'ReportLanguage',
      scheduledId: 'ScheduledId',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      frequency: 'string',
      inspectionItems: 'string',
      instanceIds: 'string',
      name: 'string',
      reportLanguage: 'string',
      scheduledId: 'string',
      startTime: 'string',
      templateId: 'string',
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

