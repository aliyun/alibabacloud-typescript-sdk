// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageDetailResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 16******4_rds_copilot****_public_cn-4****02
   */
  consumerName?: string;
  /**
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
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 2026-04-01T01:00:00Z
   */
  requestTime?: string;
  /**
   * @example
   * 100000
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      consumerName: 'ConsumerName',
      instanceId: 'InstanceId',
      model: 'Model',
      region: 'Region',
      requestTime: 'RequestTime',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerName: 'string',
      instanceId: 'string',
      model: 'string',
      region: 'string',
      requestTime: 'string',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMOTokenUsageDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: DescribeMOTokenUsageDetailResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': DescribeMOTokenUsageDetailResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

