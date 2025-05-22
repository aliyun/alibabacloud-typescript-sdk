// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1642476194000
   */
  endTime?: number;
  /**
   * @remarks
   * Default value: **ALIYUN**.
   * 
   * @example
   * ALIYUN
   */
  env?: string;
  /**
   * @remarks
   * *   **InternetOut**: the outbound traffic over the Internet. Unit: byte.
   * *   **diskusage_utilization**: the disk usage.
   * *   **IntranetInRate**: the inbound traffic over the internal network. Unit: byte.
   * *   **InternetIn**: the inbound traffic from the Internet. Unit: byte.
   * *   **cpu_total**: the CPU utilization.
   * *   **memory_usedutilization**: the memory usage.
   * *   **IntranetOutRate**: the outbound traffic over the internal network. Unit: byte.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Indicates whether the metrics of the cluster or a node are queried. Valid values:
   * 
   * *   **CLUSTER**: The metrics of the cluster are queried.
   * *   **NODE**: The metrics of a node are queried.
   * 
   * @example
   * NODE
   */
  metricType?: string;
  ownerID?: string;
  /**
   * @remarks
   * The monitored object. If the **MetricType** parameter is set to **NODE**, set this parameter to the ID of the node that is monitored.
   * 
   * This parameter is required.
   * 
   * @example
   * nodeid
   */
  param?: string;
  /**
   * @remarks
   * The monitoring interval. Unit: seconds. The minimum value is 15.
   * 
   * @example
   * 15
   */
  period?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1642476144000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      env: 'Env',
      metricName: 'MetricName',
      metricType: 'MetricType',
      ownerID: 'OwnerID',
      param: 'Param',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dtsJobId: 'string',
      endTime: 'number',
      env: 'string',
      metricName: 'string',
      metricType: 'string',
      ownerID: 'string',
      param: 'string',
      period: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

