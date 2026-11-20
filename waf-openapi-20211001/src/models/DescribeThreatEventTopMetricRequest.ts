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
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric used for statistics. Different metrics correspond to different statistical dimensions. Valid values:
   * - **time**: aggregates statistics by attack time, sorts the results in descending order, and returns the top 5 entries.
   * - **src**: aggregates statistics by the source IP address of attack requests, sorts the results in descending order, and returns the top 5 entries.
   * - **target**: aggregates statistics by the URL of attack requests (excluding the query string), sorts the results in descending order, and returns the top 5 entries.
   * - **type**: aggregates statistics by attack type, sorts the results in descending order, and returns the top 5 entries.
   * - **tools**: aggregates statistics by attack tool, sorts the results in descending order, and returns the top 5 entries.
   * 
   * This parameter is required.
   * 
   * @example
   * time
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

