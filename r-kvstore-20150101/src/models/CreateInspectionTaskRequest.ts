// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the inspection time range.
   * 
   * The time is in the YYYY-MM-DDTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2026-07-29T06:59:26Z
   */
  endTime?: string;
  /**
   * @remarks
   * The specified inspection items. Valid values:
   * - RESOURCE_USAGE
   * - BIGKEY
   * - HOTKEY
   * - PERFORMANCE_METRICS
   * - SLOWLOG
   * 
   * This parameter is required.
   * 
   * @example
   * RESOURCE_USAGE
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The ID of the assistant instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of associated instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The language of the report.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The start time of the inspection time range.
   * 
   * The time is in the YYYY-MM-DDTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2026-07-29T05:59:26Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionItems: 'InspectionItems',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionItems: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
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

