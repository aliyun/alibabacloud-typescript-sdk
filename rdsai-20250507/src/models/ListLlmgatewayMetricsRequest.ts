// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMGatewayMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-05-26T20:55:00Z
   */
  endTime?: string;
  /**
   * @example
   * minute
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ra-supabase-7kox9010itfcn1
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tokenPerMinute
   */
  metricType?: string;
  /**
   * @example
   * qwen-plus,deepseek-v4-pro
   */
  model?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
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

