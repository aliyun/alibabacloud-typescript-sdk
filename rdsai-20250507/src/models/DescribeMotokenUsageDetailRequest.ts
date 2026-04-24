// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageDetailRequest extends $dara.Model {
  /**
   * @example
   * 16******4_rds_copilot****_public_cn-4****02
   */
  consumerName?: string;
  /**
   * @example
   * 2025-12-13T16:00:00Z
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
   * @example
   * 2
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 2026-01-04T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumerName: 'ConsumerName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      model: 'Model',
      page: 'Page',
      pageSize: 'PageSize',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerName: 'string',
      endTime: 'string',
      instanceId: 'string',
      model: 'string',
      page: 'number',
      pageSize: 'number',
      region: 'string',
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

