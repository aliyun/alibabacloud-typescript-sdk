// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled inspection task.
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
   * *   Saturday \\*Sunday
   * 
   * ### [](#daily--dailymonday--daily-)Note: DAILY takes precedence over other values. For example, if you enter DAILY,Monday, the backend uses DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The IDs of the related instances. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the scheduled inspection task. The name cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  reportLanguage?: string;
  reportRegionId?: string;
  reportType?: string;
  /**
   * @remarks
   * The time when the inspection task is executed. Specify the time in the ISO 8601 standard in the HH:mm:ssZ format. The time must be in UTC. Default value: 02:00 AM.
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
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      name: 'Name',
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportRegionId: 'ReportRegionId',
      reportType: 'ReportType',
      startTime: 'StartTime',
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
      regionId: 'string',
      reportLanguage: 'string',
      reportRegionId: 'string',
      reportType: 'string',
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

