// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query filter conditions. Multiple filter conditions are connected by the logical AND operator.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric used to distinguish the returned data content. Different metrics correspond to different data content. This operation supports the following metrics:
   * 
   * - mitigated_requests: returns the time series statistics of blocked requests.
   * - monitored_requests: returns the time series statistics of requests that only hit monitor rules.
   * - mitigated_requests_group_by_defense_scene: returns data grouped by protection module, recording the time series statistics of hits for each module. A single request may hit multiple modules, so the number of module hits returned by this metric may not match the number of requests.
   * - mitigated_requests_group_by_block_defense_scene: returns data grouped by protection module, recording the time series statistics of blocked requests for each module. A single request is blocked by only one module, so the statistical count returned by this metric is consistent with the number of requests.
   * 
   * This parameter is required.
   * 
   * @example
   * mitigated_requests
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

