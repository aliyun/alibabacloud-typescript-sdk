// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the inspection range. Format: YYYY-MM-DDTHH:mm:ssZ (UTC). Default value: the current time.
   * 
   * @example
   * 2026-01-30T02:10:48Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of inspection items. Separate multiple values with commas (,). If this parameter is left empty or not specified, all inspection items are executed.
   * ### Available inspection items:
   * * instance_info (instance information)
   * * resource_usage (resource usage)
   * * connection_session_management (connection and session management)
   * * performance_metrics (performance metrics)
   * * slow_query_analysis (slow query analysis)
   * * error_log_analysis (error log analysis)
   * * lock_wait_deadlock_analysis (lock wait and deadlock analysis)
   * * backup_recovery_analysis (backup and recovery analysis)
   * * high_availability_disaster_recovery_analysis (high availability and disaster recovery inspection)
   * * security_configuration_analysis (security configuration inspection)
   * * storage_engine_analysis (storage engine inspection)
   * * schema_object_analysis (schema and object inspection)
   * 
   * @example
   * instance_info, resource_usage
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The list of associated instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  regionId?: string;
  reportLanguage?: string;
  reportRegionId?: string;
  reportType?: string;
  /**
   * @remarks
   * The start time of the inspection range. Format: YYYY-MM-DDTHH:mm:ssZ (UTC). Default value: 24 hours before the current time.
   * 
   * @example
   * 2025-12-28T16:00:00Z
   */
  startTime?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportRegionId: 'ReportRegionId',
      reportType: 'ReportType',
      startTime: 'StartTime',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionItems: 'string',
      instanceIds: 'string',
      regionId: 'string',
      reportLanguage: 'string',
      reportRegionId: 'string',
      reportType: 'string',
      startTime: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

