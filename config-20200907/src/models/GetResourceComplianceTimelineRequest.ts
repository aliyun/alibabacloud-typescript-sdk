// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceTimelineRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the end of the time range to query. The default value is the time when the GetResourceComplianceTimeline operation is called. Unit: milliseconds.
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
   * The token that is used to initiate the next request. If the response of the current request is truncated, this token is used to initiate another request and obtain the remaining entries.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * For more information about how to obtain the ID of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
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
   * The timestamp that specifies the beginning of the time range to query. By default, Cloud Config retrieves the compliance evaluations in the last 30 days for the specified resource. Unit: milliseconds.
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

