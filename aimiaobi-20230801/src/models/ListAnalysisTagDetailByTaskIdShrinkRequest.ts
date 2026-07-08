// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of categories for filtering.
   */
  categoriesShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * token-xxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of records to request.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * > This parameter is optional. The system automatically generates a task ID. If you specify the same TaskId for multiple tasks, the tasks are considered part of the same conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      current: 'Current',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

