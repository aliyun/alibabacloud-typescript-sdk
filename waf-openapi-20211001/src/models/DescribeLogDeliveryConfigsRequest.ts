// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the log delivery configuration that you want to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  deliveryNameLike?: string;
  /**
   * @remarks
   * The type of the log delivery configuration that you want to query. Valid values:
   * 
   * - **syslog**: Log delivery to a syslog server.
   * 
   * - **kafka**: Log delivery to a Kafka cluster.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 50. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set this parameter to the value of **NextToken** returned in the previous call. You do not need to specify this parameter for the first request.
   * 
   * @example
   * AAAAAINZ+8pH1oQnusEu1tGAc8is
   */
  nextToken?: string;
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
   * The ID of the Alibaba Cloud resource group to which the WAF instance belongs.
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

