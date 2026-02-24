// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateDiscoveredResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-c560626622af0005****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a standard UTC timestamp. The following limits apply:
   * 
   * - The value must be a timestamp in milliseconds.
   * 
   * - The value cannot be earlier than StartUpdateTimestamp. The interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
   * 
   * - You must specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both empty.
   * 
   * @example
   * 1724947200000
   */
  endUpdateTimestamp?: number;
  /**
   * @remarks
   * The resource types to exclude. Separate multiple resource types with commas (,). This parameter has a higher priority than the ResourceTypes parameter.
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
   * If the response is truncated, use the `NextToken` to retrieve the next page of results.
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
   * The ID of the region where the resource resides. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-huhehaote
   */
  regions?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resources to be queried belong. The account is a member of the account group.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * - 0: The resource is deleted. A resource is displayed as Deleted in Cloud Config after it is deleted from the source Alibaba Cloud service.
   * 
   * - 1 (Default): The resource is active. A resource is displayed as Active in Cloud Config if it is properly managed.
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
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * launch-advisor-20200330
   */
  resourceName?: string;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::NetworkInterface
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a standard UTC timestamp. The following limits apply:
   * 
   * - The value must be a timestamp in milliseconds.
   * 
   * - The value cannot be later than EndUpdateTimestamp. The interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
   * 
   * - You must specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both empty.
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

