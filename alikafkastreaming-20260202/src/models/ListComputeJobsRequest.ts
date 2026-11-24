// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The compute instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of jobs to return in the current request. Default value: 10. Maximum value: 1000. If you set this parameter to 0, the default value is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter in the first request. For subsequent requests, use the `NextToken` value returned in the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
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
  regionId?: string;
  /**
   * @remarks
   * The keyword used to search for jobs by name or remark.
   * 
   * @example
   * order
   */
  search?: string;
  /**
   * @remarks
   * The sort direction. The value is not case-sensitive. Valid values: `ASC` and `DESC`.
   * 
   * @example
   * DESC
   */
  sortDirection?: string;
  /**
   * @remarks
   * The sort field. Valid values: `createTime`, `cuReserved`, `cuLimit`, `cuUsed`, `status`, and `jobName`.
   * 
   * @example
   * createTime
   */
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      search: 'Search',
      sortDirection: 'SortDirection',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      search: 'string',
      sortDirection: 'string',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

