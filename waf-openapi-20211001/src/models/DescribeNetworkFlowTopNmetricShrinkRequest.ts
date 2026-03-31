// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An array of filter conditions. Multiple filter parameters use AND logic.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The Web Application Firewall (WAF) instance ID.
   * 
   * >  Call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to retrieve the WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Returns up to 10 data entries, sorted in descending order.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * Specifies the data type to be returned. Valid values:
   * 
   * *   real_client_ip: The top N requests, sorted in descending order by source IP address, aggregated from all the current user\\"s WAF requests.
   * *   request_path: The top N requests, sorted in descending order by user-agent, aggregated from all the current user\\"s WAF requests.
   * *   request_path: The top N requests, sorted in descending order by request URL, aggregated from all the current user\\"s WAF requests.
   * *   matched_host_by_total_requests: The top N protected objects and their request counts for the current user.
   * *   matched_host_by_qps: The top N protected objects and their queries per second (QPS) values.
   * *   matched_host_by_status: When using it, you must specify status in the Conditions field of the Filter parameter. If the HTTP response code returned by WAF matches the status specified in the Conditions, then the top N data is returned, sorted in descending order by protected objects. The format for specifying the status is as follows:\\
   *     {"Key":"status","OpValue":"eq","Values":"200"}
   * *   matched_host_by_upstream_status: When using it, you must specify upstream_status in the Conditions field of the Filter parameter. If the HTTP response code returned by the origin server matches the upstream_status specified, the top N data is returned, sorted in descending order by protected objects. The format for specifying the upstream_status is as follows:\\
   *     {"Key":"upstream_status","OpValue":"eq","Values":"200"}
   * 
   * This parameter is required.
   * 
   * @example
   * matched_host_by_upstream_status
   */
  metric?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: The Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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

