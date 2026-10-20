// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return for a single request.
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. The value is the next_token parameter returned by the previous API call.
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the task to query.
   * 
   * @example
   * T-6823f946ffadbb0106****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'max_results',
      nextToken: 'next_token',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

