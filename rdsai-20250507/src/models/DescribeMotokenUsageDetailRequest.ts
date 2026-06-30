// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The API key used for the request.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The consumer associated with the API key.
   * 
   * @example
   * 16******4_rds_copilot****_public_cn-4****02
   */
  consumerName?: string;
  /**
   * @remarks
   * The cursor-based pagination token. This parameter takes priority over Page. Leave this parameter empty for the first call. For subsequent calls, use the NextCursor value returned in the previous response.
   * 
   * @example
   * eyJpZCI6MTIzNDUsInRzIjoiMjAyNi0wNC0wOFQwMDowMDowMFoifQ==
   */
  cursor?: string;
  /**
   * @remarks
   * The end time in ISO 8601 format (UTC).
   * 
   * @example
   * 2025-12-13T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The model that was called.
   * 
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 2
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The start time in ISO 8601 format (UTC).
   * 
   * @example
   * 2026-01-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of usage to query.
   * 
   * @example
   * text
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      consumerName: 'ConsumerName',
      cursor: 'Cursor',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      model: 'Model',
      page: 'Page',
      pageSize: 'PageSize',
      region: 'Region',
      startTime: 'StartTime',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      consumerName: 'string',
      cursor: 'string',
      endTime: 'string',
      instanceId: 'string',
      model: 'string',
      page: 'number',
      pageSize: 'number',
      region: 'string',
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

