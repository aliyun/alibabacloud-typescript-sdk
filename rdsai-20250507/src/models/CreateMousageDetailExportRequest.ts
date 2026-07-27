// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMOUsageDetailExportRequest extends $dara.Model {
  /**
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * 结束时间，UTC 0 时区 ISO8601 字符串，格式 yyyy-MM-ddTHH:mm:ssZ；与 StartTime 跨度不超过 30 天
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-10T02:02:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * 起始时间，UTC 0 时区 ISO8601 字符串，格式 yyyy-MM-ddTHH:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-05T16:00:00Z
   */
  startTime?: string;
  /**
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

