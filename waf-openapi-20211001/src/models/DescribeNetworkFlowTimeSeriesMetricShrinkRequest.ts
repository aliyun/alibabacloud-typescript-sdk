// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. Multiple filter conditions are combined with a logical AND.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the type of data to return. Different values for Metric correspond to different data. This API operation supports the following values:
   * 
   * - qps: The number of requests that WAF processes per second. A queries per second (QPS) value is calculated every 10 seconds. The peak QPS value within the specified time granularity is returned.
   * 
   * - total_requests: The total number of requests processed by WAF.
   * 
   * - top5_status: The top five response status codes that WAF returns to the client, and the corresponding time series statistics.
   * 
   * - top 5_upstream_status: The top five response status codes that the origin server returns to the client, and the corresponding time series statistics.
   * 
   * This parameter is required.
   * 
   * @example
   * total_requests
   */
  metric?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      instanceId: 'InstanceId',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      instanceId: 'string',
      metric: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

