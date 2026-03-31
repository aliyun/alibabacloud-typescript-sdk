// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceConfigurationTimelineRequest extends $dara.Model {
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
   * The end of the time range to query. The default value indicates the time when the GetAggregateResourceConfigurationTimeline operation is called. Unit: milliseconds.
   * 
   * @example
   * 1625821156000
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * For more information about how to obtain the ID of a region, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Required. The ID of the Alibaba Cloud account to which the specified resource belongs in the account group.
   * 
   * @example
   * 100931896542****
   */
  resourceAccountId?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to query the ID of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
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
   * For more information about how to obtain the type of a resource, see [ListAggregateDiscoveredResources](https://help.aliyun.com/document_detail/265983.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. By default, Cloud Config retrieves the configuration changes in the last 30 days for the specified resource. Unit: milliseconds.
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

