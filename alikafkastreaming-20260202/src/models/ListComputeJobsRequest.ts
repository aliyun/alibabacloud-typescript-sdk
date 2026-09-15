// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * order
   */
  search?: string;
  /**
   * @example
   * DESC
   */
  sortDirection?: string;
  /**
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

