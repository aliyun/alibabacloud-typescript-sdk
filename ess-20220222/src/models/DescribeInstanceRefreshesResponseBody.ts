// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks } from "./DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks";


export class DescribeInstanceRefreshesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance refresh tasks.
   */
  instanceRefreshTasks?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance refresh tasks.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRefreshTasks: 'InstanceRefreshTasks',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRefreshTasks: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRefreshTasks)) {
      $dara.Model.validateArray(this.instanceRefreshTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

