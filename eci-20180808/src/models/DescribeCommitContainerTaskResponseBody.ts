// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommitContainerTaskResponseBodyCommitTasks } from "./DescribeCommitContainerTaskResponseBodyCommitTasks";


export class DescribeCommitContainerTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the task.
   */
  commitTasks?: DescribeCommitContainerTaskResponseBodyCommitTasks[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The query token that is returned in this request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45D5B0AD-3B00-4A9B-9911-6D5303B06712
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commitTasks: 'CommitTasks',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitTasks: { 'type': 'array', 'itemType': DescribeCommitContainerTaskResponseBodyCommitTasks },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commitTasks)) {
      $dara.Model.validateArray(this.commitTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

