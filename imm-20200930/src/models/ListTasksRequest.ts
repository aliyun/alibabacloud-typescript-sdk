// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRange } from "./TimeRange";


export class ListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The task end time range. You can specify this parameter to filter tasks that end within the specified range.
   */
  endTimeRange?: TimeRange;
  /**
   * @remarks
   * The maximum number of results to return. Valid value range: (0, 100]. Default value: 100.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter. The next call to the operation returns results lexicographically after the NextToken parameter value.
   * 
   * >  Leave this parameter empty in your first call to the operation.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   asc: in ascending order. This is the default value.
   * *   desc: in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to return request parameters in the initial request to create the task. Default value: False.
   * 
   * @example
   * True
   */
  requestDefinition?: boolean;
  /**
   * @remarks
   * The field used to sort the results by. Valid values:
   * 
   * *   TaskId: sorts the results by task ID. This is the default sort field.
   * *   StartTime: sorts the results by task start time.
   * *   StartTime: sorts the results by task end time.
   * 
   * @example
   * TaskId
   */
  sort?: string;
  /**
   * @remarks
   * The task start time range. You can specify this parameter to filter tasks that start within the specified range.
   */
  startTimeRange?: TimeRange;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Running: The task is running.
   * *   Succeeded: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The custom tags of tasks.
   * 
   * @example
   * test=val1
   */
  tagSelector?: string;
  /**
   * @remarks
   * The task types.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      endTimeRange: 'EndTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      sort: 'Sort',
      startTimeRange: 'StartTimeRange',
      status: 'Status',
      tagSelector: 'TagSelector',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeRange: TimeRange,
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      requestDefinition: 'boolean',
      sort: 'string',
      startTimeRange: TimeRange,
      status: 'string',
      tagSelector: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.endTimeRange && typeof (this.endTimeRange as any).validate === 'function') {
      (this.endTimeRange as any).validate();
    }
    if(this.startTimeRange && typeof (this.startTimeRange as any).validate === 'function') {
      (this.startTimeRange as any).validate();
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

