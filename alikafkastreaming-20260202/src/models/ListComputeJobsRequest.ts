// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeJobsRequest extends $dara.Model {
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  search?: string;
  sortDirection?: string;
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      search: 'Search',
      sortDirection: 'SortDirection',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
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

