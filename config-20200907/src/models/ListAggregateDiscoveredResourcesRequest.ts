// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateDiscoveredResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-c560626622af0005****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The end time of the time range for querying resources. The value is a timestamp in the UTC format. When you specify this parameter, take note of the following limits:
   * 
   * *   The value must be a timestamp in milliseconds.
   * *   The value cannot be less than the value of the StartUpdateTimestamp parameter. The interval between the value and the value of the StartUpdateTimestamp parameter must be less than or equal to 30 days.
   * *   The StartUpdateTimestamp and EndUpdateTimestamp parameters must be specified at the same time or left empty at the same time.
   * 
   * @example
   * 1724947200000
   */
  endUpdateTimestamp?: number;
  /**
   * @remarks
   * The types of resources that are excluded. Separate multiple values with commas (,). If this parameter conflicts with the ResourceTypes parameter, this parameter prevails.
   * 
   * @example
   * ACS::ECS::Instance,ACS::ECS::NetworkInterface
   */
  excludeResourceTypes?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that you want to use to initiate the current request. If the response of the previous request is truncated, you can use this token to initiate another request and obtain the remaining entries.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   * 
   * **if can be null:**
   * false
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-huhehaote
   */
  regions?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the specified resource belongs in the account group.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * *   0: The resource is deleted. If a resource is deleted from the desired cloud service, **Deleted** is displayed in the resource list in the Cloud Config console.
   * *   1 (default): The resource is retained. If a resource is managed as expected, **Active** is displayed in the resource list in the Cloud Config console.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eni-hp31cqoba96jagtz****
   */
  resourceId?: string;
  resourceName?: string;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::NetworkInterface
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The start time of the time range for querying resources. The value is a timestamp in the Coordinated Universal Time (UTC) format. When you specify this parameter, take note of the following limits:
   * 
   * *   The value must be a timestamp in milliseconds.
   * *   The value cannot be greater than the value of the EndUpdateTimestamp parameter. The interval between the value and the value of the EndUpdateTimestamp parameter must be less than or equal to 30 days.
   * *   The StartUpdateTimestamp and EndUpdateTimestamp parameters must be specified at the same time or left empty at the same time.
   * 
   * @example
   * 1722441600000
   */
  startUpdateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      endUpdateTimestamp: 'EndUpdateTimestamp',
      excludeResourceTypes: 'ExcludeResourceTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceAccountId: 'ResourceAccountId',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceTypes: 'ResourceTypes',
      startUpdateTimestamp: 'StartUpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      endUpdateTimestamp: 'number',
      excludeResourceTypes: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceAccountId: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceTypes: 'string',
      startUpdateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

