// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventTopMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security event.
   * 
   * This parameter is required.
   * 
   * @example
   * 0b7ab137a065aab7656986***11db
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The statistical metric. Different values of Metric correspond to different statistical objects. Valid values:
   * - **time**: aggregates statistics by attack time, sorts them in descending order, and returns the top 5 records.
   * - **src**: aggregates statistics by source IP address of attack requests, sorts them in descending order, and returns the top 5 records.
   * - **target**: aggregates statistics by URL of attack requests (excluding query strings), sorts them in descending order, and returns the top 5 records.
   * - **type**: aggregates statistics by attack type, sorts them in descending order, and returns the top 5 records.
   * - **tools**: aggregates statistics by attack tool, sorts them in descending order, and returns the top 5 records.
   * 
   * This parameter is required.
   * 
   * @example
   * time
   */
  metric?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
      eventId: 'EventId',
      instanceId: 'InstanceId',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
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

