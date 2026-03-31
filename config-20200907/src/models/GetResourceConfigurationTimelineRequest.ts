// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationTimelineRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The default value indicates the time when the GetResourceConfigurationTimeline operation is called. Unit: milliseconds.
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * For more information about how to query the ID of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the type of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
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
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
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

