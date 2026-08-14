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
   * Ensures the idempotency of the request. Generate a parameter value from your client to make sure that the value is unique among different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The end timestamp, in milliseconds.
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
   * - **InternetOut**: outbound Internet traffic, in bytes.
   * - **diskusage_utilization**: disk usage.
   * - **IntranetInRate**: inbound internal network traffic, in bytes.
   * - **InternetIn**: inbound Internet traffic, in bytes.
   * - **cpu_total**: CPU utilization.
   * - **memory_usedutilization**: memory utilization.
   * - **IntranetOutRate**: outbound internal network traffic, in bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Specifies whether to query a cluster or a node. Valid values:
   * - **CLUSTER**: cluster.
   * - **NODE**: node.
   * 
   * @example
   * NODE
   */
  metricType?: string;
  ownerID?: string;
  /**
   * @remarks
   * The observation value. If **MetricType** is set to **NODE**, the value is **nodeid**.
   * 
   * This parameter is required.
   * 
   * @example
   * nodeid
   */
  param?: string;
  /**
   * @remarks
   * The observation interval in seconds. The minimum interval is 15 seconds.
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
   * The start timestamp, in milliseconds.
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

