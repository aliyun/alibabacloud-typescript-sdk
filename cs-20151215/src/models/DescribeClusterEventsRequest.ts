// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterEventsRequest extends $dara.Model {
  maxResults?: number;
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
   * The number of entries to return per page.
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
   * The task ID. If specified, only events associated with this task are returned.
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

