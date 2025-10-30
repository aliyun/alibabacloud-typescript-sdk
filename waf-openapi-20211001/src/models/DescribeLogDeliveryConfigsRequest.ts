// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the log delivery configuration. Fuzzy queries are supported.
   * 
   * @example
   * test
   */
  deliveryNameLike?: string;
  /**
   * @remarks
   * The type of the log delivery configuration that you want to query. Valid values:
   * 
   * *   **syslog**: Logs are delivered to a syslog service.
   * *   **kafka**: Logs are delivered to a Kafka service.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
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
      deliveryNameLike: 'DeliveryNameLike',
      deliveryType: 'DeliveryType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryNameLike: 'string',
      deliveryType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

