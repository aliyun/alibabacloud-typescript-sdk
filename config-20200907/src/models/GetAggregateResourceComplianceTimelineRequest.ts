// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceTimelineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-5885626622af0008****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The end timestamp. By default, data up to the current time is queried. Unit: milliseconds.
   * 
   * @example
   * 1625821156000
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If the output of a request is truncated, you can use this token to query the next page of results.
   * 
   * @example
   * 5OVS5J4I1/UKTkHV5oNs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * For more information about how to obtain the ID of the region where a resource resides, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource in the account group belongs.
   * 
   * > Set either the ResourceAccountId or ResourceOwnerId parameter. This parameter is recommended.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the resource ID, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the resource type, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  /**
   * @remarks
   * The start timestamp. By default, data from the last 30 days is queried. Unit: milliseconds.
   * 
   * @example
   * 1623211156000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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

