// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. The valid range is 10 to 500. If this parameter is omitted or its value is less than 10, a default value of 10 is used. Values greater than 500 are treated as 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. To retrieve the next page of results, set this parameter to the `NextToken` value from the response of the previous API call. For more information, see the API description above.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies the status of tasks to query. If this parameter is omitted, the API returns tasks in all states. Valid values: `CREATED`, `RUNNING`, `COMPLETE`, `FAILED`, `EXPIRED`, and `CANCELED`.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @example
   * UPDATE_RESOURCES
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

