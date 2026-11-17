// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query filter conditions. Multiple filter conditions are combined by using the logical AND operator.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric used to distinguish the returned data content. Different metrics correspond to different data content. This operation supports the following metrics:
   * 
   * *   qps: returns the number of requests processed by WAF per second. The peak calculation method is used. A QPS value is calculated every 10 seconds, and the maximum peak value among multiple values is used as the QPS value within the current statistical time granularity.
   * *   total_requests: returns the total number of requests processed by WAF.
   * *   top5_status: returns the top 5 response codes returned by WAF to the client and the corresponding time series statistics.
   * *   top 5_upstream_status: returns the top 5 response codes returned by the origin server to the client and the corresponding time series statistics.
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

