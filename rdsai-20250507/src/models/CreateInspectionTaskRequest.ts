// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the inspection time range. The time must be in UTC and formatted as YYYY-MM-DDTHH:mm:ssZ. If StartTime and EndTime are not specified, the inspection covers the last 24 hours.
   * 
   * @example
   * 2026-01-30T02:10:48Z
   */
  endTime?: string;
  /**
   * @remarks
   * The inspection items to run, separated by commas. If this parameter is omitted, all inspection items are run.
   * 
   * ### Inspection items
   * 
   * - `instance_info` (instance information)
   * 
   * - `resource_usage` (resource usage)
   * 
   * - `connection_session_management` (connection and session management)
   * 
   * - `performance_metrics` (performance metrics)
   * 
   * - `slow_query_analysis` (slow query analysis)
   * 
   * - `error_log_analysis` (error log analysis)
   * 
   * - `lock_wait_deadlock_analysis` (lock wait and deadlock analysis)
   * 
   * - `backup_recovery_analysis` (backup and recovery analysis)
   * 
   * - `high_availability_disaster_recovery_analysis` (high availability and disaster recovery inspection)
   * 
   * - `security_configuration_analysis` (security configuration inspection)
   * 
   * - `storage_engine_analysis` (storage engine inspection)
   * 
   * - `schema_object_analysis` (schema and object inspection)
   * 
   * @example
   * instance_info, resource_usage
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The IDs of the instances to inspect. Separate multiple instance IDs with a comma.
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionId?: string;
  /**
   * @remarks
   * The language of the inspection report. Valid values are zh-CN (Simplified Chinese) and en-US (English). The default value is en-US.
   */
  reportLanguage?: string;
  reportRegionId?: string;
  /**
   * @remarks
   * The format of the inspection report. Valid values are pdf and json. The default value is pdf.
   */
  reportType?: string;
  /**
   * @remarks
   * The beginning of the inspection time range. The time must be in UTC and formatted as YYYY-MM-DDTHH:mm:ssZ. If StartTime and EndTime are not specified, the inspection covers the last 24 hours.
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
      reportRegionId: 'ReportRegionId',
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
      reportRegionId: 'string',
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

