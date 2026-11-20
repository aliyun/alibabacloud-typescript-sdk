// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query filter conditions. Multiple filter conditions are connected by the logical AND operator.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of data entries to return after the statistics are sorted in descending order. Maximum value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The metric used to distinguish the returned data content. Different metrics correspond to different data content. The metrics supported by this operation are as follows:
   * 
   * - real_client_ip: aggregates and sorts all requests of the current user that pass through WAF by the source IP address of the request in descending order, and returns the top N data entries.
   * - http_user_agent: aggregates and sorts all requests of the current user that pass through WAF by the User-Agent of the request in descending order, and returns the top N data entries.
   * - request_path: aggregates and sorts all requests of the current user that pass through WAF by the URL of the request in descending order, and returns the top N data entries.
   * - matched_host_by_total_requests: returns the top N protected objects with the largest number of requests for the current user and the corresponding number of requests.
   * - matched_host_by_qps: returns the top N protected objects with the highest QPS for the current user and the corresponding QPS data.
   * - matched_host_by_status: when this metric is used, you must specify status in the Conditions field of Filter. WAF aggregates and sorts the data whose HTTP response code returned by WAF is equal to the status specified in Conditions by protected object, and returns the top N data entries. The format for specifying status is as follows:<br>
   * {"Key":"status","OpValue":"eq","Values":"200"}
   * - matched_host_by_upstream_status: when this metric is used, you must specify upstream_status in the Conditions field of Filter. WAF aggregates and sorts the data whose HTTP response code returned by the origin server is equal to the upstream_status specified in Conditions by protected object, and returns the top N data entries. The format for specifying upstream_status is as follows:<br>
   * {"Key":"upstream_status","OpValue":"eq","Values":"200"}
   * 
   * This parameter is required.
   * 
   * @example
   * matched_host_by_upstream_status
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
      limit: 'Limit',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      instanceId: 'string',
      limit: 'number',
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

