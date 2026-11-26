// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMGatewayMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the metric query in ISO 8601 format. The time must be later than StartTime and is aligned to the minute. The maximum query range is 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-05-26T20:55:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity. Default value: minute.
   * 
   * @example
   * minute
   */
  granularity?: string;
  /**
   * @remarks
   * The name of the Supabase instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-7kox9010itfcn1
   */
  instanceName?: string;
  /**
   * @remarks
   * The metric type. The match is case-insensitive. Valid values:
   * - tokenPerMinute: tokens per minute
   * - requestPerMinute: requests per minute
   * - errorRequestPerMinute: error requests per minute
   * - timeToFirstToken: time to first token percentiles
   * 
   * This parameter is required.
   * 
   * @example
   * tokenPerMinute
   */
  metricType?: string;
  /**
   * @remarks
   * The model filter condition. Separate multiple model names with commas. If this parameter is not specified, data for all models is returned.
   * 
   * @example
   * qwen-plus,deepseek-v4-pro
   */
  model?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start time for the metric query in ISO 8601 format. The time is aligned to the minute. The maximum query range between StartTime and EndTime is 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-05-26T20:40:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      instanceName: 'InstanceName',
      metricType: 'MetricType',
      model: 'Model',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularity: 'string',
      instanceName: 'string',
      metricType: 'string',
      model: 'string',
      regionId: 'string',
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

