// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScansRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. To query the first page, leave this parameter empty or do not specify it. To query subsequent pages, pass the nextToken value returned in the previous response. If the nextToken value in the response is empty, the last page is returned.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * The query string. You can perform a fuzzy match by project name or prompt.
   * 
   * @example
   * name
   */
  query?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * * running: The task is running.
   * * completed: The task is completed.
   * * failed: The task failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * name
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      query: 'query',
      status: 'status',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

