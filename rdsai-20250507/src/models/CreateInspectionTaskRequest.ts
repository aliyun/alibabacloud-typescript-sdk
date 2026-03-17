// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the inspection task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. By default, the time range of the task is the latest 24 hours.
   * 
   * @example
   * 2026-01-30T02:10:48Z
   */
  endTime?: string;
  /**
   * @remarks
   * The inspection items. Separates multiple items with commas (,). If this parameter is empty or not specified, all inspection items are executed.
   * 
   * ### [](#)Valid values:
   * 
   * *   instance_info
   * *   resource_usage
   * *   connection_session_management
   * *   performance_metrics
   * *   slow_query_analysis
   * *   error_log_analysis
   * *   lock_wait_deadlock_analysis
   * *   backup_recovery_analysis
   * *   high_availability_disaster_recovery_analysis
   * *   security_configuration_analysis
   * *   storage_engine_analysis
   * *   schema_object_analysis
   * 
   * @example
   * instance_info, resource_usage
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The instances covered by the task. Separates multiple instance IDs with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  regionId?: string;
  reportLanguage?: string;
  reportType?: string;
  /**
   * @remarks
   * The start time of the inspection task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. By default, the time range of the task is the latest 24 hours.
   * 
   * @example
   * 2025-12-28T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportType: 'ReportType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionItems: 'string',
      instanceIds: 'string',
      regionId: 'string',
      reportLanguage: 'string',
      reportType: 'string',
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

