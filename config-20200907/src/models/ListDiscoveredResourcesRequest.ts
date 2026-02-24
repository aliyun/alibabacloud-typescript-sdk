// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiscoveredResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query resources, specified as a UNIX timestamp in milliseconds. Note:
   * 
   * - The value cannot be earlier than StartUpdateTimestamp.
   * 
   * - The time interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
   * 
   * - Specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both blank.
   * 
   * @example
   * 1724947200000
   */
  endUpdateTimestamp?: number;
  /**
   * @remarks
   * The resource types to exclude. Separate multiple resource types with commas (,). This parameter takes precedence over the ResourceTypes parameter.
   * 
   * @example
   * ACS::ECS::Instance,ACS::ECS::NetworkInterface
   */
  excludeResourceTypes?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. If the response is truncated, use this token in a subsequent request to retrieve the next page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regions?: string;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * - 0: The resource is deleted. If you delete a resource in the corresponding Alibaba Cloud service, Cloud Config displays the resource as **Deleted**.
   * 
   * - 1 (Default): The resource is active. If a resource is managed, Cloud Config displays the resource as **Active**.
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
   * test-resource-name
   */
  resourceName?: string;
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
   * The start of the time range to query resources, specified as a UNIX timestamp in milliseconds. Note:
   * 
   * - The value cannot be later than EndUpdateTimestamp.
   * 
   * - The time interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
   * 
   * - Specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both blank.
   * 
   * @example
   * 1722441600000
   */
  startUpdateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endUpdateTimestamp: 'EndUpdateTimestamp',
      excludeResourceTypes: 'ExcludeResourceTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      startUpdateTimestamp: 'StartUpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUpdateTimestamp: 'number',
      excludeResourceTypes: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
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

