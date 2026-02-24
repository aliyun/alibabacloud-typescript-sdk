// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceConfigurationTimelineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-5885626622af0008****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The end time of the query. This is a UNIX timestamp in milliseconds. By default, data up to the current time is queried.
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
   * If the output is truncated, you can use the `NextToken` to start the next query from the truncation point.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * For more information, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource in the account group.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * For more information, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
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
   * The type of the resource.
   * 
   * For more information, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the query. This is a UNIX timestamp in milliseconds. By default, data from the last 30 days is queried.
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

