// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the delivery configuration to query. You can set this parameter to perform a fuzzy match on a delivery configuration.
   * 
   * @example
   * test
   */
  deliveryNameLike?: string;
  /**
   * @remarks
   * The type of the delivery configuration to query. Valid values:
   * 
   * - **syslog**: Delivers logs to a Syslog service.
   * - **kafka**: Delivers logs to a Kafka service.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return per page during paging in a paged query. Valid values: 1 to 50. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for querying the next page. Set the value to the **NextToken** value returned from the previous API call. This parameter is not required for the first query.
   * 
   * @example
   * AAAAAINZ+8pH1oQnusEu1tGAc8is
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland
   * 
   * - **ap-southeast-1**: outside the Chinese mainland
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

