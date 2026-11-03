// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The API key used.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The end time of the instance. Format: YYYY-MM-DD. The interval between EndTime and StartTime cannot exceed 31 days.
   * 
   * @example
   * 2026-04-30
   */
  endTime?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_copilotpost_public_cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The model called.
   * 
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * The start time of the instance. Format: YYYY-MM-DD.
   * 
   * @example
   * 2026-04-21
   */
  startTime?: string;
  /**
   * @remarks
   * The query type.
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

