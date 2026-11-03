// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMOUsageDetailExportRequest extends $dara.Model {
  /**
   * @remarks
   * The API key to use.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The inspection end time in the YYYY-MM-DDTHH:mm:ssZ format. The time range between StartTime and EndTime cannot exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The model to call.
   * 
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * The inspection start time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-05T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The view type.
   * 
   * @example
   * text
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      model: 'Model',
      startTime: 'StartTime',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endTime: 'string',
      instanceId: 'string',
      model: 'string',
      startTime: 'string',
      usageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

